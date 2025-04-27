# Embedded App - WebSocket Finance Form

🚀 **Full Stack App** built with **React + Vite + TypeScript** frontend, and **Node.js + WebSocket** backend.

This project showcases a basic **Embedded Finance Form** that:

- Sends `Name`, `Surname`, `Income`, and `Outcome` through WebSocket.
- Receives a **personalized balance calculation** from the server.
- Displays the server response beautifully in a styled success box.

---

## ⚙️ Prerequisites

- Node.js v18+ (recommended v20+)
- npm v8+

Check versions:

```bash
node -v
npm -v
```

---

🛠 Setup Instructions

1. Clone the repository
   git clone your-repo-url.git
   cd embedded_app
2. Install dependencies
   npm install

This installs:

- Frontend: react, formik, styled-components, yup, vite
- Backend: express, ws, cors
- Dev Tools: typescript, tsx, concurrently

🚀 How to Run

1. Development Mode (Recommended)
   npm run dev-all

- Frontend available at: http://localhost:5173
- Backend WebSocket server running on: ws://localhost:3001

2. Production Mode (Optional)
   Build server:
   npm run build-server

Start compiled server:
npm run start-server

Start frontend:
npm run dev
