import React, {useState, useEffect} from 'react';
import Dropdown from '../components/Dropdown';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import {Link} from 'react-router-dom'
// import { BrowserRouter } from 'react-router-dom';

const LandingPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    useEffect(() => {
        const hideMenu = () => {
            if (window.innerWidth > 768 && isOpen){
                setIsOpen(false)
            }
        }
        
        window.addEventListener('resize', hideMenu)

        return () => {
            window.removeEventListener('resize',hideMenu)
        }
    })
    return (
        <>
            <div className="sticky top-0">
                <Navbar toggle={toggle}/>
                <Dropdown isOpen={isOpen} toggle={toggle}/>
            </div>
            <div className="bg-white h-screen flex flex-col justify-center items-center font-poppins">
                <h1 className="lg:text-7xl md:text-5xl sm:text-3xl text-3xl font-black mb-8">
                    WASSUPPERDORA
                </h1>
                <Link className="transition duration-200 ease-in-out bg-yellow-400 py-3 px-8 rounded-full hover:bg-yellow-300 flex" to='/login'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    Login
                </Link>
            </div>
            <Footer/>
        </>
    )
}

export default LandingPage
