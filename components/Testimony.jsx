import Image from "next/image";

export default function Testimony({
  index,
  image,
  flag,
  text,
  title, length,
  bgColor,
}) {
  const newIndex = length - index ;
  const topClass = index == length ? "" : "-" + newIndex * 18 + "px";
  const widthClass = index == length ? "100%" : "" + (100 - newIndex * 10) + "%";
  const opacity = index == length ? 1 :  1/newIndex + 0.6;

  return (
    <div
      className={`absolute md:top-[-20px] rounded-3xl h-[300px] flex flex-col justify-between p-[40px] overflow-hidden transition-all ease-linear duration-200`}
      style={{ width: widthClass, backgroundColor: bgColor, top: topClass, opacity: opacity }}
    >
      <Image src={flag} className="w-[40px] md:w-[25px]" alt="" />
      <div className="w-full flex justify-between items-end">
        <div className="text-white font-sans font-thin">
          <p className="text-lg md:text-sm">{text}</p>
          <p className="text-sm mt-5 md:font-bold">{title}</p>
        </div>
        <Image src={image} className="w-[30%] md:hidden" alt="" />
      </div>
    </div>
  );
}
