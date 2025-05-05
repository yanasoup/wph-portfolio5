import { motion, useAnimation } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import React, { useEffect, ComponentProps } from 'react';
import { useInView } from 'react-intersection-observer';

import LazySection from '@/components/layouts/lazy-section';
import Marquee from '@/components/ui/marquee';

import { skillsData, skillProficiencies } from '@/constants/skills-data';
import { chunkArray } from '@/lib/utils';

const Skiils = () => {
  const splitData = chunkArray(skillsData, 4);
  console.log('splitData', splitData);

  return (
    <LazySection>
      <section
        id='skills'
        className='custom-container flex flex-wrap items-center justify-center gap-10 py-10 md:gap-14.5 md:py-20'
      >
        <div className='flex-[2.6] basis-90'>
          <h2 className='text-md-medium md:text-lg-medium text-primary-200'>
            SKILLS
          </h2>
          <h2 className='display-md-extrabold md:display-2xl-extrabold text-neutral-25'>
            SKILLS THAT BRING IDEAS TO LIFE
          </h2>
          <div className='mt-6 flex flex-col gap-4 md:mt-14.5 md:gap-6'>
            <SkillsMarquee items={splitData[0]} />
            <SkillsMarquee reverse={true} items={splitData[1]} />
          </div>
          <SkillCards>
            {skillsData.map((skill) => (
              <SkillCard key={skill.title} {...skill} />
            ))}
          </SkillCards>
        </div>
        <div className='flex-[7.4] basis-90'>
          <SkillBars>
            {skillProficiencies.map((data) => (
              <SkillBar key={data.title} {...data} />
            ))}
          </SkillBars>
        </div>
      </section>
    </LazySection>
  );
};

export default Skiils;

interface MarqueeProps extends ComponentProps<'div'> {
  reverse?: boolean;
  pauseOnHover?: boolean;
  vertical?: boolean;
  repeat?: number;
  items: (typeof skillsData)[0][];
}

const SkillsMarquee: React.FC<MarqueeProps> = ({
  reverse,
  pauseOnHover,
  vertical,
  repeat,
  items,
}) => {
  return (
    <div className='flex-center relative mx-auto flex overflow-hidden'>
      <div
        className='flex overflow-hidden md:w-131'
        style={{
          width: 'clamp(22.5rem, 41.99vw, 32.75rem)',
        }}
      >
        <Marquee
          reverse={reverse}
          className='p-0 [--duration:10s] [--gap:1rem]'
          pauseOnHover={pauseOnHover}
          vertical={vertical}
          repeat={repeat}
        >
          {items.map((data) => (
            <div
              key={data.title}
              className='flex-center mx-auto size-12 rounded-full border border-neutral-800 p-3 md:size-16 [&>*]:h-9.5 [&>*]:w-auto'
            >
              <Image
                key={data.title}
                src={data.icon}
                alt={data.title}
                className='select-none'
                style={{
                  height: 'clamp(1.63rem, 2.8vw, 2.19rem)',
                }}
              />
            </div>
          ))}
        </Marquee>
      </div>
      <div className='from-base-black absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r to-transparent'></div>
      <div className='from-base-black absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l to-transparent'></div>
    </div>
  );
};

type SkillCardsProps = {
  children: React.ReactNode;
};

const SkillCards: React.FC<SkillCardsProps> = ({ children }) => {
  return (
    <div className='mt-6 hidden grid-cols-[3rem_3rem_3rem_3rem] gap-4 md:mt-14.5 md:grid-cols-[4rem_4rem_4rem_4rem]'>
      {children}
    </div>
  );
};

type SkillCardProps = {
  icon: StaticImageData;
  title: string;
};

const SkillCard: React.FC<SkillCardProps> = ({ icon, title }) => {
  return (
    <div className='flex-center mx-auto size-12 rounded-full border border-neutral-500 p-3 md:size-16 [&>*]:h-9.5 [&>*]:w-auto'>
      <Image src={icon} alt={title} />
    </div>
  );
};

type SkillBarsProps = {
  children: React.ReactNode;
};

const SkillBars: React.FC<SkillBarsProps> = ({ children }) => {
  return <div className='gap-3.88 flex flex-col md:gap-6'>{children}</div>;
};

type SkillBarProps = {
  title: string;
  value: number;
};

const SkillBar: React.FC<SkillBarProps> = ({ title, value }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        width: `${value}%`,
        transition: {
          default: { type: 'spring', duration: 2.5, ease: 'easeOut' },
        },
      });
    }
  }, [controls, inView, value]);

  return (
    <div className='flex items-center justify-center gap-4 md:gap-6'>
      <div className='relative h-10.5 w-full md:h-16'>
        <motion.div
          ref={ref}
          className={`bg-primary-300 px-3.88 h-full rounded-xl py-1.25 md:rounded-3xl`}
          style={{ width: `${value}%` }}
          initial={{
            width: 0,
            opacity: 1,
          }}
          animate={controls}
        />
        <p className='text-sm-semibold md:text-lg-semibold text-neutral-25 absolute top-1/2 -translate-y-1/2 px-4 md:px-6'>
          {title}
        </p>

        <div className='absolute top-1/2 -z-10 h-0.25 w-full bg-neutral-800' />
      </div>
      <p className='text-sm-semibold md:text-xl-semibold text-white'>
        {value}%
      </p>
    </div>
  );
};
