import React, { useEffect, useState } from "react";
import style from "./Blog.module.css";
import data from "./Blog"; 
import Title from "../Title/Title";
import img from '../../assets/b19.jpg';
import Loader from "../Loader/Loader";

function Blog() {
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
            title="#readmore"
            subTitle="Read all case studies about our product!"
            backgroundImage={img}
          />
          <div className={style.blog_container}>
            <div className={style.blog}>
              {data &&
                data.map((item) => (
                  <div key={item.id} className={style.blog_content}>
                    <img src={item.src} alt={item.title} />
                    <p className={style.blog_title}>{item.title}</p>
                    <h4>{item.description}</h4>
                    <p className={style.date}>{item.date}</p>
                  </div>
                ))}
            </div>
          </div>
        </>
      ) : (
          <Loader/>
)}
    </>
  );
}

export default Blog;
