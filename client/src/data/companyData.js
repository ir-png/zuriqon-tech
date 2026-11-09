/**
 * ZURIQON TECHNOLOGY GROUP (ZTG)
 * Central Company Content & Configuration
 */

export const COMPANY_INFO = {
  name: "Zuriqon Technology Group",
  shortName: "ZTG",
  slogan: "Technology. Innovation. Transformation.",
  tagline: "Building the Future Through Technology.",
  positioning:
    "Zuriqon Technology Group is a modern technology company focused on delivering innovative digital solutions, empowering businesses and individuals through technology, and helping organizations navigate digital transformation.",
  contact: {
    email: "zuriqongroup@gmail.com",
    phone: "+250 792014669",
    location: "Kigali, Rwanda",
    hours: "Monday – Friday: 08:00 AM – 06:00 PM (CAT)",
  },
  socials: [
    { name: "LinkedIn", href: "https://linkedin.com", iconName: "Linkedin" },
    { name: "Twitter / X", href: "https://x.com", iconName: "Twitter" },
    { name: "GitHub", href: "https://github.com", iconName: "Github" },
    { name: "Instagram", href: "https://instagram.com", iconName: "Instagram" },
  ],
};

export const NAVIGATION_LINKS = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Industries", path: "/industries" },
  { name: "Our Projects", path: "/projects" },
  { name: "Insights", path: "/insights" },
  { name: "Contact", path: "/contact" },
];

/**
 * Modern floating statistics / company indicators panel
 * Follows strict instruction: Initial company indicators as editable placeholders, not verified claims
 */
export const COMPANY_INDICATORS = [
  {
    id: "solutions",
    label: "Digital Solutions",
    subtitle: "Engineered for scale & security",
    tag: "Core Focus",
  },
  {
    id: "services",
    label: "Multiple Technology Services",
    subtitle: "From cloud to custom software",
    tag: "Multi-Disciplinary",
  },
  {
    id: "client-focus",
    label: "Client-Focused Approach",
    subtitle: "Tailored to your digital roadmap",
    tag: "Methodology",
  },
  {
    id: "innovation",
    label: "Innovation-Driven Strategy",
    subtitle: "Modern architecture & intelligence",
    tag: "Philosophy",
  },
];

export const ABOUT_DATA = {
  heading: "Technology That Moves Businesses Forward.",
  description:
    "At Zuriqon Technology Group, we believe technology should create opportunities, solve real-world challenges and accelerate progress. We combine technical expertise, creativity and strategic thinking to develop solutions that help businesses and individuals succeed in the digital age.",
  mission: {
    title: "Our Mission",
    description:
      "To empower organizations and individuals through dependable, cutting-edge digital solutions that turn technological complexity into competitive advantage.",
  },
  vision: {
    title: "Our Vision",
    description:
      "To be an internationally recognized digital transformation partner celebrated for technical excellence, forward-thinking innovation, and impactful software engineering.",
  },
  values: [
    {
      title: "Technical Excellence",
      description: "Adhering to high engineering standards, clean code architectures, and robust security protocols.",
      icon: "ShieldCheck",
    },
    {
      title: "Purposeful Innovation",
      description: "Harnessing the potential of AI, modern web, and cloud tech to solve tangible problems.",
      icon: "Sparkles",
    },
    {
      title: "Integrity & Partnership",
      description: "Building transparent, lasting collaborations with clients as their trusted tech advisors.",
      icon: "Users",
    },
    {
      title: "Agility & Adaptability",
      description: "Continuously evolving our skillsets and architectures to stay ahead in a fast-shifting digital landscape.",
      icon: "Layers",
    },
  ],
};

