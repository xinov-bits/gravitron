"use client"

import React, { useEffect, useRef } from 'react';

// NEXT JS
import Image from 'next/image';

// TILT JS
import VanillaTilt from 'vanilla-tilt';
function Tilt(props: { [x: string]: any; options: any; }) {
    const { options, ...rest } = props;
    const tilt = useRef(null);

    useEffect(() => {
        return VanillaTilt.init(tilt.current, options);
    }, [options]);

    return <div ref={tilt} {...rest} />;
}

// SPLINE
import Spline from '@splinetool/react-spline';


const Prototype = () => {
    const options = {
        speed: 1000,
        max: 2,
        perspective: 1000,
        gyroscope: true,
    };


    return (
        <>
            <div className="relative z-[10] bg-[--black-1000] flex flex-col items-center justify-start w-screen h-full">
                <div className="w-[1260px] h-[670px] -mt-[8rem]">
                    <Spline scene="https://prod.spline.design/G4SP4VkXup-r-2eT/scene.splinecode" />
                </div>
            </div>
        </>
    )
}

export default Prototype