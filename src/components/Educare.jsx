import React from 'react';

const Educare = () => {
  return (
    <div className="w-full">
      {/* Section: Heading + Image */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto">
        <div className="flex justify-center items-center py-6 sm:py-10">
          <h1 className="text-center font-normal text-lg sm:text-3xl lg:text-4xl text-[#655945] font-bricolage leading-snug">
            Prepare Your Child for a <span className="font-bold">World of Opportunities with Educare</span>
          </h1>
        </div>

        <div className="flex justify-center">
          <img
            src="/assets/educare-world.png"
            alt="Educare World"
            className="w-full max-w-4xl h-auto"
          />
        </div>
      </div>

      {/* Section: Quote bar */}
      <div className="w-full bg-[#FFF3E1] text-rose-800 py-4 px-4 mt-6 font-dmsans overflow-hidden">
  <div className="flex flex-col sm:flex-wrap sm:flex-row justify-center sm:justify-between items-center gap-y-4 gap-x-6 text-sm sm:text-base">
    
    {/* Quote 1 */}
    <div className="flex items-center text-center sm:text-left max-w-xs sm:max-w-none">
      <p className="font-medium leading-snug">
        Education is the foundation of greatness; let's build it together
      </p>
      <div className="ml-2 hidden sm:block">
        <img src="/assets/arabic.svg" alt="Arabic" className="w-6 h-6 object-contain" />
      </div>
    </div>

    {/* Quote 2 */}
    <div className="flex items-center text-center sm:text-left max-w-xs sm:max-w-none">
      <p className="font-medium leading-snug">
        Learning today, leading tomorrow – the Educare way
      </p>
      <div className="ml-2 hidden sm:block">
        <img src="/assets/arabic.svg" alt="Arabic" className="w-6 h-6 object-contain" />
      </div>
    </div>

    {/* Quote 3 */}
    <div className="flex items-center text-center sm:text-left max-w-xs sm:max-w-none">
      <p className="font-medium leading-snug">
        Turning dreams into achievements
      </p>
    </div>
    
  </div>
</div>

    </div>
  );
};

export default Educare;
