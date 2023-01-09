import React from "react";

const Footer = () => {
  return (
    <div className="h-full w-full bg-gray-900 text-gray-300 grid grid-cols-2 px-5 py-8">
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
      <div>
        <h3>SUBSCRIBE TO YOUR NEWSLETTERS</h3>
        <p>
          The Latest deals, articles and resources sent to your inbox
          weekly.
        </p>
      </div>
      <div>
        <form>
          <input type="text" placeholder="Enter Email.." />
        </form>
        <div>
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
