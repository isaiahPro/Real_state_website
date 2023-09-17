import React, { useEffect, useRef, useState } from "react";
import "./commit.css";
import CommitProfile from "../Assets/CommitProfile.jpg";
import { AiFillPropertySafety } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { TbHomeSearch } from "react-icons/tb";
import { HiDocumentText } from "react-icons/hi";

const Commit = () => {
  const [isLeftBoxVisible, setIsLeftBoxVisible] = useState(false);
  const propertyref = useRef(null);

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

  return (
    <div className="commit-main-box">
      <div className="commit-box-left" id={
            isLeftBoxVisible
              ? "commit-box-main-left-scroll"
              : ""
          }
          ref={propertyref}>
        <img
          src={CommitProfile}
          alt="commitprofile"
        />
      </div>
      <div className="commit-box-right">
        <div className="commit-box-top">
          <h1>Our Commitment To Excellence</h1>
          <p>
            We are committed to protecting your privacy and security. We do not
            sell or rent any of our customer information to third parties for
            marketing purposes without first We are committed to providing our
            customers with the best service and satisfaction possible. <br />{" "}
            <br />
            We are committed to protecting your privacy and security. We do not
            sell or rent any of our customer information to third parties for
            marketing purposes without first We are committed to providing our
            customers with the best service and satisfaction possible.We are
            committed to protecting your privacy and security. We do not sell or
            rent any of our customer information to third parties for marketing
            purposes without first We are committed to providing our customers
            with the best service and satisfaction possible.
          </p>
        </div>
        <div className="commit-box-bottom">
          <li className="commit-box-bottom-list">
            <AiFillPropertySafety className="commit-icons" />
            <span>
              <h1>1,500+</h1>
              <p>Properties Listed</p>
            </span>
          </li>
          <li className="commit-box-bottom-list">
            <HiUserGroup className="commit-icons" />
            <span>
              <h1>1,000+</h1>
              <p>Happy Client</p>
            </span>
          </li>
          <li className="commit-box-bottom-list">
            <TbHomeSearch className="commit-icons" />
            <span>
              <h1>100%</h1>
              <p>Easy Search</p>
            </span>
          </li>
          <li className="commit-box-bottom-list">
            <HiDocumentText className="commit-icons" />
            <span>
              <h1>100%</h1>
              <p>Documentation Provided</p>
            </span>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Commit;
