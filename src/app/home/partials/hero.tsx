import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';
import DecorationBox from '@/components/ui/decoration-box';
import HeroProfile from '@/components/ui/hero-profile';

const Hero = () => {
  return (
    <section
      className='custom-container relative flex flex-wrap lg:h-218'
      id='home'
    >
      <DecorationBox className='absolute bottom-[16%] left-0 z-10 h-[4.3rem] w-[6.45rem] md:bottom-0 md:h-[5.75rem] md:w-[8.625rem]' />
      {/* kiri */}
      <div
        className='z-20 flex-[5.9] basis-110 md:p-0'
        style={{
          width: 'clamp(22.5rem, 64.66vw, 50.4375rem)',
          marginTop: 'clamp(7.5rem, 17.71vw, 13.81rem)',
        }}
      >
        <div className='flex-start flex gap-2 md:gap-4'>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className='bg-base-white inset-x-0 h-0.25 w-5.25 md:w-28.5'
          />
          <motion.p
            className='text-neutral-25 md:text-xl-medium text-md-medium'
            style={{
              fontSize: 'clamp(1rem, 1.6vw, 1.25rem)',
              lineHeight: 'clamp(2.125rem, 2.4vw, 1.875rem)',
            }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Hi, I am Yana, a Frontend Developer
          </motion.p>
        </div>
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
          className='display-lg-extrabold md:text-display-5xl mt-4 md:font-extrabold'
          style={{
            fontSize: 'clamp(2.25rem, 6.41vw, 5rem)',
            lineHeight: 'clamp(3rem, 6.41vw, 6.25rem)',
          }}
        >
          BUILDING FAST & <span className='text-primary-200'>INTERACTIVE</span>{' '}
          WEB EXPERIENCES.
        </motion.h1>
        <motion.p
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
          className='text-lg-medium md:text-xl-medium mt-4 text-neutral-400'
          style={{
            width: 'clamp(20.00rem, 47.83vw, 37.31rem)',
            fontSize: 'clamp(1.125rem, 1.60256vw, 1.25rem)',
            lineHeight: 'clamp(2rem, 2.724vw, 2.125rem)',
          }}
        >
          Bridging creativity and functionality to deliver stunning,
          user-friendly web applications
        </motion.p>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, ease: 'easeOut', delay: 2.5 }}
        >
          <Button asChild className='mt-10 w-full md:mt-15 md:w-fit md:px-29'>
            <Link
              className='text-sm-bold md:text-md-bold text-neutral-950'
              href='#contact'
            >
              HIRE ME
            </Link>
          </Button>
        </motion.span>
      </div>
      {/* kanan */}
      <div className='top-0 right-0 mt-10 flex-[4.1] basis-110 md:absolute md:mt-0'>
        <HeroProfile />
      </div>
    </section>
  );
};

export default Hero;
