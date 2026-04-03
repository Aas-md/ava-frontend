import { useState } from "react";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("https://ava-backend-production.up.railway.app/invoices/upload-file", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setUrl(data.url);
  };

  return (
    <div>
      <h2>Upload File</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>

      {url && <p>{url}</p>}
    </div>
  );
}