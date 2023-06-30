"use client";

import Image from "next/image";

import { CustomButton } from "@components";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <div className="flex-1 pt-36 padding-x ">
        <h1 className="hero__title text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400">
          車をレンタルして出かけましょう
        </h1>

        <p className="hero__subtitle text-white">
          車が必要な時にすぐにレンタルできます
        </p>

        <CustomButton
          title="車を探す"
          containerStyles="text-secondary-orange bg-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Hero;