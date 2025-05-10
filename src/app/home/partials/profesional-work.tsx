'use client';
import { motion, useAnimation } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useMedia } from 'react-use';

import LazySection from '@/components/layouts/lazy-section';
import { Section } from '@/components/layouts/section';
import DecorationBox from '@/components/ui/decoration-box';

import { profesionalWorkData } from '@/constants/profesional-work-data';
import { cn } from '@/lib/utils';

const ProfesionalWork = () => {
  const isLargeIsh = useMedia('(min-width: 1024px', false);

  return (
    <LazySection>
      <Section
        title='EXPERIENCE'
        subtitle='PROFESIONAL WORK'
        className='relative'
      >
        <DecorationBox className='absolute right-0 bottom-0 z-10 h-[4.3rem] w-[6.45rem] translate-y-[80%] -rotate-90 md:h-[5.75rem] md:w-[8.625rem]' />
        <ProfesionalWorkCard>
          {profesionalWorkData.map((work) => {
            const atrr = { isLargeIsh: isLargeIsh, ...work };
            return <WorkItem key={work.index} {...atrr} />;
          })}
        </ProfesionalWorkCard>
      </Section>
    </LazySection>
  );
};

export default ProfesionalWork;

type ProfesionalWorkCardProps = {
  children: React.ReactNode;
};

const ProfesionalWorkCard: React.FC<ProfesionalWorkCardProps> = ({
  children,
}) => {
  return (
    <div className='mt-6 grid grid-cols-[2.5rem_auto] gap-x-4 max-lg:gap-y-4 md:mt-16 md:gap-x-16 lg:grid-cols-[auto_3rem_auto] lg:gap-y-0'>
      <>{children}</>
    </div>
  );
};

type WorkItemProps = {
  // workImage?: StaticImageData;
  index: number;
  title: string;
  subtitle: string;
  description: string;
  logoImage: StaticImageData;
  isLargeIsh: boolean;
};
const WorkItem: React.FC<WorkItemProps> = ({
  // workImage,
  index,
  title,
  subtitle,
  description,
  logoImage,
  isLargeIsh,
}) => {
  return (
    <>
      {index % 2 !== 0 && isLargeIsh && (
        <>
          <WorkImageContainer />
          <LineAndCircle index={index} isLargeIsh={isLargeIsh} />
        </>
      )}
      {!isLargeIsh && <LineAndCircle index={index} isLargeIsh={isLargeIsh} />}

      {/* right column */}
      <div className='bg-base-black hover:border-primary-200 rounded-2xl border border-neutral-800 p-4 md:rounded-3xl md:p-6'>
        <div className='flex flex-wrap items-start justify-between'>
          <div className='basis-68'>
            <p className='text-sm-regular md:text-lg-medium text-neutral-400'>
              {title}
            </p>
            <p className='md:display-xs-bold text-md-bold text-neutral-25 mt-1'>
              {subtitle}
            </p>
          </div>
          <Image src={logoImage} alt='title' className='h-8 w-auto md:h-12' />
        </div>
        <p className='text-sm-regular md:text-md-regular mt-4 text-neutral-400'>
          {description}
        </p>
      </div>
      {index % 2 === 0 && isLargeIsh && (
        <>
          <LineAndCircle index={index} isLargeIsh={isLargeIsh} />
          <WorkImageContainer />
        </>
      )}
    </>
  );
};

const WorkImageContainer: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div
      className='hidden md:block'
      style={{
        width: 'clamp(19.0625rem, 40.87vw, 31.875rem)',
      }}
    >
      {children}
    </div>
  );
};

const LineAndCircle: React.FC<{ index: number; isLargeIsh: boolean }> = ({
  index,
  isLargeIsh = false,
}) => {
  const { ref, inView } = useInView({ threshold: 1, triggerOnce: true });
  const lineControls = useAnimation();
  const lineControlsMd = useAnimation();

  React.useEffect(() => {
    if (inView) {
      lineControls.start({
        height: 'calc(100% - 1.5rem)',
        backgroundColor: '#252b37',
      });
      lineControlsMd.start({
        height: 'calc(100% - 3rem)',
        backgroundColor: '#252b37',
      });
    }
  }, [inView, lineControls, lineControlsMd]);

  return (
    <div
      ref={ref}
      className={cn('group relative mb-0 [&:nth-last-child(2)]:mb-0')}
    >
      {/* line decoration */}
      {index !== 4 && (
        <motion.div
          initial={{ height: 0, backgroundColor: '#92ff04' }}
          animate={isLargeIsh ? lineControlsMd : lineControls}
          transition={{ duration: 3, ease: 'easeOut' }}
          className={cn(
            'line-decoration absolute top-[calc(50%+1.25rem)] left-1/2 w-0.25 -translate-x-1/2 bg-neutral-800 md:top-[calc(50%+1.2rem)] lg:top-[calc(50%+1.5rem)]'
          )}
        />
      )}

      {/* index circle */}
      <motion.span
        initial={{ opacity: 0, borderColor: '#92ff04' }}
        animate={{ opacity: 1, borderColor: '#252b37' }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className='flex-center text-primary-200 md:text-md-bold text-sm-bold bg-base-black absolute inset-x-0 top-1/2 aspect-square -translate-y-1/2 rounded-full border border-neutral-800'
      >
        {index}
      </motion.span>
    </div>
  );
};
