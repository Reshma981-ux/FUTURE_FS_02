import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function Dashboard() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const res = await api.get("/leads");
      setLeads(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const totalLeads = leads.length;
  const newLeads = leads.filter(
    (lead) => lead.status === "New"
  ).length;

  const contactedLeads = leads.filter(
    (lead) => lead.status === "Contacted"
  ).length;


  const convertedLeads = leads.filter(
    (lead) => lead.status === "Converted"
  ).length;

  const followups = leads.filter(
  (lead) => lead.status === "Follow-up"
).length;

  return (
    <div className="container">
      <div className="sidebar">
        <h2>CRMWeb</h2>

        <Link to="/dashboard">Dashboard</Link>

        <Link to="/leads">Leads</Link>

        <Link to="/contact">Contact Form</Link>

        <button onClick={logout}>
          Logout
        </button>
      </div>

      <div className="main">
        <h1>Welcome to CRMWeb</h1>

<p>
Centralized lead management and customer tracking.

</p>
        <div
style={{
background:"rgba(255,255,255,0.08)",
padding:"30px",
borderRadius:"20px",
marginBottom:"20px"
}}
>
<h1>CRM Dashboard</h1>

</div>
<div
style={{
marginBottom:"20px"
}}
>

</div>
        <div className="cards">

          <div className="card">
            <h3>Total Leads</h3>
            <p>{totalLeads}</p>
          </div>

          <div className="card">
            <h3>New Leads</h3>
            <p>{newLeads}</p>
          </div>

          <div className="card">
            <h3>Contacted</h3>
            <p>{contactedLeads}</p>
          </div>

          <div className="card">
            <h3>Converted</h3>
            <p>{convertedLeads}</p>
          </div>
          <div className="card">
  <h3>Follow-ups</h3>
  <p>{followups}</p>
</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;