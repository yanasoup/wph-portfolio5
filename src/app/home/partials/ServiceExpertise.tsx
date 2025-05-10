import { motion, Variants } from 'framer-motion';
import React from 'react';

import LazySection from '@/components/layouts/lazy-section';

import { serviceData } from '@/constants/services-data';

const ServiceExpertise = () => {
  return (
    <LazySection>
      <div className='custom-container py-20 md:py-30'>
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
        <Service>
          <Service.Group>
            {serviceData.map((data) => (
              <Service.Item key={data.index} {...data} />
            ))}
          </Service.Group>
        </Service>
      </div>
    </LazySection>
  );
};

export default ServiceExpertise;

const serviceVariants: Variants = {
  inView: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

type ServiceProps = {
  children: React.ReactNode;
};

type ServiceSubComponents = {
  Group: typeof ServiceGroup;
  Item: typeof ServiceGroup.Item;
};

const Service: React.FC<ServiceProps> & ServiceSubComponents = ({
  children,
}) => {
  return (
    <motion.div
      className='mt-6 flex flex-wrap md:mt-16'
      variants={serviceVariants}
      initial='outOfView'
      whileInView='inView'
      viewport={{ once: false, amount: 0.35 }}
    >
      {children}
    </motion.div>
  );
};

const serviceGroupVariants: Variants = {
  inView: {
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
  outOfView: {},
};
type ServiceGroupProps = {
  children: React.ReactNode;
};

type ServiceGroupSubComponents = {
  Item: typeof ServiceItem;
};

const ServiceGroup: React.FC<ServiceGroupProps> & ServiceGroupSubComponents = ({
  children,
}) => {
  return (
    <motion.div
      className='flex flex-wrap gap-6 md:gap-10'
      variants={serviceGroupVariants}
      initial='outOfView'
      whileInView='inView'
      viewport={{ once: false, amount: 0.35 }}
    >
      {children}
    </motion.div>
  );
};

type ServiceItemProps = {
  index: string;
  icon: React.ReactNode;
  title: string;
  description: string;
};

const serviceItemVariants: Variants = {
  inView: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  outOfView: {
    opacity: 0,
    x: -50,
  },
};

const ServiceItem: React.FC<ServiceItemProps> = ({
  index,
  icon,
  title,
  description,
}) => {
  return (
    <motion.div
      variants={serviceItemVariants}
      className='flex flex-1 basis-90 flex-col gap-3 md:gap-6'
    >
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
    </motion.div>
  );
};

Service.Group = ServiceGroup;
ServiceGroup.Item = ServiceItem;
Service.Item = ServiceGroup.Item;
