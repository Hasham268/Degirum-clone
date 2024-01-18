import React from 'react'
interface BigCardProps {
  data: {
  name: string;
  desc: string;
  }[]
}
const BigCard: React.FC<BigCardProps> = ({ data }) => {
  return (
    <div className="flex flex-nowrap overflow-x-auto scroll-auto">
      {data.map((elem, index) => (
        <div
          className="shrink-0 p-6 w-[50%] md:w-[32%] h-96 flex flex-col justify-between m-2 border-2 border-gray-200"
          key={index}
        >
          <h2 className="text-xl font-semibold">{elem.name}</h2>
          <img
            className="h-52 w-52 m-auto "
            src="\src\assets\icon.png"
            alt="icon"
          />
          <p className="text-lg text-gray-600">{elem.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default BigCard