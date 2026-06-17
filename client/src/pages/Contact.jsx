import { useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";
<Link to="/">
  <button>
    ← Home
  </button>
</Link>
function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    note: ""
  });

  const handleSubmit = async () => {
    try {
      await api.post("/leads", {
        ...form,
        status: "New"
      });

      alert("Your request has been submitted!");

      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        note: ""
      });
    } catch (error) {
      console.log(error);
      alert("Submission failed");
    }
  };

  return (
    <div
  style={{
    minHeight: "100vh",
    background:
      "linear-gradient(135deg,#0f172a,#1e293b,#334155)",
    padding: "50px",
    color: "white"
  }}
>
      <h1>Contact Our Team</h1>

      <input
        placeholder="Name"
        value={form.name}
        onChange={(e)=>setForm({...form,name:e.target.value})}
      />

      <input
        placeholder="Email"
        value={form.email}
        onChange={(e)=>setForm({...form,email:e.target.value})}
      />

      <input
        placeholder="Phone"
        value={form.phone}
        onChange={(e)=>setForm({...form,phone:e.target.value})}
      />

      <input
        placeholder="Company"
        value={form.company}
        onChange={(e)=>setForm({...form,company:e.target.value})}
      />

      <input
        placeholder="Message"
        value={form.note}
        onChange={(e)=>setForm({...form,note:e.target.value})}
      />

      <button onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Contact;