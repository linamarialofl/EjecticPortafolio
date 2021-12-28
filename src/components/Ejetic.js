import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdFingerprint } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../Images/Logo.png";
import "./Ejetic.css";
import { Button } from "./Button";
import gsap from "gsap";



    

function Ejetic() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showbutton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
    
  };

  window.addEventListener("resize", showbutton);
  

 
  return (
    <>
      <div className="ejetic">
        <div className="ejetic-container container">
            <Link to="/Home" className="eje-links eje-item">
               <img src={Logo}></img>
            </Link>
       

          <div className="menu-icon" onClick={handleClick}>
            {click ? (
              <FaTimes style={{ color: "#C4C4C4" }} />
            ) : (
              <FaBars style={{ color: "#C4C4C4" }} />
            )}
          </div>
         
          <div className={click ? "eje-menu active" : "eje-menu"}>
          <Link to="/Imperium" className="eje-links eje-item">
              Imperium
            </Link>
            <Link to="/Nosotros" className="eje-links eje-item">
              Nosotros
            </Link>
            
            <Link to="/Portafolio" className="eje-links eje-item">
              Portafolio
            </Link>
            <Link to="Blog" className="eje-links eje-item">
              Blog
            </Link>
            <Link to="Contacto" className="eje-links eje-item">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}



export default Ejetic;
