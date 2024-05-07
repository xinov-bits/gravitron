"use client"

import React, { useEffect, useState } from 'react';

// NEXT JS
import Image from 'next/image';

// ICONS & CUSTOM COMPONENTS
import Button from '@/components/segments/Button';


const Branding = () => {
    return (
        <>
            <div className="z-[10] flex justify-center items-center w-full h-auto sm:h-auto md:h-[30rem] lg:h-[30rem] xl:h-[30rem] bg-[--black-1100] text-[--white-100] border-b border-[--black-600] f-dmsans">
                <div className="z-[10] block sm:block md:flex lg:flex xl:flex items-center size-full border-t border-[--black-600]">
                    <div className="hidden sm:hidden md:flex lg:flex xl:flex justify-center items-center w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 h-auto sm:h-auto md:h-full lg:h-full xl:h-full p-5 sm:p-5 md:p-10 lg:p-10 xl:p-10 bg-gradient-to-t bg-[--primary-1] bg-opacity-50">
                        <Image className="flex justify-center items-center w-full rounded-2xl"
                            src="/assets/background/branding/branding.png"
                            width={1504}
                            height={1128}
                            alt="branding, logo"
                        />
                    </div>

                    <div className="flex justify-center items-center w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 h-auto sm:h-auto md:h-full lg:h-full xl:h-full bg-[--black-1100]">
                        <div className="flex flex-col justify-center items-center w-full p-6 sm:p-6 md:p-14 lg:p-14 xl:p-14">
                            <div className="items-center text-4xl sm:text-4xl md:text-[2.65rem] lg:text-[2.65rem] xl:text-[2.65rem] !leading-[1] text-right font-extrabold">
                                Craft Your Distinctive <span className="gradient gradient-blue">Brand</span> Identity Essence
                            </div>

                            <div className="flex justify-end items-center w-full mt-4 text-base sm:text-base md:text-lg lg:text-lg xl:text-lg text-[--white-400] text-right">
                                Discover the art of crafting a distinctive brand identity that resonates with your audience, reflecting your values and aspirations
                            </div>

                            <div className="flex justify-end items-center w-full h-full mt-4">
                                <Button
                                    type="white"
                                    width="w-40"
                                    height="h-12"
                                    round="rounded-md"
                                    icon={true}
                                >
                                    Get Started
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="flex sm:flex md:hidden lg:hidden xl:hidden justify-center items-center w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 h-auto sm:h-auto md:h-full lg:h-full xl:h-full p-5 sm:p-5 md:p-10 lg:p-10 xl:p-10 bg-gradient-to-t bg-[--primary-1] bg-opacity-50">
                        <Image className="flex justify-center items-center w-full rounded-2xl"
                            src="/assets/background/branding/branding.png"
                            width={1504}
                            height={1128}
                            alt="branding, logo"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Branding