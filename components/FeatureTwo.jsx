import Image from "next/image";
import { motion } from "framer-motion";

import blackCard from "public/black-card.png";

export default function FeatureTwo() {
  return (
    <div className="w-full bg-gradient-to-br from-[#f5b915] to-[#f3b815] py-[80px] md:py-[40px] flex md:gap-5 justify-between items-center md:flex-col">
      <div className="text-[#1a1a1a] font-light w-2/6 md:w-full text-6xl md:text-4xl leading-normal ml-[80px] md:ml-0 md:px-[40px]">
        Enjoy Virtual and Physical Card
      </div>
      <div className="flex flex-col w-3/6 md:w-full">
        <div className="text-black text-lg md:text-sm mr-[80px] md:mr-[0px] md:px-[40px]">
          <p className=" font-thin">
          Get the best of both worlds with our virtual and physical cards. Our
            all-in-one solution offers the convenience and security you need,
            whether you&apos;re shopping online or in-store. Simplify your wallet and
            enjoy the ultimate card experience with US
          </p>
        </div>

        <div className="mt-5 flex gap-7 md:gap-3 overflow-hidden md:px-[40px]">
          <motion.div
            whileInView={{ x: [100, 50, 0] }}
            transition={{ ease: "easeOut", duration: 2 }}
            viewport={{ once: false }}
            className="flex gap-7"
          >
            <Image src={blackCard} alt="" />
            <Image src={blackCard} alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
