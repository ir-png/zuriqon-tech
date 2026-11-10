import React, { useEffect, useState } from 'react';

// Hard‑coded admin credentials (same as backend)
const ADMIN_EMAIL = 'zuriqongroup@gmail.com';
const ADMIN_PASS = 'Admin@123';
const BASIC_AUTH = 'Basic ' + btoa(`${ADMIN_EMAIL}:${ADMIN_PASS}`);

// Helper to build fetch options with auth header
const authHeaders = {
  Authorization: BASIC_AUTH,
  'Content-Type': 'application/json',
};

export default function Admin() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState(null); // inquiry object for email modal
  const [emailForm, setEmailForm] = useState({ subject: '', text: '', html: '' });

  const backend = import.meta.env.VITE_BACKEND_URL || '';

  // ---------------------------------------------------------------------
  // Load all inquiries from admin endpoint
  // ---------------------------------------------------------------------
  const fetchInquiries = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${backend}/admin/requests`, {
        headers: authHeaders,
      });
      if (!res.ok) throw new Error('Failed to fetch inquiries');
      const data = await res.json();
      setInquiries(data.inquiries || []);
    } catch (e) {
      console.error(e);
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ---------------------------------------------------------------------
  // Update status of a single inquiry
  // ---------------------------------------------------------------------
  const updateStatus = async (id, newStatus) => {
    try {
      const res = await fetch(`${backend}/admin/requests/${id}/status`, {
        method: 'POST',
        headers: authHeaders,
        body: JSON.stringify({ status: newStatus }),
      });
      if (!res.ok) throw new Error('Status update failed');
      await fetchInquiries();
    } catch (e) {
      console.error(e);
      setError(e.message);
    }
  };

  // ---------------------------------------------------------------------
  // Open email modal for a given inquiry
  // ---------------------------------------------------------------------
  const openEmailModal = (inquiry) => {
    setSelected(inquiry);
    setEmailForm({ subject: '', text: '', html: '' });
    setModalOpen(true);
  };

  const closeEmailModal = () => {
    setModalOpen(false);
    setSelected(null);
  };

  // ---------------------------------------------------------------------
  // Send email reply
  // ---------------------------------------------------------------------
  const sendEmail = async () => {
    if (!selected) return;
    try {
      const res = await fetch(`${backend}/admin/requests/${selected.id}/email`, {
        method: 'POST',
        headers: authHeaders,
        body: JSON.stringify(emailForm),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Email send failed');
      }
      const result = await res.json();
      console.log('Email sent', result);
      closeEmailModal();
    } catch (e) {
      console.error(e);
      setError(e.message);
    }
  };

  // ---------------------------------------------------------------------
  // Render helpers
  // ---------------------------------------------------------------------
  const statusOptions = ['pending', 'reviewed', 'contacted', 'archived'];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard – Project Inquiries</h1>

      {error && <div className="bg-rose-100 text-rose-800 p-2 mb-4 rounded">{error}</div>}

      {loading ? (
        <div>Loading…</div>
      ) : (
        <table className="min-w-full bg-white border border-gray-200 shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-left">ID</th>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-left">Service</th>
              <th className="p-2 text-left">Created</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {inquiries.map((inq) => (
              <tr key={inq.id} className="border-t">
                <td className="p-2">{inq.id}</td>
                <td className="p-2">{inq.full_name}</td>
                <td className="p-2 text-blue-600 underline">{inq.email}</td>
                <td className="p-2">{inq.target_service}</td>
                <td className="p-2" title={inq.created_at}>
                  {new Date(inq.created_at).toLocaleString()}
                </td>
                <td className="p-2">
                  <select
                    value={inq.status}
                    onChange={(e) => updateStatus(inq.id, e.target.value)}
                    className="border rounded p-1"
                  >
                    {statusOptions.map((opt) => (
                      <option key={opt} value={opt}> {opt} </option>
                    ))}
                  </select>
                </td>
                <td className="p-2 space-x-2">
                  <button
                    onClick={() => openEmailModal(inq)}
                    className="bg-ztg-blue text-white px-3 py-1 rounded"
                  >
                    Email
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Email Reply Modal */}
      {modalOpen && selected && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            <h2 className="text-xl font-semibold mb-4">Reply to {selected.full_name}</h2>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Subject"
                value={emailForm.subject}
                onChange={(e) => setEmailForm({ ...emailForm, subject: e.target.value })}
                className="w-full border rounded p-2"
              />
              <textarea
                rows={5}
                placeholder="Message (plain text)"
                value={emailForm.text}
                onChange={(e) => setEmailForm({ ...emailForm, text: e.target.value })}
                className="w-full border rounded p-2"
              />
              {/* Optional HTML version */}
              <textarea
                rows={3}
                placeholder="Message (HTML) – optional"
                value={emailForm.html}
                onChange={(e) => setEmailForm({ ...emailForm, html: e.target.value })}
                className="w-full border rounded p-2"
              />
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <button onClick={closeEmailModal} className="px-4 py-2 border rounded">Cancel</button>
              <button onClick={sendEmail} className="px-4 py-2 bg-ztg-blue text-white rounded">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

