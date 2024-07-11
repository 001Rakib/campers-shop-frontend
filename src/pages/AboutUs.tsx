import SectionHeader from "@/components/sectionHeader/SectionHeader";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <SectionHeader header1="About" header2="Us"></SectionHeader>
      <div className=" p-4 pt-6 md:p-6 lg:p-12 font-inter">
        <div className="flex-row md:flex md:justify-between ">
          <div className="mb-12">
            <div className="mb-14">
              <h2 className="text-2xl font-bold mb-4 text-blue-500">
                Contact Information
              </h2>
              <ul className="list-none mb-4">
                <li className="mb-2">
                  <span className="font-bold">Phone:</span> 555-555-5555
                </li>
                <li className="mb-2">
                  <span className="font-bold">Email:</span>{" "}
                  <a>campventure@info.com</a>
                </li>
                <li className="mb-2">
                  <span className="font-bold">Address:</span> 123 Main St, New
                  York, USA
                </li>
              </ul>
            </div>
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-500">
                Social Media Links
              </h2>
              <ul className="list-none mb-4 flex gap-4">
                <li className="mb-2">
                  <a
                    href="https://facebook.com/example"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="text-2xl"></FaFacebook>
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://twitter.com/example"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter className="text-2xl"></FaTwitter>
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://instagram.com/example"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-2xl"></FaInstagram>
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-500">
                Mission Statement
              </h2>
              <p className="md:mr-16">
                Our mission is to inspire and equip outdoor enthusiasts with
                high-quality camping gear and essentials. We strive to enhance
                every camping experience by providing reliable, durable, and
                innovative products that empower adventurers to explore the
                great outdoors with confidence and comfort.
              </p>
            </div>
          </div>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-blue-500">Location</h2>
            <div className="h-[100%] w-[100%]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48386.87077774984!2d-74.03175132912182!3d40.71406651985104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25990e23d7e8d%3A0xfa615edfd1b67e18!2sWashington%20Square%20Park!5e0!3m2!1sen!2sbd!4v1720706055750!5m2!1sen!2sbd"
                width="400"
                height="350"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="mb-12 max-w-screen-xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-500 text-center mb-10">
            Team Members
          </h2>
          <ul className="list-none mb-4 grid grid-cols-2 md:grid-cols-4 place-content-center justify-center">
            <li className="mb-4">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
                alt="Team Member 1"
                className="w-20 h-26 rounded-lg"
              />
              <div>
                <h3 className="text-lg font-semibold py-2">John Anderson</h3>
                <p className="text-slate-500">CEO and Founder</p>
              </div>
            </li>
            <li className="mb-4">
              <img
                src="https://images.unsplash.com/photo-1522556189639-b150ed9c4330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFuJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
                alt="Team Member 2"
                className="w-20 h-26 rounded-lg"
              />
              <div>
                <h3 className="text-lg font-semibold py-2">Michael Thompson</h3>
                <p className="text-slate-500">Marketing Manager</p>
              </div>
            </li>
            <li className="mb-4">
              <img
                src="https://images.unsplash.com/photo-1610655507808-a59293f4e332?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tYW4lMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Team Member 2"
                className="w-20 h-26 rounded-lg"
              />
              <div>
                <h3 className="text-lg font-semibold py-2">Sarah Johnson</h3>
                <p className="text-slate-500 text-wrap">
                  Customer Experience Manager
                </p>
              </div>
            </li>
            <li className="mb-4">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
                alt="Team Member 2"
                className="w-20 h-26 rounded-lg"
              />
              <div>
                <h3 className="text-lg font-semibold py-2">Jessica Brown</h3>
                <p className="text-slate-500">Social Media Manager</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
