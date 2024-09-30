import React, { useState } from 'react';
import { HiChevronDoubleDown } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const AllServices  = () => {
  const [modal, setModal] = useState(false);

  const changeModal = ()=>{
      setModal(false);
  }

  const services = [
    {
      title: 'Online Classes',
      description:
        'We offer support to ensure you stay on top of your coursework across popular online platforms:',
      details: [
        'Edgenuity Classes: Assistance with video lessons, quizzes, and assignments to help you meet learning goals.',
        'Canvas Classes: We manage your discussion boards, assignments, quizzes, and even projects.',
        'Pearson Classes: Guidance through Pearson’s digital platforms, handling online assignments, and completing assessments.',
        'Aleks: Math and science modules on Aleks can be tricky—we help you complete learning objectives and tests efficiently.',
        'Edmentum: Full support with assignments, projects, and quizzes to ensure your success in this learning platform.',
      ],
    },
    {
      title: 'Essays',
      description:
        'We provide customized essay writing services across a wide range of disciplines, tailored to your specific guidelines:',
      details: [
        'English Literature: In-depth analysis of literary texts, essays on themes, characters, and critical reviews.',
        'Political Science: Essays on government structures, political theory, and current events analysis.',
        'Sciences: Well-researched papers on biology, chemistry, physics, and more, formatted according to academic standards.',
        'Projects: We help create well-organized academic projects, integrating research, data analysis, and presentations.',
        'PowerPoint Presentations: Professionally designed and content-driven presentations for any subject area.',
      ],
    },
    {
      title: 'Mathematics',
      description:
        'Mathematics can be challenging, but we cover a broad range of topics to support your learning at every level:',
      details: [
        'Statistics: Analysis, data interpretation, probability distributions, and hypothesis testing.',
        'Algebra: Solving equations, understanding functions, and everything in between.',
        'Probability: Probability theory, permutations, combinations, and applied problem-solving.',
        'Calculus: Differentiation, integration, limits, and application to real-world problems.',
        'SPSS: Help with statistical analysis, interpreting outputs, and preparing reports using SPSS software.',
      ],
    },
    {
      title: 'Computer Programming',
      description:
        'Our programming experts can help you with coding assignments, debugging, and project development in multiple languages:',
      details: [
        'JavaScript: Client-side and server-side programming, web development, and frameworks like React.',
        'C+: Object-oriented programming, control structures, and basic algorithms.',
        'Python: Coding for data analysis, machine learning, web scraping, and software development.',
        'C++: Complex programming concepts, algorithms, and data structures.',
        'MATLAB: Matrix manipulations, plotting functions, and implementing algorithms for complex math and engineering tasks.',
      ],
    },
    {
      title: 'Biology',
      description:
        'From molecular biology to ecosystems, we help students with assignments, research papers, and lab reports:',
      details: [
        'Cell structure, genetics, evolution, and biotechnology.',
        'Human anatomy, physiology, and ecological studies.',
        'Assistance with lab work, practicals, and written reports.',
      ],
    },
    {
      title: 'Chemistry',
      description:
        'Our chemistry support covers all subfields, including organic, inorganic, physical, and analytical chemistry. We assist with:',
      details: [
        'Chemical equations, stoichiometry, reactions, and properties of substances.',
        'Laboratory reports, problem sets, and theoretical assignments.',
      ],
    },
    {
      title: 'Lab Reports',
      description:
        'Writing detailed, accurate, and well-structured lab reports is critical for science students. We provide:',
      details: [
        'Guidance on structuring reports (introduction, methods, results, discussion).',
        'Help interpreting experimental data and drawing meaningful conclusions.',
      ],
    },
    {
      title: 'Nursing and Medicine',
      description:
        'Our experienced team provides comprehensive support for nursing and medical students, ensuring clarity and thorough research:',
      details: [
        'Case Studies: Detailed analysis of patient scenarios with evidence-based treatment recommendations.',
        'Research Papers: Well-researched, properly cited papers on various medical topics, including new findings and clinical practices.',
        'Care Plans: Development of individualized patient care plans based on clinical assessments and diagnoses.',
        'Presentations: Professional presentations on nursing topics, case studies, and research findings.',
        'Clinical Reflection Journals: Help reflecting on clinical experiences, documenting skills learned and areas for improvement.',
        'Pathophysiology Assignments: Assistance with understanding disease processes, mechanisms, and treatments, along with case analysis.',
      ],
    },
  ];

  return (
    <>

{modal?
            <>
                {/* Modal Overlay */}
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center">
                    {/* Modal Content */}
                    <div className="p-5 rounded-lg bg-slate-50 relative z-50">
                        {/* Close button */}
                        <button className="absolute top-2 right-6 text-gray-400 hover:text-gray-950 font-semibold transition" onClick={changeModal}>
                            X
                        </button>

                        <h2 className="text-4xl font-bold text-gray-800 mb-8 mt-4 text-center">
                            Contact Us
                        </h2>

                        <div className="flex flex-col justify-center items-center md:flex-row gap-5">
                            <a href="sms:+14424074486&body=Hello">
                            <button className="px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
                                iMessage
                            </button>
                            </a>
                            <a href="https://wa.me/14424074486">
                            <button className="px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
                                Whatsapp
                            </button>
                            </a>
                        </div>
                    </div>
                </div>
            </>
            :
            <>
            </>
            }
    <nav className="flex justify-between items-center py-4 px-4 bg-black text-slate-50 ">
                <Link to="/">
                <div>STUDYPALWRITERS</div>
                </Link>            
    </nav>

    <header className="flex flex-col items-center justify-center gap-3 mt-10 mb-10">
                <h1 className="text-lg text-center md:text-4xl">Get more Information on the great services we have to offer</h1>
                <p className="my-2 text-red-700 italic">*scroll down to your preferred service</p>
                <HiChevronDoubleDown/>            
    </header>


    <div className="py-12 bg-gray-50">


      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-2 gap-8 px-6 lg:px-32">
        {services.map((service, index) => (
          <div key={index} className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
              {service.title}
            </h3>
            <p className="mb-4 font-semibold text-gray-700">{service.description}</p>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              {service.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ol>
          </div>
        ))}
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden space-y-6 px-4">
        {services.map((service, index) => (
          <div key={index} className="p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
              {service.title}
            </h3>
            <p className="mb-4 text-gray-700">{service.description}</p>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              {service.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>



    <div className="flex flex-col items-center justify-center  bg-blue-50 py-16 px-8">
      {/* Title */}
      <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">
        Got More Questions? We’re Here to Help!
      </h2>
      
      {/* Description */}
      <p className="text-lg text-gray-600 text-center max-w-xl mb-6">
       Book a <span className="font-semibold">free consultation call</span> with our experts, and we’ll walk you through exactly how we can support your academic journey.
      </p>
      
      {/* Call-to-action */}
      <ul className="text-gray-600 text-center mb-6">
        <li className="mb-2">✅ Personalized advice based on your needs</li>
        <li className="mb-2">✅ Clear explanations of our services</li>
        <li className="mb-2">✅ No obligation—it’s free!</li>
      </ul>

      {/* Schedule Button */}
      
      <button className="px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition" onClick={()=>setModal(true)}>
        Contact Us
      </button>
    
    </div>
    </>
  );
};

export default AllServices ;
