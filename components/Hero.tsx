import React from "react";
import Image from "next/image";
import hero from "@/public/hero.png";

const Hero = () => {
  return (
    <div className="flex justify-center gap-45 items-center">
      <div>
        <h1 className="text-[#BDBDBD] font-light text-[64px] tracking-wider">
          PROJECT <br />{" "}
        </h1>
        <h2 className="font-bold text-[#333333] tracking-tight text-[60px]">
          LORUM
        </h2>
      </div>
      <Image src={hero} alt="hero" />
    </div>
  );
};

export default Hero;
