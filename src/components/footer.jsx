import React from 'react';
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#8A1538] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        
        {/* Logo */}
        <div>
          <img src="/assets/logo.svg" alt="Educare Logo" className="w-32 mb-4" />
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2">
            {['Home', 'About', 'Curriculum', 'Career', 'Blogs', 'Contact us'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:underline">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-2">
            <li><a href="mailto:educare@gmail.com" className="hover:underline">educare@gmail.com</a></li>
            <li><a href="mailto:info@educare.com" className="hover:underline">info@educare.com</a></li>
            <li><a href="tel:+97444123456" className="hover:underline">+974 4412 3456</a></li>
            <li><a href="tel:+97455347890" className="hover:underline">+974 5534 7890</a></li>
          </ul>

          <div className="flex gap-4 text-lg mt-4 ">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        {/* Office Address */}
        <div className="flex flex-col sm:flex-row md:gap-16">
          <img src="/assets/map.svg" alt="Map"className="md:w-[140px] md:h-[200px] h-[200px] hidden md:block object-contain"/> 
      
          <div>
            <h3 className="font-semibold mb-4">Office Address</h3>
            <p className="mb-4 leading-relaxed">
              Educare Education Center<br />
              Building 45, Al Sadd Street,<br />
              Doha, Qatar
            </p>
            <a href="#" className="underline inline-block">View on Map</a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#DCC196]/30 py-6 px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center text-xs gap-2 text-white">
        <p>© 2024 <a href="#" className="underline">educare</a></p>
        <p className="text-center">Designed By <span className="text-[#DCC196]">Noviindus Technologies</span></p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a href="#" className="hover:underline">Terms & Conditions</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
