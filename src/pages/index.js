import React, {useState} from 'react';
import SideBar from '../components/Sidebar';
import Navbar from '../components/NavBar';
import Home from '../components/Home'
import InfoSection from '../components/InfoSection'
import Footer from '../components/Footer'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Contact from '../components/Contact';

const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Home/>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Services/>
            <InfoSection {...homeObjThree}/>
            <Contact/>
            <Footer/>
        </>
    );
};

export default HomePage;
