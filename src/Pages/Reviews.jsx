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

const Reviews = ()=>{

    return (

        <>
        <div className="p-4 md:p-6">
            <header className="flex flex-col items-center justify-center gap-3">
                <h1 className="text-lg md:text-4xl">Trusted by Students Nationwide</h1>
                <HiChevronDoubleDown/>           
            </header>
        </div>
        {/* Reviews */}
        <div>

        <Carousel responsive={responsive}>
           {clientReviews.map(review=>(
            <div className="flex flex-col justify-center items-center py-4 pt-6 gap-4 w-auto bg-gray-200 ">
                <img src={review.image} alt="service image" className="w-20 h-20 rounded-full"/>
                <div className="p-3">
                    <p className="font-bold">"{review.title}"</p>                    
                </div>
                <div className="p-3 text-center">
                    <p>"{review.review}"</p>                    
                </div>
                <div className="p-3">
                    <p className="italic font-bold">"~ {review.name}"</p>                    
                </div>
                
            </div>
           ))}
        </Carousel>

        </div>

        </>

    )
}

export default Reviews;