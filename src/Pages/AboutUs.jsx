import { Link } from 'react-router-dom';
import CompanyProfile from '../assets/CompanyProfile.avif'

const AboutUs = ()=>{
    
    return (
     <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white">
      

      {/* Info Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            About STUDYPAL
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            At StudyPal, we are passionate about empowering students to achieve academic excellence. 
            Founded by experts in education and technology, we understand the unique challenges faced by college students today.
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-600">
            <li>Expert team with years of experience in education</li>
            <li>Comprehensive academic support services</li>
            <li>Personalized approach tailored to each student's needs</li>
          </ul>
          
          <Link to="/services">
          <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition">
            Learn More About Our Services
          </button>
          </Link>
          
        </div>
      </div>

        {/* Image Section */}
      <div className="w-full md:w-1/2 h-full">
        <img
          src={CompanyProfile}
          alt="Professional team or symbolic image"
          className="object-cover w-full h-full"
        />
      </div>

    </div>
    )
}

export default AboutUs;