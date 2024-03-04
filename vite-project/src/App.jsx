import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Projects from "./pages/projects";
import Footer from "./components/Footer";
import Resume from "./pages/resume";
import { Outlet } from "react-router-dom";

// import "./styles/App.css";

export default function App() {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  );
}