import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';

const HeroOld = () => {
  return (
    <section className='custom-container relative flex flex-wrap items-center gap-10 py-20'>
      {/* kiri */}
      <div className='z-40 mt-10 flex-[5.9] basis-80 md:mt-25'>
        <div className='flex-start flex gap-2 md:gap-4'>
          {/* line */}
          <div className='bg-base-white inset-x-0 h-0.25 w-5.25 md:w-28.5'></div>
          <p className='text-neutral-25 md:text-xl-medium text-md-medium'>
            Hi, I am Yana, a Frontend Developer
          </p>
        </div>
        <h1 className='display-lg-extrabold md:text-display-5xl mt-4 md:font-extrabold'>
          BUILDING FAST & <span className='text-primary-200'>INTERACTIVE</span>{' '}
          WEB EXPERIENCES.
        </h1>
        <p className='text-lg-medium md:text-xl-medium mt-4 text-neutral-400'>
          Bridging creativity and functionality to deliver stunning,
          user-friendly web applications
        </p>
        <Button className='mt-10 w-full md:mt-15 md:w-fit'>
          <Link
            className='text-sm-bold md:text-md-bold px-29 text-neutral-950'
            href='#contact'
          >
            HIRE ME
          </Link>
        </Button>
      </div>
      {/* kanan */}
      <div className='h-116.5 w-full flex-[4.1] basis-80 overflow-hidden md:absolute md:-top-20 md:-right-24 md:h-218 md:w-165'>
        <div className='relative h-full w-full'>
          <Image
            src='/images/hero.png'
            width={658}
            height={872}
            alt='hero'
            className='z-10 rotate-0 mix-blend-luminosity md:mt-20'
          />
          {/* image overlay */}
          <div className='from-base-black absolute inset-0 right-0 bottom-0 z-20 bg-linear-to-t to-transparent' />
          <div className='bg-primary-200 absolute inset-y-0 right-0 bottom-0 z-30 w-46.75 mix-blend-multiply md:h-[200%] md:w-79' />

          {/* client rating */}
          <div className='bg-base-black absolute bottom-1 left-1/2 z-30 h-34.5 w-full -translate-x-[50%] rounded-2xl border border-neutral-800 p-4 md:bottom-[9.6%] md:h-44.5 md:w-79 md:rounded-3xl md:p-5'>
            <p className='md:display-xl-bold display-xs-bold text-neutral-25'>
              5.0
            </p>
            <div className='mt-2 flex gap-1'>
              {new Array(5).fill(null).map((_, index) => (
                <Icon
                  key={index}
                  icon='material-symbols:star-rounded'
                  className='size-6 text-yellow-500 md:size-8'
                />
              ))}
            </div>
            <p className='md:text-xl-semibold text-md-semibold mt-2'>
              Many Client Trust with me
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroOld;
