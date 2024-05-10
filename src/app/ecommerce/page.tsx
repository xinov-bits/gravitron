"use client"

import React, { useEffect, useState } from 'react';

// NEXT JS
import Image from 'next/image';
import Link from 'next/link';

// ICONS & CUSTOM COMPONENTS
import Button from '@/components/segments/Button';


const page = () => {

    const designArr = [
        {
            'name': 'Tailor Seamless Customer Journeys',
            'desc': 'Create pixel-perfect, branded purchase flows for your customers.',
            'img': '/assets/ecommerce/imgs/8.png',
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

    const growArr = [
        {
            'name': 'Build a complete website',
            'desc': 'Create immersive pages for product launches, seasonal campaigns, coming soon previews, or advertisements.',
            'img': '/assets/ecommerce/trs/6.png',
        },
        {
            'name': 'Run impactful campaigns',
            'desc': 'Use discounts and listed sale prices to run promotions for your customers.',
            'img': '/assets/ecommerce/trs/7.png',
        },
        {
            'name': 'Integrate any analytics and optimization tools',
            'desc': 'Connect your site to Google Analytics with our built-in integration, or easily add code to connect marketing tools for pulling insights or running experiments.',
            'img': '/assets/ecommerce/trs/8.png',
        },
        {
            'name': 'Connect your products to social',
            'desc': 'Built-in integrations let you connect your product catalog to Facebook, Instagram, and Google, and to run smarter ad campaigns and create more interactive, shoppable social posts.',
            'img': '/assets/ecommerce/trs/9.png',
        },

    ]


    return (
        <>
            <div className="block items-start w-full h-full min-h-screen mt-14 bg-[--black-1100]">
                <div className="block sm:block md:flex lg:flex xl:flex justify-between items-center w-full h-[37rem] f-dmsans">
                    <div className="flex flex-col justify-center items-center w-full sm:w-full md:w-[48vw] lg:w-[48vw] xl:w-[48vw] h-full px-8 sm:px-8 md:px-12 lg:px-12 xl:px-12">
                        <div className="block items-center w-full text-5xl font-bold text-[--white-100]">
                            <span className="flex justify-start items-center w-auto text-5xl !text-[2.45rem] font-semibold gradient gradient-codespaces">
                                Ecommerce
                            </span>

                            <span className="flex justify-start items-center w-auto mt-2">
                                Your products are unique. Your store should be too.
                            </span>
                        </div>

                        <div className="block items-center w-full mt-4 text-base !text-[1.15rem] leading-snug font-medium text-[--fgColor-muted-100]">
                            Push the limits of web design and create unique commerce experiences for your customers &ndash; all while building a business, creating a new revenue stream, and strengthening your brand.
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
                            ↓&nbsp;&nbsp;LEARN MORE ABOUT ECOMMERCE
                        </Link>
                    </div>

                    <div className="relative flex items-center w-full sm:w-full md:w-[52vw] lg:w-[52vw] xl:w-[52vw] h-full overflow-hidden">
                        <div className="absolute grid grid-cols-3 gap-x-4 items-center w-[65vw] h-full">
                            <div className="block justify-center items-center w-full h-full mt-64 space-y-6">
                                <div className="flex justify-center items-center w-full h-auto">
                                    <Image className="flex justify-center items-center w-full min-w-[16rem] h-auto rounded-md"
                                        src="/assets/ecommerce/imgs/1.webp"
                                        width={762}
                                        height={1147}
                                        placeholder="blur"
                                        blurDataURL="/assets/ecommerce/imgs/1.webp"
                                        alt=""
                                    />
                                </div>

                                <div className="flex justify-center items-center w-full h-auto">
                                    <Image className="flex justify-center items-center w-full min-w-[16rem] h-auto rounded-md"
                                        src="/assets/ecommerce/imgs/6.png"
                                        width={762}
                                        height={843}
                                        placeholder="blur"
                                        blurDataURL="/assets/ecommerce/imgs/6.png"
                                        alt=""
                                    />
                                </div>
                            </div>

                            <div className="block justify-center items-center w-full h-full mt-10 space-y-6">
                                <div className="flex justify-center items-center w-full h-auto">
                                    <Image className="flex justify-center items-center w-full min-w-[16rem] h-auto rounded-md"
                                        src="/assets/ecommerce/imgs/2.webp"
                                        width={762}
                                        height={896}
                                        placeholder="blur"
                                        blurDataURL="/assets/ecommerce/imgs/2.webp"
                                        alt=""
                                    />
                                </div>

                                <div className="flex justify-center items-center w-full h-auto">
                                    <Image className="flex justify-center items-center w-full min-w-[16rem] h-auto rounded-md"
                                        src="/assets/ecommerce/imgs/3.webp"
                                        width={762}
                                        height={349}
                                        placeholder="blur"
                                        blurDataURL="/assets/ecommerce/imgs/3.webp"
                                        alt=""
                                    />
                                </div>

                                <div className="flex justify-center items-center w-full h-auto">
                                    <Image className="flex justify-center items-center w-full min-w-[16rem] h-auto rounded-md"
                                        src="/assets/ecommerce/imgs/5.webp"
                                        width={762}
                                        height={1105}
                                        placeholder="blur"
                                        blurDataURL="/assets/ecommerce/imgs/5.webp"
                                        alt=""
                                    />
                                </div>
                            </div>

                            <div className="block justify-center items-center w-full h-full mt-44 space-y-6">
                                <div className="flex justify-center items-center w-full h-auto">
                                    <Image className="flex justify-center items-center w-full min-w-[16rem] h-auto rounded-md"
                                        src="/assets/ecommerce/imgs/6.webp"
                                        width={762}
                                        height={1369}
                                        placeholder="blur"
                                        blurDataURL="/assets/ecommerce/imgs/6.webp"
                                        alt=""
                                    />
                                </div>

                                <div className="flex justify-center items-center w-full h-auto">
                                    <Image className="flex justify-center items-center w-full min-w-[16rem] h-auto rounded-md"
                                        src="/assets/ecommerce/imgs/7.webp"
                                        width={762}
                                        height={618}
                                        placeholder="blur"
                                        blurDataURL="/assets/ecommerce/imgs/7.webp"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative block items-start w-full h-full bg-[--white-100] text-[--black-1100] f-dmsans" id="main">
                    <div className="block items-center w-full p-6 sm:p-6 md:p-10 lg:p-10 xl:p-10">
                        <div className="block items-center w-full">
                            <div className="flex justify-start items-center w-full space-x-2 text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl leading-none font-extrabold">
                                <Image className="flex justify-center items-center size-8 sm:size-8 md:size-8 lg:size-10 xl:size-10"
                                    src="/assets/ecommerce/design.svg"
                                    width={400}
                                    height={400}
                                    alt=""
                                />

                                <div>
                                    Design
                                </div>
                            </div>

                            <div className="flex justify-start items-center w-full text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-medium tracking-tight">
                                your store, your way &mdash; effortlessly
                            </div>
                        </div>

                        <div className="relative flex justify-center items-center w-full mt-10">
                            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-start w-full border-[1.5px] border-[--white-400]" id="ecommerce_sec2">
                                {designArr.map((k, index) => (
                                    <div key={index} className="relative block items-center w-full h-full last:border-t-[1.5px] sm:last:border-t-[1.5px] md:last:border-t-0 lg:last:border-t-0 xl:last:border-t-0 after:hidden sm:after:hidden md:after:block lg:after:block xl:after:block before:hidden sm:before:hidden md:before:block lg:before:block xl:before:block" id="ecommerce_sec2-child">
                                        <div className="flex justify-start items-center w-full px-6 pt-6 text-3xl leading-none font-semibold">
                                            {k.name}
                                        </div>

                                        <div className="flex justify-start items-center w-full px-6 mt-2 text-lg font-normal tracking-tight leading-tight">
                                            {k.desc}
                                        </div>

                                        <div className="flex justify-center items-end w-full h-auto pt-6 p-0 sm:p-0 md:p-6 lg:p-6 xl:p-6 overflow-hidden">
                                            {k.img !== '' ? (
                                                <Image className="flex justify-center items-center w-auto border border-[--white-400] rounded-none sm:rounded-none md:rounded-md lg:rounded-md xl:rounded-md overflow-hidden"
                                                    src={k.img}
                                                    width={1080}
                                                    height={675}
                                                    alt={k.name}
                                                />
                                            ) : (
                                                <video className="w-full h-full border border-[--white-400] rounded-none sm:rounded-none md:rounded-md lg:rounded-md xl:rounded-md overflow-hidden" autoPlay loop muted>
                                                    <source src={k.video} type="video/mp4" />
                                                </video>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>


                    <div className="block items-center w-full p-6 sm:p-6 md:p-10 lg:p-10 xl:p-10">
                        <div className="block items-center w-full">
                            <div className="flex justify-start items-center w-full space-x-2 text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl leading-none font-extrabold">
                                <Image className="flex justify-center items-center size-8 sm:size-8 md:size-8 lg:size-10 xl:size-10"
                                    src="/assets/ecommerce/grow.svg"
                                    width={400}
                                    height={400}
                                    alt=""
                                />

                                <div>
                                    Grow
                                </div>
                            </div>

                            <div className="flex justify-start items-center w-full text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-medium tracking-tight">
                                your business
                            </div>
                        </div>

                        <div className="relative flex justify-center items-center w-full mt-10">
                            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-start w-full border-[1.5px] border-[--white-400]" id="ecommerce_sec2">
                                {growArr.map((k, index) => (
                                    <div key={index} className="relative block items-center w-full h-full last:border-t-[1.5px] sm:last:border-t-[1.5px] md:last:border-t-0 lg:last:border-t-0 xl:last:border-t-0 after:hidden sm:after:hidden md:after:block lg:after:block xl:after:block before:hidden sm:before:hidden md:before:block lg:before:block xl:before:block" id="ecommerce_sec2-child">
                                        <div className="flex justify-start items-center w-full px-6 pt-6 text-3xl leading-none font-semibold">
                                            {k.name}
                                        </div>

                                        <div className="flex justify-start items-center w-full px-6 mt-2 text-lg font-normal tracking-tight leading-tight">
                                            {k.desc}
                                        </div>

                                        <div className="flex justify-center items-end w-full h-auto pt-6 p-0 sm:p-0 md:p-6 lg:p-6 xl:p-6 overflow-hidden">
                                            <Image className="flex justify-center items-center w-auto border-0 sm:border-0 md:border lg:border xl:border border-[--white-400] rounded-none sm:rounded-none md:rounded-md lg:rounded-md xl:rounded-md overflow-hidden"
                                                src={k.img}
                                                width={1080}
                                                height={675}
                                                alt={k.name}
                                            />
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