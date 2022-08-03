/** @format */

import React from "react";
import "./Footer.css";
import bootstrap from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const Facebook = <FontAwesomeIcon icon={faFacebookF} size='2x' />;
const Insta = <FontAwesomeIcon icon={faInstagram} size='2x' />;
const Twitter = <FontAwesomeIcon icon={faTwitter} size='2x' />;
const YouTube = <FontAwesomeIcon icon={faYoutube} size='2x' />;

function Footer() {
  return (
    <div className='footer col-sm-12  col-md-4  col-lg-2'>
      <div className='footer'>
        <div className='socials'>
          <div>{Facebook}</div>
          <div>{Insta}</div>
          <div>{Twitter}</div>
          <div>{YouTube}</div>
        </div>
        <div className='lists'>
          <div className='text'> </div>
          <ul>
            <li>
              <a href='#'>Audio Description</a>
            </li>
            <li>
              <a href='#'>Investor Relations</a>
            </li>
            <li>
              <a href='#'>Legal Notices</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href='#'>Help Center</a>
            </li>
            <li>
              <a href='#'>Jobs</a>
            </li>
            <li>
              <a href='#'>Cookies Preferences</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href='#'>Gift Cards</a>
            </li>
            <li>
              <a href='#'>Terms of Use</a>
            </li>
            <li>
              <a href='#'>Corporate Information</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href='#'>Media Center</a>
            </li>
            <li>
              <a href='#'>Privacy</a>
            </li>
            <li>
              <a href='#'>Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <button>Service Code</button>
      </div>
      <div>
        <div>1997-2022 Netflic, inc. </div>
      </div>
      <h3>
        Built By:
        <a href='https://tigisttsega.com/' target='_blank'>
          Tigist Tsega
        </a>
      </h3>
    </div>
  );
}

export default Footer;
