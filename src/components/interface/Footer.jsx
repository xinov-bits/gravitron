"use client"

import React, { useEffect, useState } from 'react';

// NEXT JS
import Link from 'next/link';


const Header = () => {

    const footerMenus = [
        {
            'name': 'PRODUCT',
            'items': [
                'Platform',
                'Designer',
                'CMS',
                'Interactions',
                'Localization',
                'Hosting',
                'SEO',
                'Security',
                'Ecommerce',
            ]
        },
        {
            'name': 'COMPANY',
            'items': [
                'About',
                'Accessibility statement',
                'Terms of Service',
                'Privacy policy',
                'Cookie policy',
                'Cookie preferences',
                'Sitemap',
            ]
        },
        {
            'name': 'EXPLORE',
            'items': [
                'Marketplace',
                'Libraries',
                'Apps',
                'Hire an Expert',
                'Templates',
            ]
        },
        {
            'name': 'SOLUTIONS',
            'items': [
                'Freelancers',
                'Agencies',
                'Enterprise',
                'Startups',
                'Classrooms',
                'Global alliances',
            ]
        },
        {
            'name': 'GET HELP',
            'items': [
                'Support',
                'Pricing',
                'Status',
                'Forum',
                'Wishlist',
            ]
        },
    ]

    const socialIcons = [
        {
            'name': 'YouTube',
            'icon': 'youtube',
            'url': 'https://www.youtube.com',
        },
        {
            'name': 'Twitter',
            'icon': 'twitter',
            'url': 'https://www.twitter.com',
        },
        {
            'name': 'Facebook',
            'icon': 'facebook',
            'url': 'https://www.facebook.com',
        },
        {
            'name': 'Instagram',
            'icon': 'instagram',
            'url': 'https://www.instagram.com',
        },
        {
            'name': 'Linkedin',
            'icon': 'linkedin',
            'url': 'https://www.linkedin.com',
        },
    ]


    return (
        <>
            <footer
                className={`z-[0] block sm:block md:flex lg:flex xl:flex justify-start items-start w-full h-full p-8 sm:p-8 md:p-16 lg:p-16 xl:p-16 gap-2 sm:gap-2 md:gap-10 lg:gap-10 xl:gap-10 text-[--white-100] bg-[--black-1100]`}
            >
                <div className="block justify-start items-start w-full sm:w-full md:w-[16%] lg:w-[16%] xl:w-[16%] mb-8 sm:mb-8 md:mb-0 lg:mb-0 xl:mb-0 select-none">
                    <div className="flex justify-start items-center w-full">
                        <Link href="/" className="hover:opacity-75">
                            <div className="flex justify-center items-center size-auto text-3xl font-semibold gradient gradient-codespaces">
                                GitLabs
                            </div>
                        </Link>
                    </div>

                    <div className="flex justify-start items-center w-full mt-3 text-[--fgColor-muted-300]">
                        © 2024 Webflow, Inc.
                        All rights reserved
                    </div>
                </div>

                <div className="flex flex-wrap gap-x-14 sm:gap-x-14 md:gap-x-20 lg:gap-x-20 xl:gap-x-20 gap-y-10 sm:gap-y-10 md:gap-y-12 lg:gap-y-12 xl:gap-y-12 justify-start items-start w-full sm:w-full md:w-[84%] lg:w-[84%] xl:w-[84%]">
                    {footerMenus.map((k, index) => (
                        <ul key={index} className="block justify-start items-start w-auto">
                            <li className="flex justify-start items-center w-max mb-3 select-none uppercase text-lg font-medium">
                                {k.name}
                            </li>

                            {(k.items).map((item) => (
                                <Link key={item} href="/" className="flex justify-start items-center w-max mt-2.5 font-light">
                                    <li className="flex justify-start items-center w-max text-[--fgColor-muted-300] hover:text-[--white-100]">
                                        {item}
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    ))}

                    <ul className="block justify-start items-start w-auto">
                        <li className="flex justify-start items-center w-max mb-3 select-none uppercase text-lg font-medium">
                            SOCIAL
                        </li>

                        <ul className="flex justify-start items-center w-auto space-x-4">
                            {socialIcons.map((icons, index) => (
                                <Link key={index} href={icons.url} className="flex justify-start items-center w-max mt-2.5 font-light">
                                    <li className="flex justify-start items-center w-max text-[--fgColor-muted-300] hover:text-[--white-100]">
                                        <svg className="flex justify-center items-center size-5" width={20} height={20}>
                                            <use
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                xlinkHref={`/assets/icons/footer.svg#${icons.icon}`}
                                            ></use>
                                        </svg>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Header