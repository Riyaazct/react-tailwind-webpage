import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { TiSocialPinterest } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="w-full bg-gray-900 text-gray-300 py-11 px-5 mt-24 lg:grid lg:grid-cols-2 lg:px-28 lg:pb-0">
      <div className="grid grid-cols-2 lg:grid-cols-4 lg:w-[55vw]">
        <div className="p-3">
          <h3 className="uppercase font-bold ">Solutions</h3>
          <p className="py-1">Travel</p>
          <p className="py-1">Bookings</p>
          <p className="py-1">Flights</p>
          <p className="py-1">Cruises</p>
          <p className="py-1">Ground</p>
        </div>
        <div className="p-3">
          <h3 className="uppercase font-bold ">Support</h3>
          <p className="py-1">Pricing</p>
          <p className="py-1">Documentation</p>
          <p className="py-1">Tours</p>
          <p className="py-1">Refunds</p>
        </div>
        <div className="p-3">
          <h3 className="uppercase font-bold ">Company</h3>
          <p className="py-1">About</p>
          <p className="py-1">Blog</p>
          <p className="py-1">Jobs</p>
          <p className="py-1">Press</p>
          <p className="py-1">Partners</p>
        </div>
        <div className="p-3">
          <h3 className="uppercase font-bold ">Legal</h3>
          <p className="py-1">Claims</p>
          <p className="py-1">Privacy</p>
          <p className="py-1">Terms</p>
          <p className="py-1">Policies</p>
          <p className="py-1">Conditions</p>
        </div>
      </div>
      <div className="px-2 py-6 flex flex-col w-full h-full lg:pt-1 lg:ml-auto lg:max-w-[500px] lg:p-10 ">
        <div>
          <h3 className="font-bold my-2 pb-2 ">
            SUBSCRIBE TO YOUR NEWSLETTERS
          </h3>
          <p>
            The Latest deals, articles and resources sent to your
            inbox weekly.
          </p>
        </div>

        {/* form for newsletter */}
        <div className="py-2 lg:flex lg:items-center lg:gap-4 ">
          <form>
            <input
              className="w-full my-4 p-2 rounded-md lg:w-[350px]"
              type="text"
              placeholder="Enter Email.."
            />
          </form>
          <div>
            <button className="p-2 w-full rounded-md lg:max-w-[90px]">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Social media */}
      <div className="flex flex-col text-center mt-10 text-gray-500 border-t-2 border-gray-500 lg:flex-row lg:items-center lg:justify-between lg:w-screen lg:max-w-[85vw] lg:mb-0">
        <p className="p-2 text-lg my-5 ">
          2022 Experiences, LLC. All rights reserved
        </p>
        <div className="flex justify-between text-2xl mt-2">
          <FaFacebook className="lg:mx-10" />
          <FaInstagram className="lg:mx-10" />
          <FaTwitter className="lg:mx-10" />
          <TiSocialPinterest className="lg:mx-10" size={35} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
