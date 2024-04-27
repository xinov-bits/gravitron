"use client"

import React, { useEffect, useState } from 'react';

// NEXT JS
import Image from 'next/image';

// ICONS & CUSTOM COMPONENTS
import Button from '@/components/segments/Button';
import { ShoppingCartIcon } from '@heroicons/react/20/solid';


const WebServices = () => {
    const handleMouseChange = (e: any) => {
        const { currentTarget: target } = e;

        const rect = target.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        target.style.setProperty('--mouse-x', `${x}px`);
        target.style.setProperty('--mouse-y', `${y}px`);
    }


    // SERIVICES OBJ
    const services = [
        {
            "name": "eCommerce Website",
            "desc": "Build your own online store today, with expert guidance for a seamless journey to success.",
            "img": "/assets/website-types/target.png",
            "link": "/"
        },
        {
            "name": "Business Website",
            "desc": "Establish your digital presence with a professional website, guided by experts for success.",
            "img": "/assets/website-types/business.png",
            "link": "/"
        },
        {
            "name": "Blog Website",
            "desc": "Start your blogging journey today, with expert support for a seamless experience.",
            "img": "/assets/website-types/blog.png",
            "link": "/"
        },
        {
            "name": "Portfolio Website",
            "desc": "Showcase your work with a stunning portfolio website, guided by experts for success.",
            "img": "/assets/website-types/portfolio.png",
            "link": "/"
        },
        {
            "name": "CRM Software",
            "desc": "Streamline your business operations with customized CRM software, guided by expert assistance.",
            "img": "/assets/website-types/crm.png",
            "link": "/"
        },
        {
            "name": "Dashboard",
            "desc": "Access insightful data and manage your online presence effectively, guided by expert assistance.",
            "img": "/assets/website-types/dashboard.png",
            "link": "/"
        }
    ]


    return (
        <>
            <div className="relative z-[10] bg-gradient-to-b from-[--black-1000] to-[--black-1100] flex flex-col items-center justify-start w-full min-h-screen my-4 sm:my-4 md:my-10 lg:my-10 xl:my-10 p-4 sm:p-4 md:p-8 lg:p-8 xl:p-8 overflow-hidden">
                <div className="flex flex-col justify-center items-center w-full text-center f-dmsans">
                    <h1 className="flex justify-center items-center w-[95%] sm:w-[95%] md:w-[50%] lg:w-[50%] xl:w-[50%] text-[--white-200] text-3xl sm:text-3xl md:text-6xl lg:text-6xl xl:text-6xl font-bold">
                        A platform designed for growth
                    </h1>

                    <span className="relative flex justify-center items-center w-[20rem] sm:w-[20rem] md:w-[28rem] lg:w-[28rem] xl:w-[28rem] h-[1.5px] mt-6 mb-3 bg-[linear-gradient(90deg,rgba(255,_255,_255,_0)_0%,var(--black-200)_50%,rgba(255,_255,_255,_0)_100%)]">
                        <span className="absolute z-[3] sec2-shining_border1"></span>
                        <span className="absolute z-[2] sec2-shining_border2"></span>
                        <span className="absolute z-[1] sec2-shining_border3"></span>
                    </span>

                    <h3 className="flex justify-center items-center w-[82%] sm:w-[82%] md:w-[65%] lg:w-[65%] xl:w-[65%] text-[--white-400] text-base sm:text-base md:text-xl lg:text-xl xl:text-xl font-normal">
                        You invision, we design and code it for you — for everything from fully custom layouts to complex animations.
                    </h3>

                    <div className="mt-6 mb-4">
                        <Button
                            type="primary"
                            width="w-52"
                            height="h-12"
                            round="rounded-md"
                            icon={false}
                        >
                            <b>Get Started</b> — it's easy
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 w-full h-full mt-8 sm:mt-8 md:mt-12 lg:mt-12 xl:mt-12 f-dmsans">
                    {services.map((k, index) => (
                        <div className="relative group block items-center w-full h-[32rem] p-[1px] bg-[--black-600] rounded-md overflow-hidden cursor-pointer" id="ws-card" onMouseMove={handleMouseChange}>
                            <div className="z-[2] relative block items-center size-full p-4 bg-[--black-1000] rounded-md overflow-hidden">
                                <div className="block items-center w-full p-6">
                                    <div className="flex justify-start items-center w-full text-3xl text-[--white-100] font-semibold">
                                        {k.name}
                                    </div>

                                    <div className="flex justify-start items-center w-full mt-2 text-base text-[--fgColor-muted] font-normal">
                                        {k.desc}
                                    </div>

                                    <div className="flex justify-start items-center w-full mt-4 text-base text-[--fgColor-muted] font-normal">
                                        <Button
                                            type="white-outlined"
                                            width="w-36"
                                            height="h-10"
                                            round="rounded-md"
                                            icon={true}
                                        >
                                            Learn more
                                        </Button>
                                    </div>
                                </div>

                                <div className="relative flex justify-center items-center w-full h-full">
                                    <Image className="top-4 absolute z-[1] flex justify-center items-center w-auto rounded-md border border-[--black-200] curosr-pointer"
                                        src={k.img}
                                        width={1920}
                                        height={1080}
                                        alt=""
                                    />

                                    <Image className="top-4 absolute z-[0] flex justify-center items-center w-auto rounded-md scale-[1.01] blur-xl group-hover:blur-2xl group-hover:opacity-25 opacity-20"
                                        src={k.img}
                                        width={1920}
                                        height={1080}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default WebServices