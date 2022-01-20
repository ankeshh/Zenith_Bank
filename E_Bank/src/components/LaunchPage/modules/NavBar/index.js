import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { withRouter } from 'react-router';
import {
    Nav,
    NavbarContainer,
    NavLogo, MobileIcon,
    NavItem, NavLinks,
    NavMenu,
    NavBtn,
    NavBtnLink
 } from './NavBarElements';

const NavBar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);
    const changeNav = () =>{
        if(window.scrollY >= 110){
            setScrollNav(true);
        }
        else
            setScrollNav(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo onClick={toggleHome}>Zenith Bank</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" smooth={true} duration={500} exact='true'>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover" smooth={true} duration={500} exact='true' offset={30}>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services" smooth={true} duration={500} exact='true' offset={28}>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Ankesh" smooth={true} duration={500} exact='true' offset={-30} >Our Developers</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink onClick={() => {window.location.href="/signin"}}>Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default withRouter(NavBar);