import React, {useState} from 'react';
import SideBar from '../components/Sidebar';
import Navbar from '../components/NavBar';
import Home from '../components/Home'
import InfoSection from '../components/InfoSection'

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
            <InfoSection/>
        </>
    );
};

export default HomePage;
