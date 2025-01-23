import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import review1 from '../assets/review1.jfif'
import review2Female from '../assets/review2Female.jpg'
import review3Male from '../assets/review3Male.webp'
import review4Female from '../assets/review4Female.jfif'
import review5Female from '../assets/review5Female.jfif'
import review6Male from '../assets/review6Male.jfif'
import { HiChevronDoubleDown } from "react-icons/hi";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  const clientReviews = [
    {
        id:1,
        image:review2Female,
        title:"Lifesaver for My Assignments!",
        name:"Emily, Junior, Business Major",
        review:"I was falling behind on my essays, and studypal helped me catch up in no time. They provided clear, well-researched papers that earned me great grades. I'll definitely use their service again!"
    },
    {
        id:2,
        image:review1,
        title:"Top-Notch Programming Help!",
        name:"Jake, Sophomore, Computer Science",
        review:"I struggled with coding assignments in my computer science classes, but studypal made everything so easy. Their experts walked me through each step, and I finally understood concepts that had been confusing me for weeks!"
    },
    {
        id:3,
        image:review4Female,
        title:"Fast, Reliable, and Professional",
        name:"Sophia, Senior, Biology Major",
        review:"The team at studypal was so professional and quick to respond. They completed my lab report on time and followed all of my instructions perfectly. Definitely a service you can trust."
    },
    {
        id:4,
        image:review3Male,
        title:"Online Class Support That Works",
        name:"Michael, Senior, Engineering",
        review:"Managing my online classes was overwhelming, but studypal made it easy. They helped me stay on track with my assignments and quizzes, and I ended the semester with better grades than I expected!"
    },
    {
        id:5,
        image:review5Female,
        title:"Highly Recommended for Essays",
        name:"Sarah, Freshman, English Literature",
        review:"I was nervous about handing over my essay assignments, but studypal exceeded my expectations. They followed my guidelines and provided high-quality work that impressed my professor."
    },
    {
        id:6,
        image:review6Male,
        title:"Great Experience and Customer Service",
        name:"Liam, Junior, Information Technology",
        review:"The customer service was excellent, and the tutors really listened to my needs. They helped me with my programming assignments and even offered feedback to improve my skills. I can't thank them enough!"
    }


]

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            title: "Lifesaver for My Assignments!",
            content: "I was falling behind on my essays, and studypal helped me catch up in no time. They provided clear, well-researched papers that earned me great grades. I'll definitely use their service again!",
            author: "Emily",
            role: "Junior, Business Major",
            rating: 5,
            image: "/path/to/emily-image.jpg" // Make sure to update with actual image path
        },
        {
            id: 2,
            title: "Top-Notch Programming Help!",
            content: "I struggled with coding assignments in my computer science classes, but studypal made everything so easy. Their experts walked me through each step, and I finally understood concepts that had been confusing me for weeks!",
            author: "Jake",
            role: "Sophomore, Computer Science",
            rating: 5,
            image: "/path/to/jake-image.jpg"
        },
        {
            id: 3,
            title: "Fast, Reliable, and Professional",
            content: "The team at studypal was so professional and quick to respond. They completed my lab report on time and followed all of my instructions perfectly. Definitely a service you can trust.",
            author: "Sophia",
            role: "Senior, Biology Major",
            rating: 5,
            image: "/path/to/sophia-image.jpg"
        },
        {
            id: 4,
            title: "Online Class Support That Works",
            content: "Managing my online classes was overwhelming, but studypal made it easy. They helped me stay on track with my assignments and quizzes, and I ended the semester with better grades than I expected!",
            author: "Michael",
            role: "Senior, Engineering",
            rating: 5,
            image: "/path/to/michael-image.jpg"
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const nextReview = () => {
        setActiveIndex((prev) => (prev + 1) % reviews.length);
    };

    const prevReview = () => {
        setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    return (
        <section className="py-16 bg-gray-50" id="reviews">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
                        Student Success Stories
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto"></div>
                </div>

                {/* Reviews Carousel */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Navigation Buttons */}
                    <button 
                        onClick={prevReview}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 text-gray-400 hover:text-gray-600 transition-colors z-10"
                        aria-label="Previous review"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button 
                        onClick={nextReview}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 text-gray-400 hover:text-gray-600 transition-colors z-10"
                        aria-label="Next review"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Review Card */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300">
                        <div className="md:flex">
                            {/* Image Section */}
                            <div className="md:w-1/3 relative">
                                <img 
                                    src={reviews[activeIndex].image}
                                    alt={reviews[activeIndex].author}
                                    className="w-full h-full object-cover object-center"
                                    style={{ minHeight: '300px' }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden"></div>
                            </div>

                            {/* Content Section */}
                            <div className="md:w-2/3 p-8 md:p-12">
                                {/* Rating */}
                                <div className="flex space-x-1 mb-4">
                                    {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                                        <FaStar key={i} className="text-yellow-400 w-5 h-5" />
                                    ))}
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    {reviews[activeIndex].title}
                                </h3>

                                {/* Review Content */}
                                <p className="text-gray-600 text-lg mb-6 italic">
                                    "{reviews[activeIndex].content}"
                                </p>

                                {/* Author Info */}
                                <div className="flex items-center">
                                    <div>
                                        <p className="font-semibold text-gray-900">
                                            {reviews[activeIndex].author}
                                        </p>
                                        <p className="text-gray-500">
                                            {reviews[activeIndex].role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dots Navigation */}
                    <div className="flex justify-center space-x-2 mt-8">
                        {reviews.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                                    index === activeIndex ? 'bg-blue-600 w-8' : 'bg-gray-300'
                                }`}
                                aria-label={`Go to review ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Trust Indicators */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                        <div className="text-gray-600">Satisfaction Rate</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                        <div className="text-gray-600">Support Available</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                        <div className="text-gray-600">Happy Students</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
                        <div className="text-gray-600">Average Rating</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;