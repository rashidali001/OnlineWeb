import { useState, useEffect } from 'react';
import HeroImage from '../assets/HeroImage.avif'

const Herosection = ({ setModal }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        setIsVisible(true);
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const calculateRotation = (axis, position) => {
        const center = axis === 'x' ? window.innerWidth / 2 : window.innerHeight / 2;
        const value = axis === 'x' ? mousePosition.x : mousePosition.y;
        return ((value - center) / center) * 5;
    };

    return (
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-50 to-white flex items-center">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div 
                    className="absolute top-0 left-0 w-full h-full"
                    style={{
                        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.08) 0%, transparent 60%)`
                    }}
                />
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className={`absolute w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-float-${i + 1}`}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.5}s`
                        }}
                    />
                ))}
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content Side */}
                    <div className={`space-y-8 transition-all duration-1000 transform ${
                        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
                    }`}>
                        <div>
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                                Expert Academic
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                                    Writing Support
                                </span>
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Get professional assistance with your assignments, research papers, 
                                and essays from our experienced academic writers.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => setModal(true)}
                                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                            >
                                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                                <span className="relative flex items-center justify-center text-lg font-semibold">
                                    Get Started Now
                                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </button>
                            <a
                                href="#services"
                                className="px-8 py-4 bg-white text-gray-700 rounded-xl border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 text-center text-lg font-semibold shadow-sm hover:shadow-md"
                            >
                                View Services
                            </a>
                        </div>

                        {/* Trust Indicators */}
                        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100">
                            <div>
                                <div className="text-3xl font-bold text-blue-600">24/7</div>
                                <div className="text-gray-600 text-sm">Support</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-blue-600">100%</div>
                                <div className="text-gray-600 text-sm">Original</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-blue-600">4.9/5</div>
                                <div className="text-gray-600 text-sm">Rating</div>
                            </div>
                        </div>
                    </div>

                    {/* Image/3D Side */}
                    <div 
                        className={`relative transition-all duration-1000 transform ${
                            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
                        }`}
                        style={{
                            transform: `perspective(1000px) rotateX(${calculateRotation('y', mousePosition.y)}deg) rotateY(${calculateRotation('x', mousePosition.x)}deg)`
                        }}
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-2">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-blue-50/50 mix-blend-overlay" />
                            <img 
                                src={HeroImage}
                                alt="Academic Excellence"
                                className="w-full h-auto object-cover rounded-xl transform hover:scale-105 transition-transform duration-700"
                            />
                            {/* Decorative Elements */}
                            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-200/50 rounded-full blur-2xl" />
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-300/50 rounded-full blur-2xl" />
                        </div>

                        {/* Floating Badges */}
                        <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-300">
                            <div className="text-gray-800 font-semibold">Trusted by 10k+ Students</div>
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                            <div className="text-gray-800 font-semibold">Expert Writers</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Herosection;