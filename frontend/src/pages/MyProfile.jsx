import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function MyProfile() {
  const [user, setUser] = useState(null);
  const [address, setAddress] = useState("");

  useEffect(() => {
    // ✅ GET LOGGED USER FROM LOGIN/SIGNUP
    const savedUser = JSON.parse(localStorage.getItem("user"));
    setUser(savedUser);
  }, []);

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>👤 My Profile</h1>

        {/* USER INFO */}
        <div style={styles.section}>
          <h3 style={styles.label}>Username</h3>
          <p style={styles.value}>{user?.username || "Not found"}</p>

          <h3 style={styles.label}>Email</h3>
          <p style={styles.value}>{user?.email || "Not found"}</p>
        </div>

        <hr style={styles.hr} />

        {/* ADDRESS (optional local only) */}
        <div style={styles.section}>
          <h3 style={styles.label}>📍 Address</h3>

          <div style={styles.row}>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your address"
              style={styles.input}
            />

            <button style={styles.saveBtn}>Save</button>
          </div>
        </div>

        <hr style={styles.hr} />

        {/* OPTIONS */}
        <div style={styles.section}>
          <h3 style={styles.label}>⚙️ Options</h3>

          <div style={styles.btnRow}>
            <Link to="/orders" style={styles.link}>
              <button style={styles.btn}>📦 My Orders</button>
            </Link>

            <Link to="/likes" style={styles.link}>
              <button style={styles.btn}>❤️ Likes</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;

/* 🎨 STYLES */
const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #050816, #000000)",
    fontFamily: "Arial",
    color: "white",
  },

  card: {
    width: "420px",
    background: "rgba(15, 23, 42, 0.85)",
    backdropFilter: "blur(12px)",
    padding: "25px",
    borderRadius: "18px",
    boxShadow: "0 0 35px rgba(0,120,255,0.25)",
    border: "1px solid rgba(255,255,255,0.08)",
  },

  title: {
    textAlign: "center",
    color: "#4da3ff",
    marginBottom: "20px",
  },

  section: {
    marginBottom: "15px",
  },

  label: {
    color: "#93c5fd",
    marginBottom: "5px",
  },

  value: {
    color: "#e5e7eb",
    marginBottom: "10px",
  },

  hr: {
    border: "0.5px solid rgba(255,255,255,0.1)",
    margin: "15px 0",
  },

  row: {
    display: "flex",
    gap: "10px",
  },

  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #334155",
    background: "#0f172a",
    color: "white",
  },

  saveBtn: {
    padding: "10px 15px",
    borderRadius: "10px",
    border: "none",
    background: "#2563eb",
    color: "white",
    cursor: "pointer",
  },

  btnRow: {
    display: "flex",
    gap: "10px",
  },

  btn: {
    flex: 1,
    padding: "10px",
    borderRadius: "10px",
    border: "none",
    background: "#1e3a8a",
    color: "white",
    cursor: "pointer",
  },

  link: {
    textDecoration: "none",
    flex: 1,
  },
};