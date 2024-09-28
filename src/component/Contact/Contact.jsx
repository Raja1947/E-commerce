import React, { useState, useEffect } from "react";
import style from "./Contact.module.css";
import { SiGooglemessages } from "react-icons/si";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import Title from "../Title/Title";
import img from '../../assets/banner.png';
import Loader from "../Loader/Loader"; 

function Contact() {
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
            title="#let's_talk"
            subTitle="LEAVE A MESSAGE. We love to hear from you!"
            backgroundImage={img}
          />
          <div className={style.contact_container}>
            <div className={style.contact_form}>
              <div className={style.contact_col}>
                <h3>
                  Send us a message
                  <SiGooglemessages className={style.icon} />
                </h3>
                <p>
                  Feel free to reach out through contact form or find our contact
                  information below. Your feedback, question, and suggestion are
                  important to us as we strive to provide exceptional service to our
                  university community.
                </p>
                <ul>
                  <li>
                    <BiSolidMessageAltDetail className={style.icon} />
                    Contact@gmail.com
                  </li>
                  <li>
                    <FaPhoneVolume className={style.icon} />
                    +91 78253-08985
                  </li>
                  <li>
                    <IoLocationSharp className={style.icon} />
                    423/1 New Patel Nagar <br />
                    Delhi, India
                  </li>
                </ul>
              </div>
              <div className={style.contact_col}>
                <form>
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    required
                  />
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter Your Number"
                    required
                  />
                  <label>Write Your message here</label>
                  <textarea
                    name="message"
                    rows="6"
                    placeholder="Enter Your Message "
                    required
                  ></textarea>
                  <button type="submit" className="btn dark-btn">
                    Submit Now
                  </button>
                </form>
              </div>
            </div>
            <div className={style.contact_map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26410.075981649592!2d74.61421394999999!3d25.3211031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1725603815646!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location"
              ></iframe>
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Contact;
