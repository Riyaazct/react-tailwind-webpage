import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleOnClickMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="absolute w-full flex justify-between items-center p-4">
      <h1 className="text-white font-bold text-2xl z-20">
        Experiences
      </h1>
      <HiMenuAlt3
        onClick={handleOnClickMenu}
        className="text-white z-20 cursor-pointer"
        size={25}
      />

      <div
        className={
          isActive
            ? "fixed w-full h-screen z-10 bg-black/90 ease-in duration-300 left-0 top-0"
            : "absolute left-[-100%] w-full h-screen ease-in-out duration-500 z-10 top-0"
        }
      >
        <div className="w-full h-full flex flex-col justify-center items-center">
          <ul>
            <li className="my-14 text-white text-3xl font-bold">
              Home
            </li>
            <li className="my-14 text-white text-3xl font-bold">
              Destinations
            </li>
            <li className="my-14 text-white text-3xl font-bold">
              Reservations
            </li>
            <li className="my-14 text-white text-3xl font-bold">
              Amenities
            </li>
            <li className="my-14 text-white text-3xl font-bold">
              Rooms
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
