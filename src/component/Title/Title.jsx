import React from "react";
import style from "./Title.module.css";

function Title({ title, subTitle, backgroundImage }) {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover", 
    backgroundPosition: "center",
  };
  return (
    <div className={style.title} style={backgroundStyle}>
      <h1>{title}</h1>
      <h6>{subTitle}</h6>
    </div>
  );
}

export default Title;
