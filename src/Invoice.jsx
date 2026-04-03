import { useState } from "react";

export default function Invoice() {
  const [vendor, setVendor] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async () => {
    await fetch("https://ava-backend-production.up.railway.app/invoices/add-invoice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        vendor,
        date,
        total_amount: amount,
      }),
    });

    alert("Saved");
  };

  return (
    <div>
      <h2>Add Invoice</h2>

      <input placeholder="Vendor" onChange={(e) => setVendor(e.target.value)} />
      <input placeholder="Date" onChange={(e) => setDate(e.target.value)} />
      <input placeholder="Amount" onChange={(e) => setAmount(e.target.value)} />

      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}