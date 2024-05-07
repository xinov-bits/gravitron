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
                <div className="block sm:block md:flex lg:flex xl:flex justify-between items-center w-full h-[37rem] f-dmsans">
                    <div className="flex flex-col justify-center items-center w-full sm:w-full md:w-[48vw] lg:w-[48vw] xl:w-[48vw] h-full px-8 sm:px-8 md:px-12 lg:px-12 xl:px-12">
                        <div className="block items-center w-full text-5xl font-bold text-[--white-100]">
                            <span className="flex justify-start items-center w-auto text-5xl !text-[2.45rem] font-semibold gradient gradient-codespaces">
                                CMS
                            </span>

                            <span className="flex justify-start items-center w-auto mt-2">
                                Content management, meet visual design.
                            </span>
                        </div>

                        <div className="block items-center w-full mt-4 text-base !text-[1.15rem] leading-snug font-medium text-[--fgColor-muted-100]">
                            Create the content structures you need, add content (by hand, from a CSV, or via our API), then design it visually. Finally, a content management system that works for editors, designers, and developers.
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

                        <Link href="#main" className="block items-center w-full mt-12 text-sm text-[--fgColor-muted-100] hover:text-[--white-100]">
                            ↓&nbsp;&nbsp;LEARN MORE ABOUT THE CMS
                        </Link>
                    </div>

                    <div className="relative flex items-center w-full sm:w-full md:w-[52vw] lg:w-[52vw] xl:w-[52vw] h-full overflow-hidden">
                        <div className="absolute grid grid-cols-3 gap-x-4 items-center w-[65vw] h-full">
                            <div className="block justify-center items-center w-full h-full mt-64 space-y-6">
                                <div className="flex justify-center items-center w-full h-auto">
                                    <Image className="flex justify-center items-center w-full min-w-[16rem] h-auto rounded-md"
                                        src="/assets/cms/imgs/2.webp"
                                        width={758}
                                        height={1262}
                                        placeholder="blur"
                                        blurDataURL="/assets/cms/imgs/2.webp"
                                        alt=""
                                    />
                                </div>
                            </div>

                            <div className="block justify-center items-center w-full h-full mt-10 space-y-6">
                                <div className="flex justify-center items-center w-full h-auto">
                                    <Image className="flex justify-center items-center w-full min-w-[16rem] h-auto rounded-md"
                                        src="/assets/cms/imgs/3.webp"
                                        width={768}
                                        height={1351}
                                        placeholder="blur"
                                        blurDataURL="/assets/cms/imgs/3.webp"
                                        alt=""
                                    />
                                </div>

                                <div className="flex justify-center items-center w-full h-auto">
                                    <Image className="flex justify-center items-center w-full min-w-[16rem] h-auto rounded-md"
                                        src="/assets/cms/imgs/4.png"
                                        width={762}
                                        height={349}
                                        placeholder="blur"
                                        blurDataURL="/assets/cms/imgs/4.png"
                                        alt=""
                                    />
                                </div>

                                <div className="flex justify-center items-center w-full h-auto">
                                    <Image className="flex justify-center items-center w-full min-w-[16rem] h-auto rounded-md"
                                        src="/assets/cms/imgs/4.png"
                                        width={762}
                                        height={582}
                                        placeholder="blur"
                                        blurDataURL="/assets/cms/imgs/4.png"
                                        alt=""
                                    />
                                </div>
                            </div>

                            <div className="block justify-center items-center w-full h-full mt-44 space-y-6">
                                <div className="flex justify-center items-center w-full h-auto">
                                    <Image className="flex justify-center items-center w-full min-w-[16rem] h-auto rounded-md"
                                        src="/assets/cms/imgs/5.webp"
                                        width={762}
                                        height={897}
                                        placeholder="blur"
                                        blurDataURL="/assets/cms/imgs/5.webp"
                                        alt=""
                                    />
                                </div>

                                <div className="flex justify-center items-center w-full h-auto">
                                    <Image className="flex justify-center items-center w-full min-w-[16rem] h-auto rounded-md"
                                        src="/assets/cms/imgs/6.webp"
                                        width={762}
                                        height={1351}
                                        placeholder="blur"
                                        blurDataURL="/assets/cms/imgs/6.webp"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative block items-start w-full h-full bg-[--white-100] text-[--black-1100]" id="main">
                    <div className="block items-center w-full p-6 sm:p-6 md:p-10 lg:p-10 xl:p-10">
                        <div className="block items-center w-full">
                            <div className="flex justify-start items-center w-full space-x-2 text-5xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl leading-none font-extrabold">
                                <Image className="flex justify-center items-center size-10 sm:size-10 md:size-12 lg:size-12 xl:size-12"
                                    src="/assets/ecommerce/design.svg"
                                    width={400}
                                    height={400}
                                    alt=""
                                />

                                <div>
                                    Design
                                </div>
                            </div>

                            <div className="flex justify-start items-center w-full text-xl sm:text-xl md:text-3xl lg:text-3xl xl:text-3xl font-medium tracking-tight">
                                your store, your way &mdash; effortlessly
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page