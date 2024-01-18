import React from "react";
import BigCard from "./BigCard";
import HorizontalCard from "./HorizontalCard";
import i1 from "../assets/1.jpg";
import i2 from "../assets/2.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
const AdvantagesSection = () => {
  interface IData {
    name: string;
    desc: string;
  }

  interface ICard {
    image: string;
    date: string;
    desc: string;
  }
  const data: IData[] = [
    {
      name: "Seamless Deployment",
      desc: "Managed deployed models and devices in the cloud",
    },
    {
      name: "Evauate before buy",
      desc: "Managed deployed models and devices in the cloud",
    },
    {
      name: "Painless model integration",
      desc: "Managed deployed models and devices in the cloud",
    },
    {
      name: "Intuitive Software",
      desc: "Managed deployed models and devices in the cloud",
    },
    {
      name: "Powerfull hardware",
      desc: "Managed deployed models and devices in the cloud",
    },
  ];

  const hCard: ICard[] = [
    {
      image: i1,
      date: "Apr 2, 2010",
      desc: "Managed deployed models and devices in the cloud",
    },
    {
      image: i2,
      date: "May 4, 2013",
      desc: "Managed deployed models and devices in the cloud",
    },
  ];

  
  return (
    <div className="px-7 bg-white sticky top-[-78vh] md:top-[-97vh]">
      <h1 className="text-5xl text-black w-full text-center mb-12 md:mb-32 pt-9">
        Advantages
      </h1>

      <BigCard data={data} />
      <div className="flex justify-center">
        <div className="flex justify-between cursor-pointer w-36 h-16 bg-white text-black mt-12 rounded-3xl px-2 border-2 border-gray-500 items-center ">
          <div className="">Get Started</div>
          <div className="w-6 h-6 rounded-full bg-black">
            <FaArrowRightLong color="white" className="ml-1 mt-1" />
          </div>
        </div>
      </div>

      <h1 className="text-5xl text-black mb-6 pt-9">Latest News</h1>
      <HorizontalCard data={hCard} />
    </div>
  );
};

export default AdvantagesSection;
