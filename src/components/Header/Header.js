import React from "react";
import "./Header.css";

const Header = () => {

   return (
      <>
         <header>
            <h2>Armando Mendoza Sanchez</h2>
            <ul className="nav-btns">
               <li><a href="#Contact">Contact Me</a></li>
               <li><a href="#Projects">Projects</a></li>
               <li><a href="#AboutMe">About Me</a></li>
            </ul>
         </header>
      </>
   )
}

export default Header;