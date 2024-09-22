import { HiChevronDoubleDown } from "react-icons/hi";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BaseImage from '../assets/baseImage.webp'


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
        image:BaseImage,
        decription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium"
    },
    {
        id:2,
        image:BaseImage,
        decription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium"
    },
    {
        id:3,
        image:BaseImage,
        decription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium"
    },
    {
        id:4,
        image:BaseImage,
        decription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium"
    },
    {
        id:5,
        image:BaseImage,
        decription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium"
    },
    {
        id:6,
        image:BaseImage,
        decription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium"
    },
    {
        id:8,
        image:BaseImage,
        decription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium"
    },
    {
        id:9,
        image:BaseImage,
        decription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium"
    },

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
        <div className="p-4 md:p-8 ">
        <Carousel responsive={responsive}>
           {servicesMemory.map(service=>(
            <div className="w-auto m-3 bg-gray-100 ">
                <img src={service.image} alt="service image" className="w-full h-auto"/>
                <div className="p-3">
                    <p>{service.decription}</p>
                    <button className="transiton transition-all border border-black p-2 mt-4  hover:bg-black hover:text-slate-50">Get Service</button>
                </div>
                
            </div>
           ))}
        </Carousel>
        </div>
        
        
        </>
    )
}

export default Services;