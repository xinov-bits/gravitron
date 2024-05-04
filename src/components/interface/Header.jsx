"use client"

import React, { useEffect, useState } from 'react';

// NEXT JS
import Link from 'next/link';

// FRAMER
import { AnimatePresence, motion } from 'framer-motion';

// ICONS & CUSTOM COMPONENTS
import { Call16Regular } from "@fluentui/react-icons";
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Button from '../segments/Button';


const Header = () => {
  const [menuShow, setMenuShow] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const [txPos, setTxPos] = useState(21.5);

  useEffect(() => {
    if (menuShow !== '') {
      setMenuOpen(true)
    } else {
      setMenuOpen(false)
    }
  }, [menuShow])

  useEffect(() => {
    if (menuShow === "products") {
      setTxPos(21.5);
    } else if (menuShow === "solutions") {
      setTxPos(28.5);
    } else if (menuShow === "work") {
      setTxPos(34.75);
    } else {
      setTxPos(21.5);
    }
  }, [menuShow]);

  const productMenu = [
    {
      'name': 'build a website',
      'lists': [
        {
          'name': 'Designer',
          'desc': 'Creative control and flexibility without code',
          'icon': 'cursor',
        },
        {
          'name': 'CMS',
          'desc': 'Flexible content management',
          'icon': 'cms',
        },
        {
          'name': 'Ecommerce',
          'desc': 'Manage stunning online stores',
          'icon': 'ecommerce',
        },
        {
          'name': 'Interactions',
          'desc': 'Craft immersive experiences',
          'icon': 'interactions',
        },
        {
          'name': 'Localization',
          'desc': 'Customize your site for a worldwide audience',
          'icon': 'localization',
        },
      ]
    },
    {
      'name': 'OPTIMIZE FOR GROWTH',
      'lists': [
        {
          'name': 'Edit mode',
          'desc': 'Custom-built environment for content teammates',
          'icon': 'edit',
        },
        {
          'name': 'SEO',
          'desc': 'Fine tuned control, without engineers',
          'icon': 'seo',
        },
      ]
    },
  ]


  return (
    <>
      <header className="z-[900] absolute top-0 hidden sm:hidden md:flex lg:flex xl:flex justify-between items-center w-full h-14 px-2 text-[--white-100] bg-none select-none x_shadow-c-sub-nav">
        <div className="flex justify-center items-center w-[12%] h-auto text-xl font-bold select-none cursor-pointer">
          <Link href="/">
            <div className="flex justify-center items-center size-auto">
              GitLabs
            </div>
          </Link>
        </div>

        <div className="flex justify-start items-center w-auto h-full">
          <ul className="flex justify-start items-center w-full h-full space-x-6">
            <li className="relative flex justify-center items-center w-max px-3 h-full text-[--fgColor-muted-100] hover:text-[--white-100] cursor-pointer">
              <div> Home </div>
            </li>

            <li className="relative flex justify-center items-center w-max px-3 h-full text-[--fgColor-muted-100] hover:text-[--white-100] after:content-[''] after:absolute after:bottom-0 after:w-[80%] hover:after:h-0.5 after:h-0 after:bg-[--primary-400] after:duration-200 duration-200 cursor-pointer"
              onClick={() => {
                !menuOpen ? setMenuShow('product') : setMenuShow('')
              }}
            >
              <div className="mr-1.5"> Product </div>

              <ChevronDownIcon
                className="flex justify-center items-center size-4 text-white"
                style={{
                  transform: `scaleY(${menuShow === 'product' ? '-1' : '1 '})`
                }}
              />
            </li>

            <li className="relative flex justify-center items-center w-max px-3 h-full text-[--fgColor-muted-100] hover:text-[--white-100] after:content-[''] after:absolute after:bottom-0 after:w-[80%] hover:after:h-0.5 after:h-0 after:bg-[--primary-400] after:duration-200 duration-200 cursor-pointer"
              onClick={() => {
                !menuOpen ? setMenuShow('solutions') : setMenuShow('')
              }}
            >
              <div className="mr-1.5"> Solutions </div>

              <ChevronDownIcon
                className="flex justify-center items-center size-4 text-white"
                style={{
                  transform: `scaleY(${menuShow === 'solutions' ? '-1' : '1 '})`
                }}
              />
            </li>

            <li className="relative flex justify-center items-center w-max px-3 h-full text-[--fgColor-muted-100] hover:text-[--white-100] after:content-[''] after:absolute after:bottom-0 after:w-[80%] hover:after:h-0.5 after:h-0 after:bg-[--primary-400] after:duration-200 duration-200 cursor-pointer"
              onClick={() => {
                !menuOpen ? setMenuShow('Resources') : setMenuShow('')
              }}
            >
              <div className="mr-1.5"> Resources </div>

              <ChevronDownIcon
                className="flex justify-center items-center size-4 text-white"
                style={{
                  transform: `scaleY(${menuShow === 'Resources' ? '-1' : '1 '})`
                }}
              />
            </li>

            <li className="relative flex justify-center items-center w-max px-3 h-full text-[--fgColor-muted-100] hover:text-[--white-100] cursor-pointer">
              <div> Contact </div>
            </li>
          </ul>
        </div>

        <div className="flex justify-end items-center w-[11%] h-full py-2 overflow-hidden">
          <div className="flex justify-center items-center size-full">
            <Button
              type="white-outlined"
              width="w-32"
              height="h-10"
              round="rounded-md"
              icon={false}
            >
              <div className="flex justify-center items-center w-max space-x-1">
                <Call16Regular />

                <div>Contact Us</div>
              </div>
            </Button>
          </div>
        </div>
      </header>

      <div className={`absolute z-[500] top-14 flex flex-wrap justify-start items-start w-full h-auto p-6 gap-6 bg-[--white-100] ${menuOpen ? 'scale-y-100 pointer-events-auto' : 'scale-y-0 pointer-events-none'} origin-top overflow-y-hidden duration-300`}>
        {productMenu.map((k, index) => (
          <div key={index} className="block items-start w-auto max-w-[50%] h-auto scale-y-100">
            <div className="flex justify-start items-center w-full pb-4 text-sm font-medium tracking-wide leading-none text-[--black-400] border-b border-[--white-400] uppercase select-none">
              {k.name}
            </div>

            <div className="flex flex-wrap gap-8 justify-start items-start w-full mt-5">
              {k.lists.map((item) => (
                <Link key={item.name} href="/">
                  <div className="group flex justify-start items-start w-[16rem] h-full">
                    <div className="flex justify-center items-center size-7 mr-1.5">
                      <svg className="flex justify-center items-center size-7" width={24} height={24}>
                        <use
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xlinkHref={`/assets/icons/menuIcons.svg#${item.icon}`}
                        ></use>
                      </svg>
                    </div>

                    <div className="block items-center w-auto">
                      <div className="flex justify-start items-center w-auto text-base font-medium leading-none group-hover:underline">
                        {item.name}
                      </div>

                      <div className="flex justify-start items-center w-auto mt-2 text-sm leading-tight text-[--black-200]">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Header