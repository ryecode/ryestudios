import styles from './global.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';
import React from "react";
import { AnimatedRoutes } from './components/AnimatedRoutes';



const App = () => {



  return <div className={styles.App}>
    <Router>
      <Navbar />
        <AnimatedRoutes />
      <Footer />
    </Router>
  </div>
};
export default App;