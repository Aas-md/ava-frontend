import { useState } from 'react'
import Upload from "./Upload";
import Invoice from "./Invoice";
import Analytics from "./Analytics";
import './App.css'
import './styles.css'

export default function App() {
  const [page, setPage] = useState("upload");
  
  return (
    <div className="container">
      <h1>Invoice App</h1>

      <button onClick={() => setPage("upload")}>Upload</button>
      <button onClick={() => setPage("invoice")}>Invoice</button>
      <button onClick={() => setPage("analytics")}>Analytics</button>

      {page === "upload" && <Upload />}
      {page === "invoice" && <Invoice />}
      {page === "analytics" && <Analytics />}
    </div>
  );
}