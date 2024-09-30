import React from "react";
import Button from "../Button";
import flipkart from "../../assets/flipkart.png";
import amazon from "../../assets/amazon.png";
import Shoe from "../../assets/shoe_image.png";

function Hero() {
  return (
    <>
      <main className="h-3/4 mt-10 flex items-center justify-evenly">
        <div className=" flex items-start justify-center flex-col gap-4">
          <h1 className="text-[108px] w-[800px] font-extrabold leading-[102px]">
            YOUR FEET DESERVE THE BEST
          </h1>
          <p className="font-semibold max-w-[400px] ">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="flex flex-row gap-3">
            <Button text="Shop Now" className="hover:bg-red-500 bg-red-600" />
            <Button
              text="Category"
              className="text-black border-[1px] hover:bg-gray-200 border-black"
            />
          </div>
          <span>Also Available On</span>
          <div className="flex flex-row gap-3">
            <img className="w-9" src={flipkart} />
            <img className="w-9" src={amazon} />
          </div>
        </div>
        <div>
          <img className="" src={Shoe} />
        </div>
      </main>
    </>
  );
}

export default Hero;
