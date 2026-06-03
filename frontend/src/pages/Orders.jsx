import { useEffect, useState } from "react";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(data);
  }, []);

  return (
    <div style={{ padding: "20px", color: "white", background: "#0a0f2c", minHeight: "100vh" }}>
      <h1>📦 My Orders</h1>

      {orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            style={{
              border: "1px solid #444",
              padding: "15px",
              marginTop: "15px",
              borderRadius: "10px",
              background: "#111827",
            }}
          >
            {/* 🏠 PROPERTY */}
            <h2>{order.propertyName}</h2>
            <p>💰 {order.propertyPrice}</p>

            {order.propertyImage && (
              <img
                src={`http://localhost:8081${order.propertyImage}`}
                alt="property"
                style={{ width: "200px", borderRadius: "10px" }}
              />
            )}

            <hr style={{ margin: "10px 0" }} />

            {/* 👤 BUYER DETAILS */}
            <h3>👤 Buyer:</h3>
            <p><b>Name:</b> {order.buyerName}</p>
            <p><b>Email:</b> {order.buyerEmail}</p>
            <p><b>Phone:</b> {order.buyerPhone}</p>
            <p><b>Address:</b> {order.buyerAddress}</p>

            <hr style={{ margin: "10px 0" }} />

            {/* 💳 PAYMENT */}
            <p><b>Payment:</b> {order.paymentMethod}</p>
            <p><b>Date:</b> {order.orderDate}</p>
          </div>
        ))
      )}
    </div>
  );
}