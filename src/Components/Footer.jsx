import React from 'react';
import "./footer.css";
import {FaRegCopyright} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer-main-box'>
        Copyright <FaRegCopyright style={{marginTop:"3px",margin:"3px"}}/> 2023 SunShine Real State
    </div>
  )
}

export default Footer