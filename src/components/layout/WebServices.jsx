"use client"

import React, { useEffect, useState } from 'react';

// NEXT JS
import Image from 'next/image';

// ICONS & CUSTOM COMPONENTS
import Button from '@/components/segments/Button';
import { BriefcaseIcon, BuildingOffice2Icon, BuildingStorefrontIcon, ChartBarIcon, NewspaperIcon, UsersIcon } from '@heroicons/react/24/outline';


const WebServices = () => {
    const handleMouseChange = (e) => {
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
            "icon": ['bg-green-700', <BuildingStorefrontIcon key={'BuildingStorefrontIcon'} className="size-4 text-white" />],
            "name": "E-Commerce Website",
            "desc": "Build your own online store today, with expert guidance for a seamless journey to success.",
            "img": "/assets/website-types/target.png",
            "link": "/"
        },
        {
            "icon": ['bg-fuchsia-700', <BuildingOffice2Icon key={'BuildingOffice2Icon'} className="size-4 text-white" />],
            "name": "Business Website",
            "desc": "Establish your digital presence with a professional website, guided by experts for success.",
            "img": "/assets/website-types/business.png",
            "link": "/"
        },
        {
            "icon": ['bg-pink-700', <NewspaperIcon key={'NewspaperIcon'} className="size-4 text-white" />],
            "name": "Blog Website",
            "desc": "Start your blogging journey today, with expert support for a seamless experience.",
            "img": "/assets/website-types/blog.png",
            "link": "/"
        },
        {
            "icon": ['bg-violet-700', <BriefcaseIcon key={'BriefcaseIcon'} className="size-4 text-white" />],
            "name": "Portfolio Website",
            "desc": "Showcase your work with a stunning portfolio website, guided by experts for success.",
            "img": "/assets/website-types/portfolio.png",
            "link": "/"
        },
        {
            "icon": ['bg-blue-700', <UsersIcon key={'UsersIcon'} className="size-4 text-white" />],
            "name": "CRM Software",
            "desc": "Streamline your business operations with customized CRM software, guided by expert assistance.",
            "img": "/assets/website-types/crm.png",
            "link": "/"
        },
        {
            "icon": ['bg-orange-700', <ChartBarIcon key={'ChartBarIcon'} className="size-4 text-white" />],
            "name": "Dashboard",
            "desc": "Access insightful data and manage your online presence effectively, guided by expert assistance.",
            "img": "/assets/website-types/dashboard.png",
            "link": "/"
        }
    ]


    return (
        <>
            <div className="relative z-[10] bg-gradient-to-b from-[--black-1000] to-[--black-1100] flex flex-col items-center justify-start w-full h-full min-h-screen overflow-hidden">
                <div className="flex flex-col justify-center items-center w-full pt-10 text-center f-dmsans">
                    <h1 className="flex justify-center items-center w-[95%] sm:w-[95%] md:w-[60%] lg:w-[60%] xl:w-[60%] text-[--white-200] text-4xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-6xl font-bold">
                        Creative power that goes beyond templates
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
                            <b>Get Started</b> — it&apos;s easy
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 gap-y-8 sm:gap-y-8 md:gap-y-4 lg:gap-y-4 xl:gap-y-4 w-full h-full mt-8 sm:mt-8 md:mt-12 lg:mt-12 xl:mt-12 px-8 sm:px-8 md:px-10 lg:px-10 xl:px-10 f-dmsans">
                    {services.map((service, index) => (
                        <div key={index} className="relative group flex justify-center items-center w-full h-full sm:h-full md:h-[32rem] lg:h-[32rem] xl:h-[32rem] bg-[--black-600] rounded-md overflow-hidden cursor-pointer" id="ws-card" onMouseMove={handleMouseChange}>
                            <div className="z-[2] relative block items-center size-[99.6%] p-0 sm:p-0 md:p-4 lg:p-4 xl:p-4 bg-[--black-1000] rounded-md overflow-hidden">
                                <div className="block items-center w-full p-6">
                                    <div className="flex justify-start items-center w-full space-x-3">
                                        <div className={`flex justify-center items-center size-8 ${service.icon[0]} rounded-full`}>
                                            {service.icon[1]}
                                        </div>

                                        <div className="flex justify-start items-center w-max text-xl sm:text-xl md:text-3xl lg:text-3xl xl:text-3xl text-[--white-100] font-semibold">
                                            {service.name}
                                        </div>
                                    </div>

                                    <div className="flex justify-start items-center w-full mt-2 text-sm sm:text-sm md:text-base lg:text-base xl:text-base text-[--fgColor-muted] font-normal">
                                        {service.desc}
                                    </div>

                                    <div className="flex justify-start items-center w-full mt-4 text-sm sm:text-sm md:text-base lg:text-base xl:text-base">
                                        <Button
                                            type="white-outlined"
                                            width="w-32 sm:w-32 md:w-36 lg:w-36 xl:w-36"
                                            height="h-10"
                                            round="rounded-md"
                                            icon={true}
                                        >
                                            Learn more
                                        </Button>
                                    </div>
                                </div>

                                <div className="relative flex justify-center items-center w-full h-auto">
                                    <Image className="z-[1] flex justify-center items-center w-auto rounded-t-none sm:rounded-t-none md:rounded-t-md lg:rounded-t-md xl:rounded-t-md rounded-b-md sm:rounded-b-md md:rounded-b-none lg:rounded-b-none xl:rounded-b-none rounded-md border border-[--black-200] curosr-pointer"
                                        src={service.img}
                                        width={1920}
                                        height={1080}
                                        alt=""
                                    />

                                    <Image className="top-0 absolute z-[0] flex justify-center items-center w-auto rounded-md scale-[1.01] blur-lg group-hover:blur-2xl group-hover:opacity-30 opacity-20 saturate-150"
                                        src={service.img}
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