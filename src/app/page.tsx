"use client"

import React, { useRef } from 'react';

// ICONS & CUSTOM COMPONENTS
import Button from '@/components/segments/Button';

// UI
import { useScroll, useTransform } from "framer-motion";
import { GoogleGeminiEffect } from "@/components/interface/google-gemini-effect";

// COMPONENTS
import Solutions from '@/components/layout/Solutions';
import Prototype from '@/components/layout/Prototype';
import WebServices from '@/components/layout/WebServices';
import Clients from '@/components/layout/Clients';
import Marketing from '@/components/layout/Marketing';
import Branding from '@/components/layout/Branding';


export default function Home() {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);


  return (
    <main className="z-[100] block justify-center items-center w-full min-h-screen pt-20 sm:pt-20 md:pt-14 lg:pt-14 xl:pt-14 bg-none overflow-x-hidden">
      <div className="flex justify-center items-center w-full h-[37rem]" id="hero-section">

        <div className="flex flex-col justify-center items-center w-full h-full text-white bg-[--black-1100]">
          <div
            className="z-[50] w-full relative"
            ref={ref}
          >
            <GoogleGeminiEffect
              pathLengths={[
                pathLengthFirst,
                pathLengthSecond,
                pathLengthThird,
                pathLengthFourth,
                pathLengthFifth,
              ]}
            />
          </div>


          {/* <div className="z-[2] absolute flex justify-center items-center size-full hero-gradient">
            <span className="size-[80rem] hero-gradient-1"></span>

            <span className="-bottom-[6rem] left-[2rem] sm:-bottom-[6rem] sm:left-[2rem] md:-bottom-[15rem] md:-left-[15rem] lg:-bottom-[15rem] lg:-left-[15rem] xl:-bottom-[15rem] xl:-left-[15rem] size-[60rem]   hero-gradient-2"></span>

            <span className="-bottom-[6rem] right-[2rem] sm:-bottom-[6rem] sm:right-[2rem] md:-bottom-[15rem] md:-right-[15rem] lg:-bottom-[15rem] lg:-right-[15rem] xl:-bottom-[15rem] xl:-right-[15rem] size-[60rem]   hero-gradient-3"></span>
          </div> */}
        </div>
      </div>


      {/* <Prototype /> */}

      <Solutions />

      <WebServices />

      <Clients />

      <Marketing />

      <Branding />
    </main>
  );
}
