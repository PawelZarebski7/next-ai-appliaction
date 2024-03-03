"use client"

import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from '../ui/button'
import { navLinks } from '@/constants'
import Link from 'next/link'
  

const MobileNav = () => {

  const pathname = usePathname()
    
  return (
    <header className='header'>
        <a href='/' className='flex items-center gap-2 md:py-2'>
            <Image
            src="/assets/images/logo-photo.png"
            alt='logo'
            width={135}
            height={28}
            />
        </a>
        <nav className='flex gap-2'>
            <SignedIn>
                <UserButton afterSignOutUrl='/' />
                <Sheet>
                    <SheetTrigger>
                        <Image
                          src="/assets/icons/menu.svg"
                          alt='menu'
                          width={32}
                          height={32}
                          className='coursor-pointer'
                        />
                    </SheetTrigger>
                    <SheetContent className='sheet-content sm:w-64'>
                        <>
                          <Image 
                            src="/assets/images/logo-photo.png"
                            alt='logo'
                            width={122}
                            height={23}
                          />
                        </>
                        <ul className='header-nav_elements'>
                            {
                                navLinks.map((link) => {
                                    const isActive = link.route === pathname

                                    return(
                                        <li className={`${isActive && 'gradient-text'} p-18 flex whitespace-nowrap text-dark-700`}
                                        key={link.route}
                                        >
                                          <Link className='sidebar-link cursor-pointer' href={link.route}>
                                                <Image 
                                                 src={link.icon}
                                                 alt='logo'
                                                 width={24}
                                                 height={24}
                                                />   
                                                {link.label}
                                         </Link>    
                                        </li>
                                    )
                            })}
                        </ul>
                    </SheetContent>
                </Sheet>

            </SignedIn>

            <SignedOut>
                <Button asChild className='button bg-purple-gradient bg-cover'>
                    <a href='/sign-in'>Login</a>
                </Button>
            </SignedOut>

        </nav>
    </header>
  )
}

export default MobileNav