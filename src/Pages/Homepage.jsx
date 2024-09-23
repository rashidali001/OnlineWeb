import { Link } from "react-router-dom";
import Herosection from "./Herosection";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Reviews from "./Reviews";
import Consultation from "./Consultation";
import Socials from "./Socials";
import { Element, scroller } from 'react-scroll';


const Homepage = ()=>{

    return(
        <>
            <nav className="flex justify-between items-center py-2 px-4 bg-black text-slate-50 ">
                
                <div>STUDYPALWRITERS</div>
                
                <a href="#services">
                <div className="border border-red-400 p-3">
                    Services
                </div>
                </a>
                
            </nav>
            <Herosection/>
            <div id="services">
            <Services/>
            </div>                     
            <AboutUs/>
            <Reviews/>
            <Consultation/>
            <Socials/>
            
        </>
    )
}

export default Homepage;