import React, { useEffect, useRef, useState } from "react";
import "./home.css";
import HomeImage from "../Assets/home-image.jpg";
import { Link } from "react-router-dom";
import { BiSolidHomeHeart } from "react-icons/bi";
import { BiSolidHome } from "react-icons/bi";
import { BiSolidBank } from "react-icons/bi";
import RealState01 from "../Assets/RealSate1.jpg";
import RealState02 from "../Assets/RealSate2.jpg";
import RealState03 from "../Assets/RealSate3.jpg";
import { LiaBedSolid } from "react-icons/lia";
import { LiaBathSolid } from "react-icons/lia";
import { GrStatusPlaceholder } from "react-icons/gr";
import AboutUs from "./AboutUs";
import FindPromo from "./FindPromo";
import Commit from "./Commit";
import Team from "./Team";
import Footer from "./Footer";


const Home = () => {
  const [isLeftBoxVisible, setIsLeftBoxVisible] = useState(false);
  const [isLeftBoxVisible1, setIsLeftBoxVisible1] = useState(false);
  const leftBoxRef = useRef(null);
  const propertyref = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (leftBoxRef.current) {
        const triggerPosition = leftBoxRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (triggerPosition - windowHeight <= 0 && !isLeftBoxVisible) {
          setIsLeftBoxVisible(true);
        }
      }
    };
    

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLeftBoxVisible]);

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
    <div className="home-main-box-out">
      <div className="home-main-box">
        <div className="home-title">
          <span className="home-white-title">YOUR TRUSTED</span>
          <span className="home-orange-title">REAL STATE</span>
          <span className="home-white-title">PARTNER</span>
          <p>
            Welcome to our premier real estate company website, your gateway to
            the world of extraordinary properties and exceptional service. We
            are dedicated to helping you discover your dream home, whether it's
            a cozy suburban retreat or a luxurious urban oasis.{" "}
          </p>
          <span className="contact-now-button">
            <Link to="/contactus" className="contact-now-button-link">
              Contact Now
            </Link>
          </span>
        </div>
        <div className="home-picture">
          <img src={HomeImage} alt="profileImage" />
        </div>
      </div>
      <div className="book-main-box">
        <div className="book-descr">
          <h1 style={{ textAlign: "center" }}>
            <b>
              Welcome to our real estate company, where dreams become addresses!
            </b>
          </h1>
          <span className="book-now-button">
            <Link to="/contactus" className="contact-now-button-link">
              Book Now
            </Link>
          </span>
        </div>
      </div>
      <div className="property-box">
        <div className="property-box-in">
          <div
            className="offer-property"
            id={
              isLeftBoxVisible
                ? "left-offer-property"
                : "left-offer-property-none"
            }
            ref={leftBoxRef}
          >
            <section className="property-icon-box">
              <BiSolidHomeHeart className="property-icons" />
            </section>
            <h2>Offer Property</h2>
            <p className="property-descri">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              dicta ea incidunt placeat quisquam? Perspiciatis minus, quas ipsa
              dolorem officiis quisquam aliquid. Quidem aspernatur eius hic
              cupiditate reprehenderit ea delectus.
            </p>
            <p className="learn-more-link">
              <span>Learn More</span>
            </p>
          </div>
          <div className="offer-property" id="moddle-offer-property">
            <section className="property-icon-box">
              <BiSolidBank className="property-icons" />
            </section>
            <h2>Offer Property</h2>
            <p className="property-descri">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              dicta ea incidunt placeat quisquam? Perspiciatis minus, quas ipsa
              dolorem officiis quisquam aliquid. Quidem aspernatur eius hic
              cupiditate reprehenderit ea delectus.
            </p>
            <p className="learn-more-link" id="middle-learn-more">
              <span>Learn More</span>
            </p>
          </div>
          <div
            className="offer-property"
            id={
              isLeftBoxVisible
                ? "right-offer-property"
                : "left-offer-property-none"
            }
            ref={leftBoxRef}
          >
            <section className="property-icon-box">
              <BiSolidHome className="property-icons" />
            </section>
            <h2>Offer Property</h2>
            <p className="property-descri">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              dicta ea incidunt placeat quisquam? Perspiciatis minus, quas ipsa
              dolorem officiis quisquam aliquid. Quidem aspernatur eius hic
              cupiditate reprehenderit ea delectus.
            </p>
            <div className="learn-more-link">
              <span>Learn More</span>{" "}
            </div>
          </div>
        </div>
      </div>
      <div
        className="property-feature-top"
        id={
          isLeftBoxVisible1
            ? "property-feature-top"
            : "left-offer-property-none"
        }
        ref={propertyref}
      >
        <h2>Feature Properies</h2>

        <div className="property-feature-top-in">
          <div className="property-feature-list">
            <li>
              <div className="realstate-sell-display">
                <img src={RealState01} alt="RealState01" />
                <p>For Sale</p>
                <h2>Bungalow,300 C2</h2>
                <h4>Addis abeba, Ethiopia</h4>
                <h2>$120,000,000</h2>
                <div className="property-data-lists">
                  <li>
                    <LiaBedSolid /> <span>6</span>
                  </li>
                  <li>
                    <LiaBathSolid /> <span>6</span>
                  </li>
                  <li>
                    <GrStatusPlaceholder /> <span>500 sqrt</span>
                  </li>
                </div>
              </div>
            </li>
          </div>
          <div className="property-feature-list">
            <li>
              <div className="realstate-sell-display">
                <img src={RealState02} alt="RealState01" />
                <p>For Sale</p>
                <h2>Bungalow,300 C2</h2>
                <h4>Addis abeba, Ethiopia</h4>
                <h2>$120,000,000</h2>
                <div className="property-data-lists">
                  <li>
                    <LiaBedSolid /> <span>6</span>
                  </li>
                  <li>
                    <LiaBathSolid /> <span>6</span>
                  </li>
                  <li>
                    <GrStatusPlaceholder /> <span>500 sqrt</span>
                  </li>
                </div>
              </div>
            </li>
          </div>
          <div className="property-feature-list">
            <li>
              <div className="realstate-sell-display">
                <img src={RealState03} alt="RealState01" />
                <p>For Sale</p>
                <h2>Bungalow,300 C2</h2>
                <h4>Addis abeba, Ethiopia</h4>
                <h2>$120,000,000</h2>
                <div className="property-data-lists">
                  <li>
                    <LiaBedSolid /> <span>6</span>
                  </li>
                  <li>
                    <LiaBathSolid /> <span>6</span>
                  </li>
                  <li>
                    <GrStatusPlaceholder /> <span>500 sqrt</span>
                  </li>
                </div>
              </div>
            </li>
          </div>
        </div>
      </div>
      <AboutUs />
      <FindPromo/>
      <Commit/>
      <Team/>
      <Footer/>
    </div>
  );
};

export default Home;