export const SERVICES_DATA = [
  {
    id: "software-development",
    title: "SOFTWARE DEVELOPMENT",
    summary: "Custom software, business applications, mobile applications and database solutions.",
    details:
      "End-to-end software architecture crafted for resilience. We build distributed systems, API microservices, enterprise SaaS platforms, and multi-platform mobile apps tailored precisely to operational needs.",
    tags: ["Custom Apps", "Microservices", "Mobile & Cloud", "Databases"],
    icon: "Code2",
  },
  {
    id: "web-development",
    title: "WEBSITE DESIGN & DEVELOPMENT",
    summary: "Professional websites, e-commerce platforms, responsive web applications and website maintenance.",
    details:
      "High-speed, SEO-optimized digital web experiences designed to engage and convert. We combine sleek UI/UX with modern headless CMS, Next/Vite tech stacks, and secure payment integrations.",
    tags: ["Responsive Web", "E-Commerce", "Web Portals", "Maintenance"],
    icon: "Globe",
  },
  {
    id: "it-cybersecurity",
    title: "IT SOLUTIONS & CYBERSECURITY",
    summary: "IT consulting, network infrastructure, system maintenance and cybersecurity services.",
    details:
      "Robust protection and infrastructure uptime for critical data assets. We implement zero-trust access, cloud security audits, automated threat monitoring, and corporate network engineering.",
    tags: ["Cyber Resilience", "Infrastructure", "Cloud Systems", "Threat Audits"],
    icon: "Shield",
  },
  {
    id: "ai-automation",
    title: "ARTIFICIAL INTELLIGENCE & AUTOMATION",
    summary: "AI-powered solutions, intelligent automation, chatbots and data-driven business tools.",
    details:
      "Unlocking organizational efficiency with intelligent workflows, LLM-powered assistants, automated ETL pipelines, and predictive analytics that turn raw data into actionable foresight.",
    tags: ["Intelligent Workflows", "Chatbots & LLMs", "Data Pipelines", "Process Automation"],
    icon: "Cpu",
  },
  {
    id: "digital-branding",
    title: "DIGITAL DESIGN & BRANDING",
    summary: "Brand identity, graphic design, UI/UX design and digital creative solutions.",
    details:
      "Futuristic, human-centered digital design systems. We craft distinctive visual identities, intuitive user interfaces, interactive wireframes, and design languages that elevate brand trust.",
    tags: ["UI/UX Architecture", "Visual Identity", "Design Systems", "Prototyping"],
    icon: "Palette",
  },
  {
    id: "tech-consulting",
    title: "TECHNOLOGY CONSULTING",
    summary: "Digital transformation, technology strategy, IT training and implementation guidance.",
    details:
      "Strategic roadmaps that guide executive leadership through modernization. We assess legacy systems, evaluate tech stacks, and train engineering teams on modern development best practices.",
    tags: ["Transformation Strategy", "Stack Audits", "IT Governance", "Team Enablement"],
    icon: "Compass",
  },
];

export const INDUSTRIES_DATA = [
  {
    id: "business-enterprise",
    title: "Business & Enterprise",
    description: "Streamlining workflows, enterprise ERP/CRM integration, and automated digital operations for high-efficiency scaling.",
    icon: "Building2",
    accent: "from-blue-500/20 to-cyan-500/10",
  },
  {
    id: "education",
    title: "Education",
    description: "Interactive learning management systems (LMS), student data portals, and accessible digital education platforms.",
    icon: "GraduationCap",
    accent: "from-cyan-500/20 to-blue-500/10",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description: "HIPAA-compliant software, tele-health portals, medical record encryption, and reliable clinical workflow tools.",
    icon: "Activity",
    accent: "from-emerald-500/20 to-cyan-500/10",
  },
  {
    id: "retail-ecommerce",
    title: "Retail & E-commerce",
    description: "High-conversion omni-channel shopping portals, dynamic inventory tracking, and seamless payment gateways.",
    icon: "ShoppingBag",
    accent: "from-blue-500/20 to-purple-500/10",
  },
  {
    id: "financial-services",
    title: "Financial Services",
    description: "Secure fintech integrations, algorithmic transactional tracking, and compliant encrypted financial reporting.",
    icon: "Coins",
    accent: "from-cyan-500/20 to-sky-500/10",
  },
  {
    id: "government-institutions",
    title: "Government & Institutions",
    description: "High-security citizen service portals, digital records archiving, and resilient public infrastructure technology.",
    icon: "Landmark",
    accent: "from-sky-500/20 to-blue-500/10",
  },
];

