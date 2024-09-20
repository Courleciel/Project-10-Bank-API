import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import SignIn from './pages/SignIn';
import User from './pages/User'
import MainNav from './components/MainNav';
import Footer from './components/Footer';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <MainNav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  </React.StrictMode>
);
