import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="bg-gray-900 text-gray-400 py-10 px-4 md:px-24 lg:px-32">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Branding Section */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo} alt="Logo" className="w-16 h-16 mb-3" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab facere
            explicabo est, 
          </p>
        </div>

        {/* Links Section */}
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold">Company</h3>
          <ul className="flex flex-col gap-2 mt-2">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                about
              </Link>
            </li>
            
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold">
            Subscribe to our newsletter
          </h3>
          <p className="mb-4">
            get the latest updates on our services
          </p>
          <div className="flex flex-col md:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-500 rounded focus:outline-none"
            />
            <button className="py-2 px-4 rounded bg-orange-500 hover:bg-orange-600 text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center text-sm text-gray-600">
        © 2024 Don Automotive. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
