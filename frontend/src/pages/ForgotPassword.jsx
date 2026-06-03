import React, { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async () => {
    const res = await fetch("http://localhost:8081/api/auth/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const text = await res.text();
    setMessage(text);
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <input placeholder="Enter your email" onChange={e => setEmail(e.target.value)} />
      <button onClick={handleReset}>Send Reset Link</button>
      <p>{message}</p>
    </div>
  );
}

export default ForgotPassword;
