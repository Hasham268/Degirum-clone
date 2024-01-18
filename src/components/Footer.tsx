import React from 'react'
import backgroundImage from "../assets/footer.jpg"
import { FaArrowRightLong } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div
      className="bg-cover bg-center px-7 bg-fixed relative "
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="pt-20 ml-auto md:w-2/4">
        <div className="text-4xl text-white">
          <h2>DeGirum®</h2>
          <h2>Cloud Platform</h2>
        </div>
        <div className="flex justify-around cursor-pointer w-36 h-16 bg-black text-white mt-12 rounded-3xl px-2 border-2 border-gray-500 items-center ">
          <div className="">Next</div>
          <div className="w-6 h-6 rounded-full bg-white">
            <FaArrowRightLong color="black" className="ml-1 mt-1" />
          </div>
        </div>
      </div>

      <div className="mt-36">
        <div className="h-0.5 w-full bg-gray-600/[0.5] "></div>
        <div className="flex justify-between text-xl mt-2 text-white">
          <div>DeGirum®</div>
          <div>+1650 660 4619</div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-1 md:gap-0 justify-between text-sm mt-60 pb-6 text-white font-semi-bold">
        <a href="#">Copyright © 2023 DeGirum®</a>
        <a href="#">Teams of Service</a>
        <a href="#">Site by Vide Infra</a>
      </div>
    </div>
  );
}

export default Footer