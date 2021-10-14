 import React, { useState, useEffect } from 'react'
 import {FaBars} from 'react-icons/fa'
 import {animateScroll as scroll} from 'react-scroll'
 import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, Img, NavBtnCall } from './NavbarElements'

 
 const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }


    return (
    <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>
                    <Img src={require("../../images/LogoMakr-5oJKOS.png").default} alt=""/>
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}> About </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="skills" smooth={true} duration={500} spy={true} exact='true' offset={-80}> Skills </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="project" smooth={true} duration={500} spy={true} exact='true' offset={-80}> Projects </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="blogs" smooth={true} duration={500} spy={true} exact='true' offset={-80}> Blogs </NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnCall to="contact" smooth={true} duration={500} spy={true} exact='true' offset={-40} > Contact </NavBtnCall>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
    )
 }
 
 export default Navbar;
 


