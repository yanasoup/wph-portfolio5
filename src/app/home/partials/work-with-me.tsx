import { motion, Variants } from 'motion/react';
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

const WorkWithMe = () => {
  return (
    <LazySection>
      <Section title='WORKING' subtitle='WHY CHOOSE ME?' minWidth='100%'>
        <div className='mt-6 flex flex-wrap md:mt-12 md:gap-20'>
          <Experience>
            <Experience.Group title='WORKING WITH ME' icon={heroImg}>
              {myExperiencesData.map((data) => (
                <Experience.Item
                  key={data.title}
                  {...data}
                  className='text-md-bold md:text-xl-bold text-neutral-25'
                />
              ))}
            </Experience.Group>
          </Experience>
          <Experience>
            <Experience.Group title='ANOTHER TALENT' icon={otherDev}>
              {otherExperiencesData.map((data) => (
                <Experience.Item
                  key={data.title}
                  {...data}
                  className='text-md-regular md:text-xl-regular text-neutral-400'
                />
              ))}
            </Experience.Group>
          </Experience>
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

export default WorkWithMe;

const ParentVariants: Variants = {
  inView: {
    transition: { staggerChildren: 0.4 },
  },
};
type ExperienceProps = {
  children: React.ReactNode;
};

type ExperienceSubComponents = {
  Group: typeof ExperienceGroup;
  Item: typeof ExperienceGroup.Item;
};

const Experience: React.FC<ExperienceProps> & ExperienceSubComponents = ({
  children,
}) => {
  return (
    <motion.div
      initial='outOfView'
      whileInView='inView'
      viewport={{ once: true, amount: 0.35 }}
      variants={ParentVariants}
      className='flex-1 basis-90'
    >
      {children}
    </motion.div>
  );
};

const groupVariants: Variants = {
  inView: {
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
  outOfView: {},
};

type ExperienceGroupProps = {
  title: string;
  icon: StaticImageData;
  children: React.ReactNode;
  className?: string;
};

type ExperienceGroupSubComponents = {
  Item: typeof ExperienceItem;
};

const ExperienceGroup: React.FC<ExperienceGroupProps> &
  ExperienceGroupSubComponents = ({ title, icon, children, className }) => {
  return (
    <motion.div
      variants={groupVariants}
      className={cn('flex flex-col items-center', className)}
    >
      <h3 className='text-xl-bold md:display-sm-bold text-neutral-25 mt-6'>
        {title}
      </h3>
      <Image
        src={icon}
        alt={title}
        className='mt-6 size-15 rounded-full bg-neutral-950 object-cover object-top md:mt-8 md:size-20'
      />
      <div className='w-full divide-y divide-neutral-800'>{children}</div>
    </motion.div>
  );
};

type ExperienceItemProps = {
  icon: StaticImageData;
  title: string;
  className?: string;
};

const ItemVariants: Variants = {
  inView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
  outOfView: {
    opacity: 0,
    y: -30,
  },
};

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  icon,
  title,
  className = '',
}) => {
  return (
    <motion.div
      variants={ItemVariants}
      className='flex w-full items-center justify-start gap-3 py-6 first:mt-6 first:pt-0 last:border-b last:border-neutral-800 md:py-8 md:first:mt-8 md:last:border-0 md:last:pb-0'
    >
      <Image
        src={icon}
        alt='title'
        className='mb:size-8 text-primary-200 size-6'
      />
      <p className={cn('', className)}>{title}</p>
    </motion.div>
  );
};

Experience.Group = ExperienceGroup;
ExperienceGroup.Item = ExperienceItem;
Experience.Item = ExperienceGroup.Item;
