import { Play } from 'lucide-react';

export default function LearningSpace() {
  return (
    <div className="w-full px-4 md:py-8 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-normal text-[#655945] text-center mb-8 font-bricolage ">
          Learn More About <span className="text-[#655945] font-bold">Our Space</span>
        </h2>
        
        {/* Video Preview */}
        <div className="w-full rounded-xl overflow-hidden relative">
          <img 
            src="/assets/thumbnail.svg" 
            alt="Learning space with teacher helping student"
            className="w-full h-full object-cover"
          />
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-red-600 rounded-full p-2 shadow-lg">
              <Play size={24} className="text-white" />
            </div>
          </div>
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="p-6">
              {/* This section intentionally left empty to match the design */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}