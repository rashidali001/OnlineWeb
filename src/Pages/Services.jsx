import { HiChevronDoubleDown } from "react-icons/hi";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import OnlineClasses from '../assets/OnlineClasses.jfif'
import Essay from '../assets/Essay.jfif'
import Math from '../assets/Math.jfif'
import programming from '../assets/programming.jfif'
import med from '../assets/med.jfif'
import chem from '../assets/chem.jfif'



const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const servicesMemory = [
    {
        id:1,
        image:OnlineClasses,
        decription:"Online classes",
        description2:"Pearson, Aleks, Edgenuity, Edmentum, Canvas etc"
    },
    {
        id:2,
        image:Essay,
        decription:"Essays & Research",
        description2:"English, Political Science, History, Sciences, Any subject etc"
    },
    {
        id:3,
        image:Math,
        decription:"Mathematics",
        description2:"Statistics, Algebra, Probability, Calculus, SPSS etc"
    },
    {
        id:4,
        image:med,
        decription:"Medicine & Nursing",
        description2:"Anatomy, Pathology, Case studies etc"
    },
    {
        id:5,
        image:programming,
        decription:"Programming & IT",
        description2:"AI, Computer Networks, Mathlab, All programming languages & libraries etc"
    },
    {
        id:8,
        image:chem,
        decription:"Lab reports",
        description2:"Chemistry, Biology, Physics etc"
    }
]

const Services = ()=>{

    return(
        
        <>
        <div className="p-4 md:p-6">
            <header className="flex flex-col items-center justify-center gap-3">
                <h1 className="text-lg md:text-4xl">Sevices Offered</h1>
                <HiChevronDoubleDown/>            
            </header>
        </div>
        <div id="services" className="p-4 md:p-8 ">
        <Carousel responsive={responsive}>
           {servicesMemory.map(service=>(
            <div className="w-auto m-3 bg-gray-100 ">
                <img src={service.image}  alt="service image" className="w-full h-48"/>
                <div className="p-3">
                    <p className="text-2xl font-bold">{service.decription}</p>
                    <p className="text-md italic w-auto h-16 mt-2">{service.description2}</p>
                    <a href="https://wa.me/14424074486">
                    <button className="transiton transition-all border border-black p-2 mt-4  hover:bg-black hover:text-slate-50">Contact Us</button>
                    </a>                   
                </div>
                
            </div>
           ))}
        </Carousel>
        </div>
        
        
        </>
    )
}

export default Services;