"use client"

import React, { useEffect, useState } from 'react';

// NEXT JS
import Image from 'next/image';

// ICONS & CUSTOM COMPONENTS
import Button from '@/components/segments/Button';


const Marketing = () => {


    return (
        <>
            <div className="flex justify-center items-center w-full h-auto sm:h-auto md:h-[30rem] lg:h-[30rem] xl:h-[30rem] pt-12 sm:pt-12 md:pt-16 lg:pt-16 xl:pt-16 bg-[--black-1100] text-[--white-100] f-dmsans">
                <div className="block sm:block md:flex lg:flex xl:flex items-center size-full border-t border-[--black-600]">
                    <div className="flex justify-center items-center w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 h-auto sm:h-auto md:h-full lg:h-full xl:h-full bg-[--black-1100]">
                        <div className="flex flex-col justify-center items-center w-full p-6 sm:p-6 md:p-14 lg:p-14 xl:p-14">
                            <div className="items-center text-4xl sm:text-4xl md:text-[2.65rem] lg:text-[2.65rem] xl:text-[2.65rem] !leading-[1] font-extrabold">
                                <span className="gradient gradient-blue">Elevate</span> Your Business&apos;s Market Presence
                            </div>

                            <div className="flex justify-start items-center w-full mt-4 text-base sm:text-base md:text-lg lg:text-lg xl:text-lg text-[--white-400]">
                                Promote your business and reach the right audience:
                            </div>

                            <ul className="blog items-center w-full mt-1 space-y-1 text-base sm:text-base md:text-lg lg:text-lg xl:text-lg text-[--white-400]">
                                <li className="flex justify-start items-center w-max before:content-['●'] before:w-6">
                                    Complete SEO solution
                                </li>

                                <li className="flex justify-start items-center w-max before:content-['●'] before:w-6">
                                    AI-driven FB & IG Ads
                                </li>

                                <li className="flex justify-start items-center w-max before:content-['●'] before:w-6">
                                    Email campaigns
                                </li>

                                <li className="flex justify-start items-center w-max before:content-['●'] before:w-6">
                                    Social posts and more
                                </li>
                            </ul>

                            <div className="flex justify-start items-center w-full h-full mt-4">
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

                    <div className="flex justify-center items-center w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 h-auto sm:h-auto md:h-full lg:h-full xl:h-full py-5 sm:py-5 md:py-0 lg:py-0 xl:py-0 bg-gradient-to-t from-[--black-1100] to-[--black-900]">
                        <Image className="flex justify-center items-center w-[20rem]"
                            src="/assets/background/marketing/post.png"
                            width={1080}
                            height={1413}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Marketing