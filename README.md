# Anjali Kumari — Portfolio

A modern, dynamic personal portfolio website with a full-stack admin panel for managing projects. Built with React, TypeScript, Node.js, Express, and MongoDB.

🔗 **Live:** [myportfolio-anjali.vercel.app](https://myportfolio-anjali.vercel.app) &nbsp;|&nbsp; **Repo:** [github.com/anjaliOfficialcoll/Myportfolio](https://github.com/anjaliOfficialcoll/Myportfolio)

## Features

- 🎨 Modern and responsive design with smooth animations
- 🔐 Secure JWT-based admin authentication
- ✏️ Add, edit, and delete projects from the admin panel
- 🚀 Real-time updates without redeployment
- 📱 Mobile-friendly interface
- ⚡ Fast and optimized with Vite
- 🛡️ Fallback static data if backend is unavailable

## Tech Stack

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Vite

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Bcrypt for password hashing

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB Atlas account (or local MongoDB)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/anjaliOfficialcoll/Myportfolio.git
   cd Myportfolio
   ```

2. **Install Frontend Dependencies**
   ```bash
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd server
   npm install
   cd ..
   ```

4. **Set up Environment Variables**

   **Frontend (.env.local):**
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

   **Backend (server/.env):**
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_very_secure_random_secret_key_here
   ADMIN_EMAIL=admin@portfolio.com
   ADMIN_PASSWORD=admin123
   ```

   Replace the MongoDB URI with your actual connection string from MongoDB Atlas.

5. **Create Initial Admin Account**

   After starting the server, make a POST request to create the admin account:
   ```bash
   curl -X POST http://localhost:5000/api/auth/create-admin \
     -H "Content-Type: application/json" \
     -d '{
       "email": "admin@portfolio.com",
       "password": "your_secure_password"
     }'
   ```

   Or use a tool like Postman/Insomnia to make this request.

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd server
   npm run dev
   ```
   The server will run on http://localhost:5000

2. **Start the Frontend Development Server** (in a new terminal)
   ```bash
   npm run dev
   ```
   The frontend will run on http://localhost:5173

3. **Access the Application**
   - Portfolio: http://localhost:5173
   - Admin Panel: http://localhost:5173/admin

## Usage

### Admin Panel

1. Navigate to `/admin` route
2. Login with your admin credentials
3. Add, edit, or delete projects
4. Changes will appear immediately on the main portfolio

### Adding Projects

In the admin panel, you can add projects with:
- Title
- Description
- Image URL (use image hosting services like Imgur, Cloudinary, etc.)
- Technologies (comma-separated)
- GitHub URL
- Live Demo URL (optional)
- Featured status
- Display order

## Deployment

### Frontend (Netlify/Vercel)

1. Build the frontend:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to Netlify or Vercel

3. Set environment variable:
   ```
   VITE_API_URL=https://your-backend-url.com/api
   ```

4. Configure rewrites for SPA routing:
   
   **Vercel (vercel.json — already included):**
   ```json
   {
     "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
   }
   ```

   **Netlify (netlify.toml — already included):**
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"

   [[redirects]]
     from   = "/*"
     to     = "/index.html"
     status = 200
   ```

### Backend (Render/Railway/Heroku)

1. Push your `server` folder to a Git repository

2. Connect to your hosting platform

3. Set environment variables in the hosting dashboard

4. Deploy the backend

5. Update the frontend's `VITE_API_URL` to point to your deployed backend

## Security Notes

- Change the default admin password immediately
- Use a strong JWT_SECRET
- Never commit `.env` files to version control
- Use HTTPS in production
- Consider adding rate limiting for API endpoints

## Future Enhancements

- [ ] Image upload functionality
- [ ] Blog section
- [ ] Contact form with email integration
- [ ] Analytics dashboard
- [ ] Project categories/tags
- [ ] Dark mode support

## License

MIT

## Contact

Anjali Kumari — [anjaliOfficialcoll](https://github.com/anjaliOfficialcoll)  
Project: [github.com/anjaliOfficialcoll/Myportfolio](https://github.com/anjaliOfficialcoll/Myportfolio)
