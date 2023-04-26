import Link from 'next/link';
import React from 'react'

interface INavbarLink {
    href: string;
    text: string;
}
export const NavbarLink: React.FC<INavbarLink> = ({ href, text }) => {
    return (
        <li className="mb-4 lg:mb-0 lg:pr-2">
            <Link href={href}>
                <span className="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400">
                    {text}
                </span>
            </Link>
        </li>
    )
}
