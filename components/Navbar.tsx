import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { SignedIn, UserButton } from '@clerk/nextjs'

function Navbar() {
  return (
    <nav className='flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-19'>
      <Link href={'/'} className='flex gap-1 items-center'>
      <Image src={'/icons/logo.svg'} alt={'Yoom Logo'} width={32} height={32} className='max-sm:size-10'/>
        <p className='text-[26px] text-white font-extrabold max-sm:hidden'>Yoom</p>
      </Link>
               <div className="flex-between gap-5">
               <SignedIn>
            <UserButton />
          </SignedIn>
                <MobileNav/>
               </div>
    </nav>
  )
}

export default Navbar