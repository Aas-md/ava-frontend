import { useEffect, useState } from "react";

export default function Analytics() {
  const [total, setTotal] = useState(0);
  const [spend, setSpend] = useState(0);
  const [vendors, setVendors] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const t = await fetch("https://ava-backend-production.up.railway.app/invoices/total-invoices");
      const s = await fetch("https://ava-backend-production.up.railway.app/invoices/total-spend");
      const v = await fetch("https://ava-backend-production.up.railway.app/invoices/vendor-spend");

      setTotal((await t.json()).total);
      setSpend((await s.json()).total_spend);
      setVendors(await v.json());
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Analytics</h2>

      <p>Total Invoices: {total}</p>
      <p>Total Spend: {spend}</p>

      <h3>Vendor Spend</h3>
      {Object.keys(vendors).map((v) => (
        <p key={v}>
          {v}: {vendors[v]}
        </p>
      ))}
    </div>
  );
}