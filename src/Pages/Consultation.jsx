

const Consultation = ()=>{

    return (

    <div className="flex flex-col items-center justify-center  bg-blue-50 py-16 px-8">
      {/* Title */}
      <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">
      Not sure where to start? Contact us!
      </h2>
      
      {/* Description */}
      <p className="text-lg text-gray-600 text-center max-w-xl mb-6">
        We’ll walk you through exactly how we can support your academic journey.
      </p>
      
      {/* Call-to-action */}
      <ul className="text-gray-600 text-center mb-6">
        <li className="mb-2">✅ Personalized advice based on your needs</li>
        <li className="mb-2">✅ Clear explanations of our services</li>
        <li className="mb-2">✅ No obligation—it’s free!</li>
      </ul>

      {/* Schedule Button */}
      <a href="https://wa.me/14424074486">
      <button className="px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
        Contact us
      </button>
      </a>
    </div>
    

    );
}

export default Consultation;