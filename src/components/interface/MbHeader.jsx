"use client"

import React, { useEffect, useState } from 'react';

// NEXT JS
import Link from 'next/link';

// FRAMER
import { AnimatePresence, motion } from 'framer-motion';

// ICONS & CUSTOM COMPONENTS
import { ChevronDownIcon, CodeBracketSquareIcon, HomeIcon, LightBulbIcon, PhoneIcon } from '@heroicons/react/24/outline';


const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [menuShow, setMenuShow] = useState('');

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [menuOpen]);


    return (
        <>
            <header className="z-[900] absolute top-0 flex sm:flex md:hidden lg:hidden xl:hidden justify-between items-center w-screen h-14 px-4 text-white bg-none x_shadow-c-sub-nav">
                <div className="flex justify-start items-center w-full h-auto text-xl font-bold select-none cursor-pointer">
                    <Link href="/" className="">
                        <div className="flex justify-start items-center size-auto">
                            GitLabs
                        </div>
                    </Link>
                </div>

                <div className="z-[502] flex justify-end items-center w-full h-auto">
                    <div id="mobileMenuIcon"
                        className="relative flex justify-end items-center w-5 h-2.5" menuState={`${menuOpen}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <div className="line1"></div>
                        <div className="line2"></div>
                    </div>
                </div>
            </header>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="fixed top-14 z-[500] flex justify-center items-center w-full h-screen bg-gradient-to-b from-[--black-1100] to-[--black-900] origin-top"
                        initial={{ y: -1000, pointerEvents: "none" }}
                        animate={{ y: 0, pointerEvents: "auto" }}
                        exit={{ y: -1000, pointerEvents: "none" }}
                        transition={{
                            duration: 0.3,
                            delay: 0,
                        }}
                    >
                        <motion.div
                            className="flex flex-col justify-start items-start w-full h-full text-xl font-medium text-[--white-100]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                                duration: 0.4,
                                delay: 0.8,
                            }}
                        >
                            <li className="flex justify-between items-center w-full h-12 px-4 hover:bg-[--black-900] text-[--fgColor-muted-100] hover:text-[--white-100]" onClick={() => menuOpen(false)}>
                                <div className="flex justify-start items-center w-max">
                                    <HomeIcon className="size-5 mr-2" />

                                    Home
                                </div>

                                <div className="flex justify-start items-center w-max">
                                    <ChevronDownIcon className={`size-5 -rotate-90 duration-75`} />
                                </div>
                            </li>


                            <label className="flex justify-between items-center w-full h-12 px-4 hover:bg-[--black-900] text-[--fgColor-muted-100] hover:text-[--white-100]" htmlFor="product2">
                                <input className="hidden"
                                    type="radio"
                                    name="menu2"
                                    value="product2"
                                    id="product2"
                                    onChange={(e) => {
                                        setMenuShow('');

                                        setTimeout(() => {
                                            setMenuShow(e.target.value)
                                        }, 300);
                                    }}
                                    onClick={() => menuOpen && (setMenuShow(''))}
                                    checked={menuShow === 'product2'}
                                />

                                <div className="flex justify-start items-center w-max">
                                    <CodeBracketSquareIcon className="size-5 mr-2" />

                                    Product
                                </div>

                                <ChevronDownIcon className={`size-5 ${menuShow === 'product2' ? 'rotate-0' : '-rotate-90'} duration-75`} />
                            </label>

                            {menuShow === 'product2' && (
                                <motion.div
                                    className="block items-start w-full text-base"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <Link href="/crm" className="flex justify-start items-center w-full h-10 px-12 hover:bg-[--black-900] text-[--fgColor-muted-100] hover:text-[--white-100]" onClick={() => menuOpen(false)}>
                                        CRM
                                    </Link>
                                    <Link href="/ecommerce" className="flex justify-start items-center w-full h-10 px-12 hover:bg-[--black-900] text-[--fgColor-muted-100] hover:text-[--white-100]" onClick={() => menuOpen(false)}>
                                        Ecommerce
                                    </Link>
                                    <Link href="/blog" className="flex justify-start items-center w-full h-10 px-12 hover:bg-[--black-900] text-[--fgColor-muted-100] hover:text-[--white-100]" onClick={() => menuOpen(false)}>
                                        Blog
                                    </Link>
                                    <Link href="/" className="flex justify-start items-center w-full h-10 px-12 hover:bg-[--black-900] text-[--fgColor-muted-100] hover:text-[--white-100]" onClick={() => menuOpen(false)}>
                                        Education
                                    </Link>
                                    <Link href="/" className="flex justify-start items-center w-full h-10 px-12 hover:bg-[--black-900] text-[--fgColor-muted-100] hover:text-[--white-100]" onClick={() => menuOpen(false)}>
                                        Interactions
                                    </Link>
                                    <Link href="/" className="flex justify-start items-center w-full h-10 px-12 hover:bg-[--black-900] text-[--fgColor-muted-100] hover:text-[--white-100]" onClick={() => menuOpen(false)}>
                                        Localization
                                    </Link>
                                </motion.div>
                            )}


                            <label className="flex justify-between items-center w-full h-12 px-4 hover:bg-[--black-900] text-[--fgColor-muted-100] hover:text-[--white-100]" htmlFor="solutions2">
                                <input className="hidden"
                                    type="radio"
                                    name="menu2"
                                    value="solutions2"
                                    id="solutions2"
                                    onChange={(e) => {
                                        setMenuShow('');

                                        setTimeout(() => {
                                            setMenuShow(e.target.value)
                                        }, 300);
                                    }}
                                    onClick={() => menuOpen && (setMenuShow(''))}
                                    checked={menuShow === 'solutions2'}
                                />

                                <div className="flex justify-start items-center w-max">
                                    <LightBulbIcon className="size-5 mr-2" />

                                    Solutions
                                </div>

                                <ChevronDownIcon className={`size-5 ${menuShow === 'solutions2' ? 'rotate-0' : '-rotate-90'} duration-75`} />
                            </label>

                            {menuShow === 'solutions2' && (
                                <motion.div
                                    className="block items-start w-full text-base"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <li className="flex justify-start items-center w-full h-10 px-12 hover:bg-[--black-900] text-[--fgColor-muted-100] hover:text-[--white-100]" onClick={() => menuOpen(false)}>
                                        Freelancers
                                    </li>
                                    <li className="flex justify-start items-center w-full h-10 px-12 hover:bg-[--black-900] text-[--fgColor-muted-100] hover:text-[--white-100]" onClick={() => menuOpen(false)}>
                                        Agencies
                                    </li>
                                    <li className="flex justify-start items-center w-full h-10 px-12 hover:bg-[--black-900] text-[--fgColor-muted-100] hover:text-[--white-100]" onClick={() => menuOpen(false)}>
                                        Startups
                                    </li>
                                    <li className="flex justify-start items-center w-full h-10 px-12 hover:bg-[--black-900] text-[--fgColor-muted-100] hover:text-[--white-100]" onClick={() => menuOpen(false)}>
                                        Enterprise
                                    </li>
                                    <li className="flex justify-start items-center w-full h-10 px-12 hover:bg-[--black-900] text-[--fgColor-muted-100] hover:text-[--white-100]" onClick={() => menuOpen(false)}>
                                        Global alliances
                                    </li>
                                    <li className="flex justify-start items-center w-full h-10 px-12 hover:bg-[--black-900] text-[--fgColor-muted-100] hover:text-[--white-100]" onClick={() => menuOpen(false)}>
                                        UI/UX Design
                                    </li>
                                </motion.div>
                            )}


                            <li className="flex justify-between items-center w-full h-12 px-4 hover:bg-[--black-900] text-[--fgColor-muted-100] hover:text-[--white-100]" onClick={() => menuOpen(false)}>
                                <div className="flex justify-start items-center w-max">
                                    <PhoneIcon className="size-5 mr-2" />

                                    Contact
                                </div>

                                <div className="flex justify-start items-center w-max">
                                    <ChevronDownIcon className={`size-5 -rotate-90 duration-75`} />
                                </div>
                            </li>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Header