import Image, { StaticImageData } from 'next/image';
import React from 'react';

import { skillsData, skillProficiencies } from '@/constants/skills-data';

const Skiils = () => {
  return (
    <section
      id='skills'
      className='custom-container flex flex-wrap items-center justify-center gap-10 py-10 md:gap-14.5 md:py-20'
    >
      <div className='flex-[2.6] basis-90'>
        <p className='text-md-medium md:text-lg-medium text-primary-200'>
          SKILLS
        </p>
        <p className='display-md-extrabold md:display-2xl-extrabold text-neutral-25'>
          SKILLS THAT BRING IDEAS TO LIFE
        </p>
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
  );
};

export default Skiils;

type SkillCardsProps = {
  children: React.ReactNode;
};

const SkillCards: React.FC<SkillCardsProps> = ({ children }) => {
  return (
    <div className='mt-6 grid grid-cols-[3rem_3rem_3rem_3rem] gap-4 md:mt-14.5 md:grid-cols-[4rem_4rem_4rem_4rem]'>
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
    <div className='flex-center mx-auto size-12 rounded-full border border-neutral-800 p-3 md:size-16 [&>*]:h-9.5 [&>*]:w-auto'>
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
  return (
    <div
      className='flex items-center justify-center gap-4 md:gap-6'
      // style={{
      //   width: 'clamp(22.5rem, 48.23vw, 37.625rem)',
      // }}
    >
      <div
        className='w-full'
        // style={{
        //   width: 'clamp(18.875rem, 37.42vw, 29.1875rem)',
        // }}
      >
        <div
          className='bg-primary-300 px-3.88 rounded-3.24 py-1.25 md:rounded-3xl md:px-6 md:py-2'
          style={{ width: `${value}%` }}
        >
          <p className='text-sm-semibold md:text-lg-semibold text-neutral-25'>
            {title}
          </p>
        </div>
      </div>
      <p className='text-sm-semibold md:text-xl-semibold text-white'>
        {value}%
      </p>
    </div>
  );
};
