import React, { useState, useEffect } from "react";
import style from "./About.module.css";

import about1 from "../../assets/about1.webp";
import about2 from "../../assets/about2.webp";
import Title from "../Title/Title";
import img from "../../assets/banner.png";
import Loader from "../Loader/Loader";

function About() {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 900);
  }, []);

  return (
    <>
      {loader ? (
        <>
          <Title
            title="#KnowUs"
            subTitle="By this way you know about us!"
            backgroundImage={img}
          />
          <div className={style.about_container}>
            <div className={style.about}>
              <div className={style.about_right}>
                <img src={about2} alt="About Us" />
              </div>
              <div className={style.about_left}>
                <h2>About Us</h2>
                <h3>Know Your Sound Tool</h3>
                <p>
                  Discover the perfect blend of sound quality, comfort, and
                  style with our premium headphones. Designed for audiophiles
                  and casual listeners alike, our headphones offer an
                  unparalleled listening experience that immerses you in your
                  favorite music, podcasts, or audiobooks. Whether you’re on the
                  go, at the gym, or relaxing at home, our range of headphones
                  is crafted to meet your needs and exceed your expectations.
                </p>
                <p>
                  Built to last, our headphones are constructed from
                  high-quality materials that can withstand everyday wear and
                  tear. Whether you’re commuting, working out, or just enjoying
                  some downtime, you can trust that our headphones will stand up
                  to the challenge. With features like water resistance and
                  reinforced cables, they’re designed to keep up with your
                  active lifestyle.
                </p>
              </div>
            </div>

            <div className={style.about}>
              <div className={style.about_left}>
                <h3>Comfort and Design</h3>
                <p>
                  Comfort meets style in every pair of our headphones. Designed
                  with ergonomic ear cups and adjustable headbands, our
                  headphones provide a perfect fit for prolonged listening
                  sessions. The lightweight materials and breathable padding
                  ensure that you can wear them all day without discomfort.
                  Plus, with a sleek and modern design, our headphones are not
                  just about function—they’re a fashion statement.
                </p>
              </div>
              <div className={style.about_right}>
                <img src={about1} alt="Comfort and Design" />
              </div>
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default About;
