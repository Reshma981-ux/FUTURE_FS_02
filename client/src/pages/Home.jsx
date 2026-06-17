import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "30px 50px",
      }}
    >
      {/* Navbar */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "80px",
        }}
      >
        <h2
          style={{
            color: "#60a5fa",
            fontWeight: "bold",
          }}
        >
          CRMWeb
        </h2>

        <div
          style={{
            display: "flex",
            gap: "15px",
          }}
        >
          <Link to="/contact">
            <button>📩 Contact</button>
          </Link>

          <Link to="/login">
            <button>🔐 Login</button>
          </Link>
        </div>
      </div>

      {/* Hero Section */}

      <div
        style={{
          textAlign: "center",
        }}
      >
        <h1
          className="hero-title"
          style={{
            fontSize: "4rem",
            color: "#60a5fa",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          CRMWeb
        </h1>

        <p
          style={{
            maxWidth: "850px",
            margin: "0 auto",
            fontSize: "1.2rem",
            lineHeight: "1.8",
            color: "#d1d5db",
          }}
        >
          Streamline customer relationships, manage leads,
          track follow-ups, monitor conversions, and improve
          sales performance through one centralized CRM platform.
        </p>

        <div
          className="hero-buttons"
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <Link to="/contact">
            <button>📩 Contact Us</button>
          </Link>

          <Link to="/login">
            <button>🚀 Get Started</button>
          </Link>
        </div>
      </div>

      {/* Stats Section */}

      <div
        style={{
          marginTop: "80px",
        }}
      >
        <div className="cards">

          <div className="card">
            <h3>100%</h3>

            <p
              style={{
                fontSize: "16px",
                marginTop: "10px",
              }}
            >
              Lead Visibility
            </p>
          </div>

          <div className="card">
            <h3>24/7</h3>

            <p
              style={{
                fontSize: "16px",
                marginTop: "10px",
              }}
            >
              Customer Tracking
            </p>
          </div>

          <div className="card">
            <h3>Real-Time</h3>

            <p
              style={{
                fontSize: "16px",
                marginTop: "10px",
              }}
            >
              Dashboard Analytics
            </p>
          </div>

        </div>
      </div>

      {/* About Section */}

      <div
        className="card"
        style={{
          marginTop: "80px",
          maxWidth: "950px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <h2
          style={{
            marginBottom: "15px",
          }}
        >
          About CRMWeb
        </h2>

        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.9",
            color: "#d1d5db",
          }}
        >
          CRMWeb is a modern Customer Relationship Management
          platform designed to help businesses capture,
          organize, and manage customer interactions.
          From lead generation to conversion tracking,
          CRMWeb provides complete visibility into customer
          engagement and sales activities.
        </p>
      </div>

      {/* Features */}

      <div
        style={{
          marginTop: "80px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Key Features
        </h2>

        <div className="cards">

          <div className="card">
            <h3>👥 Lead Management</h3>

            <p
              style={{
                fontSize: "16px",
                marginTop: "15px",
              }}
            >
              Create, organize and manage customer leads
              efficiently.
            </p>
          </div>

          <div className="card">
            <h3>📞 Follow-Up Tracking</h3>

            <p
              style={{
                fontSize: "16px",
                marginTop: "15px",
              }}
            >
              Monitor customer interactions and maintain
              sales activities.
            </p>
          </div>

          <div className="card">
            <h3>📊 Analytics Dashboard</h3>

            <p
              style={{
                fontSize: "16px",
                marginTop: "15px",
              }}
            >
              View real-time lead statistics and conversion
              performance.
            </p>
          </div>

          <div className="card">
            <h3>🔒 Secure Access</h3>

            <p
              style={{
                fontSize: "16px",
                marginTop: "15px",
              }}
            >
              Protected admin routes with authentication
              and access control.
            </p>
          </div>

        </div>
      </div>

      {/* Footer */}

      <div
        style={{
          textAlign: "center",
          marginTop: "100px",
          opacity: "0.7",
          fontSize: "14px",
        }}
      >
        © 2026 CRMWeb | Customer Relationship Management System
      </div>
    </div>
  );
}

export default Home;