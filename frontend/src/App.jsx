import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

// Pages
import HomePage from "./pages/HomePage";
import UploadPage from "./pages/UploadPage";
import PlaceOrder from "./pages/PlaceOrder";
import ThreeDView from "./pages/ThreeDView";

// Auth
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import MyProfile from "./pages/MyProfile";

// Orders & Likes
import Orders from "./pages/Orders";
import Likes from "./pages/Likes";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* 🏠 Home */}
        <Route path="/" element={<HomePage />} />

        {/* 📤 Upload */}
        <Route path="/upload" element={<UploadPage />} />

        {/* 🛒 Orders */}
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />

        {/* ❤️ Likes */}
        <Route path="/likes" element={<Likes />} />

        {/* 🧊 3D View */}
        <Route path="/3d-view" element={<ThreeDView />} />

        {/* 🔐 Auth */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* 👤 Profile */}
        <Route path="/profile" element={<MyProfile />} />

        {/* ❌ fallback */}
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;