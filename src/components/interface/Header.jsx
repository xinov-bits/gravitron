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


  // MENUs

  const productMenu = [
    {
      'name': 'build a website',
      'lists': [
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
          'name': 'Blog',
          'desc': 'Elucidate your ideas and thoughts to the world',
          'icon': 'blog',
        },
        {
          'name': 'Education',
          'desc': 'Manage a website for your institute, or students',
          'icon': 'education',
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
          'name': 'Domain Management',
          'desc': 'Find the best domains for your brand or company',
          'icon': 'domain',
        },
        {
          'name': 'SEO',
          'desc': 'Fine tuned control, without engineers',
          'icon': 'seo',
        },
        {
          'name': 'Hosting',
          'desc': 'Fast and reliable hosting for your website',
          'icon': 'hosting',
        },
      ]
    },
  ]

  const solutionsMenu = [
    {
      'name': 'GitLabs for',
      'lists': [
        {
          'name': 'Freelancers',
          'desc': 'Explore how freelancers do more, faster with GitLabs',
          'icon': 'freelancers',
        },
        {
          'name': 'Agencies',
          'desc': 'Discover how GitLabs can power your agency\'s growth',
          'icon': 'agencies',
        },
        {
          'name': 'Startups',
          'desc': 'Learn how to move faster with GitLabs',
          'icon': 'startups',
        },
        {
          'name': 'Enterprise',
          'desc': 'Learn how world-class organizations build faster with GitLabs',
          'icon': 'enterprise',
        },
        {
          'name': 'Global alliances',
          'desc': 'Learn about becoming a global alliance partner',
          'icon': 'global_alliances',
        },
        {
          'name': 'UI/UX Design',
          'desc': 'Creative control and flexibility without code',
          'icon': 'cursor',
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

            <label className="relative flex justify-center items-center w-max px-3 h-full text-[--fgColor-muted-100] hover:text-[--white-100] after:content-[''] after:absolute after:bottom-0 after:w-[80%] hover:after:h-0.5 after:h-0 after:bg-[--primary-400] after:duration-200 duration-200 cursor-pointer" htmlFor="product">
              <input className="hidden"
                type="radio"
                name="menu"
                value="product"
                id="product"
                onChange={(e) => {
                  setMenuShow('');

                  setTimeout(() => {
                    setMenuShow(e.target.value)
                  }, 300);
                }}
                onClick={() => menuOpen && (setMenuOpen(false), setMenuShow(''))}
                checked={menuShow === 'product'}
              />

              <div className="mr-1.5">Product</div>

              <ChevronDownIcon className={`size-4 ${menuShow === 'product' && '-scale-y-100'} duration-75`} />
            </label>

            <label className="relative flex justify-center items-center w-max px-3 h-full text-[--fgColor-muted-100] hover:text-[--white-100] after:content-[''] after:absolute after:bottom-0 after:w-[80%] hover:after:h-0.5 after:h-0 after:bg-[--primary-400] after:duration-200 duration-200 cursor-pointer" htmlFor="solutions">
              <input className="hidden"
                type="radio"
                name="menu"
                value="solutions"
                id="solutions"
                onChange={(e) => {
                  setMenuShow('');

                  setTimeout(() => {
                    setMenuShow(e.target.value)
                  }, 300);
                }}
                onClick={() => menuOpen && (setMenuOpen(false), setMenuShow(''))}
                checked={menuShow === 'solutions'}
              />

              <div className="mr-1.5">Solutions</div>

              <ChevronDownIcon className={`size-4 ${menuShow === 'solutions' && '-scale-y-100'} duration-75`} />
            </label>

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

      {menuOpen && (
        <motion.div
          className={`absolute z-[500] top-14 flex flex-wrap justify-start items-start w-full h-auto p-6 gap-x-6 gap-y-10 bg-[--white-100] ${menuOpen ? 'scale-y-100 pointer-events-auto' : 'scale-y-0 pointer-events-none'} origin-top overflow-y-hidden duration-0`}
          initial={{ scaleY: 0, pointerEvents: "none" }}
          animate={{ scaleY: 1, pointerEvents: "auto" }}
          // exit={{ scaleY: 0, pointerEvents: "none" }}
          transition={{
            duration: 0.3,
          }}
        >
          {(menuShow === 'product' ? productMenu : (menuShow === 'solutions' ? solutionsMenu : [])).map((k, index) => (
            <div key={index} className="block items-start w-full h-auto">
              <motion.div
                className={`block items-start w-full max-w-full h-auto duration-0`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.4
                }}
              >
                <div className="flex justify-start items-center w-full pb-4 text-sm font-medium tracking-wide leading-none text-[--black-400] border-b border-[--white-400] uppercase select-none">
                  {k.name}
                </div>

                <div className="flex flex-wrap gap-x-4 gap-y-2 justify-start items-start w-full mt-2">
                  {k.lists.map((item) => (
                    <Link key={item.name} href="/">
                      <div className="group flex justify-start items-start w-[16rem] h-full px-2 py-3.5 hover:bg-[--white-200] rounded-lg">
                        <div className="flex justify-center items-center size-7 mr-1.5">
                          <svg className="flex justify-center items-center size-7 group-hover:text-[--blue-400]" width={24} height={24}>
                            <use
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xlinkHref={`/assets/icons/menuIcons.svg#${item.icon}`}
                            ></use>
                          </svg>
                        </div>

                        <div className="block items-center w-auto">
                          <div className="flex justify-start items-center w-auto text-base font-medium leading-none group-hover:text-[--blue-400] group-hover:underline duration-0">
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
              </motion.div>
            </div>
          ))}
        </motion.div>
      )}
    </>
  )
}

export default Header