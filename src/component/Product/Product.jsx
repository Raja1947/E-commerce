import React, { useState, useEffect } from "react";
import style from "./Product.module.css";
import data from "./productData";
import { FaAngleDown } from "react-icons/fa";
import Title from "../Title/Title";
import img from "../../assets/b21.jpg";
import Loader from "../Loader/Loader";
import { useOutletContext } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Product() {
  const [showDropDown, setShowDropDown] = useState(false);
  const [product, setProduct] = useState(data);
  const [loader, setLoader] = useState(false);
  const { addCart } = useOutletContext();

  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 900);
  }, []);

  const dropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const handleSort = (sortType) => {
    let sortedProducts = [...product];
    if (sortType === "lowToHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortType === "highToLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortType === "aToZ") {
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortType === "zToA") {
      sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
    }

    setProduct(sortedProducts);
    setShowDropDown(false);
  };

  const notify = (item) => {
    addCart(item);
    toast.success("Added item successfully!", {
      autoClose: 2000,
    });
  };

  return (
    <>
      {loader ? (
        <>
          <Title
            title="#stayhome"
            subTitle="Save more with coupons up to 70% off!"
            backgroundImage={img}
          />
          <div className={style.product_container}>
            <div className={style.product_heading}>
              <h1>New Segments</h1>
              <div className={style.sortSection}>
                <p onClick={dropDown}>
                  Sort By <FaAngleDown />
                </p>
                {showDropDown && (
                  <div className={style.dropdown}>
                    <ul>
                      <li onClick={() => handleSort("lowToHigh")}>
                        Price: Low to High
                      </li>
                      <li onClick={() => handleSort("highToLow")}>
                        Price: High to Low
                      </li>
                      <li onClick={() => handleSort("aToZ")}>
                        Alphabetically: A to Z
                      </li>
                      <li onClick={() => handleSort("zToA")}>
                        Alphabetically: Z to A
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className={style.product}>
              {product &&
                product.map((item) => (
                  <div className={style.product_details} key={item.id}>
                    <img src={item.src} alt={item.title} />
                    <div className={style.details}>
                      <h6>{item.title}</h6>
                      <p>{item.desc}</p>
                      <div className={style.addCart}>
                        <p>₹ {item.price}</p>
                        <button onClick={() => notify(item)}>
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}

      <ToastContainer />
    </>
  );
}

export default Product;
