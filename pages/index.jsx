import Image from "next/image";
import Head from "next/head";
import { Lexend } from "next/font/google";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import FeatureOne from "@/components/FeatureOne";
import FeatureTwo from "@/components/FeatureTwo";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const lexend = Lexend({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={`${lexend.className} flex min-h-screen flex-col p-0 m-0`}>
      <Head>
        <title>Dazzle Demo By Dev.Segun</title>
      </Head>
      <div className="w-full bg-gradient-to-br from-[#1a1a1a] to-[#121212]">
        <div className="w-full bg-hero-thunder bg-no-repeat bg-contain  bg-right-top md:bg-right-bottom px-[80px] md:px-[40px]">
          <NavBar />
          <Hero />
        </div>
      </div>
      <FeatureOne />
      <FeatureTwo />
      <Testimonials />
      <Footer />
    </main>
  );
}
