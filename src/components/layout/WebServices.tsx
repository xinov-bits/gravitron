"use client"

import React from 'react';

// NEXT JS
import Image from 'next/image';

// ICONS & CUSTOM COMPONENTS
import Button from '@/components/segments/Button';


const WebServices = () => {


    return (
        <>
            <div className="relative z-[10] bg-[--black-1000] flex flex-col items-center justify-start w-screen min-h-screen my-4 sm:my-4 md:my-10 lg:my-10 xl:my-10 p-4 sm:p-4 md:p-8 lg:p-8 xl:p-8 overflow-hidden">
                <div className="flex flex-col justify-center items-center w-full text-center">
                    <h1 className="flex justify-center items-center w-[95%] sm:w-[95%] md:w-[50%] lg:w-[50%] xl:w-[50%] text-[--white-200] text-3xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-5xl font-extrabold">
                        Creative power that goes beyond templates
                    </h1>

                    <span className="relative flex justify-center items-center w-[20rem] sm:w-[20rem] md:w-[28rem] lg:w-[28rem] xl:w-[28rem] h-[1.5px] mt-6 mb-3 bg-[linear-gradient(90deg,rgba(255,_255,_255,_0)_0%,var(--black-200)_50%,rgba(255,_255,_255,_0)_100%)]">
                        <span className="absolute z-[3] sec2-shining_border1"></span>
                        <span className="absolute z-[2] sec2-shining_border2"></span>
                        <span className="absolute z-[1] sec2-shining_border3"></span>
                    </span>

                    <h3 className="flex justify-center items-center w-[82%] sm:w-[82%] md:w-[65%] lg:w-[65%] xl:w-[65%] text-[--white-800] text-base sm:text-base md:text-xl lg:text-xl xl:text-xl font-normal">
                        You invision, we design and code it for you — for everything from fully custom layouts to complex animations.
                    </h3>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 justify-center items-center w-full h-full gap-6 sm:gap-6 md:gap-8 lg:gap-8 xl:gap-8 mt-8 sm:mt-8 md:mt-12 lg:mt-12 xl:mt-12">
                    <li className="block items-center w-full h-auto p-2 bg-gradient-to-t from-[--black-800] to-[--black-600] border border-[--black-400] rounded-xl overflow-hidden">
                        <div className="flex justify-center items-center size-full">
                            <Image className="flex justify-center items-center size-full rounded-lg overflow-hidden"
                                src="/assets/website-types/ecommerce.jpg"
                                width={926}
                                height={1080}
                                alt="ecommerce-website"
                            />
                        </div>

                        <div className="block items-center w-full mt-2 p-2">
                            <div className="items-center text-xl font-medium text-[--white-100]">
                                eCommerce website
                            </div>

                            <div className="items-center mt-1 text-sm text-[--white-400] leading-5">
                                Sell online and manage your business with powerful eCommerce solutions.
                            </div>

                            <div className="items-center mt-4 text-sm text-[--white-400] leading-5">
                                <Button
                                    type="white-outlined"
                                    width="w-56"
                                    height="h-10"
                                    round="rounded-md"
                                    icon={true}
                                >
                                    Create Your eCommerce Site
                                </Button>
                            </div>
                        </div>
                    </li>
                    <li className="block items-center w-full h-auto p-2 bg-gradient-to-t from-[--black-800] to-[--black-600] border border-[--black-400] rounded-xl overflow-hidden">
                        <div className="flex justify-center items-center size-full">
                            <Image className="flex justify-center items-center size-full rounded-lg overflow-hidden"
                                src="/assets/website-types/blog.jpg"
                                width={926}
                                height={1080}
                                alt="blog-website"
                            />
                        </div>

                        <div className="block items-center w-full mt-2 p-2">
                            <div className="items-center text-xl font-medium text-[--white-100]">
                                Blog website
                            </div>

                            <div className="items-center mt-1 text-sm text-[--white-400] leading-5">
                                Create a innovative blog, grow a loyal audience and monetize your content.
                            </div>

                            <div className="items-center mt-4 text-sm text-[--white-400] leading-5">
                                <Button
                                    type="white-outlined"
                                    width="w-48"
                                    height="h-10"
                                    round="rounded-md"
                                    icon={true}
                                >
                                    Create Your Own Blog
                                </Button>
                            </div>
                        </div>
                    </li>
                    <li className="block items-center w-full h-auto p-2 bg-gradient-to-t from-[--black-800] to-[--black-600] border border-[--black-400] rounded-xl overflow-hidden">
                        <div className="flex justify-center items-center size-full">
                            <Image className="flex justify-center items-center size-full rounded-lg overflow-hidden"
                                src="/assets/website-types/portfolio.jpg"
                                width={926}
                                height={1080}
                                alt="portfolio-website"
                            />
                        </div>

                        <div className="block items-center w-full mt-2 p-2">
                            <div className="items-center text-xl font-medium text-[--white-100]">
                                Portfolio website
                            </div>

                            <div className="items-center mt-1 text-sm text-[--white-400] leading-5">
                                Increase your visibility and attract new clients with your work.
                            </div>

                            <div className="items-center mt-4 text-sm text-[--white-400] leading-5">
                                <Button
                                    type="white-outlined"
                                    width="w-44"
                                    height="h-10"
                                    round="rounded-md"
                                    icon={true}
                                >
                                    Create Your Portfolio
                                </Button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default WebServices