import Image from "next/image";
import heroImage from "public/hero-mobile.png";

export default function Hero() {
  return (
    <div className="w-full flex md:flex-col justify-start items-start pt-[50px] md:pt-[10px]">
      <div className="flex flex-col md:justify-center md:items-center">
        <div className="text-[3rem] font-[700] flex flex-col md:text-[2rem] md:text-center">
          <div className="">Borderless</div>
          <div className="">Transactions in</div>
          <div className="">
            Lightning <span className="speedy relative">peed</span>
          </div>
        </div>

        <div className="mt-5 text-sm font-light  md:text-center">
          Say Goodbye to Hassles: Dazzle Offers seamless Cross-Border Money
          Transfer Services
        </div>

        <div className="mt-5">
          <button className="bg-slate-50 px-5 py-3 rounded-md text-black cursor-pointer">
            Download Dazzle
          </button>
        </div>
      </div>
      <div className="flex lg:flex-1 justify-center md:items-start mt-5 md:h-[200px] md:w-full overflow-hidden">
        <Image src={heroImage} className="md:w-full" />
      </div>
    </div>
  );
}
