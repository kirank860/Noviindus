import React, { useEffect, useState } from 'react';
import { Button } from '../common/Button';

export default function SubjectsWeTeachSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const subjects = [
    { name: "Maths", img: "/assets/maths.svg" },
    { name: "Physics", img: "/assets/physics.svg" },
    { name: "Chemistry", img: "/assets/chemistry.svg" },
    { name: "Biology", img: "/assets/biology.svg" },
    { name: "Computer Science", img: "/assets/ComputerScience.svg" },
    { name: "English", img: "/assets/english.svg" }
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const chunkSize = isMobile ? 1 : 6;
  const chunks = [];
  for (let i = 0; i < subjects.length; i += chunkSize) {
    chunks.push(subjects.slice(i, i + chunkSize));
  }

  const totalSlides = chunks.length;

  const handlePrevious = () => {
    setCurrentSlide(prev => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide(prev => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="bg-[#F9F9F9] py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-normal text-[#655945] font-bricolage ">
            Subjects <span className="font-bold">We Teach</span>
          </h2>
        </div>

        {/* View All Button */}
        <div className="flex justify-end mb-10 mt-4">
          <Button />
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Previous Button */}
          {!isMobile && (
            <button 
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 bg-white rounded-full p-2 shadow-md"
              aria-label="Previous subjects"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Slide */}
          <div className={`grid gap-4 ${isMobile ? 'grid-cols-1' : 'grid-cols-6'}`}>
            {chunks[currentSlide]?.map((subject, index) => (
              <div key={index} className="flex flex-col p-1 bg-[#FFF3E1] rounded-lg overflow-hidden">
                <div className="bg-[#8A1538] h-32 flex items-center justify-center">
                  <img src={subject.img} alt={`${subject.name} icon`} className="max-w-full max-h-full" />
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-medium text-gray-800">{subject.name}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          {!isMobile && (
            <button 
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 bg-white rounded-full p-2 shadow-md"
              aria-label="Next subjects"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>

        {/* Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-4 bg-[#8A1538]' : 'w-2 bg-[#8A1538]/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
