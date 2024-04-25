"use client"

import React, { useState } from 'react';

// NEXT JS
import Image from 'next/image';

// ICONS & CUSTOM COMPONENTS
import { BoltIcon, PaintBrushIcon, SwatchIcon } from '@heroicons/react/16/solid';
import Button from '@/components/segments/Button';

// TILT JS
import Tilt from 'react-parallax-tilt';


const Solutions = () => {
    const [images, setImages] = useState(['1.png', '2.png', '3.png']);

    // TOOLS
    const toolsDesign = [
      {
        name: 'Figma',
        img: '/assets/icons/designing-softwares/figma.svg',
      },
      {
        name: 'Sketch',
        img: '/assets/icons/designing-softwares/sketch.svg',
      },
      {
        name: 'Framer',
        img: '/assets/icons/designing-softwares/framer.svg',
      },
      {
        name: 'Adobe Photoshop',
        img: '/assets/icons/designing-softwares/photoshop.svg',
      },
      {
        name: 'Adobe Xd',
        img: '/assets/icons/designing-softwares/xd.svg',
      },
      {
        name: 'Adobe Illustrator',
        img: '/assets/icons/designing-softwares/illustrator.svg',
      },
      {
        name: 'More',
        img: '/assets/icons/more.svg',
      },
    ]
  

    return (
        <>
            <div className="z-[10] bg-[--black-1000] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-center items-start w-full h-full p-4 sm:p-4 md:p-8 lg:p-8 xl:p-8 gap-6 sm:gap-6 md:gap-8 lg:gap-8 xl:gap-8 overflow-hidden">
                <Tilt className="!w-full sm:!w-full md:!w-1/2 lg:!w-1/2 xl:!w-1/2 !h-full"
                    tiltMaxAngleX={2}
                    tiltMaxAngleY={2}
                    glareEnable={true}
                    glareBorderRadius='10px'
                    glareMaxOpacity={0.1}
                    glarePosition='all'
                    glareColor='#45b4ff'
                >
                    <div className="group block items-start w-full h-full bg-gradient-to-t from-[--black-800] to-[--black-600] border border-[--black-400] rounded-xl overflow-hidden cursor-pointer">
                        <div className="block items-start w-full h-auto p-6 sm:p-6 md:p-8 lg:p-8 xl:p-8">
                            <div className="flex justify-start items-center w-max px-2.5 py-2 space-x-1 leading-none text-sm text-[#45b4ff] border border-[#45b4ff] rounded-full select-none" id="sec2_chip1">
                                <BoltIcon className="flex justify-center items-center size-3.5" />

                                <div> Byte Realm </div>
                            </div>

                            <div className="items-center w-full mt-4 text-3xl font-bold text-white">
                                Exemplary <span className="text-[#45b4ff] f-ibm_mono">Full-Stack Web Applications</span> with award-winning designs.
                            </div>

                            <div className="items-center w-full mt-3 text-base text-[--fgColor-muted-100] opacity-75">
                                Engineered Excellence: Crafting Full-Stack Web Apps with Leading UI/UX and Exceptional Features.
                            </div>

                            <div className="items-center w-full mt-6 text-base text-[--fgColor-muted-100] opacity-75 group-hover:opacity-100">
                                <Button
                                    type="white-outlined"
                                    width="w-36"
                                    height="h-12"
                                    round="rounded-lg"
                                    icon={true}
                                >
                                    Explore more
                                </Button>
                            </div>
                        </div>

                        <div className="relative block items-center w-full mt-8">
                            <div className="z-[1] flex justify-center items-center shadow scale-100">
                                <Image className="flex justify-center items-center w-auto brightness-75"
                                    src={`/assets/background/home/examples/${images[0]}`}
                                    width={1296}
                                    height={872}
                                    alt="Example 1"
                                />
                            </div>

                            <div className="-top-6 group-hover:-top-8 left-0 absolute z-[2] flex justify-center items-center rounded-lg overflow-hidden shadow-lg group-hover:shadow-2xl scale-[0.95] brightness-95 delay-75">
                                <Image className="flex justify-center items-center w-auto"
                                    src={`/assets/background/home/examples/${images[1]}`}
                                    width={1296}
                                    height={872}
                                    alt="Example 2"
                                />
                            </div>

                            <div className="-top-12 group-hover:-top-16 left-0 absolute z-[3] flex justify-center items-center rounded-lg overflow-hidden shadow-lg group-hover:shadow-2xl scale-[0.9]"
                                onClick={() => {
                                    let dupImgs = [...images];

                                    let removedItem = dupImgs.shift();
                                    dupImgs.push(removedItem ? removedItem : '');

                                    setImages(dupImgs)
                                }}
                            >
                                <Image className="flex justify-center items-center w-auto"
                                    src={`/assets/background/home/examples/${images[2]}`}
                                    width={1296}
                                    height={872}
                                    alt="Example 3"
                                />
                            </div>
                        </div>
                    </div>
                </Tilt>

                <div className="block justify-start items-center !w-full sm:!w-full md:!w-1/2 lg:!w-1/2 xl:!w-1/2 h-full space-y-6 sm:space-y-6 md:space-y-8 lg:space-y-8 xl:space-y-8">
                    <Tilt className="!w-full !h-auto sm:!h-auto md:!h-1/2 lg:!h-1/2 xl:!h-1/2"
                        tiltMaxAngleX={2}
                        tiltMaxAngleY={2}
                        glareEnable={true}
                        glareBorderRadius='10px'
                        glareMaxOpacity={0.1}
                        glarePosition='all'
                        glareColor='#57d365'
                    >
                        <div className="group block items-start w-full h-full bg-gradient-to-t from-[--black-800] to-[--black-600] border border-[--black-400] rounded-xl overflow-hidden cursor-pointer">
                            <div className="block items-start w-full h-full p-6 sm:p-6 md:p-8 lg:p-8 xl:p-8">
                                <div className="flex justify-start items-center w-max px-2.5 py-2 space-x-1 leading-none text-sm text-[#57d365] border border-[#57d365] rounded-full select-none" id="sec2_chip1">
                                    <PaintBrushIcon className="flex justify-center items-center size-3.5" />

                                    <div> Prototype Realm </div>
                                </div>

                                <div className="items-center w-full mt-4 text-3xl font-bold text-white">
                                    Harmonizing Digital Worlds: Pioneering <span className="text-[#57d365] f-ibm_mono">UI Design</span> Excellence.
                                </div>

                                <div className="items-center w-full mt-3 text-base text-[--fgColor-muted-100] opacity-75">
                                    Setting Industry Standards with Cutting-Edge UI Design for Seamless Experiences.
                                </div>


                                <div className="items-center w-full mt-4">
                                    <div className="items-center w-full font-medium text-base text-[--fgColor-muted-100] opacity-95">
                                        Technologies used
                                    </div>

                                    <div className="flex flex-wrap justify-start items-start w-full h-auto sm:h-auto md:h-[2.8rem] lg:h-[2.8rem] xl:h-[2.8rem] mt-2 gap-4">
                                        {toolsDesign.map((k, index) => (
                                            <div key={index} className={`flex justify-center items-center size-[2.6rem] sm:size-[2.6rem] md:size-[2.8rem] lg:size-[2.8rem] xl:size-[2.8rem] ${k.name !== 'More' && 'hover:scale-[1.05] hover:mix-blend-screen !duration-200'}`}>
                                                <Image className="flex justify-center items-center size-full"
                                                    width={64}
                                                    height={64}
                                                    src={k.img}
                                                    alt={k.name}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="items-center w-full mt-6 text-base text-[--fgColor-muted-100] opacity-75 group-hover:opacity-100">
                                    <Button
                                        type="white-outlined"
                                        width="w-36"
                                        height="h-12"
                                        round="rounded-lg"
                                        icon={true}
                                    >
                                        Explore more
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Tilt>

                    <Tilt className="!w-full !h-auto sm:!h-auto md:!h-1/2 lg:!h-1/2 xl:!h-1/2"
                        tiltMaxAngleX={2}
                        tiltMaxAngleY={2}
                        glareEnable={true}
                        glareBorderRadius='10px'
                        glareMaxOpacity={0.1}
                        glarePosition='all'
                        glareColor='#ffd33d'
                    >
                        <div className="group relative flex justify-center items-center w-full h-full bg-gradient-to-t from-[--black-800] to-[--black-600] border border-[--black-400] rounded-xl overflow-hidden cursor-pointer">
                            <div className="z-[1] block items-start w-full h-full p-6 sm:p-6 md:p-8 lg:p-8 xl:p-8">
                                <div className="flex justify-start items-center w-max px-2.5 py-2 space-x-1 leading-none text-sm text-[#ffd33d] border border-[#ffd33d] rounded-full select-none" id="sec2_chip1">
                                    <SwatchIcon className="flex justify-center items-center size-3.5" />

                                    <div> Design Realm </div>
                                </div>

                                <div className="items-center w-full mt-4 text-3xl font-bold text-white">
                                    Iconic <span className="text-[#ffd33d] f-ibm_mono">Logo Crafting</span>: Redefining Brand Identity.
                                </div>

                                <div className="items-center w-full mt-3 text-base text-[--fgColor-muted-100] opacity-75">
                                    Behold our craft: Artisans of iconography, fashioning logos that capture essence, leaving indelible impressions on minds.
                                </div>

                                <div className="items-center w-full mt-6 text-base text-[--fgColor-muted-100] opacity-75 group-hover:opacity-100">
                                    <Button
                                        type="white-outlined"
                                        width="w-36"
                                        height="h-12"
                                        round="rounded-lg"
                                        icon={true}
                                    >
                                        Explore more
                                    </Button>
                                </div>
                            </div>

                            <div className="z-[0] absolute -right-24 flex justify-center items-center size-[20rem] -rotate-6 opacity-40">
                                <Image className="flex justify-center items-center size-full"
                                    src="/assets/icons/logo-archetype.svg"
                                    width={367.98}
                                    height={316}
                                    alt="logo-archetype"
                                />
                            </div>
                        </div>
                    </Tilt>
                </div>
            </div>
        </>
    )
}

export default Solutions