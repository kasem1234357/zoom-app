'use client'
import React from 'react'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from './ui/sheet'
import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

function MobileNav() {
    const pathname =  usePathname()
  return (
    <section className='w-full max-w-[264px] '>
        <Sheet>
  <SheetTrigger asChild>
    <Image src={'/icons/hamburger.svg'} alt={'hamburger'} width={36} height={36}  className='sm:hidden cursor-pointer'/>
  </SheetTrigger>
  <SheetContent side={'left'} className='border-none bg-dark-1'>
  <Link href={'/'} className='flex gap-1 items-center'>
      <Image src={'/icons/logo.svg'} alt={'Yoom Logo'} width={32} height={32} className='max-sm:size-10'/>
        <p className='text-[26px] text-white font-extrabold '>Yoom</p>
      </Link>
      <div className="flex h-[calc(100vh - 72px)] flex-col justify-between overflow-y-auto">
          <SheetClose asChild>
              <section className='flex h-full flex-col gap-6 pt-16 text-white'>
              {sidebarLinks.map((link)=>{
           const isActive = pathname ===link.route 
          return (
            <SheetClose asChild> 
           <Link href={link.route} key={link.label} className={cn('flex gap-4 items-center p-4 rounded-lg w-full max-w-60',isActive?'bg-blue-1':'')}>
            <Image src={link.imgURL} alt={link.label} width={20} height={20} />
            <p className='font-semibold'> {link.label}</p>
           
           </Link>
           </SheetClose>
          )
        })}
              </section>
          </SheetClose>
      </div>
  </SheetContent>
</Sheet>
    </section>
  )
}

export default MobileNav