'use client';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { useMedia } from 'react-use';

import { Section } from '@/components/layouts/section';
import DecorationBox from '@/components/ui/decoration-box';

import { profesionalWorkData } from '@/constants/profesional-work-data';
import { cn } from '@/lib/utils';

const ProfesionalWork = () => {
  const isLargeIsh = useMedia('(min-width: 1024px', false);

  return (
    <Section
      title='EXPERIENCE'
      subtitle='PROFESIONAL WORK'
      className='relative'
    >
      <DecorationBox className='absolute right-0 bottom-0 z-100 h-[4.3rem] w-[6.45rem] translate-y-[80%] -rotate-90 md:h-[5.75rem] md:w-[8.625rem] md:-translate-y-[23px]' />
      <ProfesionalWorkCard>
        {profesionalWorkData.map((work) => {
          const atrr = { isLargeIsh: isLargeIsh, ...work };
          return <WorkItem key={work.index} {...atrr} />;
        })}
      </ProfesionalWorkCard>
    </Section>
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
          <LineAndCircle index={index} />
        </>
      )}
      {!isLargeIsh && <LineAndCircle index={index} />}

      {/* right column */}
      <div className='bg-base-black rounded-2xl border border-neutral-800 p-4 md:rounded-3xl md:p-6'>
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
          <LineAndCircle index={index} />
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

const LineAndCircle: React.FC<{ index: number }> = ({ index }) => {
  return (
    <div
      className={cn(
        'group relative mb-0 md:mb-8 [&:nth-last-child(2)]:mb-0',
        // target child
        '[&:nth-last-child(2)>.line-decoration]:h-1/2',
        '[&:nth-last-child(11)>.line-decoration]:top-1/2 [&:nth-last-child(11)>.line-decoration]:h-[calc(50%+2rem)]'
      )}
    >
      {/* line decoration */}
      <div className='line-decoration absolute left-1/2 h-[calc(100%+1rem)] w-0.25 -translate-x-1/2 bg-neutral-800 group-first:top-1/2 md:h-[calc(100%+3rem)] lg:h-[calc(100%+2rem)]' />

      {/* index circle */}
      <span className='flex-center bg-base-black text-primary-200 md:text-md-bold text-sm-bold absolute inset-x-0 top-1/2 aspect-square -translate-y-1/2 rounded-full border border-neutral-800'>
        {index}
      </span>
    </div>
  );
};
