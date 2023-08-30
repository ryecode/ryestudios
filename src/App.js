import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { React, useState, createContext } from "react";
import { AnimatedRoutes } from "./components/AnimatedRoutes";

export const AppContext = createContext();

const App = () => {
  const [userName, setUserName] = useState("");

  return (
    <div>
      <AppContext.Provider value={{ userName, setUserName }}>
        <Router>
          <Navbar />
          <AnimatedRoutes />
          <Footer />
        </Router>
      </AppContext.Provider>
    </div>
  );
};
export default App;
