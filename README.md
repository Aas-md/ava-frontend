# 🚀 Invoice Extraction AI - Frontend

## 📌 Overview
This is the frontend application for the Invoice Extraction AI system. It allows users to upload invoice files (JPG, PNG, PDF), view extracted data, and analyze invoice insights through a dashboard.

---

## 🛠️ Tech Stack
- React.js
- Axios
- Tailwind CSS / CSS Modules
- Chart.js / Recharts (for analytics)

---

## ✨ Features
- 📤 Upload single or multiple invoice files
- 📄 Preview uploaded invoices
- 📊 Dashboard with analytics:
  - Total spend by vendor
  - Monthly spend trends
  - Invoice count
  - Currency-wise totals
- 🔍 View extracted structured invoice data
- ⚠️ Error handling for failed uploads

---

## 📂 Project Structure
```
src/
 ├── components/
 ├── pages/
 ├── services/
 ├── utils/
 └── App.js
```

---

## ⚙️ Setup Instructions

1. Clone the repository
```bash
git clone <repo-url>
cd frontend
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm start
```

---

## 🔌 API Integration
Frontend communicates with backend APIs for:
- File upload
- Fetching extracted invoice data
- Fetching analytics

Example:
```js
POST /upload
GET /invoices
GET /analytics
```

---

## 🧠 Key Design Decisions
- Component-based architecture for reusability
- Separate service layer for API calls
- Responsive UI for better UX

---

## ⚠️ Assumptions & Limitations
- Backend handles all AI/ML processing
- Limited validation on frontend
- UI optimized for modern browsers only

---

## 🚀 Future Improvements
- Drag & drop file upload
- Better error visualization
- Real-time processing updates
- Authentication system

---

## 📸 Demo
Include screenshots or demo video link here.

---

## 👨‍💻 Author
Developed as part of assignment submission.