export const VALUE_PROPOSITIONS = [
  {
    id: "innovation-first",
    title: "Innovation First",
    description: "We constantly explore emerging paradigms—from cloud computing to intelligent automation—bringing forward-looking solutions to every initiative.",
    icon: "Zap",
  },
  {
    id: "customer-centered",
    title: "Customer-Centered Solutions",
    description: "Every architecture and interface is designed around the real human beings and operational workflows who use it every day.",
    icon: "HeartHandshake",
  },
  {
    id: "quality-reliability",
    title: "Quality & Reliability",
    description: "We prioritize robust test coverage, fault-tolerant infrastructure, clean patterns, and reliable delivery cycles.",
    icon: "CheckCircle2",
  },
  {
    id: "strategic-thinking",
    title: "Strategic Technology Thinking",
    description: "We don't merely write code; we partner to architect sustainable technical strategies aligned directly with commercial objectives.",
    icon: "TrendingUp",
  },
  {
    id: "longterm-growth",
    title: "Long-Term Digital Growth",
    description: "Our solutions are engineered to scale flexibly with your organizational milestones, ensuring durable value over time.",
    icon: "Rocket",
  },
];

/**
 * Sample / Demo projects clearly identified until production case studies are published
 */
export const FEATURED_PROJECTS = [
  {
    id: "demo-project-1",
    title: "OmniCloud Enterprise Hub",
    category: "Cloud Architecture & Microservices",
    badge: "Sample Case Concept",
    description: "A multi-region hybrid cloud orchestrator featuring low-latency synchronization and dynamic failover for distributed enterprise systems.",
    techStack: ["React", "Go Microservices", "PostgreSQL", "Kubernetes"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "demo-project-2",
    title: "AegisCore Security Intelligence",
    category: "Cybersecurity & Automation",
    badge: "Sample Case Concept",
    description: "AI-assisted vulnerability triage dashboard providing real-time perimeter monitoring and proactive anomaly alerting for financial transactions.",
    techStack: ["Next.js", "Python / FastAPI", "Zero Trust", "Time-Series DB"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "demo-project-3",
    title: "Nexura Intelligent Retail Engine",
    category: "Web & E-Commerce Platform",
    badge: "Sample Case Concept",
    description: "Headless e-commerce ecosystem integrating predictive inventory forecasting with ultra-responsive mobile shopping experiences.",
    techStack: ["React", "Tailwind CSS", "Stripe API", "Supabase"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
];

export const INSIGHTS_DATA = [
  {
    id: "insight-1",
    title: "The Architecture of Modern Cloud Resilience for African & Global Tech Hubs",
    category: "Cloud Engineering",
    readTime: "5 min read",
    date: "November 2026",
    excerpt: "How distributed cloud strategies, multi-region edge deployment, and zero-latency caching empower organizations to scale uninterrupted across borders.",
    author: "ZTG Architecture Board",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "insight-2",
    title: "Pragmatic AI: Transitioning From Hype to Reliable Enterprise Automation",
    category: "Artificial Intelligence",
    readTime: "7 min read",
    date: "October 2026",
    excerpt: "Why successful AI integration centers around clean data pipelines, domain-specific retrieval models, and human-in-the-loop validation.",
    author: "ZTG Intelligence Lab",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "insight-3",
    title: "Zero-Trust Cybersecurity in High-Volume Financial Digital Platforms",
    category: "Cybersecurity",
    readTime: "6 min read",
    date: "September 2026",
    excerpt: "Building defense-in-depth: continuous authentication, encrypted ledger synchronization, and automated perimeter threat isolation.",
    author: "ZTG Security Unit",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
  },
];

