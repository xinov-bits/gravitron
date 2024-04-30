"use client"

import React from 'react';

// ICONS & CUSTOM COMPONENTS
import Button from '@/components/segments/Button';

// COMPONENTS
import Solutions from '@/components/layout/Solutions';
import Prototype from '@/components/layout/Prototype';
import WebServices from '@/components/layout/WebServices';
import Clients from '@/components/layout/Clients';
import Marketing from '@/components/layout/Marketing';
import Branding from '@/components/layout/Branding';


export default function Home() {

  return (
    <main className="block justify-center items-center w-full min-h-screen pt-20 sm:pt-20 md:pt-14 lg:pt-14 xl:pt-14 bg-none overflow-x-hidden">
      <div className="flex justify-center items-center w-full h-[37rem]" id="hero-section">
        <div className="flex flex-col justify-center items-center w-full h-auto text-white">
          <span className="z-[10] flex justify-center items-center w-auto text-center font-normal text-sm leading-none" id="hero-tagline">
            ✦ Designing Your Digital Triumph
          </span>

          <div className="z-[10] block items-center w-[95%] sm:w-[95%] md:w-[60%] lg:w-[60%] xl:w-[60%] mt-2 text-center font-semibold text-[2rem] sm:text-[2rem] md:text-5xl lg:text-5xl xl:text-5xl leading-tight">
            <span className="gradient gradient-codespaces">Amplify</span> Your Brand: Bespoke Websites for Success
          </div>

          <div className="z-[10] flex justify-center items-center w-[94%] sm:w-[94%] md:w-[56%] lg:w-[56%] xl:w-[56%] mt-4 text-base text-center text-[--fgColor-muted-100]">
            Unleash the full spectrum of your digital potential through meticulously tailored websites, engineered to elevate and fortify your brand&apos;s online presence.
          </div>


          <div className="z-[10] hidden sm:hidden md:flex lg:flex xl:flex justify-center items-center w-full mt-8 space-x-4">
            <Button
              type="white"
              width="w-40"
              height="h-12"
              round="rounded-md"
              icon={true}
            >
              Get Started
            </Button>

            <Button
              type="white-outlined"
              width="w-40"
              height="h-12"
              round="rounded-md"
              icon={false}
            >
              View Projects
            </Button>
          </div>
          
          <div className="z-[10] flex sm:flex md:hidden lg:hidden xl:hidden justify-center items-center w-full mt-8 space-x-4">
            <Button
              type="white"
              width="w-36"
              height="h-12"
              round="rounded-md"
              icon={true}
            >
              Get Started
            </Button>

            <Button
              type="white-outlined"
              width="w-36"
              height="h-12"
              round="rounded-md"
              icon={false}
            >
              View Projects
            </Button>
          </div>


          <div className="z-[-1] absolute flex justify-center items-center size-full hero-gradient">
            <span className="size-[80rem] hero-gradient-1"></span>

            <span className="-bottom-[6rem] left-[2rem] sm:-bottom-[6rem] sm:left-[2rem] md:-bottom-[15rem] md:-left-[15rem] lg:-bottom-[15rem] lg:-left-[15rem] xl:-bottom-[15rem] xl:-left-[15rem] size-[60rem]   hero-gradient-2"></span>

            <span className="-bottom-[6rem] right-[2rem] sm:-bottom-[6rem] sm:right-[2rem] md:-bottom-[15rem] md:-right-[15rem] lg:-bottom-[15rem] lg:-right-[15rem] xl:-bottom-[15rem] xl:-right-[15rem] size-[60rem]   hero-gradient-3"></span>
          </div>
        </div>
      </div>


      <Prototype />

      <Solutions />

      <WebServices />

      <Clients />

      <Marketing />

      <Branding />
    </main>
  );
}
