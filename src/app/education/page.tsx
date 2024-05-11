"use client"

import React, { useEffect, useState } from 'react';

// NEXT JS
import Image from 'next/image';
import Link from 'next/link';

// ICONS & CUSTOM COMPONENTS
import Button from '@/components/segments/Button';


const page = () => {

    const educationArr = [
        {
            'name': 'Add Your Courses Dynamically',
            'desc': 'Empower your website with custom courses with complete details',
            'img': '/assets/education/imgs/2.png',
        },
        {
            'name': 'Integrate User Log in and Sign up',
            'desc': 'Custom designs, and options according to your will',
            'img': '/assets/education/imgs/3.png',
        },
        {
            'name': 'Additional Details to Your Courses',
            'desc': 'Complete designing for every bit of options',
            'img': '/assets/education/imgs/4.png',
        },
        {
            'name': 'Add Segments Your Way',
            'desc': 'Highlight key segments or create a hierarchy.',
            'img': '/assets/education/imgs/5.png',
        },

    ]


    return (
        <>
            <div className="block items-start w-full h-full min-h-screen mt-14 bg-[--black-1100]">
                <div className="block sm:block md:flex lg:flex xl:flex justify-between items-center w-full h-[37rem] f-dmsans">
                    <div className="flex flex-col justify-center items-center w-full sm:w-full md:w-[50vw] lg:w-[50vw] xl:w-[50vw] h-full px-8 sm:px-8 md:px-12 lg:px-12 xl:px-12">
                        <div className="block items-center w-full text-5xl font-bold text-[--white-100]">
                            <span className="flex justify-start items-center w-auto pb-0.5 text-5xl !text-[2.45rem] font-medium gradient gradient-green">
                                Education
                            </span>

                            <span className="flex justify-start items-center w-auto mt-2">
                                Manage your institution or school online
                            </span>
                        </div>

                        <div className="block items-center w-full mt-4 text-base !text-[1.15rem] leading-snug font-medium text-[--fgColor-muted-100]">
                            Get ready to revolutionize online learning with our tailored platforms. Enjoy personalized courses, smooth integration, and stress-free management &ndash; all made just for you.
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
                            ↓&nbsp;&nbsp;LEARN MORE ABOUT THE EDUCATION
                        </Link>
                    </div>

                    <div className="relative flex items-center w-full sm:w-full md:w-[50vw] lg:w-[50vw] xl:w-[50vw] h-full overflow-hidden">
                        <div className="absolute -right-[1rem] block justify-center items-center w-full h-full">
                            <div className="flex justify-center items-center w-full h-full">
                                <Image className="flex justify-center items-center w-full h-auto"
                                    src="/assets/education/imgs/1.png"
                                    width={1255}
                                    height={1061}
                                    placeholder="blur"
                                    blurDataURL="/assets/education/imgs/1.png"
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
                                    src="/assets/education/icon1.svg"
                                    width={400}
                                    height={400}
                                    alt=""
                                />

                                <div>
                                    Integrate Your Courses
                                </div>
                            </div>

                            <div className="flex justify-start items-center w-full text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-medium tracking-tight">
                                to meet the needs of your students
                            </div>
                        </div>

                        <div className="relative flex justify-center items-center w-full mt-10">
                            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-start w-full border-[1.5px] border-[--white-400]" id="ecommerce_sec2">
                                {educationArr.map((k, index) => (
                                    <div key={index} className="relative block items-center w-full h-full last:border-t-[1.5px] sm:last:border-t-[1.5px] md:last:border-t-0 lg:last:border-t-0 xl:last:border-t-0 after:hidden sm:after:hidden md:after:block lg:after:block xl:after:block before:hidden sm:before:hidden md:before:block lg:before:block xl:before:block" id="ecommerce_sec2-child">
                                        <div className="flex justify-start items-center w-full px-6 pt-6 text-3xl leading-none font-semibold">
                                            {k.name}
                                        </div>

                                        <div className="flex justify-start items-center w-full px-6 mt-2 text-lg font-normal tracking-tight leading-tight">
                                            {k.desc}
                                        </div>

                                        <div className="flex justify-center items-end w-full h-auto pt-6 p-0 sm:p-0 md:p-6 lg:p-6 xl:p-6 overflow-hidden">
                                            <Image className="flex justify-center items-center w-auto border border-[--white-400] rounded-none sm:rounded-none md:rounded-md lg:rounded-md xl:rounded-md shadow-md shadow-[#06080b10] overflow-hidden"
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