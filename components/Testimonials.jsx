import { useState } from "react";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { ImQuotesLeft } from "react-icons/im";
import { motion } from "framer-motion";
import Testimony from "@/components/Testimony";

import naijaFlag from "public/naijaflag.png";
import ukFlag from "public/ukflag.png";
import usFlag from "public/usflag.png";
import fc from "public/fc.png";
import mc1 from "public/mc1.png";
import mc2 from "public/mc2.png";

const rawTestimonies = [
  {
    flag: usFlag,
    image: mc1,
    bgColor: "#0153b5",
    text: "Dazzle has been a game-changer. The process is so simple and quick that I can send money anytime, anywhere, and it's immediately available to the recipient.",
    person: "John Doe, CEO of FinTech",
  },
  {
    flag: naijaFlag,
    image: mc2,
    bgColor: "#e1ad1d",
    text: "Dazzle has been a game-changer. The process is so simple and quick that I can send money anytime, anywhere, and it's immediately available to the recipient.",
    person: "Peter James, CEO of PayAccord",
  },
  {
    flag: usFlag,
    image: mc2,
    bgColor: "#237832",
    text: "Dazzle has been a game-changer. The process is so simple and quick that I can send money anytime, anywhere, and it's immediately available to the recipient.",
    person: "Micheal Kings, CEO of E-commerce",
  },
  {
    flag: ukFlag,
    image: fc,
    bgColor: "#1a1a1a",
    text: "Dazzle has been a game-changer. The process is so simple and quick that I can send money anytime, anywhere, and it's immediately available to the recipient.",
    person: "Sarah Wilson, CEO of Hummingbird",
  },
];

export default function Testimonials() {
  const [testimonies, setTestimonies] = useState(rawTestimonies);

  const prev = () => {
    const cc = [...testimonies];
    const popped = cc.shift();
    cc.push(popped);

    setTestimonies((current) => cc);
  };

  const next = () => {
    const cc = [...testimonies];
    const popped = cc.pop();
    cc.unshift(popped);

    setTestimonies((current) => cc);
  };
  return (
    <div className="w-full bg-gradient-to-br from-[#f4f4f4] to-[#f4f4f4] text-[#1a1a1a] px-[80px] py-[80px] md:py-[40px] flex md:gap-11 justify-between items-center md:flex-col md:px-[40px] relative">
      <ImQuotesLeft size={200} className="absolute top-[-70px] left-[50px] md:hidden" />
      <div className="w-full flex flex-col justify-center items-center">
        <p className="text-6xl md:text-3xl md:text-center">
          Trust is built with consistency
        </p>
        <div className="w-4/6 md:w-full flex  justify-center relative mt-[130px] md:mt-[100px]">
          {testimonies.map((i, index) => (
            <Testimony
              image={i.image}
              flag={i.flag}
              text={i.text}
              bgColor={i.bgColor}
              index={index}
              length={testimonies.length}
              title={i.person}
              key={index}
            />
          ))}
        </div>
        <div className="flex gap-7 mt-[320px] md:mt-[300px]">
          <div
            onClick={prev}
            className="flex justify-center items-center w-[100px] h-[100px] md:w-[70px] md:h-[70px] bg-gray-200 rounded-full hover:scale-90 transition-all ease-in duration-150 cursor-pointer"
          >
            <BsArrowLeftShort size={55} />
          </div>

          <div
            onClick={next}
            className="flex justify-center items-center w-[100px] h-[100px] md:w-[70px] md:h-[70px] bg-gray-200 rounded-full hover:scale-90 cursor-pointer"
          >
            <BsArrowRightShort size={55} />
          </div>
        </div>
      </div>
    </div>
  );
}
