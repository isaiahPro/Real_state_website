import React, { useEffect, useRef, useState } from "react";
import "./aboutus.css";
import ProfileTop from "../Assets/About-top.jpg";
import ProfileButtom from "../Assets/About-bottom.jpg";
import { PiCertificate } from "react-icons/pi";
import { AiOutlineCheck } from "react-icons/ai";
const AboutUs = () => {
  const [isLeftBoxVisible1, setIsLeftBoxVisible1] = useState(false);
  const propertyref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (propertyref.current) {
        const triggerPosition = propertyref.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (triggerPosition - windowHeight <= 0 && !isLeftBoxVisible1) {
          setIsLeftBoxVisible1(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLeftBoxVisible1]);

  return (
    <div className="Aboutus-main-container">
      <div
        className="about-left-main"
        id={isLeftBoxVisible1 ? "about-left-main" : "about-left-main-none"}
        ref={propertyref}
      >
        <div className="about-left-top">
          <img src={ProfileTop} alt="profiletop" />
        </div>
        <div className="about-left-bottom">
          <div className="about-left-botton-left">
            <img src={ProfileButtom} alt="profilebottom" />
          </div>
          <div className="about-left-botton-right">
            <PiCertificate id="certificate-icons" /> <br />
            CIPS Certification By National Association of realtor
          </div>
        </div>
      </div>
      <div className="about-right-main">
        <span className="about-right-main-title">About Us</span>
        <h1 className="about-right-main-title-in">
          {" "}
          <AiOutlineCheck id="check-icons" /> OUR VISION AND VALUES
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          obcaecati quidem optio, fuga provident nam aspernatur ipsum
          distinctio, delectus asperiores vero molestiae autem, esse cum dolores
          qui veritatis at nisi. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Quisquam, veritatis quas? Voluptas sint eaque qui
          cum odit aspernatur impedit vel veniam adipisci? Officiis, nam
          dignissimos vitae vel corrupti doloremque temporibus!
        </p>
        <h1 className="about-right-main-title-in">
          {" "}
          <AiOutlineCheck id="check-icons" /> EXCELLENCE IN REAL ESTATE
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          obcaecati quidem optio, fuga provident nam aspernatur ipsum
          distinctio, delectus asperiores vero molestiae autem, esse cum dolores
          qui veritatis at nisi. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Quisquam, veritatis quas? Voluptas sint eaque qui
          cum odit aspernatur impedit vel veniam adipisci? Officiis, nam
          dignissimos vitae vel corrupti doloremque temporibus!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
