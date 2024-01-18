import React from "react";
import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";

interface CardProps {
  card: {
    names: string[];
    bgColor: string;
    textColor: string;
  },
  action: "cross" | "tick";
}
const Card: React.FC<CardProps> = ({ card, action }) => {
  return (
    <div className="flex flex-wrap w-full justify-between md:w-3/5 ">
      {card.names.map((label, index) => (
        <div
          key={index}
          className={`w-40 h-40 m-2 md:m-0 flex flex-col justify-between text-left bg-${card.bgColor} p-2 text-${card.textColor} text-sm`}
        >
          {label}
          <div className="w-6 h-6 rounded-full bg-gray-200 ml-28">
            {action === "cross" ? (
              <RxCross2 color="black" className="ml-1 mt-1" />
            ) : (
              <TiTick color="black" className="ml-1 mt-1" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
