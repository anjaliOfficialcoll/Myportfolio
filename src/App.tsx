import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Login from './components/Login';
import AdminPanel from './components/AdminPanel';
import AllProjects from './components/AllProjects';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAllProjects, setIsAllProjects] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if we're on the admin route or all-projects route
  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/admin') {
      setIsAdmin(true);
      // Check if already authenticated
      const token = localStorage.getItem('adminToken');
      if (token) {
        setIsAuthenticated(true);
      }
    } else if (path === '/all-projects') {
      setIsAllProjects(true);
    }
  }, []);

  const handleLoginSuccess = (token: string) => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsAuthenticated(false);
    window.location.href = '/';
  };

  // Admin routes
  if (isAdmin) {
    if (!isAuthenticated) {
      return <Login onLoginSuccess={handleLoginSuccess} />;
    }
    return <AdminPanel onLogout={handleLogout} />;
  }

  // All Projects page
  if (isAllProjects) {
    return <AllProjects />;
  }

  // Main portfolio
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;