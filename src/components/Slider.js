import React, { useState } from "react";
import { BsDot } from "react-icons/bs";
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
} from "react-icons/bs";

const slides = [
  {
    url: "https://images.unsplash.com/photo-1464093515883-ec948246accb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2659&q=80",
    title: "Lobster",
  },
  {
    url: "https://images.unsplash.com/photo-1512132411229-c30391241dd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    title: "Sushi",
  },
  {
    url: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    title: "Pasta",
  },
  {
    url: "https://images.unsplash.com/photo-1539136788836-5699e78bfc75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    title: "Salmon",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const previousSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? slides.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full max-w-[1400px] h-[580px] m-auto py16 px-4 relative group">
      <div
        className="w-full h-full rounded-2xl bg-cover bg-center"
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
        }}
      ></div>

      {/* Left Side */}
      <div
        className="group-hover:bg-black/20 rounded-full p-2 text-white absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 cursor-pointer text-2xl"
        onClick={previousSlide}
      >
        <BsChevronCompactLeft size={30} />
      </div>
      {/* Right Side */}
      <div
        className="group-hover:bg-black/20 rounded-full p-2 text-white absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 cursor-pointer text-2xl"
        onClick={nextSlide}
      >
        <BsChevronCompactRight size={30} />
      </div>
      <div className="flex justify-center top-4 py-52">
        {slides.map((e, selectedIndex) => (
          <div>
            <BsDot size={30} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
