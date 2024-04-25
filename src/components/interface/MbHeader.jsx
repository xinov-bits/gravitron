"use client"

import React, { useState } from 'react';

// NEXT JS
import Link from 'next/link';

// ICONS & CUSTOM COMPONENTS
import { Bars2Icon } from '@heroicons/react/20/solid';
import Menu from '../models/Menu';


const Header = () => {
    const [menuShow, setMenuShow] = useState('');


    return (
        <>
            <div className="z-[900] absolute top-0 flex sm:flex md:hidden lg:hidden xl:hidden justify-between items-center w-screen h-14 px-4 text-white bg-none x_shadow-c-sub-nav">
                <div className="flex justify-start items-center w-full h-auto text-xl font-bold border-r-[1.5px] border-[--black-800] select-none cursor-pointer">
                    <Link href="/" className="">
                        <div className="flex justify-start items-center size-auto">
                            GitLabs
                        </div>
                    </Link>
                </div>

                <div className="flex justify-end items-center w-full h-auto text-xl font-bold border-r-[1.5px] border-[--black-800] select-none cursor-pointer">
                    <div className="flex justify-end items-center size-5">
                        <Bars2Icon className="size-full" />
                    </div>
                </div>
            </div>

            {menuShow !== '' && (
                <Menu
                    name={menuShow}
                />
            )}
        </>
    )
}

export default Header