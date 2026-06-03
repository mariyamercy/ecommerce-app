import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState("");
  const [price, setPrice] = useState("");
  const [details, setDetails] = useState("");

  const navigate = useNavigate();

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("caption", caption);
    formData.append("price", price);
    formData.append("details", details);

    try {
      await axios.post(
        "http://localhost:8081/api/properties/upload",
        formData
      );

      alert("Uploaded 🚀");
      navigate("/");
    } catch (err) {
      console.log(err);
      alert("Upload failed ❌");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={{ color: "#4da3ff" }}>📤 Upload Property</h2>

        <input type="file" onChange={(e) => setFile(e.target.files[0])} />

        <input
          placeholder="Title"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          style={styles.input}
        />

        <input
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={styles.input}
        />

        <textarea
          placeholder="Details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          style={styles.textarea}
        />

        <button onClick={handleUpload} style={styles.btn}>
          Upload
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#0a0f2c",
  },
  card: {
    background: "#111827",
    padding: "20px",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "300px",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #333",
    background: "#0f172a",
    color: "white",
  },
  textarea: {
    padding: "10px",
    borderRadius: "6px",
    background: "#0f172a",
    color: "white",
    height: "80px",
  },
  btn: {
    background: "#2563eb",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};