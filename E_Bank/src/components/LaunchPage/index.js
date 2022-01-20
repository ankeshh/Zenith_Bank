import React,{useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from './modules/HeroSection';
import AboutUs from './modules/AboutUs';
import NavBar from './modules/NavBar';
import SideBar from './modules/SideBar';
import {Obj1, Obj2,Obj3,Obj4} from './modules/AboutUs/Data'
import Services from './modules/Services';
import { withRouter } from 'react-router';
import Footer from './modules/Footer';
import OurDevelopers from './modules/OurDevelopers';

const LaunchPage= () => {
    const [isOpen,setIsOpen]=useState(false);

    const toggle=()=>{
        setIsOpen(!isOpen);
    }
    return (
        <Router>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <NavBar toggle={toggle}/>
            <HeroSection />
            <AboutUs {...Obj1}/>
            <AboutUs {...Obj2} />
            <Services/>
            <OurDevelopers {...Obj4}/>
            <OurDevelopers {...Obj3}/>
            <Footer/>
        </Router>
    )
}

export default withRouter(LaunchPage);
