import { Spotlight } from "@/component/ui/Spotlight";
import { TextGenerateEffect } from "./ui/Text-Effect";
import Shimmer from "./ui/Shimmer";
import { FcCursor } from "react-icons/fc";
import Link from "next/link";
import Social from "./Social";
import Photo from "./Picture";
import { Vortex } from "./ui/Vortex";
import { TypewriterEffectSmooth } from "./ui/Typewriter";
import { words } from "@/data";

const Hero = () => {
  return (
    <Vortex
      containerClassName="h-auto w-full pt-20 pb-36"
      particleCount={700}
      baseRadius={1}
      baseHue={120}
      rangeY={80}
      rangeSpeed={1.5}
      backgroundColor="black"
    >
      <div className="">
        {/**
         *  UI: Spotlights
         *  Link: https://ui.aceternity.com/components/spotlight
         */}
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-full"
            fill="purple"
          />
          <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        </div>

        {/**
         *  UI: grid
         *  change bg color to bg-black-100 and reduce grid color from
         *  0.2 to 0.03
         */}

        <div className="h-full flex justify-center z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[90vw] flex flex-col items-center justify-center xl:flex-row gap-10">
            {/* text */}

            <div className="text-center xl:text-left lg:max-w-[40vw] text-gray-300">
              <span>Hello i&apos;m</span>
              <h1 className="text-[40px] font-bold capitalize leading-[3rem]">
                Okoye <br />
                <span className="under-line">Micheal</span>
              </h1>
              <div className="py-8">
                <TextGenerateEffect
                  words=" I am a front End developer 
                i utilize the latest technologies for web development using 
                Typescript for enhanced type safety for secure deployment.   Project Happy Deployment."
                  className="text-center text-[20px] md:text-xl lg:text-2xl"
                />
              </div>
              <div className="mt-4 flex flex-col items-center justify-center xl:flex-row xl:justify-start xl:space-x-8">
                <div className="flex gap-x-2">
                  <Link
                    href="https://res.cloudinary.com/dnsteuqq1/image/upload/cv_blijgd.pdf"
                    target="_blank"
                    className="flex items-center space-x-2 rounded-full border-2 border-blue px-6 py-3 font-medium uppercase text-blue transition-all hover:bg-blue/80 hover:text-lighted"
                  >
                    <span className="text-sm">Download Cv</span>
                    {/* <Download className="size-5" /> */}
                  </Link>
                </div>
                <div className="flex py-4 xl:py-0">
                  <Social />
                </div>
              </div>
            </div>
            {/* image */}

            <Photo color="#6E8898" />
          </div>
        </div>
      </div>
    </Vortex>
  );
};

export default Hero;
