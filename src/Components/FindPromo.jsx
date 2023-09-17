import React, { useEffect, useRef, useState } from "react";
import "./findproms.css";
import { BsPersonLinesFill } from "react-icons/bs";
import { GrPersonalComputer } from "react-icons/gr";
import { TbHomeSearch } from "react-icons/tb";
import Prom from "../Assets/find-prom.jpg";

const FindPromo = () => {
  const [isLeftBoxVisible, setIsLeftBoxVisible] = useState(false);

  const [isLeftBoxVisible1, setIsLeftBoxVisible1] = useState(false);
  const [isLeftBoxVisible2, setIsLeftBoxVisible2] = useState(false);
  const propertyref2 = useRef(null);
  const propertyref = useRef(null);

  const propertyref1 = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (propertyref.current) {
        const triggerPosition = propertyref.current.getBoundingClientRect().top;
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
    const handleScroll2 = () => {
      if (propertyref1.current) {
        const triggerPosition =
          propertyref1.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (triggerPosition - windowHeight <= 0 && !isLeftBoxVisible1) {
          setIsLeftBoxVisible1(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll2);
    return () => {
      window.removeEventListener("scroll", handleScroll2);
    };
  }, [isLeftBoxVisible1]);
  useEffect(() => {
    const handleScroll3 = () => {
      if (propertyref2.current) {
        const triggerPosition =
          propertyref2.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (triggerPosition - windowHeight <= 0 && !isLeftBoxVisible2) {
          setIsLeftBoxVisible2(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll3);
    return () => {
      window.removeEventListener("scroll", handleScroll3);
    };
  }, [isLeftBoxVisible2]);
  return (
    <div className="find-proms-main">
      <h1>Find Your Dream Home Today</h1>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
        harum dolore necessitatibus, <br />
        nisi aspernatur natus provident ad tempore dolores id,
      </span>
      <div className="find-proms-box">
        <div className="find-proms-box-main-left">
          <li
            className="find-proms-list"
            id={
              isLeftBoxVisible
                ? "find-proms-box-main-left-scroll"
                : "find-proms-box-main-left"
            }
            ref={propertyref}
          >
            <BsPersonLinesFill id="find-icon" />{" "}
            <span>
              <h2>VIRTUAL TOUR</h2>{" "}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                exercitationem error voluptate omnis ad, est officiis,
              </p>
            </span>
          </li>
          <li
            className="find-proms-list"
            id={isLeftBoxVisible1 ? "find-proms-list" : "find-proms-list-none"}
            ref={propertyref1}
          >
            <GrPersonalComputer id="find-icon" />
            <span>
              <h2>VIRTUAL TOUR</h2>{" "}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                exercitationem error voluptate omnis ad, est officiis,
              </p>
            </span>
          </li>
          <li className="find-proms-list" 
              id={isLeftBoxVisible2 ? "find-proms-list-two" : "find-proms-list-none"}
              ref={propertyref2}>
            <TbHomeSearch id="find-icon" />
            <span>
              <h2>VIRTUAL TOUR</h2>{" "}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                exercitationem error voluptate omnis ad, est officiis,
              </p>
            </span>
          </li>
        </div>
        <div className="find-proms-box-main-right">
          <img src={Prom} alt="Prom picure" />
        </div>
      </div>
    </div>
  );
};

export default FindPromo;
