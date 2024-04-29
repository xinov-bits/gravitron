"use client"

import React, { useEffect, useState } from 'react';

// NEXT JS
import Image from 'next/image';

// ICONS & CUSTOM COMPONENTS
import Button from '@/components/segments/Button';


const Marketing = () => {


    return (
        <>
            <div className="flex justify-center items-center w-full h-auto sm:h-auto md:h-[40rem] lg:h-[40rem] xl:h-[40rem] py-12 sm:py-12 md:py-16 lg:py-16 xl:py-16 bg-[--black-1100] text-[--white-100] f-dmsans">
                <div className="block sm:block md:flex lg:flex xl:flex items-center size-full border-y border-[--black-600] overflow-hidden">
                    <div className="flex flex-col justify-center items-start w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 h-auto sm:h-auto md:h-full lg:h-full xl:h-full p-6 sm:p-6 md:p-14 lg:p-14 xl:p-14 bg-[--black-1100]">
                        <div className="items-center text-3xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-5xl font-extrabold">
                            Directing Traffic to Convert <span className="gradient gradient-blue">Harmoniously</span>
                        </div>

                        <div className="flex justify-start items-center w-full mt-6 text-base sm:text-base md:text-lg lg:text-lg xl:text-lg text-[--white-400]">
                            Promote your business and reach the right audience:
                        </div>

                        <ul className="blog items-center w-full mt-2 space-y-1 text-base sm:text-base md:text-lg lg:text-lg xl:text-lg text-[--white-400]">
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

                        <div className="flex justify-start items-center w-full h-full mt-6">
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

                    <div className="flex justify-center items-center w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 h-auto sm:h-auto md:h-full lg:h-full xl:h-full mt-6 sm:mt-6 md:mt-0 lg:mt-0 xl:mt-0 py-5 sm:py-5 md:py-0 lg:py-0 xl:py-0 bg-gradient-to-t from-[--black-1100] to-[--black-900]">
                        <Image className="flex justify-center items-center w-[20rem] h-full"
                            src="/assets/background/marketing/instagram-post.png"
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