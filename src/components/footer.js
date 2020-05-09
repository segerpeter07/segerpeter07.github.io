import React from 'react';
import {FooterContainer, FooterEmail, FooterText, SocialIcons } from './footer.styles';
import { IconContext } from "react-icons";
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
// import { Button } from "shards-react";

const Footer = (props) => {
    return(
        <FooterContainer id='footer'>
            <SocialIcons>
                <IconContext.Provider value={{ color: "black", className: "global-class-name" , size:'30px', style:{margin:'5px'}}}>
                    <a href="https://github.com/segerpeter07" target='_blank' rel='noopener noreferrer'><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/peter-seger/" target='_blank' rel='noopener noreferrer'><FaLinkedin /></a>
                    <a href="https://www.instagram.com/swenadian/" target='_blank' rel='noopener noreferrer'><FaInstagram /></a>
                </IconContext.Provider>
            </SocialIcons>
            <FooterEmail href="mailto:peter@peterhenryseger.com" target='_blank' rel='noopener noreferrer'>peter@peterhenryseger.com</FooterEmail>
            <FooterText>© 2020 Peter Seger, All rights reserved</FooterText>
        </FooterContainer>
    )
}

export default Footer;