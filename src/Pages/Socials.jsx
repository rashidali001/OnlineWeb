import { SlSocialInstagram } from "react-icons/sl";
import { CgMail } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

const Socials = ()=>{
    return (

    <div className="flex flex-col items-center justify-center bg-gray-200 py-16 px-8">
      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
        Let’s Stay Connected!
      </h2>

      {/* Description */}
      <p className="text-lg text-gray-600 text-center mb-6 max-w-lg">
        Follow us on social media to stay updated on academic tips, resources, and special offers. We’re here to help you succeed both in and outside the classroom.
      </p>

      {/* Social Media Icons */}
      <div className="flex space-x-6 mt-4">
        {/* Replace with actual links */}
        <a href="https://www.instagram.com/studyhelp_writers?igsh=MWozaWxvMG5rZzJtYQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-red-500 text-2xl">
         <SlSocialInstagram/>
        </a>

        
        

        <a href="sms:+254793599129&body=Hello" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-2xl">
         <CgMail/>
        </a>

        {/*

        <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600">
         <FaPhoneAlt/>
        </a>
        */}
        
        <a href="https://wa.me/14424074486" target="_blank" rel="noopener noreferrer" className="text-green-500 text-2xl">
         <BsWhatsapp/>
        </a>
       
      </div>
    </div>


    )
}

export default Socials;