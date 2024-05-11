"use client"

import React, { useEffect, useState } from 'react';

// NEXT JS
import Image from 'next/image';
import Link from 'next/link';

// ICONS & CUSTOM COMPONENTS
import Button from '@/components/segments/Button';


const page = () => {


    return (
        <>
            <div className="block items-start w-full h-full min-h-screen mt-14 bg-[--black-1100]">
                <div className="block sm:block md:flex lg:flex xl:flex justify-between items-center w-full h-[34rem] sm:h-[34rem] md:h-[37rem] lg:h-[37rem] xl:h-[37rem] f-dmsans">
                    <div className="flex flex-col justify-center items-center w-full sm:w-full md:w-[50vw] lg:w-[50vw] xl:w-[50vw] h-full px-8 sm:px-8 md:px-12 lg:px-12 xl:px-12">
                        <div className="block items-center w-full text-5xl font-bold text-[--white-100]">
                            <span className="flex justify-start items-center w-auto pb-0.5 text-5xl !text-[2.45rem] font-medium gradient gradient-silver">
                                Hosting
                            </span>

                            <span className="flex justify-start items-center w-auto mt-2">
                                Reliable Hosting Solutions for Your Website
                            </span>
                        </div>

                        <div className="block items-center w-full mt-4 text-base !text-[1.15rem] leading-snug font-medium text-[--fgColor-muted-100]">
                            Experience seamless website performance with our dependable hosting services, offering robust security, lightning-fast speeds, and expert support for your online endeavors.
                        </div>

                        <div className="block items-center w-full mt-6">
                            <Button
                                type="primary"
                                width="w-52"
                                height="h-12"
                                round="rounded-md"
                                icon={false}
                            >
                                <b>Get Started</b> — it&apos;s easy
                            </Button>
                        </div>
                    </div>

                    <div className="relative hidden sm:hidden md:flex lg:flex xl:flex items-center w-full sm:w-full md:w-[50vw] lg:w-[50vw] xl:w-[50vw] h-full overflow-hidden">
                        <div className="absolute -right-[1rem] block justify-center items-center w-full h-full">
                            <div className="flex justify-center items-center w-full h-full">
                                <Image className="flex justify-center items-center w-full h-auto rounded-lg overflow-hidden"
                                    src="/assets/hosting/imgs/1.png"
                                    width={1255}
                                    height={1061}
                                    placeholder="blur"
                                    blurDataURL="/assets/hosting/imgs/1.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex sm:flex md:hidden lg:hidden xl:hidden justify-center items-center w-full h-full">
                    <Image className="flex justify-center items-center w-full h-auto rounded-t-md overflow-hidden"
                        src="/assets/hosting/imgs/1.png"
                        width={1255}
                        height={1061}
                        placeholder="blur"
                        blurDataURL="/assets/hosting/imgs/1.png"
                        alt=""
                    />
                </div>
            </div>
        </>
    )
}

export default page