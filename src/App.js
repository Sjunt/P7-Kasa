import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";
import Housing from "./pages/Housing/Housing";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/housing/:id" element={<Housing />} />
      </Routes>
    </div>
  );
}


export default App;
