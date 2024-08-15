import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import ContentWrapper from "../../ContentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                © 2024 . FlixPulse All Rights Reserved.
                </div>
                <div className="socialIcons">
                   <Link to={`https://www.facebook.com/profile.php?id=100077262783993&mibextid=ZbWKwL`} target="_blank">
                   <span className="icon"> 
                       <FaFacebookF /> 
                    </span>
                   </Link>

                   <Link to={`https://www.instagram.com/mdzaid3133/`} target="_blank">
                   <span className="icon">
                        <FaInstagram />
                    </span>
                   </Link>

                   <Link to={`https://github.com/mdzaid3133`} target="_blank">
                   <span className="icon">
                        <FaGithub />
                    </span>
                   </Link>
                   <Link to={`https://www.linkedin.com/in/mdzaid3133/?originalSubdomain=in`} target="_blank">
                   <span className="icon">
                        <FaLinkedin />
                    </span>
                   </Link>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;