import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

import LazySection from '@/components/layouts/lazy-section';
import { Section } from '@/components/layouts/section';
import { Button } from '@/components/ui/button';

import {
  myExperiencesData,
  otherExperiencesData,
} from '@/constants/experiences-data';
import { cn } from '@/lib/utils';

import otherDev from '../../../../public/icons/icon-anonymous.svg';
import heroImg from '../../../../public/images/hero1.png';

const Experiences = () => {
  return (
    <LazySection>
      <Section title='WORKING' subtitle='WHY CHOOSE ME?' minWidth='100%'>
        <div className='mt-6 flex flex-wrap md:mt-12 md:gap-20'>
          <div className='flex-1 basis-90'>
            <ExperienceCard title='WORKING WITH ME' icon={heroImg}>
              {myExperiencesData.map((data) => (
                <ExperienceItem
                  key={data.title}
                  {...data}
                  className='text-md-bold md:text-xl-bold text-neutral-25'
                />
              ))}
            </ExperienceCard>
          </div>
          <div className='flex-1 basis-90'>
            <ExperienceCard title='ANOTHER TALENT' icon={otherDev}>
              {otherExperiencesData.map((data) => (
                <ExperienceItem
                  key={data.title}
                  {...data}
                  className='text-md-regular md:text-xl-regular text-neutral-400'
                />
              ))}
            </ExperienceCard>
          </div>
        </div>
        <div className='flex-center mt-10 md:mt-12'>
          <Button asChild className='w-full md:w-fit'>
            <Link
              className='text-sm-bold md:text-md-bold text-neutral-950'
              href='#contact'
            >
              HIRE ME
            </Link>
          </Button>
        </div>
      </Section>
    </LazySection>
  );
};

export default Experiences;

type ExperienceCardProps = {
  title: string;
  icon: StaticImageData;
  children: React.ReactNode;
  className?: string;
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  icon,
  children,
  className,
}) => {
  return (
    <div className={cn('flex flex-col items-center', className)}>
      <h3 className='text-xl-bold md:display-sm-bold text-neutral-25 mt-6'>
        {title}
      </h3>
      <Image
        src={icon}
        alt={title}
        className='mt-6 size-15 rounded-full bg-neutral-950 object-cover object-top md:mt-8 md:size-20'
      />
      <div className='w-full divide-y divide-neutral-800'>{children}</div>
    </div>
  );
};

type ExperienceItemProps = {
  icon: StaticImageData;
  title: string;
  className?: string;
};

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  icon,
  title,
  className = '',
}) => {
  return (
    <div className='flex w-full items-center justify-start gap-3 py-6 first:mt-6 first:pt-0 last:border-b last:border-neutral-800 md:py-8 md:first:mt-8 md:last:border-0 md:last:pb-0'>
      <Image
        src={icon}
        alt='title'
        className='mb:size-8 text-primary-200 size-6'
      />
      <p className={cn('', className)}>{title}</p>
    </div>
  );
};
