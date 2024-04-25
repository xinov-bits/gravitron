"use client"

import React from 'react';

// SPLINE
import Spline from '@splinetool/react-spline';


const Prototype = () => {


    return (
        <>
            <div className="relative z-[10] bg-[--black-1000] flex flex-col items-center justify-start w-screen h-full">
                <div className="w-[1260px] h-[670px] -mt-[4rem] sm:-mt-[4rem] md:-mt-[8rem] lg:-mt-[8rem] xl:-mt-[8rem]">
                    <Spline scene="https://prod.spline.design/G4SP4VkXup-r-2eT/scene.splinecode" />
                </div>
            </div>
        </>
    )
}

export default Prototype