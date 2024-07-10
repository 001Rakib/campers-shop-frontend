import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-blue-500 font-inter mt-16 pt-8 md:pt-10 lg:pt-12">
      <div className="max-w-screen-xl mx-auto p-4 md:p-6 lg:p-8">
        <div className="flex flex-wrap justify-between mb-4 md:mb-8 lg:mb-12">
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 md:mb-0">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-tent"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M11 14l4 6h6l-9 -16l-9 16h6l4 -6" />
              </svg>
              Camp Venture
            </h2>
            <p className="text-sm md:text-base lg:text-lg">
              123 Main St, Anytown, USA 12345
            </p>
            <p className="text-sm md:text-base lg:text-lg">
              <a
                href="tel:+1234567890"
                className="text-slate-800 hover:text-gray-900"
              >
                +1 234 567 890
              </a>
              <br />
              <a
                href="mailto:info@example.com"
                className="text-slate-800 hover:text-gray-900"
              >
                info@campvanture.com
              </a>
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 md:mb-0">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">
              Social Links
            </h2>
            <ul className="flex gap-4 mb-4 md:mb-8 lg:mb-12">
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-200"
                >
                  <FaFacebook className="text-white text-3xl" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <FaTwitter className="text-3xl text-white" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <FaInstagram className="text-3xl text-white" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap justify-between mb-4 md:mb-8 lg:mb-12">
          <ul className="flex justify-between mb-4 md:mb-8 lg:mb-12">
            <li className="mr-4">
              <a href="#" className="text-slate-800 hover:text-gray-900">
                About Us
              </a>
            </li>
            <li className="mr-4">
              <a href="#" className="text-slate-800 hover:text-gray-900">
                Contact Us
              </a>
            </li>
            <li className="mr-4">
              <a href="#" className="text-slate-800 hover:text-gray-900">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-800 hover:text-gray-900">
                Privacy Policy
              </a>
            </li>
          </ul>
          <p className="text-sm md:text-base lg:text-lg">
            &copy; 2024 Camp Venture. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
