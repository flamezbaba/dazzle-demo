import Image from "next/image";
import logoWhite from "public/logo-white.png";

export default function NavBar() {
  return (
    <div className="w-full bg-transparent h-[80px] flex justify-start items-center">
      <div className="logo">
        <Image src={logoWhite} />
      </div>
      <div className="flex flex-1 gap-[40px] justify-center md:hidden">
        <div className="">About</div>

        <div className="">Blog</div>

        <div className="">Faq</div>
      </div>
    </div>
  );
}
