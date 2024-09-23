import HeroImage from '../assets/HeroImage.avif'

const Herosection = () => {

    return (
    <div className="flex flex-col md:flex-row items-center md:justify-center  md:h-max ">
      {/* Image Section */}
      <div className="w-full md:w-1/2 h-full">
        <img
          src={HeroImage}
          alt="Students working"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Info Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Your Academic Success, Simplified!
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            Struggling to keep up with your assignments? We provide customized academic support for college students, from essays to programming and more.
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-600">
            <li>Assignments & Essays</li>
            <li>Online Classes</li>
            <li>Lab Reports & Programming</li>
            <li>Much More</li>
          </ul>
          <p className="mt-4 text-sm italic md:text-md text-gray-600">
           Let us handle the heavy lifting while you focus on what matters. Ready to simplify your college experience?
          </p> 
          <a href="https://wa.me/971525532808">
          <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition">
            Get Started Today
          </button>
          </a>
        </div>
      </div>
    </div>
    )
}

export default Herosection