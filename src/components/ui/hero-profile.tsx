import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import HeroImage from '../../../public/images/hero1.png';

const HeroProfile = () => {
  return (
    <div
      className='relative z-10 mx-auto overflow-hidden'
      style={{
        width: 'clamp(20.00rem, 52.88vw, 41.25rem)',
        height: 'clamp(29.13rem, 70.63vw, 55.06rem)',
      }}
    >
      <div className='bg-primary-200 absolute top-0 right-0 h-full w-1/2' />

      <Image
        src={HeroImage}
        alt='hero'
        className='mx-auto mix-blend-luminosity grayscale'
      />
      {/* <div className='from-base-black absolute inset-y-0 top-0 right-0 w-1/2 bg-linear-to-l to-transparent' /> */}
      <div className='bg-primary-200 absolute inset-y-0 top-0 right-0 w-1/2 overflow-hidden mix-blend-color' />

      <div className='from-base-black absolute inset-0 bg-linear-to-t to-transparent' />
      <div className='from-base-black absolute inset-x-0 bottom-0 h-[80%] bg-linear-to-t to-transparent' />

      {/* client rating */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 2.5 }}
        className='bg-base-black absolute bottom-1 left-1/2 z-10 h-34.5 w-full -translate-x-[50%] rounded-2xl border border-neutral-800 p-4 opacity-0 md:bottom-[9.6%] md:h-44.5 md:w-79 md:rounded-3xl md:p-5'
        style={{
          width: 'clamp(19.75rem,27.96vw,21.81rem',
        }}
      >
        <p
          className='text-neutral-25 font-bold'
          style={{
            fontSize: 'clamp(1.50rem, 3.21vw, 2.50rem)',
            lineHeight: 'clamp(2.25rem, 4.49vw, 3.50rem)',
          }}
        >
          5.0
        </p>
        <div className='mt-2 flex gap-1'>
          {new Array(5).fill(null).map((_, index) => (
            <Icon
              key={index}
              icon='material-symbols:star-rounded'
              className='text-yellow-500'
              style={{
                width: 'clamp(1.50rem, 2.56vw, 2.00rem)',
                height: 'clamp(1.50rem, 2.56vw, 2.00rem)',
              }}
            />
          ))}
        </div>
        <p
          className='md:text-xl-semibold text-md-semibold mt-2'
          style={{
            lineHeight: 'clamp(1.88rem, 2.72vw, 2.13rem)',
            fontSize: 'clamp(1.00rem, 1.60vw, 1.25rem)',
          }}
        >
          Many Client Trust with me
        </p>
      </motion.div>
    </div>
  );
};

export default HeroProfile;
