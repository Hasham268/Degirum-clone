import React from "react";
interface HorizontalCardProps {
  data: {
    image: string;
    date: string;
    desc: string;
  }[]
}
const HorizontalCard: React.FC<HorizontalCardProps> = ({ data }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between mb-12 md:mb-28">
      {data.map((elem, index) => (
        <div
          className="md:w-50 w-full h-56 flex justify-between m-2 border-2 border-gray-200"
          key={index}
        >
          <img className="h-52 w-52" src={elem.image} alt="icon" />
          <div className="flex flex-col p-8">
            <h2 className="text-sm text-gray-600 mb-2 md:mb-6">{elem.date}</h2>
            <p className="text-lg text-black font-semibold">{elem.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HorizontalCard;
