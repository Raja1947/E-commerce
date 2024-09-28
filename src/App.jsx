import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/NavBar/Navbar";
import data from "./component/Product/productData";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const addCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };
  return (
    <>
      <Navbar />
      <Outlet context={{ cart, addCart }} />
      <Footer />
    </>
  );
}

export default App;
