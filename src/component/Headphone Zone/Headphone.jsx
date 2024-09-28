import React from "react";
import style from "./Headphone.module.css";
import img1 from "../../assets/img4.webp";
import img2 from "../../assets/img5.jpg";
import img3 from "../../assets/img6.jpg";
import { useNavigate } from "react-router-dom";

function Headphone() {
  const navigate = useNavigate();
  const handleLearnMoreClick = () => {
    navigate("about");
    window.scrollTo(0, 0);
  };
  return (
    <div className={style.headphone_container}>
      <div className={style.headphone_title}>
        <h1>The Finest Sound and Craftsmanship</h1>
        <p>
          Introduce yourself to a world of immersive sound and unrivalled
          design, where every detail is thoughtfully considered to enhance your
          listening experience
        </p>
      </div>
      <div className={style.headphone_image}>
        <div className={style.headphone_main}>
          <img src={img1} />
          <h2>SOUND</h2>
        </div>
        <div className={style.headphone_main}>
          <img src={img2} />
          <h2>MATERIALS</h2>
        </div>
        <div className={style.headphone_main}>
          <img src={img3} />
          <h2>DESIGN</h2>
        </div>
      </div>
      <div className={style.headphone_about}>
        <p>
          We bring an uncompromising approach to the design and performance of
          our products
        </p>
        <button onClick={handleLearnMoreClick}>Learn More</button>
      </div>
    </div>
  );
}

export default Headphone;
