# Quick Start Guide - Dynamic Portfolio

This guide will help you get your dynamic portfolio up and running quickly.

## 📋 Prerequisites Checklist

- [ ] Node.js installed (v16 or higher)
- [ ] MongoDB Atlas account created (free tier is fine)
- [ ] Git installed (optional, for version control)

## 🚀 Step-by-Step Setup

### Step 1: Install Dependencies

Run the PowerShell setup script:
```powershell
.\setup.ps1
```

Or manually install:
```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
cd ..
```

### Step 2: Set Up MongoDB

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create a database user
4. Get your connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/`)
5. Whitelist your IP address (or use 0.0.0.0/0 for all IPs during development)

### Step 3: Configure Environment Variables

**Backend Configuration (server/.env):**
```env
PORT=5000
MONGODB_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
JWT_SECRET=your_very_long_random_secret_key_min_32_characters
ADMIN_EMAIL=admin@portfolio.com
ADMIN_PASSWORD=admin123
```

**Frontend Configuration (.env.local):**
```env
VITE_API_URL=http://localhost:5000/api
```

### Step 4: Create Admin Account

1. Start the backend server:
   ```bash
   cd server
   npm run dev
   ```

2. In a new terminal, create the admin account using PowerShell:
   ```powershell
   $body = @{
       email = "admin@portfolio.com"
       password = "YourSecurePassword123!"
   } | ConvertTo-Json

   Invoke-RestMethod -Uri "http://localhost:5000/api/auth/create-admin" `
     -Method Post `
     -Body $body `
     -ContentType "application/json"
   ```

   Or using curl (in Git Bash or WSL):
   ```bash
   curl -X POST http://localhost:5000/api/auth/create-admin \
     -H "Content-Type: application/json" \
     -d '{"email":"admin@portfolio.com","password":"YourSecurePassword123!"}'
   ```

### Step 5: Start the Application

1. **Backend** (keep this running):
   ```bash
   cd server
   npm run dev
   ```

2. **Frontend** (open a new terminal):
   ```bash
   npm run dev
   ```

### Step 6: Access Your Portfolio

- **Main Portfolio**: http://localhost:5173
- **Admin Panel**: http://localhost:5173/admin

Login with:
- Email: `admin@portfolio.com`
- Password: Your chosen password

## 🎨 Adding Your First Project

1. Go to http://localhost:5173/admin
2. Login with your credentials
3. Click "Add New Project"
4. Fill in the details:
   - **Title**: Your project name
   - **Description**: Brief description
   - **Image URL**: Use an image hosting service or direct URL
   - **Technologies**: Comma-separated (e.g., React, Node.js, MongoDB)
   - **GitHub URL**: Your repository URL
   - **Live URL**: Deployed project URL (optional)
   - **Featured**: Check if you want to highlight this project
   - **Order**: Number for sorting (lower numbers appear first)
5. Click "Create Project"

## 📸 Image Hosting Options

Since we don't have image upload yet, use these services:

- [Imgur](https://imgur.com) - Free, no account needed
- [Cloudinary](https://cloudinary.com) - Free tier available
- [imgbb](https://imgbb.com) - Free, simple
- Your own hosting/CDN

## 🚢 Deployment Guide

### Frontend (Netlify)

1. Build your project:
   ```bash
   npm run build
   ```

2. Go to [Netlify](https://netlify.com)
3. Drag and drop the `dist` folder
4. Set environment variable:
   - Key: `VITE_API_URL`
   - Value: Your backend URL (e.g., `https://your-backend.onrender.com/api`)
5. Add `public/_redirects` file (already created) for SPA routing

### Backend (Render)

1. Create a new Web Service on [Render](https://render.com)
2. Connect your GitHub repository (push server folder separately)
3. Set build command: `npm install`
4. Set start command: `npm start`
5. Add environment variables from your `.env` file
6. Deploy!

### Frontend (Vercel - Alternative)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Set environment variables in Vercel dashboard

## 🔧 Troubleshooting

### "Failed to fetch projects"
- Check if backend is running
- Verify VITE_API_URL in .env.local
- Check browser console for CORS errors

### "Invalid credentials" on login
- Ensure you created the admin account
- Check email and password match

### MongoDB connection issues
- Verify MongoDB URI is correct
- Check IP whitelist in MongoDB Atlas
- Ensure network allows MongoDB connections

### Backend won't start
- Check if port 5000 is available
- Verify all environment variables are set
- Check MongoDB connection string format

## 📝 Common Commands

```bash
# Start backend in development
cd server && npm run dev

# Start frontend in development
npm run dev

# Build frontend for production
npm run build

# Preview production build locally
npm run preview

# Install all dependencies
npm install && cd server && npm install
```

## 🔐 Security Recommendations

1. **Change default password** immediately after first login
2. Use a **strong JWT_SECRET** (at least 32 random characters)
3. Never commit `.env` files to GitHub
4. Use **HTTPS** in production
5. Consider adding **rate limiting** for API endpoints
6. Use **environment-specific** passwords (different for dev/prod)

## 📚 Next Steps

- [ ] Add your existing projects to the admin panel
- [ ] Customize the portfolio design and colors
- [ ] Add your personal information and links
- [ ] Set up deployment to a hosting platform
- [ ] Add custom domain (optional)
- [ ] Set up analytics (Google Analytics, etc.)

## 💡 Tips

- Use high-quality project images (recommended: 1200x630px)
- Write clear, concise project descriptions
- Keep technology tags consistent
- Use the "Featured" flag for your best 2-3 projects
- Order projects by importance or recency

## 🆘 Getting Help

If you encounter issues:
1. Check the troubleshooting section above
2. Review the main README.md
3. Check browser console for errors
4. Check server logs for backend errors
5. Ensure all environment variables are set correctly

---

**Congratulations! 🎉** Your dynamic portfolio is now ready. You can add/edit projects anytime without touching code or redeploying!
