import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function DigitalGlobe() {
  const mountRef = useRef(null);
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebGLSupported(false);
        return;
      }
    } catch {
      setWebGLSupported(false);
      return;
    }

    // Check user motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 550;
    const height = container.clientHeight || 550;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 240;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Group for globe & elements
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // 1. Globe Points using Fibonacci Sphere
    const pointCount = 1400;
    const radius = 80;
    const positions = new Float32Array(pointCount * 3);
    const colors = new Float32Array(pointCount * 3);

    const electricBlue = new THREE.Color(0x19bfff);
    const cyan = new THREE.Color(0x51e5f5);
    const deepNavy = new THREE.Color(0x0b1420);

    const goldenRatio = (1 + Math.sqrt(5)) / 2;

    const nodes = [];

    for (let i = 0; i < pointCount; i++) {
      const theta = 2 * Math.PI * i / goldenRatio;
      const phi = Math.acos(1 - 2 * (i + 0.5) / pointCount);
      
      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Color variation between cyan and electric blue
      const lerpFactor = (Math.sin(i * 0.1) + 1) / 2;
      const pointColor = electricBlue.clone().lerp(cyan, lerpFactor);

      colors[i * 3] = pointColor.r;
      colors[i * 3 + 1] = pointColor.g;
      colors[i * 3 + 2] = pointColor.b;

      // Save key nodes for connection arcs
      if (i % 35 === 0) {
        nodes.push(new THREE.Vector3(x, y, z));
      }
    }

    const pointsGeometry = new THREE.BufferGeometry();
    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    pointsGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Custom Canvas Circular Glow Point Texture
    const canvasTexture = document.createElement('canvas');
    canvasTexture.width = 32;
    canvasTexture.height = 32;
    const ctx = canvasTexture.getContext('2d');
    const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.3, 'rgba(81,229,245,0.8)');
    grad.addColorStop(0.7, 'rgba(25,191,255,0.3)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 32, 32);

    const pTexture = new THREE.CanvasTexture(canvasTexture);

    const pointsMaterial = new THREE.PointsMaterial({
      size: 2.8,
      vertexColors: true,
      map: pTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const pointsMesh = new THREE.Points(pointsGeometry, pointsMaterial);
    globeGroup.add(pointsMesh);

    // 2. Inner Wireframe Core
    const sphereWireGeo = new THREE.IcosahedronGeometry(radius * 0.98, 2);
    const sphereWireMat = new THREE.MeshBasicMaterial({
      color: 0x19bfff,
      wireframe: true,
      transparent: true,
      opacity: 0.08,
      blending: THREE.AdditiveBlending,
    });
    const sphereWire = new THREE.Mesh(sphereWireGeo, sphereWireMat);
    globeGroup.add(sphereWire);

    // 3. Digital Connection Arcs between key network nodes
    const curveMaterials = new THREE.LineBasicMaterial({
      color: 0x51e5f5,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });

    const linesGroup = new THREE.Group();
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = nodes[i].distanceTo(nodes[j]);
        if (dist > 40 && dist < 110) {
          // Mid-point arched outward to form a curved arc above surface
          const mid = nodes[i].clone().add(nodes[j]).multiplyScalar(0.5);
          const midLength = mid.length();
          mid.normalize().multiplyScalar(radius * 1.15 + (110 - dist) * 0.15);

          const curve = new THREE.QuadraticBezierCurve3(nodes[i], mid, nodes[j]);
          const curvePoints = curve.getPoints(24);
          const curveGeo = new THREE.BufferGeometry().setFromPoints(curvePoints);
          const line = new THREE.Line(curveGeo, curveMaterials);
          linesGroup.add(line);
        }
      }
    }
    globeGroup.add(linesGroup);

    // 4. Floating Data Particles in Outer Orbit
    const orbitCount = 180;
    const orbitPos = new Float32Array(orbitCount * 3);
    for (let i = 0; i < orbitCount; i++) {
      const dist = radius * (1.2 + Math.random() * 0.5);
      const angle = Math.random() * Math.PI * 2;
      const heightOffset = (Math.random() - 0.5) * 120;
      orbitPos[i * 3] = Math.cos(angle) * dist;
      orbitPos[i * 3 + 1] = heightOffset;
      orbitPos[i * 3 + 2] = Math.sin(angle) * dist;
    }
    const orbitGeo = new THREE.BufferGeometry();
    orbitGeo.setAttribute('position', new THREE.BufferAttribute(orbitPos, 3));
    const orbitMat = new THREE.PointsMaterial({
      color: 0x51e5f5,
      size: 2.2,
      map: pTexture,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const orbitPoints = new THREE.Points(orbitGeo, orbitMat);
    scene.add(orbitPoints);

    // 5. Atmosphere Glow Rings
    const ringGeo = new THREE.RingGeometry(radius * 1.05, radius * 1.07, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x19bfff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2.3;
    globeGroup.add(ringMesh);

    // Subtle tilt for modern planetary perspective
    globeGroup.rotation.x = 0.35;
    globeGroup.rotation.z = -0.15;

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0.35;
    let targetRotationY = 0;

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      mouseX = x * 0.5;
      mouseY = y * 0.5;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Continuous globe rotation
        globeGroup.rotation.y += 0.0035;

        // Floating particles slow orbit
        orbitPoints.rotation.y -= 0.0015;
        orbitPoints.rotation.x = Math.sin(elapsed * 0.3) * 0.05;

        // Damped mouse follow
        targetRotationX = 0.35 + mouseY * 0.4;
        targetRotationY = globeGroup.rotation.y;
        globeGroup.rotation.x += (targetRotationX - globeGroup.rotation.x) * 0.05;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize handling
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.innerHTML = '';
      }
      pointsGeometry.dispose();
      pointsMaterial.dispose();
      sphereWireGeo.dispose();
      sphereWireMat.dispose();
      orbitGeo.dispose();
      orbitMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[450px] sm:h-[500px] lg:h-[600px] flex items-center justify-center">
      {/* Background Soft Blue/Cyan Radial Ambient Lighting */}
      <div className="absolute w-[350px] sm:w-[480px] h-[350px] sm:h-[480px] rounded-full bg-gradient-to-tr from-[#19BFFF]/20 via-[#51E5F5]/15 to-transparent blur-[80px] pointer-events-none -z-10 animate-pulse-glow" />

      {/* Floating Status / Network Ping Badges */}
      <div className="absolute -top-4 sm:top-6 right-2 sm:right-6 z-20 glass-panel px-3.5 py-1.5 rounded-full flex items-center gap-2 border border-ztg-border shadow-glow-sm">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ztg-cyan opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-ztg-cyan"></span>
        </span>
        <span className="text-[11px] font-mono tracking-wider text-ztg-cyan uppercase">ZTG Global Mesh Active</span>
      </div>

      <div className="absolute bottom-4 left-2 sm:left-6 z-20 glass-panel px-3.5 py-1.5 rounded-full flex items-center gap-2 border border-ztg-border shadow-glow-sm">
        <div className="w-2 h-2 rounded-full bg-ztg-blue" />
        <span className="text-[11px] font-mono tracking-wider text-ztg-muted">Latency &lt; 12ms · Node Sync</span>
      </div>

      {/* Three.js Container or Fallback */}
      {webGLSupported ? (
        <div
          ref={mountRef}
          className="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
          aria-label="Interactive 3D Digital Globe visualization of Zuriqon Technology Group"
        />
      ) : (
        /* CSS / SVG Futuristic Globe Fallback */
        <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full border border-ztg-blue/30 flex items-center justify-center shadow-glow-md">
          <div className="absolute inset-4 rounded-full border border-dashed border-ztg-cyan/40 animate-spin" style={{ animationDuration: '30s' }} />
          <div className="absolute inset-12 rounded-full border border-ztg-blue/20" />
          <div className="text-center p-6">
            <div className="text-ztg-cyan font-mono text-sm tracking-widest uppercase">ZTG Global Network</div>
            <div className="text-xs text-ztg-muted mt-1">Interconnected Digital Infrastructure</div>
          </div>
        </div>
      )}
    </div>
  );
}

