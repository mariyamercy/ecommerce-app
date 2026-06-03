import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function PlaceOrder() {
  const navigate = useNavigate();
  const location = useLocation();

  const property = location.state || {};

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    payment: "full",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.phone) {
      alert("❌ Please fill all required fields");
      return;
    }

    if (!form.agree) {
      alert("⚠️ Please accept Terms & Conditions");
      return;
    }

    const existingOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    const newOrder = {
      id: Date.now(),
      propertyId: property.id,
      propertyName: property.caption,
      propertyPrice: property.price,
      propertyDetails: property.details,
      propertyImage: property.imageUrl,

      buyerName: form.name,
      buyerEmail: form.email,
      buyerPhone: form.phone,
      buyerAddress: form.address,

      paymentMethod: form.payment,
      orderDate: new Date().toLocaleString(),
    };

    existingOrders.push(newOrder);

    localStorage.setItem(
      "orders",
      JSON.stringify(existingOrders)
    );

    alert("🎉 Order placed successfully!");

    navigate("/orders");
  };

  return (
    <div
      style={{
        padding: "20px",
        background: "#0a0f2c",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <h1>🛒 Place Order</h1>

      <div style={box}>
        <h2>{property.caption}</h2>

        <p>💰 {property.price}</p>

        <p>{property.details}</p>

        {property.imageUrl && (
          <img
            src={`http://localhost:8081${property.imageUrl}`}
            alt="property"
            style={{
              width: "100%",
              borderRadius: "10px",
              marginTop: "10px",
            }}
          />
        )}

        <button
          style={btnDark}
          onClick={() =>
            navigate("/3d-view", {
              state: property,
            })
          }
        >
          🧊 View 3D
        </button>
      </div>

      <div style={box}>
        <h2>👤 Buyer Details</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          style={input}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={input}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          style={input}
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          style={input}
        />
      </div>

      <div style={box}>
        <h2>💳 Payment Method</h2>

        <label>
          <input
            type="radio"
            name="payment"
            value="full"
            checked={form.payment === "full"}
            onChange={handleChange}
          />
          Full Payment
        </label>

        <br />
        <br />

        <label>
          <input
            type="radio"
            name="payment"
            value="emi"
            checked={form.payment === "emi"}
            onChange={handleChange}
          />
          EMI
        </label>

        <br />
        <br />

        <label>
          <input
            type="radio"
            name="payment"
            value="upi"
            checked={form.payment === "upi"}
            onChange={handleChange}
          />
          UPI
        </label>
      </div>

      <div style={box}>
        <label>
          <input
            type="checkbox"
            name="agree"
            checked={form.agree}
            onChange={handleChange}
          />
          {" "}I agree to Terms & Conditions
        </label>
      </div>

      <button style={btnGreen} onClick={handleSubmit}>
        🛒 PLACE ORDER
      </button>
    </div>
  );
}

export default PlaceOrder;

const box = {
  border: "1px solid #334155",
  padding: "15px",
  marginTop: "15px",
  borderRadius: "10px",
};

const input = {
  display: "block",
  width: "100%",
  padding: "10px",
  marginTop: "10px",
  borderRadius: "8px",
  border: "1px solid #475569",
};

const btnGreen = {
  marginTop: "20px",
  padding: "12px 20px",
  background: "green",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

const btnDark = {
  marginTop: "10px",
  padding: "10px",
  background: "black",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};