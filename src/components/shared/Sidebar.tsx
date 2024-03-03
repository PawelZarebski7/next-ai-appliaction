"use client"

import { navLinks } from '@/constants'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { User } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Button } from '../ui/button'

const Sidebar = () => {

   const pathname = usePathname()

  return (
    <aside className='sidebar'>
        <div className='flex size-full flex-col gap-4'>
            <a href='/' className='sidebar-logo'>
                <Image src="/assets/images/logo-photo.png" alt='Logo' width={180} height={28} />
            </a>
            <nav className='sidebar-nav'>
                <SignedIn>
                    <ul className='sidebar-nav_elements'>
                        {
                            navLinks.slice(0,6).map((link) => {
                                const isActive = link.route === pathname

                                return(
                                    <li key={link.route} className={`sidebar-nav_element group ${isActive ? 'bg-purple-gradient text-white' :
                                    'text-gray-700'}`}>
                                        <a className='sidebar-link' href={link.route}>
                                            <Image 
                                            src={link.icon}
                                            alt='logo'
                                            width={24}
                                            height={24}
                                            className={`&{isActive && brightness-200}`}
                                            />
                                            {link.label}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>

                    <ul className='sidebar-nav_elements'>
                        {
                            navLinks.slice(6).map((link) => {
                                const isActive = link.route === pathname

                                return(
                                    <li key={link.route} className={`sidebar-nav_element group ${isActive ? 'bg-purple-gradient text-white' :
                                    'text-gray-700'}`}>
                                        <a className='sidebar-link' href={link.route}>
                                            <Image 
                                            src={link.icon}
                                            alt='logo'
                                            width={24}
                                            height={24}
                                            className={`&{isActive && brightness-200}`}
                                            />
                                            {link.label}
                                        </a>
                                    </li>
                                )
                            })
                        }
                        <li className='flex-center coursor-pointer gap-2 p-4'>
                            <UserButton afterSignOutUrl='/' showName />
                        </li>
                    </ul>

                    

                </SignedIn>

                <SignedOut>
                    <Button asChild className='button bg-purple-gradient bg-cover'>
                        <a href='/sign-in'>Login</a>
                    </Button>
                </SignedOut>

            </nav>
        </div>
    </aside>
  )
}

export default Sidebar