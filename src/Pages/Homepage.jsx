import { Link } from "react-router-dom";
import Herosection from "./Herosection";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Reviews from "./Reviews";
import Consultation from "./Consultation";
import Socials from "./Socials";
import { Element, scroller } from 'react-scroll';
import { useState, useEffect } from "react";

const Homepage = () => {
    const [modal, setModal] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const changeModal = () => {
        setModal(false);
    }

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-300 ${
                isScrolled 
                ? 'bg-white shadow-sm py-3' 
                : 'bg-white py-4'
            }`}>
                <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                        <img src="/logo.svg" alt="StudyHelp Assignment" className="h-9 w-9" />
                        <span className="font-extrabold text-xl tracking-tight text-gray-800 hover:text-blue-600 transition-colors duration-300">
                            STUDYHELP<span className="text-blue-600">ASSIGNMENT</span>
                        </span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#about" className="font-medium text-gray-600 hover:text-blue-600 transition-colors duration-300">
                            About
                        </a>
                        <a href="#services" className="font-medium text-gray-600 hover:text-blue-600 transition-colors duration-300">
                            Services
                        </a>
                        <a href="#reviews" className="font-medium text-gray-600 hover:text-blue-600 transition-colors duration-300">
                            Reviews
                        </a>
                        <button 
                            onClick={() => setModal(true)}
                            className="px-6 py-2.5 rounded-full font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-sm"
                        >
                            Contact Us
                        </button>
                    </div>

                    <div className="md:hidden">
                        <button 
                            className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors duration-300"
                            onClick={() => setMobileMenu(!mobileMenu)}
                        >
                            <svg 
                                className="w-6 h-6" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {mobileMenu && (
                    <div className="md:hidden absolute w-full bg-white border-t border-gray-100">
                        <div className="px-4 pt-2 pb-4 space-y-3">
                            <a href="#about" className="block py-2.5 px-4 text-gray-600 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors duration-300">
                                About
                            </a>
                            <a href="#services" className="block py-2.5 px-4 text-gray-600 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors duration-300">
                                Services
                            </a>
                            <a href="#reviews" className="block py-2.5 px-4 text-gray-600 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors duration-300">
                                Reviews
                            </a>
                            <div className="pt-2">
                                <button 
                                    onClick={() => {
                                        setModal(true);
                                        setMobileMenu(false);
                                    }}
                                    className="w-full text-center px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 font-semibold shadow-sm"
                                >
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            <div className="pt-20">
                <Herosection setModal={setModal}/>
            </div>
            <div id="services">
                <Services setModal={setModal}/>
            </div>                     
            <AboutUs setModal={setModal}/>
            <Reviews/>
            <Consultation setModal={setModal}/>
            <Socials/>

            {modal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center">
                    <div className="p-5 rounded-lg bg-slate-50 relative z-50">
                        <button className="absolute top-2 right-6 text-gray-400 hover:text-gray-950 font-semibold transition" onClick={changeModal}>
                            X
                        </button>
                        <h2 className="text-4xl font-bold text-gray-800 mb-8 mt-4 text-center">
                            Contact Us
                        </h2>
                        <div className="flex flex-col justify-center items-center md:flex-row gap-5">
                            <a href="https://wa.me/14424074486">
                                <button className="px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
                                    WhatsApp
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Homepage;