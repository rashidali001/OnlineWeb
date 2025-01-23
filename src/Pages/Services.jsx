import { useState } from "react";
import { HiChevronDoubleDown } from "react-icons/hi";
import OnlineClasses from '../assets/OnlineClasses.jfif';
import Essay from '../assets/Essay.jfif';
import Math from '../assets/Math.jfif';
import programming from '../assets/programming.jfif';
import med from '../assets/med.jfif';
import chem from '../assets/chem.jfif';

const Services = ({ setModal }) => {
    const [activeService, setActiveService] = useState(null);

    const services = [
        {
            id: 1,
            image: OnlineClasses,
            title: "Online Classes",
            description: "Pearson, Aleks, Edgenuity, Edmentum, Canvas etc",
            color: "from-blue-500 to-indigo-500",
            icon: "🎓",
            features: ["Live Class Support", "Assignment Help", "Quiz & Exam Prep"]
        },
        {
            id: 2,
            image: Essay,
            title: "Essays & Research",
            description: "English, Political Science, History, Sciences, Any subject etc",
            color: "from-emerald-500 to-teal-500",
            icon: "📝",
            features: ["Original Content", "In-depth Research", "Perfect Formatting"]
        },
        {
            id: 3,
            image: Math,
            title: "Mathematics",
            description: "Statistics, Algebra, Probability, Calculus, SPSS etc",
            color: "from-orange-500 to-red-500",
            icon: "➗",
            features: ["Step-by-step Solutions", "Detailed Explanations", "Formula Guides"]
        },
        {
            id: 4,
            image: med,
            title: "Medicine & Nursing",
            description: "Anatomy, Pathology, Case studies etc",
            color: "from-rose-500 to-pink-500",
            icon: "⚕️",
            features: ["Case Studies", "Lab Reports", "Research Analysis"]
        },
        {
            id: 5,
            image: programming,
            title: "Programming & IT",
            description: "AI, Computer Networks, Mathlab, All programming languages & libraries etc",
            color: "from-violet-500 to-purple-500",
            icon: "💻",
            features: ["Code Development", "Debug Support", "Documentation"]
        },
        {
            id: 6,
            image: chem,
            title: "Lab Reports",
            description: "Chemistry, Biology, Physics etc",
            color: "from-cyan-500 to-blue-500",
            icon: "🧪",
            features: ["Data Analysis", "Methodology", "Results Interpretation"]
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Our Expert Services
                        <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
                        Comprehensive academic support tailored to your needs
                    </p>
                    <HiChevronDoubleDown className="w-6 h-6 mx-auto text-blue-600 animate-bounce" />
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="group relative"
                            onMouseEnter={() => setActiveService(service.id)}
                            onMouseLeave={() => setActiveService(null)}
                        >
                            <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                                {/* Image Container */}
                                <div className="relative h-48 overflow-hidden">
                                    <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-80`} />
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <span className="absolute top-4 left-4 text-3xl">{service.icon}</span>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <ul className="space-y-2 mb-6">
                                        {service.features.map((feature, index) => (
                                            <li key={index} className="flex items-center text-gray-600">
                                                <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA Button */}
                                    <button
                                        onClick={() => setModal(true)}
                                        className={`w-full px-6 py-3 bg-gradient-to-r ${service.color} text-white rounded-xl 
                                            flex items-center justify-center group-hover:shadow-lg transition-all duration-300
                                            transform group-hover:-translate-y-1`}
                                    >
                                        Get Started
                                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <button
                        onClick={() => setModal(true)}
                        className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full 
                            bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg 
                            transition-all duration-300 transform hover:scale-105"
                    >
                        Get Expert Help Now
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Services;