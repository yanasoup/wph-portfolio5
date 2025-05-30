'use client';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetDescription,
} from '@/components/ui/sheet';

import { heroData } from '@/constants/hero-data';
import { navigationData } from '@/constants/navigation-data';

import burgerMenu from '../../../../public/icons/menu-04.svg';

const Navbar = () => {
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ['rgba(12,13,13,0', 'rgba(12,13,13,0.5)']
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(10px)']
  );
  return (
    <motion.header
      style={{
        background,
        backdropFilter: backdropBlur,
      }}
      className='fixed z-30 w-full border-b border-neutral-800'
    >
      <div className='custom-container flex-between h-20'>
        <div className='flex-start relative flex gap-2'>
          <div className='bg-base-white inset-x-0 h-0.25 w-10'></div>
          <p className='text-primary-200 text-md-bold md:text-xl-bold'>
            <Link href='#home'>{heroData.name}</Link>
          </p>
        </div>
        <nav className='hidden lg:block'>
          <ul className='flex-start gap-8'>
            {navigationData.map((data) => (
              <motion.li
                key={data.label}
                initial={{ y: -5, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 4 }}
              >
                <Link
                  className='text-md-regular text-base-white hover:text-primary-200 p-2'
                  href={data.href}
                >
                  {data.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Image
              src={burgerMenu}
              alt='menu'
              className='size-6 cursor-pointer lg:hidden'
            />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className='hidden'>
              <SheetDescription className='sr-only'>Menu</SheetDescription>
            </SheetHeader>

            <div className='flex flex-col pl-4'>
              <div className='flex-start relative flex h-20 gap-2'>
                <div className='bg-base-white inset-x-0 h-0.25 w-10'></div>
                <p className='text-primary-200 text-md-bold'>
                  <SheetClose asChild>
                    <Link href='#home'>{heroData.name}</Link>
                  </SheetClose>
                </p>
              </div>

              <motion.nav className='mt-4'>
                <ul className='flex flex-col gap-4'>
                  {navigationData.map((data) => (
                    <li key={data.label}>
                      <SheetClose asChild>
                        <Link
                          className='text-md-regular text-base-white hover:text-primary-200 p-2'
                          href={data.href}
                        >
                          {data.label}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </motion.nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
};

export default Navbar;
