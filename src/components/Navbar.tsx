import Image from 'next/image'
import React from 'react'

interface INavbar {
    children?: React.ReactNode;
}
export const Navbar : React.FC<INavbar> = ({children}) => {
  return (
    <nav className="flex-no-wrap relative flex w-full items-center justify-between bg-neutral-100 py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4" data-te-navbar-ref>
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <div className="hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto">
            {/* Logo */}
            <a className="mb-4 mr-2 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0" href="#">
             <Image src="/next.svg" alt='logo' width={40} height={40}/>
            </a>
            {/* Left navigation links */}
            <ul className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row w-full">
              {children}
            </ul>
          </div>
        </div>
      </nav>
  )
}
