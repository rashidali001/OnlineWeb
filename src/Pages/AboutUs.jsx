import { useState } from 'react';
import { Link } from 'react-router-dom';
import CompanyProfile from '../assets/CompanyProfile.avif'

const AboutUs = ({ setModal }) => {
    const [activeTab, setActiveTab] = useState('mission');

    const stats = [
        { number: '10k+', label: 'Students Helped' },
        { number: '98%', label: 'Success Rate' },
        { number: '24/7', label: 'Support' },
        { number: '100%', label: 'Satisfaction' }
    ];

    const values = [
        {
            icon: "🎯",
            title: "Excellence",
            description: "We strive for academic excellence in every assignment we handle."
        },
        {
            icon: "⚡",
            title: "Speed",
            description: "Quick turnaround times without compromising on quality."
        },
        {
            icon: "🔒",
            title: "Privacy",
            description: "Your confidentiality is our top priority."
        },
        {
            icon: "💡",
            title: "Innovation",
            description: "Using cutting-edge tools and methods for better results."
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="about">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        About StudyHelp Assignment
                        <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
                    </h2>
                    <p className="text-lg text-gray-600">
                        Your trusted partner in academic excellence, providing professional writing assistance since 2018
                    </p>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                    {stats.map((stat, index) => (
                        <div 
                            key={index}
                            className="relative group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative">
                                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                                <div className="text-gray-600">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tabs Section */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-20">
                    {/* Tab Headers */}
                    <div className="flex flex-wrap gap-4 mb-8 border-b border-gray-200">
                        {['mission', 'vision', 'values'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-3 text-lg font-semibold transition-all duration-300 border-b-2 ${
                                    activeTab === tab 
                                        ? 'text-blue-600 border-blue-600' 
                                        : 'text-gray-500 border-transparent hover:text-gray-700'
                                }`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="space-y-6">
                        {activeTab === 'mission' && (
                            <div className="animate-fade-in">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    To empower students worldwide by providing high-quality academic writing assistance 
                                    that helps them achieve their educational goals and develop their academic skills.
                                </p>
                            </div>
                        )}

                        {activeTab === 'vision' && (
                            <div className="animate-fade-in">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    To be the world's most trusted academic writing service, known for excellence, 
                                    reliability, and commitment to student success.
                                </p>
                            </div>
                        )}

                        {activeTab === 'values' && (
                            <div className="animate-fade-in">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {values.map((value, index) => (
                                        <div key={index} className="flex items-start space-x-4">
                                            <span className="text-3xl">{value.icon}</span>
                                            <div>
                                                <h4 className="text-lg font-semibold text-gray-900 mb-1">
                                                    {value.title}
                                                </h4>
                                                <p className="text-gray-600">{value.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Ready to Excel in Your Academic Journey?
                    </h3>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Join thousands of students who have achieved academic success with our expert assistance.
                    </p>
                    <button
                        onClick={() => setModal(true)}
                        className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-xl 
                            bg-gradient-to-r from-blue-600 to-blue-700 text-white 
                            hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                        Get Started Now
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;