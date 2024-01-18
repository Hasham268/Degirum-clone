import Card from "./Card";
import React from "react";

const ApproachSection = () => {

  interface ICard {
    names: string[];
    bgColor: string;
    textColor: string;
  }

  const tCard: ICard = {
    names: [
      "Investments in various HW",
      "Multiple Application SW",
      "Multiple Models for Each HW",
      "Lost time, costs and opportunities",
    ],
    bgColor: "black",
    textColor: "white",
  };

  const dCard: ICard = {
    names: [
      "Only one application SW for all HW Options",
      "Only one SW toolchain",
      "Buying HW is the Last Step",
      "Lightning-fast time to market. Saved time and costs",
    ],
    bgColor: "white",
    textColor: "black",
  };

  return (
    <div className="bg-gray-500 py-20 md:py-32 relative ">
      <div className="md:flex md:justify-around mb-6">
        <div>
          <div className="h-0.5 w-96 bg-gray-400/[0.5] "></div>
          <h2 className="text-xl text-white text-center md:text-left">
            Traditional Approach
          </h2>
        </div>

        <Card card={tCard} action="cross" />
      </div>

      <div className="md:flex md:justify-around ">
        <div>
          <div className="h-0.5 w-96 bg-gray-400/[0.5] "></div>
          <h2 className="text-xl text-white  text-center md:text-left">
            DeGirum® Approach
          </h2>
        </div>
        <Card card={dCard} action="tick" />
      </div>
    </div>
  );
};

export default ApproachSection;
