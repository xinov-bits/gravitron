"use client"

import React from 'react';

// ICONS & CUSTOM COMPONENTS
import { ChevronRightIcon } from '@heroicons/react/20/solid';

interface ButtonProps {
    children: React.ReactNode;
    type: 'primary' | 'primary-outlined' | 'secondary' | 'secondary-outlined' | 'white' | 'white-basic' | 'white-outlined';
    width: string;
    height: string;
    round: string;
    icon: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, type, width, height, round, icon }) => {
    return (
        <>
            {type === 'primary' && (
                <button className={`
                    z-[1] select-none group flex justify-center items-center ${width} ${height} min-w-16 min-h-10 bg-gradient-to-b from-[--blue-300] to-[--blue-400] hover:bg-[--blue-400] focus:bg-[--blue-400] ${round} text-[--white-100] cBtn-blue
                `}>
                    <div className={`${icon && 'mr-1'}`}> {children} </div>

                    {icon && (
                        <div className="relative flex justify-center items-center">
                            <svg className="size-4 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>

                            <span className="absolute flex justify-center items-center right-0.5 w-0 group-hover:w-2.5 h-[1.5px] origin-right opacity-0 group-hover:opacity-100 bg-[--white-200] rounded-full"></span>
                        </div>
                    )}
                </button>
            )}

            {type === 'primary-outlined' && (
                <button className={`
                    z-[1] select-none group flex justify-center items-center ${width} ${height} min-w-12 min-h-8 bg-none border-[1.5px] border-[--primary-400] hover:border-[--primary-500] focus:border-[--primary-300] text-[--primary-400] hover:text-[--primary-500] focus:text-[--primary-300] ${round} text-white backdrop-blur-[2px]
                `}>
                    <div className={`${icon && 'mr-1'}`}> {children} </div>

                    {icon && (
                        <div className="relative flex justify-center items-center">
                            <svg className="size-4 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>

                            <span className="absolute flex justify-center items-center right-0.5 w-0 group-hover:w-2.5 h-[1.5px] origin-right opacity-0 group-hover:opacity-100 bg-[--primary-500] rounded-full"></span>
                        </div>
                    )}
                </button>
            )}

            {type === 'secondary' && (
                <button className={`
                    z-[1] select-none group flex justify-center items-center ${width} ${height} min-w-16 min-h-10 bg-[--secondary-400] hover:bg-[--secondary-500] focus:bg-[--secondary-300] ${round} text-white
                `}>
                    <div className={`${icon && 'mr-1'}`}> {children} </div>

                    {icon && (
                        <div className="relative flex justify-center items-center">
                            <svg className="size-4 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>

                            <span className="absolute flex justify-center items-center right-0.5 w-0 group-hover:w-2.5 h-[1.5px] origin-right opacity-0 group-hover:opacity-100 bg-[--white-200] rounded-full"></span>
                        </div>
                    )}
                </button>
            )}

            {type === 'secondary-outlined' && (
                <button className={`
                    z-[1] select-none group flex justify-center items-center ${width} ${height} min-w-12 min-h-8 bg-none border-[1.5px] border-[--secondary-400] hover:border-[--secondary-500] focus:border-[--secondary-300] text-[--secondary-400] hover:text-[--secondary-500] focus:text-[--secondary-300] ${round} text-white backdrop-blur-[2px]
                `}>
                    <div className={`${icon && 'mr-1'}`}> {children} </div>

                    {icon && (
                        <div className="relative flex justify-center items-center">
                            <svg className="size-4 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>

                            <span className="absolute flex justify-center items-center right-0.5 w-0 group-hover:w-2.5 h-[1.5px] origin-right opacity-0 group-hover:opacity-100 bg-[--secondary-300] rounded-full"></span>
                        </div>
                    )}
                </button>
            )}

            {type === 'white' && (
                <button className={`
                    z-[1] select-none group flex justify-center items-center ${width} ${height} min-w-16 min-h-10 bg-gradient-to-b from-[--white-300] to-[--white-500] hover:bg-[--white-200] focus:bg-[--white-200] ${round} text-[--black-900] cBtn-white
                `}>
                    <div className={`${icon && 'mr-1'}`}> {children} </div>

                    {icon && (
                        <div className="relative flex justify-center items-center">
                            <svg className="size-4 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>

                            <span className="absolute flex justify-center items-center right-0.5 w-0 group-hover:w-2.5 h-[1.5px] origin-right opacity-0 group-hover:opacity-100 bg-[--black-900] rounded-full"></span>
                        </div>
                    )}
                </button>
            )}
            
            {type === 'white-basic' && (
                <button className={`
                    z-[1] select-none group flex justify-center items-center ${width} ${height} min-w-16 min-h-10 bg-gradient-to-b from-[--white-300] to-[--white-500] hover:bg-[--white-200] focus:bg-[--white-200] ${round} text-[--black-900] cBtn-white hover:!shadow-none
                `}>
                    <div className={`${icon && 'mr-1'}`}> {children} </div>

                    {icon && (
                        <div className="relative flex justify-center items-center">
                            <svg className="size-4 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>

                            <span className="absolute flex justify-center items-center right-0.5 w-0 group-hover:w-2.5 h-[1.5px] origin-right opacity-0 group-hover:opacity-100 bg-[--black-900] rounded-full"></span>
                        </div>
                    )}
                </button>
            )}

            {type === 'white-outlined' && (
                <button className={`
                    z-[1] select-none group flex justify-center items-center ${width} ${height} min-w-12 min-h-8 bg-none border-[1.5px] border-[--white-100] hover:border-[--white-200] focus:border-[--white-200] text-[--white-100] hover:text-[--white-200] focus:text-[--white-200] ${round} text-white hover:opacity-75 backdrop-blur-[8px]
                `}>
                    <div className={`${icon && 'mr-1'}`}> {children} </div>

                    {icon && (
                        <div className="relative flex justify-center items-center">
                            <svg className="size-4 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>

                            <span className="absolute flex justify-center items-center right-0.5 w-0 group-hover:w-2.5 h-[1.5px] origin-right opacity-0 group-hover:opacity-100 bg-[--white-200] rounded-full"></span>
                        </div>
                    )}
                </button>
            )}
        </>
    );
}

export default Button;