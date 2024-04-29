"use client"

import React from 'react';

// NEXT JS
import Image from 'next/image';

// SWIPER
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';


const Clients = () => {
    const clients = [
        '/assets/icons/clients/ted.svg',
        '/assets/icons/clients/dropbox.svg',
        '/assets/icons/clients/philips.svg',
        '/assets/icons/clients/bbdo.svg',
        '/assets/icons/clients/nyt.svg',
        '/assets/icons/clients/ideo.svg',
        '/assets/icons/clients/upwork.svg',
        '/assets/icons/clients/pwc.svg',
        '/assets/icons/clients/discord.svg',
        '/assets/icons/clients/monday.svg',
        '/assets/icons/clients/ncr.svg',
    ]


    return (
        <>
            <div className="flex justify-center items-center w-full h-full bg-[--black-1100]">
                <div className="flex justify-center items-center w-screen h-16 mt-10 bg-[--black-1100] text-[--white-100] !cursor-pointer">
                    <Splide className="flex justify-center items-center !size-full !cursor-pointer overflow-hidden"
                        options={{
                            type: 'loop',
                            drag: false,
                            focus: 'center',
                            autoScroll: {
                                autoStart: true,
                                speed: 2,
                                pauseOnHover: false,
                                pauseOnFocus: false,
                            },
                            arrows: false,
                            pagination: false,
                            perPage: window !== undefined ? (window?.innerWidth <= 600 ? (window?.innerWidth <= 400 ? 3.5 : 5) : 7) : 7,
                            gap: "20px",
                        }}
                        extensions={{ AutoScroll }}
                    >
                        {clients.map((item, index) => (
                            <SplideSlide key={index} className="flex justify-center items-center h-full py-4">
                                <Image className="flex justify-center items-center h-full oapcity-95"
                                    src={item}
                                    width={200}
                                    height={32}
                                    alt=""
                                />
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </div>
        </>
    )
}

export default Clients