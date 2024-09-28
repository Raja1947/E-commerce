import React, { useState, useEffect } from "react";
import style from "./Hero.module.css";
import Headphone from "../Headphone Zone/Headphone";
import Loader from "../Loader/Loader";
import { useNavigate } from "react-router-dom";
import data from "../Product/productData";

function Hero() {
  const navigate = useNavigate();
  const handleBuyNow = () => {
    navigate('product');
    window.scrollTo(0, 0); 
  };
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 1000);
  }, []);

  return (
    <>
      {loader ? (
        <>
          <div className={style.hero_container}>
            <div className={style.hero}>
              <h1>Grab Upto 50% Off On Selected Headphone</h1>
              <button onClick={handleBuyNow}>Buy Now</button>
            </div>
          </div>

          <Headphone />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Hero;
