/** @format */
import { Link } from "react-router-dom";
import $ from "jquery";

import React, { useState, useEffect } from "react";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const CaretDown = <FontAwesomeIcon icon={faCaretDown} size='1x' />;
const Search = <FontAwesomeIcon icon={faSearch} size='lg' />;
const Bell = <FontAwesomeIcon icon={faBell} size='lg' />;

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
 
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className='nav__logo'
        src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/12c6f684-d447-4457-84fa-12033cfd581e/d9z3o32-2c299a83-49a9-44c2-bc23-b0b5070a546b.png/v1/fill/w_1024,h_512,strp/netflix_logo_background__2_by_sixmonthslate_d9z3o32-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01MTIiLCJwYXRoIjoiXC9mXC8xMmM2ZjY4NC1kNDQ3LTQ0NTctODRmYS0xMjAzM2NmZDU4MWVcL2Q5ejNvMzItMmMyOTlhODMtNDlhOS00NGMyLWJjMjMtYjBiNTA3MGE1NDZiLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.WKy-rj_8y7ziLuhhtAES7jddy-eUpz6PQQ331bp7rRI'
        alt='Netflix Logo'
      />
      <ul className='NavList'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>TV Shows</a>
        </li>
        <li>
          <a href='#'>Movies</a>
        </li>
        <li>
          <a href='#'>New &amp; Popular</a>
        </li>
        <li>
          <a href='#'>My List</a>
        </li>
        <li>
          <a href='#'>Audio &amp; Subtitles</a>
        </li>
      </ul>
      <div className='lastThree'>
        <span> {Search}</span>
        <span>Kids</span>
        <span>DVD</span>
        <span>{Bell}</span>
        <img
          className='nav__avatar'
          src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png'
          alt='Avatar logo'
        />
      </div>
    </div>
  );
}

export default Nav;
