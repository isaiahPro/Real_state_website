import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Logo from "../Assets/LogoImage.jpg";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const Navbar = () => {


  const [searchDisplay,setSearchDisplay] = useState(false);


  const handleButtonClick = () => {
    setSearchDisplay(!searchDisplay);
  };

  const items = [
    {
      label: (
        <Link to="/testimonials" className="dropdown-list-in">
          Contact US
        </Link>
      ),
      key: "0",
    },
    {
      label: (
        <Link to="/service" className="dropdown-list-in">
          Service
        </Link>
      ),
      key: "1",
    },

    {
      type: "divider",
    },
    {
      label: (
        <Link to="/contactus" className="dropdown-list-in">
          Contact US
        </Link>
      ),
      key: "3",
    },
  ];

  return (
    <>
   
    <div className="navbar-main-container">
      <div className="navbar-left-link-section">
        <Link className="navbar-list-item" to="/home">
          Home
        </Link>
        <Link className="navbar-list-item" to="Propertylist">
          Property Listing
        </Link>
        <Link className="navbar-list-item" to="/about">
          About Us
        </Link>
        <li className="navbar-list-item" id="dropdownitem">
          <Dropdown
            menu={{
              items,
            }}
            trigger={["hover"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Pages
                <DownOutlined className="dropdownlist-icons" />
              </Space>
            </a>
          </Dropdown>
        </li>
      </div>

      <div className="navbar-logo-section">
        <img src={Logo} alt="logo"  className="logo-image"/>
      </div>

      <div className="navbar-right-section">
        <li className="nav-right-list">
          <AiOutlineSearch className="nav-right-list-search"  onClick={handleButtonClick}/>
        </li>
        <li className="nav-right-list">
          <HiOutlineMenuAlt3 className="nav-right-list-menu" />
        </li>
      </div>
    </div>
    <div className="navbar-search-value" style={{ display: searchDisplay ? 'flex' : 'none' }} onDoubleClick={handleButtonClick}>
      <section className="navbarsearch-in">
        <input type="text" placeholder="search" />
        
        <AiOutlineSearch className="nav-right-list-search-in" />
      </section>
    </div>
    </>

  );
};

export default Navbar;
