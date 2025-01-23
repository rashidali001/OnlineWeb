const Consultation = ({ setModal }) => {
    return (
        <section className="relative py-20 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-blue-50/50">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Header */}
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Not Sure Where to Start?
                        <span className="block text-blue-600 mt-2">Let's Talk About Your Needs</span>
                    </h2>
                    
                    {/* Description */}
                    <p className="text-lg text-gray-600 mb-10">
                        Get personalized guidance from our academic experts. We'll help you choose 
                        the right service for your academic goals.
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Free Consultation
                            </h3>
                            <p className="text-gray-600">
                                Get expert advice with no obligations
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Quick Response
                            </h3>
                            <p className="text-gray-600">
                                Get answers within minutes
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                24/7 Support
                            </h3>
                            <p className="text-gray-600">
                                Always here when you need us
                            </p>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Ready to Get Started?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Contact us now for a free consultation and get matched with the perfect academic expert for your needs.
                        </p>
                        <button 
                            onClick={() => setModal(true)}
                            className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md group"
                        >
                            Contact Us Now
                            <svg 
                                className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Trust Badges */}
                    <div className="mt-12 flex flex-wrap justify-center gap-8">
                        <div className="flex items-center text-gray-600">
                            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span>Secure Communication</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span>Confidential Service</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span>Money-Back Guarantee</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Consultation;