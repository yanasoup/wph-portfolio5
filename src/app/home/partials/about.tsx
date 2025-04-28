import Image from 'next/image';
import React from 'react';

import DecorationBox from '@/components/ui/decoration-box';

const AboutMe = () => {
  return (
    <section className='custom-container relative py-10 md:py-30' id='about'>
      <DecorationBox className='absolute bottom-0 left-0 z-10 h-[4.3rem] w-[6.45rem] rotate-90 md:bottom-0 md:h-[5.75rem] md:w-[8.625rem]' />
      <div className='text-center'>
        <p className='md:text-lg-medium text-md-medium text-primary-200'>
          ABOUT ME
        </p>
        <div className='relative mx-auto'>
          <div className='inset-0 hidden md:absolute lg:block'>
            <div className='relative h-full w-full'>
              <Image
                className='absolute right-1/2 bottom-[76%] -z-10 -translate-x-[96%]'
                src='/images/image-about1.png'
                width={238}
                height={178}
                alt='about1'
                // style={{
                //   width: 'clamp(10.625rem, 19.071vw, 14.875rem)',
                // }}
              />
              <Image
                className='absolute bottom-[48%] left-1/2 -z-10 translate-x-[117%]'
                src='/images/image-about2.png'
                width={250}
                height={187}
                alt='about1'
                // style={{
                //   width: 'clamp(8.375rem, 20.032vw, 15.625rem)',
                // }}
              />
              <Image
                className='absolute top-[73%] left-1/2 -z-10 translate-x-[115%]'
                src='/images/image-about3.png'
                width={117}
                height={88}
                alt='about1'
                style={{
                  width: 'clamp(8.25rem, 9.375vw, 7.3125rem)',
                }}
              />
            </div>
          </div>

          <h2 className='md:display-2xl-extrabold display-md-extrabold text-neutral-25 mx-auto mt-2'>
            CRAFTING SEAMLESS
          </h2>
          <h2 className='md:display-2xl-extrabold display-md-extrabold text-neutral-25 mx-auto mt-2 lg:w-218'>
            <span className='text-primary-200'>HIGH-PERFORMANCE WEB</span>{' '}
            EXPERIENCES
          </h2>
        </div>
      </div>
      <p
        className='mx-auto mt-4 text-center font-medium text-neutral-400 md:mt-16'
        style={{
          width: 'clamp(22.5625rem, 79.8077vw, 62.25rem)',
          fontSize: 'clamp(1rem, 1.60256vw, 1.25rem)',
        }}
      >
        I love turning designs into interactive, high-performance websites. With
        a keen eye for detail and a deep understanding of frontend technologies,
        I create smooth and visually appealing user experiences.
      </p>
      <div className='relative mt-10 h-72 w-full overflow-hidden lg:hidden'>
        <Image
          className='absolute top-0 right-1/2 -z-10 translate-x-[7.6%]'
          src='/images/image-about1.png'
          width={170}
          height={127}
          alt='about1'
          style={{
            width: 'clamp(10.625rem, 19.071vw, 14.875rem)',
          }}
        />
        <Image
          className='absolute bottom-[48%] left-1/2 -z-10 translate-x-[27%]'
          src='/images/image-about2.png'
          width={134}
          height={99}
          alt='about1'
          style={{
            width: 'clamp(8.375rem, 20.032vw, 15.625rem)',
          }}
        />
        <Image
          className='absolute top-[57%] left-1/2 -z-10 -translate-x-[40%]'
          src='/images/image-about3.png'
          width={132}
          height={100}
          alt='about1'
          style={{
            width: 'clamp(8.25rem, 9.375vw, 7.3125rem)',
          }}
        />
      </div>
    </section>
  );
};

export default AboutMe;
