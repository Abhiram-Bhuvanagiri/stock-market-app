# 📈 Stock Market App

A modern, real‑time stock market tracking application built using **Next.js**, **MongoDB Atlas**, **Finnhub API**, and **Better Auth**. This project provides a smooth user experience for exploring market data, managing watchlists, and signing in securely.

---

## 🚀 Live Demo

🔗 **Production URL:** https://stock-market-app-six.vercel.app/sign-in

---

## 💡 Features

### **📊 Real-Time Market Data**

* Fetches stock prices, charts, and market information from **Finnhub API**.
* Fully optimized for fast loading and smooth UI.

### **📝 Watchlist Management**

* Add, remove, and manage your favorite stocks.
* Stored in **MongoDB Atlas** using real database collections.

### **🔐 Authentication**

* Secure sign-in and sign-up using **Better Auth**.
* JWT/session based flow.
* Fully integrated with environment-specific secure secrets.

### **🌙 Modern UI/UX**

* Clean, responsive UI.
* Fully mobile-friendly.

### **☁️ Production Deployment**

* Deployed on **Vercel** with optimized Next.js build.
* Connected to cloud-hosted MongoDB Atlas.

---

## 🛠 Tech Stack

### **Frontend & Backend**

* Next.js 15
* React
* Tailwind CSS
* Server Actions
* Turbopack

### **APIs & Services**

* **Finnhub API** (real stock market data)
* **MongoDB Atlas** (database)
* **Better Auth** (authentication)

### **Dev Tools**

* Git + GitHub
* Vercel
* Node.js

---

## 📁 Project Structure

```
project/
│
├── app/                     # All Next.js routes (Home, Sign In, Dashboard)
├── components/              # UI components
├── lib/                     # DB connection, API helpers
├── public/                  # Static assets
├── styles/                  # Global styles
├── .env                     # Environment variables (not committed)
└── package.json
```

---

## 🔧 Setup Instructions

Follow these steps to run the project locally:

### **1️⃣ Clone the Repo**

```
git clone https://github.com/Abhiram-Bhuvanagiri/stock-market-app.git
cd stock-market-app
```

### **2️⃣ Install Dependencies**

```
npm install
```

### **3️⃣ Create a `.env` File**

```
NODE_ENV=development
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_FINNHUB_API_KEY=your_finnhub_api_key
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_generated_secret
BETTER_AUTH_URL=http://localhost:3000
```

> **Important:** Do not upload your `.env` file.

### **4️⃣ Run Dev Server**

```
npm run dev
```

Open:
[http://localhost:3000](http://localhost:3000)

---

## 🚀 Deployment

This application is deployed using **Vercel**.

### Steps:

1. Create a Vercel account.
2. Import your GitHub repo.
3. Add environment variables in Vercel dashboard.
4. Deploy.
5. Update `BETTER_AUTH_URL` to your production domain.
6. Redeploy.

---

## 🧪 Future Enhancements (Optional)

* Dark/Light Theme
* Advanced stock charting
* Portfolio tracking
* AI insights using Gemini API

---

## 👨‍💻 Author

**Abhiram Bhuvanagiri**
MERN‑stack developer passionate about modern web apps, APIs, and cloud deployments.

---

## ⭐ Show Support

If you liked this project, consider giving it a ⭐ on GitHub!
