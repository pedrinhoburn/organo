import React from "react";
import SocialMedia from "../SocialMedias";
import "./Footer.css";
import Logo from "../Logo";
import Creditos from "../Ceditos";


const Footer = () => {
    return(
        <footer className="footer">
           <SocialMedia />
           <Logo />
           <Creditos />
        </footer>
    );
}

export default Footer