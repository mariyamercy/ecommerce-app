import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const signup = async () => {
    try {
      const res = await axios.post("http://localhost:8081/api/auth/signup", form);

      if (res.data === "SUCCESS" || res.data === "SIGNUP_SUCCESS") {
        setMessage("Signup Successful 🚀");
        navigate("/upload-blueprint");
      } else {
        setMessage(res.data);
      }
    } catch (error) {
      setMessage("Signup Failed ❌");
    }
  };

  return (
    <div style={styles.bg}>
      <div style={styles.card}>
        <h2 style={styles.title}>🧾 Signup</h2>

        <input
          placeholder="Username"
          style={styles.input}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />

        <input
          placeholder="Email"
          style={styles.input}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          style={styles.input}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button style={styles.btn} onClick={signup}>
          Signup
        </button>

        <p style={styles.msg}>{message}</p>

        <p style={styles.linkText}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  bg: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0a0f2c, #000000)",
    color: "white",
  },
  card: {
    background: "#0f172a",
    padding: "30px",
    borderRadius: "15px",
    width: "300px",
    boxShadow: "0 0 25px rgba(0,100,255,0.2)",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  title: {
    textAlign: "center",
    color: "#4da3ff",
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #334155",
    background: "#111827",
    color: "white",
  },
  btn: {
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    background: "#1d4ed8",
    color: "white",
    cursor: "pointer",
  },
  msg: {
    textAlign: "center",
    color: "#cbd5e1",
  },
  linkText: {
    textAlign: "center",
    fontSize: "14px",
  },
};