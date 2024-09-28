import React from "react";
import style from "./Footer.module.css";
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaGooglePlus } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";

function Footer() {
  return (
    <div className={style.footer_container}>
      <div className={style.footer}>
        <div className={style.footer_content}>
          <MdFacebook />
          <FaInstagram />
          <AiFillTwitterCircle />
          <FaGooglePlus />
          <SiYoutubemusic />
        </div>
        <div className={style.footer_item}>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <li>Our Team</li>
          </ul>
        </div>
        <div className={style.footer_para}>
          <p>Copyright © 2024 Designed by RAJA</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
