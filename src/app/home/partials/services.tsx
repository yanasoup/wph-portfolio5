import React from 'react';

import LazySection from '@/components/layouts/lazy-section';

import { serviceData } from '@/constants/services-data';

const Services = () => {
  return (
    <LazySection>
      <div className='custom-container py-10 md:py-30'>
        <div className='flex flex-wrap items-center justify-between gap-4 lg:gap-46'>
          <div className='flex-[5.1] basis-80'>
            <p className='md:text-lg-medium text-md-medium text-primary-200'>
              SERVICE
            </p>
            <h2 className='md:display-2xl-extrabold display-md-extrabold text-neutral-25 mt-2'>
              MY SERVICE EXPERTISE
            </h2>
          </div>
          <p
            className='md:text-xl-medium text-md-medium flex-[4.9] basis-80 text-neutral-400 md:text-right'
            style={{
              width: 'clamp(22.5625rem, 40.3846vw, 31.5rem)',
            }}
          >
            Creating modern, intuitive, and visually consistent web experiences
            that align with industry trends and user expectations.
          </p>
        </div>
        <div className='mt-6 flex flex-wrap md:mt-16'>
          <ServiceCards>
            {serviceData.map((data) => (
              <ServiceCard key={data.index} {...data} />
            ))}
          </ServiceCards>
        </div>
      </div>
    </LazySection>
  );
};

export default Services;

type ServiceCardsProps = {
  children: React.ReactNode;
};

const ServiceCards: React.FC<ServiceCardsProps> = ({ children }) => {
  return <div className='flex flex-wrap gap-6 md:gap-10'>{children}</div>;
};

type ServiceCardProps = {
  index: string;
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  index,
  icon,
  title,
  description,
}) => {
  return (
    <div className='flex flex-1 basis-90 flex-col gap-3 md:gap-6'>
      <p className='text-md-semibold md:text-xl-semibold text-neutral-400'>
        {index}
      </p>
      <div className='h-0.25 border border-neutral-800' />
      {icon}
      <h3 className='md:display-sm-semibold text-xl-semibold text-neutral-25'>
        {title}
      </h3>
      <p className='text-md-regular md:text-xl-regular line-clamp-2 text-neutral-400'>
        {description}
      </p>
    </div>
  );
};
