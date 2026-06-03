import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8081/api/auth/login",
        form
      );

      const user = res.data;

      // ✅ CHECK REAL USER OBJECT
      if (user && user.id) {
        setMessage("Login Successful 🚀");

        // 💾 SAVE USER (IMPORTANT FOR ORDERS + LIKES + PROFILE)
        localStorage.setItem("user", JSON.stringify(user));

        console.log("LOGGED USER:", user);

        navigate("/"); // or "/upload"
      } else {
        setMessage("Invalid username or password ❌");
      }
    } catch (error) {
      console.log(error);
      setMessage("Server Error ❌");
    }
  };

  return (
    <div style={styles.bg}>
      <div style={styles.card}>
        <h1 style={styles.title}>Welcome Back 👋</h1>

        <input
          placeholder="Username"
          style={styles.input}
          onChange={(e) =>
            setForm({ ...form, username: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          style={styles.input}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button style={styles.btn} onClick={login}>
          Login
        </button>

        <p style={styles.msg}>{message}</p>

        <p style={styles.link}>
          Don’t have account? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
}

/* 🎨 STYLES */
const styles = {
  bg: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #050816, #000000)",
    fontFamily: "Arial",
  },

  card: {
    width: "320px",
    padding: "30px",
    borderRadius: "15px",
    background: "#0f172a",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  title: {
    color: "#4da3ff",
    textAlign: "center",
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

  link: {
    textAlign: "center",
    fontSize: "14px",
    color: "#94a3b8",
  },
};