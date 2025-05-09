import React, { useState, useEffect } from 'react';
import { Button } from '../common/Button';

export default function ProgramsForKidsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerSlide(3);
      } else if (window.innerWidth >= 640) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const programs = [
    {
      id: 1,
      title: 'English Grammar',
      description: 'Master the building blocks of writing and communication.',
      image: '/assets/english-grammer.png',
    },
    {
      id: 2,
      title: 'Craft Classes',
      description: 'Unleash creativity with hands-on projects and artistic fun.',
      image: '/assets/craft.png',
    },
    {
      id: 3,
      title: 'Art and Painting',
      description: 'Express yourself through colors, sketches, and designs.',
      image: '/assets/art.png',
    },
  ];

  const getVisiblePrograms = () => {
    const start = currentSlide * itemsPerSlide;
    return programs.slice(start, start + itemsPerSlide);
  };

  const getTotalSlides = () => {
    return Math.ceil(programs.length / itemsPerSlide);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % getTotalSlides());
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + getTotalSlides()) % getTotalSlides());
  };

  return (
    <div className="bg-white px-3 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-normal text-[#655945] font-bricolage">
            Programs we offer <span className="font-semibold">for kids</span>
          </h2>
        </div>

        {/* View All Button */}
        <div className="flex justify-end mb-10 mt-4 md:mt-0">
          <Button />
        </div>

        {/* Carousel Section */}
        <div className="relative">
          {/* Nav Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-5 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-[#8A1538] hover:bg-[#FFF8F1] transition-colors"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-5 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-[#8A1538] hover:bg-[#FFF8F1] transition-colors"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Cards */}
          <div
            className={`grid gap-6 transition-all duration-500 ease-in-out 
              ${
                itemsPerSlide === 1
                  ? 'grid-cols-1'
                  : itemsPerSlide === 2
                  ? 'grid-cols-2'
                  : 'grid-cols-3'
              }`}
          >
            {getVisiblePrograms().map((program) => (
              <div key={program.id} className="rounded-lg mt-7 md:mt-0 font-dmsans">
                <div className="bg-[#FFF3E1] rounded-lg p-6 h-full flex flex-col gap-20 relative">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#8A1538]">{program.title}</h3>
                    <p className=" mt-2 mb-4 w-60 text-[#8A1538] text-sm">{program.description}</p>

                    <a
                      href={`/program-${program.id}`}
                      className="inline-flex items-center px-4 py-2 bg-[#8A1538] text-white rounded-md text-sm font-medium hover:bg-[#8A1538]/90 transition"
                    >
                      Read More
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>

                  <div className="text-right absolute -top-10 -right-5">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="inline-block h-[150px] md:h-[180px] md:w-auto w-[150px]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {Array.from({ length: getTotalSlides() }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full ${
                index === currentSlide ? 'bg-[#8A1538]' : 'bg-[#8A1538]/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
