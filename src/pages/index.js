import React, {useState} from 'react';
import SideBar from '../components/Sidebar';
import Navbar from '../components/NavBar';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
        </>
    );
};

export default Home;
