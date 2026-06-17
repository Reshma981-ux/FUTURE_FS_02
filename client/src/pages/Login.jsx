import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (
      email === "admin@gmail.com" &&
      password === "admin123"
    ) {
      localStorage.setItem("token", "logged");
      navigate("/dashboard");
    } else {
      <p className="error">
 Invalid Credentials
</p>
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h1>CRMWeb</h1>

<p
style={{
marginBottom:"20px",
color:"#ccc"
}}
>
Lead Management System
</p>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;