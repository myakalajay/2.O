# Next.js 15 + React Bootstrap Dashboard

This is a full-featured dashboard template built with:

- ✅ Next.js 15 (Pages Router)
- ✅ MongoDB + Prisma ORM
- ✅ React Bootstrap for UI
- ✅ User authentication with email verification
- ✅ Role-based dashboard
- ✅ Chart.js integration

## 📦 Setup

```bash
git clone https://github.com/your-username/nextjs-dashboard-template.git
cd nextjs-dashboard-template
npm install
```

## 🛠️ Environment Variables

Create a `.env.local` file and include:

```
DATABASE_URL=mongodb+srv://<user>:<pass>@cluster.mongodb.net/mydb?retryWrites=true
EMAIL_FROM=youremail@gmail.com
EMAIL_PASS=yourpassword
NEXTAUTH_URL=http://localhost:3000
```

## 🚀 Run Project

```bash
npx prisma generate
npx prisma db push
npm run dev
```

## 🔐 Auth Flow

- Register → Email sent with verification token
- Verify → Login enabled
- Middleware guards dashboard routes

## 🧠 Features

- Auth (Register/Login/Logout)
- Email verification (via Gmail SMTP)
- Dashboard with charts (Chart.js)
- Role-based access
- Clean file structure