import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

import "./styles/index.css";

export default function App() {
  return (
    <>
    <Header />
    <Navbar />
    <Outlet />
    <Footer />
    </>
  );
}