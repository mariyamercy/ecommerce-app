import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8081/api/properties/all"
      );
      setProperties(res.data);
    } catch (err) {
      console.log("Error loading properties:", err);
    }
  };

  // ❤️ LIKE PROPERTY
  const handleLike = async (item) => {
    try {
      await axios.post("http://localhost:8081/api/likes/add", {
        propertyId: item.id,
        propertyName: item.caption,
        propertyPrice: item.price,
        propertyImage: item.imageUrl,
        userEmail: "demo@gmail.com",
      });

      alert("❤️ Added to Likes!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🏡 RealEstate3D Properties</h1>

      <div style={styles.grid}>
        {properties.map((item) => (
          <div key={item.id} style={styles.card}>
            
            {/* IMAGE */}
            <img
              src={`http://localhost:8081${item.imageUrl}`}
              style={styles.image}
              alt="property"
            />

            {/* DETAILS */}
            <h3>{item.caption}</h3>
            <p>💰 {item.price}</p>
            <p>{item.details}</p>

            {/* BUTTONS */}
            <div style={styles.btnRow}>

              {/* ❤️ LIKE */}
              <button
                style={styles.likeBtn}
                onClick={() => handleLike(item)}
              >
                ❤️ Like
              </button>

              {/* 🛒 ORDER */}
              <button
                style={styles.buyBtn}
                onClick={() =>
                  navigate("/place-order", { state: item })
                }
              >
                🛒 Order
              </button>

              {/* 🧊 3D VIEW */}
              <button
                style={styles.viewBtn}
                onClick={() =>
                  navigate("/3d-view", { state: item })
                }
              >
                🧊 3D
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* 🎨 STYLES */
const styles = {
  container: {
    padding: "20px",
    background: "#0a0f2c",
    minHeight: "100vh",
    color: "white",
  },

  title: {
    textAlign: "center",
    color: "#4da3ff",
    marginBottom: "20px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },

  card: {
    background: "#111827",
    padding: "15px",
    borderRadius: "12px",
    boxShadow: "0 0 10px rgba(0,0,0,0.4)",
  },

  image: {
    width: "100%",
    height: "160px",
    objectFit: "cover",
    borderRadius: "10px",
  },

  btnRow: {
    display: "flex",
    gap: "8px",
    marginTop: "10px",
  },

  likeBtn: {
    background: "#ef4444",
    color: "white",
    border: "none",
    padding: "8px",
    borderRadius: "6px",
    cursor: "pointer",
    flex: 1,
  },

  buyBtn: {
    background: "#22c55e",
    color: "white",
    border: "none",
    padding: "8px",
    borderRadius: "6px",
    cursor: "pointer",
    flex: 1,
  },

  viewBtn: {
    background: "#1f2937",
    color: "white",
    border: "none",
    padding: "8px",
    borderRadius: "6px",
    cursor: "pointer",
    flex: 1,
  },
};