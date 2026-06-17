import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Leads from "./pages/Leads.jsx";
import Contact from "./pages/Contact.jsx";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>

  <Route
    path="/"
    element={<Home />}
  />

  <Route
    path="/login"
    element={<Login />}
  />

  <Route
    path="/contact"
    element={<Contact />}
  />

  <Route
    path="/dashboard"
    element={
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    }
  />

  <Route
    path="/leads"
    element={
      <ProtectedRoute>
        <Leads />
      </ProtectedRoute>
    }
  />

</Routes>
    </BrowserRouter>
  );
}

export default App;