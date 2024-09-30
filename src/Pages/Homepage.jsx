import { Link } from "react-router-dom";
import Herosection from "./Herosection";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Reviews from "./Reviews";
import Consultation from "./Consultation";
import Socials from "./Socials";
import { Element, scroller } from 'react-scroll';
import { useState } from "react";


const Homepage = ()=>{
    const [modal, setModal] = useState(false);

    const changeModal = ()=>{
        setModal(false);
    }

    return(
        <>
            <nav className="flex justify-between items-center py-2 px-4 bg-black text-slate-50 ">
                
                <div>STUDYPALWRITERS</div>
                
                <a href="#services">
                <div className="border border-red-400 p-3 transition hover:bg-red-400">
                    Services
                </div>
                </a>
                
            </nav>
            <Herosection/>
            <div id="services">
            <Services setModal={setModal}/>
            </div>                     
            <AboutUs/>
            <Reviews/>
            <Consultation setModal={setModal}/>
            <Socials/>

            {/*
            <div className="fixed top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2 p-10 rounded-lg bg-slate-50">
                    <button className="absolute top-2 right-8 text-gray-400 hover:text-gray-600 transition">
                        X
                    </button>
                    <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                        Contact Us
                    </h2>

                    <div className="flex flex-col md:flex-row gap-5">
                        <button className="px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
                            imessage
                        </button>
                        <button className="px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
                            Whatsapp
                        </button>
                    </div>
            </div>
            */}

            {modal?
            <>
                {/* Modal Overlay */}
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center">
                    {/* Modal Content */}
                    <div className="p-5 rounded-lg bg-slate-50 relative z-50">
                        {/* Close button */}
                        <button className="absolute top-2 right-6 text-gray-400 hover:text-gray-950 font-semibold transition" onClick={changeModal}>
                            X
                        </button>

                        <h2 className="text-4xl font-bold text-gray-800 mb-8 mt-4 text-center">
                            Contact Us
                        </h2>

                        <div className="flex flex-col justify-center items-center md:flex-row gap-5">
                            <a href="sms:+14424074486&body=Hello">
                            <button className="px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
                                iMessage
                            </button>
                            </a>
                            <a href="https://wa.me/14424074486">
                            <button className="px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
                                Whatsapp
                            </button>
                            </a>
                        </div>
                    </div>
                </div>
            </>
            :
            <>
            </>
            }

           


            
        </>
    )
}

export default Homepage;