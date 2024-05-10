"use client"

import React, { useEffect, useState } from 'react';

// NEXT JS
import Image from 'next/image';
import Link from 'next/link';

// ICONS & CUSTOM COMPONENTS
import Button from '@/components/segments/Button';


const page = () => {

    const crmArr = [
        {
            'name': 'Tailor Seamless Customer Journeys',
            'desc': 'Create pixel-perfect, branded purchase flows for your customers.',
            'img': '/assets/ecommerce/trs/3.png',
        },
        {
            'name': 'Craft custom interactions and animations',
            'desc': 'Customize interactions, elevate your store with animations.',
            'img': '',
            'video': '/assets/ecommerce/videos/bna.mp4',
        },
        {
            'name': 'Run impactful campaigns',
            'desc': 'Use discounts and listed sale prices to run promotions for your customers.',
            'img': '/assets/ecommerce/trs/4.png',
        },
        {
            'name': 'Customize Unique Product Designs',
            'desc': 'Highlight key product details, images, and customizable fields.',
            'img': '/assets/ecommerce/trs/5.png',
        },

    ]


    return (
        <>
            <div className="block items-start w-full h-full min-h-screen mt-14 bg-[--black-1100]">
                <div className="block sm:block md:flex lg:flex xl:flex justify-between items-center w-full h-[37rem] f-dmsans">
                    <div className="flex flex-col justify-center items-center w-full sm:w-full md:w-[50vw] lg:w-[50vw] xl:w-[50vw] h-full px-8 sm:px-8 md:px-12 lg:px-12 xl:px-12">
                        <div className="block items-center w-full text-5xl font-bold text-[--white-100]">
                            <span className="flex justify-start items-center w-auto text-5xl !text-[2.45rem] font-semibold gradient gradient-codespaces">
                                CRM
                            </span>

                            <span className="flex justify-start items-center w-auto mt-2">
                                Client Relations Optimization Suite
                            </span>
                        </div>

                        <div className="block items-center w-full mt-4 text-base !text-[1.15rem] leading-snug font-medium text-[--fgColor-muted-100]">
                            Unlock the full potential of your client relations with our comprehensive suite offering optimization, integration, and seamless management of your valuable data assets.
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
                            ↓&nbsp;&nbsp;LEARN MORE ABOUT THE CRM
                        </Link>
                    </div>

                    <div className="relative flex items-center w-full sm:w-full md:w-[50vw] lg:w-[50vw] xl:w-[50vw] h-full overflow-hidden">
                        <div className="absolute -right-[1rem] block justify-center items-center w-full h-full">
                            <div className="flex justify-center items-center w-full h-full">
                                <Image className="flex justify-center items-center w-full h-auto rounded-md"
                                    src="/assets/crm/imgs/dashboard.png"
                                    width={1255}
                                    height={1061}
                                    placeholder="blur"
                                    blurDataURL="/assets/crm/imgs/dashboard.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="relative block items-start w-full h-full bg-[--white-100] text-[--black-1100] f-dmsans" id="main">
                    <div className="block items-center w-full p-6 sm:p-6 md:p-10 lg:p-10 xl:p-10">
                        <div className="block items-center w-full">
                            <div className="flex justify-start items-center w-full space-x-2 text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl leading-none font-extrabold">
                                <Image className="flex justify-center items-center size-8 sm:size-8 md:size-8 lg:size-10 xl:size-10"
                                    src="/assets/crm/link.svg"
                                    width={400}
                                    height={400}
                                    alt=""
                                />

                                <div>
                                    Connect. Grow. Succeed.
                                </div>
                            </div>

                            <div className="flex justify-start items-center w-full text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-medium tracking-tight">
                                for your company, as you wish
                            </div>
                        </div>

                        <div className="relative flex justify-center items-center w-full mt-10">
                            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-start w-full border-[1.5px] border-[--white-400]" id="ecommerce_sec2">
                                {crmArr.map((k, index) => (
                                    <div key={index} className="relative block items-center w-full h-full p-6 last:border-t-[1.5px] sm:last:border-t-[1.5px] md:last:border-t-0 lg:last:border-t-0 xl:last:border-t-0 after:hidden sm:after:hidden md:after:block lg:after:block xl:after:block before:hidden sm:before:hidden md:before:block lg:before:block xl:before:block" id="ecommerce_sec2-child">
                                        <div className="flex justify-start items-center w-full text-3xl leading-none font-semibold">
                                            {k.name}
                                        </div>

                                        <div className="flex justify-start items-center w-full mt-2 text-lg font-normal tracking-tight leading-tight">
                                            {k.desc}
                                        </div>

                                        <div className="flex justify-center items-end w-full h-auto mt-6 rounded-md overflow-hidden">
                                            {k.img !== '' ? (
                                                <Image className="flex justify-center items-center w-auto rounded-md overflow-hidden"
                                                    src={k.img}
                                                    width={1080}
                                                    height={675}
                                                    alt={k.name}
                                                />
                                            ) : (
                                                <video className="w-full h-full rounded-md overflow-hidden" autoPlay loop muted>
                                                    <source src={k.video} type="video/mp4" />
                                                </video>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page