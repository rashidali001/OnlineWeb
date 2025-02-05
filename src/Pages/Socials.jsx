import { useState } from 'react';

const Socials = () => {
    const [hoveredIcon, setHoveredIcon] = useState(null);

    const socialLinks = [
        {
            name: 'WhatsApp',
            href: 'https://wa.me/14424074486',
            color: 'from-green-400 to-green-600',
            hoverColor: 'group-hover:from-green-500 group-hover:to-green-700',
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
            )
        }
    ];

    return (
        <footer className="relative bg-gray-900 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:14px_24px]" />
            <div className="absolute inset-0">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] -z-10" />
                <div className="absolute -left-40 top-20 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] -z-10" />
                <div className="absolute -right-40 top-20 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] -z-10" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Content */}
                <div className="py-20">
                    {/* Top Section */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Let's Connect
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mt-2">
                                Get Expert Help Now
                            </span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Our team of academic experts is ready to assist you 24/7. Choose your preferred way to connect with us.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-8">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                className="group relative"
                                onMouseEnter={() => setHoveredIcon(social.name)}
                                onMouseLeave={() => setHoveredIcon(null)}
                            >
                                <div className={`
                                    relative z-10 p-6 rounded-2xl text-white
                                    bg-gradient-to-br ${social.color} ${social.hoverColor}
                                    transition-all duration-300 transform
                                    hover:scale-110 hover:-rotate-3
                                    shadow-lg hover:shadow-2xl
                                `}>
                                    {social.icon}
                                </div>
                                {hoveredIcon === social.name && (
                                    <div className="absolute -inset-2 bg-gradient-to-r from-white/20 to-transparent blur-lg -z-10" />
                                )}
                            </a>
                        ))}
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                                <span className="text-2xl">⚡</span>
                            </div>
                            <h3 className="text-white font-semibold mb-2">Quick Response</h3>
                            <p className="text-gray-400">Average response time under 5 minutes</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                                <span className="text-2xl">🔒</span>
                            </div>
                            <h3 className="text-white font-semibold mb-2">Secure Chat</h3>
                            <p className="text-gray-400">End-to-end encrypted communication</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                                <span className="text-2xl">🌟</span>
                            </div>
                            <h3 className="text-white font-semibold mb-2">Expert Support</h3>
                            <p className="text-gray-400">Professional academic assistance</p>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="mt-20 pt-8 border-t border-gray-800">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <div className="flex items-center space-x-2">
                                <img src="/logo.svg" alt="StudyPal Writers" className="h-8 w-8" />
                                <span className="text-white font-bold text-xl">
                                    STUDYHELP<span className="text-blue-400">ASSIGNMENT</span>
                                </span>
                            </div>
                            <p className="text-gray-400 text-sm">
                                © {new Date().getFullYear()} STUDYHELPASSIGNMENT. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-20 bg-gradient-to-t from-blue-500/20 to-transparent" />
        </footer>
    );
};

export default Socials;