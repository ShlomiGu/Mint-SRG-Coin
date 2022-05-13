import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidbar";
import Home from "./pages";

const App = () => {

  const [isOpen, setIsOpen] = useState(false);
      
    const toggle = () => {
        setIsOpen(!isOpen);
    };

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Routes>
        <Route path="/" element={<Home />} exact />
      </Routes>
    </Router>
  );
}

export default App;
