import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

function Leads() {
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    status: "New",
    note: ""
  });

  const fetchLeads = async () => {
    try {
      const res = await api.get("/leads");
      setLeads(res.data);
    } catch (error) {
      console.error("Error fetching leads:", error);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const addLead = async () => {
    try {
      await api.post("/leads", form);

      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        status: "New",
        note: ""
      });

      fetchLeads();
    } catch (error) {
      console.error("Error adding lead:", error);
    }
  };

  const deleteLead = async (id) => {
    try {
      await api.delete(`/leads/${id}`);
      fetchLeads();
    } catch (error) {
      console.error("Error deleting lead:", error);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await api.put(`/leads/${id}`, { status });
      fetchLeads();
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const filteredLeads = leads.filter((lead) =>
    lead.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">

      {/* Sidebar */}

      <div className="sidebar">
        <h2>CRMWeb</h2>

        <p
          style={{
            fontSize: "14px",
            marginBottom: "25px",
            opacity: "0.8"
          }}
        >
          Lead Management System
        </p>

        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/leads">
          Leads
        </Link>
      </div>

      {/* Main Content */}

      <div className="main">

        <h1>Lead Management</h1>

        {/* Add Lead Form */}
        

        <div className="form-box">

          <input
            placeholder="Name"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value
              })
            }
          />

          <input
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value
              })
            }
          />

          <input
            placeholder="Phone"
            value={form.phone}
            onChange={(e) =>
              setForm({
                ...form,
                phone: e.target.value
              })
            }
          />

          <input
            placeholder="Company"
            value={form.company}
            onChange={(e) =>
              setForm({
                ...form,
                company: e.target.value
              })
            }
          />

          <input
            placeholder="Follow-up Note"
            value={form.note}
            onChange={(e) =>
              setForm({
                ...form,
                note: e.target.value
              })
            }
          />

          <button onClick={addLead}>
            Add Lead
          </button>
        </div>

        {/* Search */}

        <input
          placeholder="🔍 Search Lead..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Empty State */}

        {filteredLeads.length === 0 && (
          <div className="lead-card">
            <h3>No Leads Found</h3>
          </div>
        )}

        {/* Lead List */}

        {filteredLeads.map((lead) => (
          <div
            key={lead._id}
            className="lead-card"
          >
            <h3>👤 {lead.name}</h3>

            <p>📧 {lead.email}</p>

            <p>📞 {lead.phone}</p>

            <p>🏢 {lead.company}</p>

            <p>📝 {lead.note}</p>
            <p
  className={
    lead.status === "New"
      ? "status-new"
      : lead.status === "Contacted"
      ? "status-contacted"
      : lead.status === "Follow-up"
      ? "status-followup"
      : "status-converted"
  }
>
  Status: {lead.status}
</p>

            <br />

            <select
              className="status-select"
              value={lead.status}
              onChange={(e) =>
                updateStatus(
                  lead._id,
                  e.target.value
                )
              }
            >
              <option>New</option>
              <option>Contacted</option>
              <option>Follow-up</option>
              <option>Converted</option>
            </select>

            <br />
            <br />

            <button
              onClick={() =>
                deleteLead(lead._id)
              }
            >
              Delete
            </button>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Leads;