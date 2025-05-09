import React from 'react';

export default function TeachingApproachSection() {
  return (
    <div className="bg-[#F9F7F4] py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Section - Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl md:text-4xl text-[#655945] mb-8 font-bricolage">
              Our way of <span className="text-[#655945] font-bold">Teaching</span>
            </h2>
            
            <div className="space-y-6 font-dmsans">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-1 h-1 rounded-full bg-[#655945]"></div>
                </div>
                <p className="text-gray-700">
                  Every teacher at <span className="font-extrabold text-[#655945]">Educare</span> brings passion to their lessons, 
                  making learning enjoyable with engaging activities tailored 
                  to inspire and motivate each student.
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                <div className="w-1 h-1 rounded-full bg-[#655945]"></div>
                </div>
                <p className="text-[#655945]">
                  We focus on creating a supportive environment where 
                  individual strengths are recognized, and personalized 
                  attention helps students excel.
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                <div className="w-1 h-1 rounded-full bg-[#655945]"></div>
                </div>
                <p className="text-gray-700">
                  Our approach combines innovative teaching methods with 
                  real-world applications, ensuring students not only learn 
                  but also understand and apply their knowledge effectively.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Section - Image */}
          <div className="w-full lg:w-1/2">
            <div className="rounded-lg overflow-hidden">
              <img 
                src='/assets/teaching.png' 
                alt="Teacher with student" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}