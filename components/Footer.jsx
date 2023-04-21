import Image from "next/image";
import Link from "next/link";
import apps from "public/apps.png";
import logoBlack from "public/logo-black.png";

export default function Footer() {
  return (
    <div className="w-full bg-gradient-to-br from-[#1a1a1a] to-[#121212] text-[#121212] py-[80px] px-[80px] md:px-[40px] flex flex-wrap md:flex-col gap-[100px]">
      <div className="w-[30%] md:w-full h-[350px] relative flex justify-center mt-[50px]">
        <div className="absolute top-[-30px] opacity-50 w-[80%] bg-gradient-to-br from-[#f4f4f4] to-[#f4f4f4] p-[40px] rounded-2xl flex flex-col"></div>
        <div className="absolute top-[-15px] opacity-90 w-[90%] bg-gradient-to-br from-[#f4f4f4] to-[#f4f4f4] p-[40px] rounded-2xl flex flex-col"></div>
        <div className="absolute w-full bg-gradient-to-br from-[#f4f4f4] to-[#f4f4f4] p-[40px] rounded-2xl flex flex-col mb-[50px]">
          <Image src={logoBlack} alt="" className="mb-5" />
          <p className="text-4xl font-bold">Send Money for Free Today</p>
          <p className="mt-5 font-thin">
            Download now to start sending money with lightening speed with just
            a few clicks.
          </p>
          <Image src={apps} alt="" className="mt-6" />
        </div>
      </div>
      <div className="w-[60%] md:w-full text-[#f4f4f4] flex md:flex-wrap gap-[100px] md:gap-[50px] mt-[50px]">
        <div className="">
          <p className="text-xl font-sans">Company</p>

          <ul className="font-thin mt-6 space-y-5 font-sans text-lg">
            <li className="">
              <Link href="#">About</Link>
            </li>
            <li className="">
              <Link href="#">FAQ</Link>
            </li>
            <li className="">
              <Link href="#">Blog</Link>
            </li>
            <li className="">
              <Link href="#">Career</Link>
            </li>
          </ul>
        </div>

        <div className="">
          <p className="text-xl font-sans">Legal</p>

          <ul className="font-thin mt-6 space-y-5 font-sans text-lg">
            <li className="">
              <Link href="#">Term of Use</Link>
            </li>
            <li className="">
              <Link href="#">Privacy</Link>
            </li>
            <li className="">
              <Link href="#">Cookies</Link>
            </li>
            
          </ul>
        </div>

        <div className="">
          <p className="text-xl font-sans">Social</p>

          <ul className="font-thin mt-6 space-y-5 font-sans text-lg">
            <li className="">
              <Link href="#">Linkedln</Link>
            </li>
            <li className="">
              <Link href="#">Twitter</Link>
            </li>
            <li className="">
              <Link href="#">Facebook</Link>
            </li>
            <li className="">
              <Link href="#">Instagram</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full text-[#f4f4f4] font-sans font-normal text-lg">
    
        <p>Developed with Next.js by <a href="https://github.com/flamezbaba" target="_blank" className="underline">Sangosanya Segun</a></p>
        <p className="mt-4">UI/UX by <a href="https://www.behance.net/gallery/167797079/Dazzle-Brand-Identity-Design" target="_blank" className="underline">Shittu David</a></p>
      </div>
    </div>
  );
}
