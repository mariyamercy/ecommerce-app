import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "10px" }}>
      <Link to="/">Home</Link>
      <Link to="/upload">Upload</Link>
      <Link to="/profile">My Profile</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}