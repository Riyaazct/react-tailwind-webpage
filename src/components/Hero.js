import React from "react";

const Hero = () => {
  return (
    <div className="h-screen w-full">
      <img
        className="w-full h-screen object-cover"
        src="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg"
        alt="/"
      />
      {/* image overlay */}
      <div className="bg-black/30 w-full h-screen absolute top-0 left-0" />

      {/* text container */}
      <div className="w-full h-screen absolute top-0 left-0 flex justify-center flex-col">
        <div className=" text-white max-w-[1100px] md:ml-[10%] p-4">
          <p>All inclusive</p>
          <h1 className="text-5xl font-bold md:text-7xl">
            Private beaches & Getaways
          </h1>
          <p className="max-w-[600px] text-xl my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ex recusandae cum, rem sint nostrum dolorem incidunt
            commodi harum reprehenderit ipsam.
          </p>
          <button className="bg-white text-black ">
            Reserve Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
