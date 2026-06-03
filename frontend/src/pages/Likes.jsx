import { useEffect, useState } from "react";
import axios from "axios";

export default function Likes() {
  const [likes, setLikes] = useState([]);

  const userEmail = "demo@gmail.com"; // later replace with login user

  useEffect(() => {
    fetchLikes();
  }, []);

  const fetchLikes = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8081/api/likes/${userEmail}`
      );
      setLikes(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ padding: "20px", background: "#0a0f2c", minHeight: "100vh", color: "white" }}>
      <h1>❤️ Liked Properties</h1>

      {likes.length === 0 ? (
        <p>No liked properties yet.</p>
      ) : (
        likes.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #334155",
              padding: "15px",
              marginBottom: "10px",
              borderRadius: "10px",
              background: "#111827",
            }}
          >
            <img
              src={`http://localhost:8081${item.propertyImage}`}
              alt="property"
              width="200"
              style={{ borderRadius: "10px" }}
            />

            <h3>{item.propertyName}</h3>
          </div>
        ))
      )}
    </div>
  );
}