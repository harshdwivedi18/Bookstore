import React from "react";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Market from "./Components/Market";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import FreeCard from "./Components/FreeCard";
import Signup from "./Components/Signup";
import Login from "./Components/Login";

function App() {
  return (
    <div className=" flex justify-center items-center bg-white">
      <div className="dark:bg-slate-900  max-w-[1550px] w-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/market" element={<Market />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
