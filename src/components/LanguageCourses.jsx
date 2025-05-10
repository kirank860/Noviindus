import { useState, useEffect } from 'react';
import { Button } from '../common/Button';

export default function LanguageCourses() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const courses = [
    {
      title: "IELTS Preparation",
      description: "Focus on all four sections: Listening, Reading, Writing, and Speaking.",
      image: "/assets/IELTS.png",
      alt: "Person with curly hair making peace sign and holding books"
    },
    {
      title: "TOEFL Mastery",
      description: "Comprehensive coverage of Reading, Listening, Speaking, and Writing.",
      image: "/assets/toefl.png",
      alt: "Two women in hijabs looking at laptop"
    },
    {
      title: "PTE Academic Course",
      description: "Time-saving strategies and practice tests with instant feedback.",
      image: "/assets/pte.png",
      alt: "Person in white thobe and glasses writing notes"
    },
    {
      title: "Cambridge English (CAE)",
      description: "Preparation for high-level English skills in Listening, Speaking, Reading.",
      image: "/assets/cambridge.png",
      alt: "Two young people looking at laptop"
    }
  ];


  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); 

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide logic
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % courses.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isMobile, courses.length]);

  return (
    <div className="w-full px-4 py-8" style={{ backgroundColor: "#F9F7F4" }}>
      <div className="max-w-7xl mx-auto">
  
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-normal text-[#655945] font-bricolage ">
            Master in <span className="font-bold">IELTS, TOEFL Exams</span>
          </h2>
        </div>

     
        <div className="flex justify-end md:mb-4 mt-4">
          <Button />
        </div>


        <div className="py-11">
       
          <div className="block md:hidden">
            <div className="flex justify-center">
              <div className="w-full max-w-sm relative transition-all duration-700 ease-in-out">
             
                <div
                  className="absolute rounded-2xl w-full h-full"
                  style={{
                    backgroundColor: "#8A1538",
                    transform: "rotate(3deg) scale(1.02)",
                    top: "1%",
                    left: "1%",
                    zIndex: 0
                  }}
                ></div>

                {/* Active slide */}
                <div className="relative z-10 rounded-2xl overflow-hidden bg-amber-50 shadow-lg">
                  <div className="rounded-t-2xl bg-amber-50">
                    <img
                      src={courses[activeSlide].image}
                      alt={courses[activeSlide].alt}
                      className="w-full h-48 p-2 rounded-2xl object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-red-900 mb-2">
                      {courses[activeSlide].title}
                    </h3>
                    <p className="text-gray-700 text-sm">{courses[activeSlide].description}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {courses.map((_, dot) => (
                <button
                  key={dot}
                  onClick={() => setActiveSlide(dot)}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    activeSlide === dot ? "bg-red-800" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${dot + 1}`}
                />
              ))}
            </div>
          </div>

   
          <div className="hidden md:flex space-x-6">
            {courses.map((course, index) => (
              <div key={index} className="w-1/4 min-w-[250px] relative">
           
                <div
                  className="absolute rounded-2xl w-full h-full"
                  style={{
                    backgroundColor: "#8A1538",
                    transform: "rotate(3deg) scale(1.02)",
                    top: "1%",
                    left: "1%",
                    zIndex: 0
                  }}
                ></div>

                {/* Main card */}
                <div className="relative z-10 rounded-2xl overflow-hidden bg-amber-50 shadow-lg">
                  <div className="rounded-t-2xl bg-amber-50">
                    <img
                      src={course.image}
                      alt={course.alt}
                      className="w-full h-48 p-2 rounded-2xl object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-red-900 mb-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-700 text-sm">{course.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
