"use client"

import React, { useState } from 'react';

// NEXT JS
import Link from 'next/link';

// ICONS & CUSTOM COMPONENTS
import { Call16Regular } from "@fluentui/react-icons";
import Button from '../segments/Button';
import Menu from '../models/Menu';


const Header = () => {
  const [menuShow, setMenuShow] = useState('');


  return (
    <>
      <div className="z-[900] absolute top-0 hidden sm:hidden md:flex lg:flex xl:flex justify-between items-center w-full h-14 px-2 text-[--white-100] bg-none x_shadow-c-sub-nav">
        <div className="flex justify-center items-center w-[12%] h-auto text-xl font-bold border-r-[1.5px] border-[--black-800] select-none cursor-pointer">
          <Link href="/">
            <div className="flex justify-center items-center size-auto">
              GitLabs
            </div>
          </Link>
        </div>

        <div className="flex justify-start items-center w-auto h-full">
          <ul className="flex justify-start items-center w-full h-full space-x-6">
            <li className="relative flex justify-center items-center w-max px-3 h-full hover:text-[--primary-600] cursor-pointer after:content-[''] after:absolute after:bottom-0 after:w-full after:h-0 hover:after:h-[1px] after:bg-[--primary-600]">
              Home
            </li>

            <li className="relative flex justify-center items-center w-max px-3 h-full hover:text-[--primary-600] cursor-pointer after:content-[''] after:absolute after:bottom-0 after:w-full after:h-0 hover:after:h-[1px] after:bg-[--primary-600]"
              onMouseOver={() => setMenuShow('products')}
            >
              Products
            </li>

            <li className="relative flex justify-center items-center w-max px-3 h-full hover:text-[--primary-600] cursor-pointer after:content-[''] after:absolute after:bottom-0 after:w-full after:h-0 hover:after:h-[1px] after:bg-[--primary-600]"
              onMouseOver={() => setMenuShow('solutions')}
            >
              Solutions
            </li>

            <li className="relative flex justify-center items-center w-max px-3 h-full hover:text-[--primary-600] cursor-pointer after:content-[''] after:absolute after:bottom-0 after:w-full after:h-0 hover:after:h-[1px] after:bg-[--primary-600]"
              onMouseOver={() => setMenuShow('work')}
            >
              Work
            </li>

            <li className="relative flex justify-center items-center w-max px-3 h-full hover:text-[--primary-600] cursor-pointer after:content-[''] after:absolute after:bottom-0 after:w-full after:h-0 hover:after:h-[1px] after:bg-[--primary-600]">
              Contact
            </li>
          </ul>
        </div>

        <div className="flex justify-end items-center w-[11%] h-full py-2 overflow-hidden">
          <div className="flex justify-center items-center size-full">
            <Button
              type="white-outlined"
              width="w-32"
              height="h-10"
              round="rounded-lg"
              icon={false}
            >
              <div className="flex justify-center items-center w-max space-x-1">
                <Call16Regular />
                
                <div>Contact Us</div>
              </div>
            </Button>
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