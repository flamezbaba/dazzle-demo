import Image from "next/image";
import { BsCheckLg } from "react-icons/bs";
import { motion } from "framer-motion";

import roundFlag from "public/round-flags.png";
import female from "public/female.png";

export default function FeatureOne() {
  return (
    <div className="w-full bg-gradient-to-br from-[#f4f4f4] to-[#f4f4f4] px-[80px] py-[80px] md:py-[40px] flex md:gap-11 justify-between items-center md:flex-col md:px-[40px]">
      <div className="text-[#1a1a1a] w-1/2 md:w-full">
        <p className="text-6xl leading-snug md:text-4xl font-thin">
          Sending Money is as Simple as Sending a Text Message
        </p>
        <p className="mt-5 font-thin">
          With just a few taps on your phone, you can transfer money to anyone,
          anywhere in the world. We believe that sending money over the world
          should be affordable, convenient. and hassle-free.
        </p>
      </div>
      <div className="flex place-content-end md:pb-10">
        <div className="bg-white rounded-full p-[50px] drop-shadow-md relative">
          <motion.div
            whileInView={{ rotate: [0, 30, 60, 90, 110, 360] }}
            transition={{ ease: "easeOut", duration: 3 }}
            viewport={{once: false}}
          >
            <Image src={roundFlag} className="w-[350px]" />
          </motion.div>
          <div className="bg-white rounded-2xl drop-shadow-md absolute top-0 md:top-[-20px] left-[-100px] md:left-[-10px] flex gap-3 items-center p-5 md:p-3">
            <Image src={female} className="w-[70px] h-[70px] rounded-full" />
            <p className="text-black">It's so simple</p>
          </div>
          <div className="bg-white rounded-2xl drop-shadow-sm absolute bottom-[36px] md:bottom-[-30px] md:right-[20px] lg:left-[-50px] flex lg:flex-col md:flex items-center p-7 md:p-3 md:gap-2">
            <div className="w-[50px] md:w-[30px] h-[50px] md:h-[30px] bg-green-700 rounded-full flex justify-center items-center">
              <BsCheckLg strokeWidth={1} size={17} />
            </div>
            <div className="text-black text-center mt-4">
              You have sent $2000 to David
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
