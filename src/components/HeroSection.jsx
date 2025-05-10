import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentCurriculumIndex, setCurrentCurriculumIndex] = useState(0);
  
  // Sliding title texts
  const slidingTexts = [
    "Tutoring at Our Center",
    "Learning Experience",
    "Academic Excellence"
  ];
  
  // Heading slide content
  const headingSlides = [
    {
      title: "Personalized One-to-One",
      subtitle: "Tutoring at Our Center"
    },
  
    {
      title: "Individual Tuition,",
      subtitle: "For all students till 12th grade!"
    },
    {
      title: "Master IELTS, TOEFL, and",
      subtitle: "Beyond with Expert Guidance!"
    }
  ];

  // Current heading index
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);
  
  // Curriculum logos
  const curriculumLogos = [
    { id: 1, name: 'Pearson', logo: '/assets/pearson-logo.svg' },
    { id: 2, name: 'Cambridge', logo: '/assets/cambridge-logo.svg' },
    { id: 3, name: 'SABIS', logo: '/assets/sabis-logo.svg' }
  ];
  
  // Core values with icons
  const coreValues = [
    { id: 1, title: 'Personal Attention', icon: '/assets/personal-attention.svg' },
    { id: 2, title: 'Growth Mindset', icon: '/assets/Trophy.svg' },
    { id: 3, title: 'Skill Development', icon: '/assets/Student.svg' },
    { id: 4, title: 'Passionate Teaching', icon: '/assets/HandHeart.svg' },
  ];

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidingTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slidingTexts.length]);
  
  // Auto-rotate curriculum logos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCurriculumIndex((prev) => (prev + 1) % curriculumLogos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [curriculumLogos.length]);

  // Auto-rotate headings
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadingIndex((prev) => (prev + 1) % headingSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [headingSlides.length]);

  return (
    <div className="relative bg-[#FFF8F1]  py-8 md:py-20 overflow-hidden"   style={{
      backgroundImage: 'url("/assets/vector-pattern.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className=" mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Section - Image with animation */}
          <div className="w-full lg:w-2/5 mb-8 lg:mb-0 relative">
            <div 
              className="animate-float transition-all duration-3000"
              style={{
                animation: 'float 4s ease-in-out infinite',
              }}
            >
              <img 
                src="/assets/tutor-student.png" 
                alt="Tutor with student" 
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
          
          {/* Middle Section - Heading and Content */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 text-center">
            <div>
              {/* Heading Slider Container */}
              <div className="relative h-24 overflow-hidden">
                {headingSlides.map((slide, index) => (
                  <div 
                    key={index}
                    className="absolute w-full transition-all duration-700 transform"
                    style={{
                      transform: `translateX(${(index - currentHeadingIndex) * 100}%)`,
                      opacity: index === currentHeadingIndex ? 1 : 0,
                    }}
                  >
                    <h1 className="text-4xl md:text-4xl font-bold text-[#8A1538] leading-tight mb-4 font-bricolage">
                      {slide.title} <span className='font-thin text-4xl'>{slide.subtitle}</span>
                    </h1>
                  </div>
                ))}
              </div>
              
              {/* Dot indicators */}
              <div className="flex justify-center space-x-2 my-6">
                {headingSlides.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setCurrentHeadingIndex(index)}
                    className={`w-2 h-2 rounded-full ${index === currentHeadingIndex ? 'bg-[#8A1538]' : 'bg-[#D9D9D9]'}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* CTA Button */}
              <div className="flex justify-center mt-16 relative">
                {/* Button wrapper to handle the tilting and positioning */}
                <div className="relative w-60 h-12">
                  {/* Gold backing div */}
                  <div 
                    className="absolute inset-0 bg-[#EBC48B] rounded-md transform rotate-[-1deg] transition-transform duration-300 ease-in-out"
                    style={{ transformOrigin: 'center' }}
                  ></div>
                  
                  {/* Main button with maroon background */}
                  <a 
                    href="" 
                    className="absolute inset-0 flex items-center justify-center  p-3 bg-[#8A1538] text-white text-sm rounded-md font-medium transform rotate-[-8deg] hover:rotate-0 transition-transform duration-300 ease-in-out z-10"
                    style={{ transformOrigin: 'center' }}
                  >
                    Book a Free Demo Class
                    <svg
  className="ml-3 w-5 h-6 rotate-[-50deg]"
  fill="none"
  stroke="currentColor"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    d="M14 5l7 7m0 0l-7 7m7-7H3"
  ></path>
</svg>

                  </a>
                </div>
              </div>
              
              {/* Curriculums Section */}
              <div className="mt-12">
                <p className="text-[#8A1538] font-bold mb-5 font-bricolage text-center">Curriculums we offer:</p>
                <div className="flex items-center justify-center space-x-12 relative h-20">
                  {curriculumLogos.map((curriculum, index) => (
                    <div 
                      key={curriculum.id}
                      className="absolute transition-all duration-700"
                      style={{
                        opacity: currentCurriculumIndex === index ? 1 : 0.5,
                        transform: `translateX(${(index - currentCurriculumIndex) * 120}px)`,
                        zIndex: currentCurriculumIndex === index ? 10 : 5
                      }}
                    >
                      <img 
                        src={curriculum.logo} 
                        alt={`${curriculum.name} logo`} 
                        className="h-16 hover:opacity-100 transition"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Section - Image with animation */}
          <div className="w-full lg:w-2/5 relative flex justify-center">
            {/* WhatsApp Button */}
            <a 
  href="https://wa.me/+97455553456" 
  className="absolute -top-7 -right-2 z-10 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors shadow-lg"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Contact us on WhatsApp"
>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    className="w-7 h-7" 
    fill="currentColor"
  >
    <path 
      d="M19.3587 4.6413C17.3955 2.678 14.8015 1.5 11.9955 1.5C6.24054 1.5 1.5 6.18 1.5 12C1.5 13.9 2.03954 15.7485 3.0036 17.3385L1.5 22.5L6.87054 21.03C8.4036 21.9 10.185 22.3845 11.9955 22.3845C17.7505 22.3845 22.5 17.7045 22.5 11.8845C22.5 9.0885 21.3219 6.60449 19.3587 4.6413ZM11.9955 20.67C10.3784 20.67 8.80054 20.2043 7.42354 19.3275L7.12354 19.1532L3.92554 20.0302L4.82054 16.9455L4.63054 16.635C3.65854 15.2145 3.14954 13.6365 3.14954 12C3.14954 7.11149 7.09354 3.21449 12 3.21449C14.3685 3.21449 16.5755 4.20749 18.1784 5.82149C19.7814 7.43549 20.8584 9.642 20.8584 12C20.85 16.8885 16.9059 20.67 11.9955 20.67ZM16.7821 14.1757C16.5141 14.0415 15.2161 13.404 14.9684 13.317C14.7208 13.2285 14.5407 13.185 14.3607 13.4588C14.1807 13.7325 13.6741 14.3205 13.5141 14.5005C13.3541 14.6805 13.1941 14.703 12.9261 14.5687C12.6581 14.4345 11.7991 14.1607 10.7851 13.2593C10.0041 12.5565 9.48609 11.6925 9.32609 11.4187C9.16609 11.145 9.31209 10.9935 9.44909 10.854C9.57309 10.728 9.72009 10.5255 9.85809 10.365C9.99609 10.2045 10.0401 10.0845 10.1281 9.90449C10.2161 9.72449 10.1721 9.56399 10.1061 9.42979C10.0401 9.29559 9.52809 7.99199 9.30009 7.44449C9.07209 6.91349 8.84409 6.99149 8.68409 6.98249C8.52409 6.9735 8.34409 6.9735 8.16409 6.9735C7.98409 6.9735 7.69209 7.03999 7.44409 7.31379C7.19609 7.58759 6.51909 8.22449 6.51909 9.52799C6.51909 10.8315 7.46809 12.09 7.60609 12.27C7.74409 12.45 9.47709 15.1245 12.1401 16.2645C12.7761 16.542 13.2741 16.7092 13.6601 16.8345C14.2961 16.9477 14.8761 16.9252 15.3381 16.8592C15.8541 16.7817 16.9161 16.218 17.1441 15.582C17.3721 14.946 17.3721 14.3985 17.3061 14.2822C17.2401 14.166 17.0501 14.1 16.7821 13.9657L16.7821 14.1757Z"
    />
  </svg>
</a>
            
            {/* Vertical "Book a Free Demo Class" button */}
            <div className="absolute md:-right-44 hidden md:block top-1/2 transform -translate-y-1/2 z-10">
              <div className="bg-[#8A1538] text-white px-3 py-4 rounded transform rotate-90 origin-bottom-left whitespace-nowrap text-sm font-medium">
                Book a Free Demo Class
              </div>
            </div>
            
            <div 
              className="animate-float-reverse transition-all duration-3000"
              style={{
                animation: 'floatReverse 5s ease-in-out infinite',
              }}
            >
              <img 
                src="/assets/family-award.png" 
                alt="Family celebrating achievement" 
                className="w-full"
              />
            </div>
          </div>
        </div>
        
        {/* Core Values Section */}
      
      </div>
      <div className="mt-12 md:mt-16 bg-[#FFF3E1] py-6 px-4 sm:px-8 md:px-12 lg:px-28">
  <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between items-start md:items-center gap-6">
    {coreValues.map((value, index) => (
      <div
        key={value.id}
        className="flex items-center gap-2 w-full md:w-auto"
      >
        <img src={value.icon} alt={value.title} className="w-6 h-6 object-contain" />
        <span className="text-[#8A1538] font-medium">{value.title}</span>

        {/* Divider */}
        {index < coreValues.length - 1 && (
          <div className="hidden md:block mx-6 h-6 w-px bg-[#8A1538]"></div>
        )}
      </div>
    ))}
  </div>
</div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        
        @keyframes floatReverse {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(15px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  );
}