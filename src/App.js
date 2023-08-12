import styles from './global.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './pages/home/Home';
import { Profile } from './pages/profile/Profile';
import { Project } from './pages/project/Project';
import { Contact } from './pages/contact/Contact';
import { Footer } from './components/footer/Footer';
import React from "react";



const App = () => {
  return <div className={styles.App}>
    <Router>
      <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1>Page Not Found 404</h1>} />
        </Routes>
      <Footer />
    </Router>
  </div>
};
export default App;