import React from 'react';

export default function StorySection() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Left Section - Text Content */}
          <div className="w-full lg:w-1/2 font-bricolage ">
            <h2 className="text-2xl md:text-4xl font-normal text-[#655945] mb-6">
              The Story of <span className="text-[#655945] font-bold">Educare</span>
            </h2>
            
            <div className="space-y-6 font-dmsans">
              <p className="text-[#655945]">
                At <span className="font-bold text-[#655945] ">Educare</span> education center, we believe that every student deserves personalized, focused attention to reach their fullest potential. Our mission is to empower students through one-on-one tutoring, creating customized learning plans tailored to each individual's unique needs, strengths, and learning styles.
              </p>
              
              <p className="text-[#655945]">
                Founded on a passion for education and a commitment to excellence, <span className="font-bold text-[#655945] ">Educare</span> education center was established to offer students a supportive and engaging learning environment. Our team of experienced tutors is dedicated to helping students excel academically while also building confidence, independence, and a love for learning.
              </p>
              
              <p className="text-[#655945]">
                We specialize in a wide range of subjects across all grade levels, including math, science, English, and test preparation. Whether your child needs help catching up, getting ahead, or preparing for a specific exam, we are here to support their journey.
              </p>
            </div>
            
            <div className="mt-8">
              <a 
                href="" 
                className="inline-flex items-center px-5 py-2 bg-[#8A1538] text-white rounded-md font-medium hover:bg-[#8A1538]/90 transition"
              >
                Read more
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Right Section - Images */}
          <div className="w-full lg:w-1/2 relative">
  <div className="flex flex-col space-y-6 p-7">
    <div className="relative ">
      <div className="rounded-lg p-1 inline-block">
        <img 
          src="/assets/tutor.png" 
          alt="Tutor with student" 
          className="rounded md:w-4/4 md:h-auto w-[280px]  " 
        />
      </div>
      <div className="absolute -right-4 -bottom-40">
        <div className="rounded-lg p-1 inline-block">
          <img 
            src="/assets/learning.png" 
            alt="Learning experience" 
            className="rounded md:w-4/4 md:h-auto  w-[380px] "  
          />
        </div>
      </div>
     
    </div>
  </div>
</div>

        </div>
        
        {/* Mission & Vision Cards */}
        <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-10 font-dmsans">
          {/* Mission Card */}
          <div className="bg-[#FFF8F1] rounded-3xl  p-6 flex items-start space-x-6 relative">
          <div>
              <h3 className="text-xl font-semibold text-[#8A1538] mb-3">Mission</h3>
              <p className=" text-[#8A1538] md:w-[300px] w-[300px]">
                To help students succeed with personalized, 
                <span className="font-medium text-[#8A1538]">one-to-one</span> tutoring that builds 
                confidence, skills, and a love for learning.
              </p>
            </div>
            <div className="flex-shrink-0 absolute -top-10 right-0">
              <img 
                src='/assets/mission.png' 
                alt="Mission flag" 
                className="w-24 h-auto"
              />
            </div>
          
          </div>
          
          {/* Vision Card */}
          <div className="bg-[#FFF8F1] rounded-3xl p-6 flex items-start space-x-6 relative font-dmsans">
          
            <div>
              <h3 className="text-xl font-semibold text-[#8A1538] mb-3">Vision</h3>
              <p className="text-[#8A1538] md:w-[300px] w-[300px]">
                To be a trusted center where students 
                reach their potential, build confidence, 
                and prepare for a <span className="font-bold text-[#8A1538]">bright future</span>.
              </p>
            </div>
            <div className="flex-shrink-0 absolute -top-10 right-0">
              <img 
                src="/assets/vision.png" 
                alt="Vision rocket" 
                className="w-24 h-auto"
              />
            </div>
          </div>
          <div>
        <img src="/assets/zigzag.png" alt="" className='w-[180px]' />
      </div>
        </div>
      </div>
    </div>
  );
}