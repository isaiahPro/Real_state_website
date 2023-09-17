import React from "react";
import "./team.css";
import Profile00 from "../Assets/Profile-001.webp";
import Profile001 from "../Assets/Profile-002.jpg";
import Profile002 from "../Assets/Profile-003.jpg";
import Profile003 from "../Assets/Profile-004.webp";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
const Team = () => {
    
  return (
    <div className="team-box-main">
      <div className="team-top">
        <h1>Our Team</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quam amet
          quas est, velit itaque enim et doloribus veritatis vitae. Molestiae
          nisi consequuntur numquam nulla quasi! Aliquam vel similique quos?
        </p>
      </div>
      <div className="team-bottom">
        <li>
          <img src={Profile00} alt="profile1" />
          <h1>Ruth Desalegn</h1>
          <p>Founder and CEO</p>
          <span className="team-icon-lists">
            <a href="www.facebook.com">
              <FaFacebookF className="team-social-icon" />
            </a>
            <a href="www.twitter.com">
              <BsTwitter className="team-social-icon" />
            </a>
            <a href="www.instagram.com">
              <GrInstagram className="team-social-icon" />
            </a>
          </span>
        </li>
        <li>
          <img src={Profile001} alt="profile1" />
          <h1>Ruth Desalegn</h1>
          <p>Founder and CEO</p>
          <span className="team-icon-lists">
            <a href="www.facebook.com">
              <FaFacebookF className="team-social-icon" />
            </a>
            <a href="www.twitter.com">
              <BsTwitter className="team-social-icon" />
            </a>
            <a href="www.instagram.com">
              <GrInstagram className="team-social-icon" />
            </a>
          </span>
        </li>
        <li>
          <img src={Profile002} alt="profile1" />
          <h1>Ruth Desalegn</h1>
          <p>Founder and CEO</p>
          <span className="team-icon-lists">
            <a href="www.facebook.com">
              <FaFacebookF className="team-social-icon" />
            </a>
            <a href="www.twitter.com">
              <BsTwitter className="team-social-icon" />
            </a>
            <a href="www.instagram.com">
              <GrInstagram className="team-social-icon" />
            </a>
          </span>
        </li>
        <li>
          <img src={Profile003} alt="profile1" />
          <h1>Ruth Desalegn</h1>
          <p>Founder and CEO</p>
          <span className="team-icon-lists">
            <a href="www.facebook.com">
              <FaFacebookF className="team-social-icon" />
            </a>
            <a href="www.twitter.com">
              <BsTwitter className="team-social-icon" />
            </a>
            <a href="www.instagram.com">
              <GrInstagram className="team-social-icon" />
            </a>
          </span>
        </li>
      </div>
    </div>
  );
};

export default Team;
