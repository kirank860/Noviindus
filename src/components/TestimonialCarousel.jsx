import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Best decision for English tutoring! Educare improved our daughter's skills and instilled confidence. Recent high scores speak volumes. Thank you, Educare!",
    author: "Sarah H",
    profession: "Accountant",
    stars: 5,
    img: "/assets/testimonial-1.png" 
  },
  {
    id: 2,
    quote: "Educare's commitment to 1-on-1 learning transformed our son's understanding of science. Recent top scores prove Educare delivers results. Grateful for the positive impact!", 
    author: "Ahmed K",
    profession: "Engineer",
    stars: 5,
    img: "/assets/testimonial-1.png" 
  },
  {
    id: 3,
    quote: "Best decision for English tutoring! Educare improved our daughter's skills and instilled confidence. Recent high scores speak volumes. Thank you, Educare!",
    author: "Sarah H",
    profession: "Accountant",
    stars: 5,
    img: "/assets/testimonial-1.png" 
  },
];

export default function TestimonialCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-slide
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      const totalSlides = isMobile ? testimonials.length : Math.ceil(testimonials.length / 3);
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isMobile]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevSlide = () => {
    const totalSlides = isMobile ? testimonials.length : Math.ceil(testimonials.length / 3);
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNextSlide = () => {
    const totalSlides = isMobile ? testimonials.length : Math.ceil(testimonials.length / 3);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (count) => {
    return Array(count).fill(0).map((_, i) => (
      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const totalSlides = isMobile ? testimonials.length : Math.ceil(testimonials.length / 3);

  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-2xl md:text-4xl font-medium text-[#655945] mb-10 md:mb-20 font-bricolage ">
          Hear from our <span className="font-bold">Valuable Parents</span>
        </h2>

        <div className="relative">
          {/* Carousel container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className={`flex ${isMobile ? 'justify-center' : 'justify-center gap-8'} flex-col md:flex-row`}>
                    {(isMobile ? [testimonials[slideIndex]] : testimonials.slice(slideIndex * 3, slideIndex * 3 + 3)).map((item, i) => (
                      <div key={i} className="w-full md:w-1/3 relative mt-10">
                        <div className="absolute -top-10 left-12 z-10">
                          <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden">
                            <img src={item.img} alt={item.author} className="w-full h-full object-cover rounded-full" />
                          </div>
                        </div>

                        <div className="bg-white border rounded-lg p-6 pt-12 flex flex-col relative h-full">
                          <div className="absolute -top-5 right-6">
                            <div className="text-5xl text-[#D0AB7B]">
                              <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 32V18.2857C0 15.8244 0.469925 13.4118 1.40978 11.0479C2.34963 8.68403 3.6139 6.55462 5.2026 4.65966C6.79129 2.7647 8.64365 1.17647 10.7597 0H17.9327C16.5985 2.35294 15.3819 4.67227 14.2831 6.95798C13.1843 9.2437 12.6349 11.5966 12.6349 14.0168V32H0ZM22.0673 32V18.2857C22.0673 15.8244 22.5372 13.4118 23.4771 11.0479C24.4169 8.68403 25.6812 6.55462 27.2699 4.65966C28.8586 2.7647 30.7109 1.17647 32.827 0H40C38.6658 2.35294 37.4492 4.67227 36.3504 6.95798C35.2516 9.2437 34.7022 11.5966 34.7022 14.0168V32H22.0673Z" fill="#D0AB7B"/>
                              </svg>
                            </div>
                          </div>

                          <div className="mt-8">
                            <p className="text-[#655945] mb-6">{item.quote.replace(/"/g, '')}</p>
                            <div className="flex items-center mb-2">{renderStars(item.stars)}</div>
                            <div className="flex items-center justify-end">
                              <div className="text-right">
                                <p className="font-bold text-[#8A1538]">{item.author}</p>
                                <p className="text-sm text-gray-500">— {item.profession}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={goToPrevSlide}
            className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md border border-gray-200 hidden md:block"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-[#655945]" />
          </button>
          
          <button 
            onClick={goToNextSlide}
            className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md border border-gray-200 hidden md:block"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-[#655945]" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full focus:outline-none ${
                currentSlide === index ? 'bg-[#8A1538]' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
