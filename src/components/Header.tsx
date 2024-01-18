import React, { useEffect, useState } from "react";
import backgroundVideo from "../assets/video.mp4";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const choices: string[]= ["Simple", "Private", "Perfect"];
  const choicesLength = choices.length;
  let index = 0;
  const [sub, setSub] = useState<string>(choices[0]);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setInterval(() => {
      index = (index + 1) % choicesLength;
      setSub(choices[index]);
    }, 3000);
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    setScrolled(scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="md:sticky md:top-[-150vh]">
      <div className="relative h-full">
        <div className="absolute inset-0 overflow-hidden ">
          <video className="w-full h-full object-cover" autoPlay muted loop>
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="relative z-10 ">
          <div className="flex justify-between items-center pt-6 md:pt-0 px-7 text-white">
            <div className="text-2xl">DeGirum</div>

            <div
              className="md:hidden"
              onClick={() => {
                let elementToToggle = document.getElementById("menu");
                elementToToggle?.classList.toggle("hidden");
              }}
            >
              <CiMenuBurger size={35} color="white" />
            </div>

            <div
              id="menu"
              className="z-50 text-2xl md:text-lg absolute left-[-20px] top-6 md:top-0 md:left-0 md:relative flex flex-col gap-3 p-4 md:p-0 md:gap-0 md:flex-row justify-between ml-52 w-1/2 md:w-2/4 bg-white text-black md:text-white md:bg-inherit"
            >
              <div className="md:hidden flex justify-end cursor-pointer">
                <RxCross2
                  onClick={() => {
                    let elementToToggle = document.getElementById("menu");
                    elementToToggle?.classList.toggle("hidden");
                  }}
                  color="black"
                />
              </div>
              <a className="border-b-2 border-gray-400 md:border-0" href="#">
                Price
              </a>
              <a className="border-b-2 border-gray-400 md:border-0" href="#">
                Plans
              </a>
              <a className="border-b-2 border-gray-400 md:border-0" href="#">
                News
              </a>
              <a className="border-b-2 border-gray-400 md:border-0" href="#">
                Company
              </a>
              <a className="border-b-2 border-gray-400 md:border-0" href="#">
                Partners
              </a>
              <a className="border-b-2 border-gray-400 md:border-0" href="#">
                Resources
              </a>
              <a className="border-b-2 border-gray-400 md:border-0" href="#">
                Contacts
              </a>
            </div>

            <div className="hidden md:block">
              <button className="w-20 h-9 bg-black text-white my-12 rounded-3xl  border-2 border-gray-500">
                Sign In
              </button>
              <button className="w-20 h-9 ml-2 bg-white text-black my-12 rounded-3xl  border-2 border-gray-500">
                Sign Up
              </button>
            </div>
          </div>

          <div className="px-7 text-white pt-28 md:ml-32 font-thin">
            <div
              className={`w-full text-center text-7xl text-slate-500 md:transition-transform md:duration-500 md:transform ${
                scrolled
                  ? "-translate-y-[300px] opacity-15"
                  : "translate-y-0 opacity-100"
              }`}
            >
              <h1>Making Edge AI</h1>
              <h1 className="text-white md:ml-[-280px]">{sub}</h1>
            </div>

            <div
              className={`flex flex-col md:flex-row md:items-center md:justify-between md:transition-transform md:duration-500 md:transform ${
                scrolled
                  ? "-translate-y-[400px] opacity-10"
                  : "translate-y-0 opacity-90"
              }`}
            >
              <div className="w-6 h-6 rounded-full border-2 border-white bg-black cursor-pointer mt-10 ml-[-100px]">
                <FaArrowDown color="white" className="ml-[2px] mt-1" />
              </div>

              <div className="flex justify-between ml-20 md:ml-0 cursor-pointer w-36 h-16 bg-black text-white mt-12 rounded-3xl px-2 border-2 border-gray-500 items-center ">
                <div className="">Get Started</div>
                <div className="w-6 h-6 rounded-full bg-white">
                  <FaArrowRightLong color="black" className="ml-1 mt-1" />
                </div>
              </div>
            </div>

            <div>
              <div className="flex md:justify-end justify-star">
                <p
                  className={`text-xl  md:text-left font-semibold w-full md:w-1/2 mt-28 md:transition-transform md:duration-1000 md:transform ${
                    scrolled
                      ? "-translate-y-[200px] opacity-90"
                      : "translate-y-0 opacity-100"
                  }`}
                >
                  Scalable DeGirum® Cloud Platform revolutionizes the very
                  approach to Edge AI development. From ML model design and
                  application development to hardware selection and testing, it
                  dramatically simplifies, shortens, and streamlines the
                  development cycle.
                </p>
              </div>

              <div className="pb-12 w-full">
                <div className="flex justify-around mb-32">
                  <div className="ml-[46px] mt-[300px] md:ml-[-70px] flex justify-around cursor-pointer w-36 h-16 bg-black text-white md:mt-12 rounded-3xl px-2 border-2 border-gray-500 items-center ">
                    <div className="">Software</div>
                  </div>
                  <div className="text-5xl text-white">
                    <div className="mt-32 ml-[-180px] md:ml-[-100px] transition-transform duration-1000 hover:translate-y-[-100%]">
                      <h2>DeGirum®</h2>
                      <h2>Cloud Platform</h2>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row justify-around items-center mt-[-110px] md:mt-0">
                  <div className="ml-[-100px] flex justify-around cursor-pointer w-36 h-16 bg-black text-white mt-12 rounded-3xl px-2 border-2 border-gray-500 items-center ">
                    <div className="">Models</div>
                  </div>
                  <div className="flex justify-around ml-[-100px] md:ml-0 cursor-pointer w-36 h-16 bg-black text-white mt-12 rounded-3xl px-2 border-2 border-gray-500 items-center ">
                    <div className="">Hardware</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
