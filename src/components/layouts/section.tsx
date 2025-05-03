import { LazyMotion } from 'motion/react';
import * as m from 'motion/react-m';
import React from 'react';

import { cn } from '@/lib/utils';

const loadFeatures = () => import('./features.js').then((res) => res.default);

type SectionProps = {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  id?: string;
  className?: string;
  minWidth?: string;
  maxWidth?: string;
};

export const Section: React.FC<SectionProps> = ({
  children,
  title,
  subtitle,
  id,
  className,
  minWidth = '18.25rem',
  maxWidth = '100%',
}) => {
  return (
    <LazyMotion features={loadFeatures}>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className={cn('custom-container py-10 md:py-20', className)}
        id={id}
      >
        {/* heading */}
        <div className='text-center'>
          <p className='text-md-medium md:text-lg-medium text-primary-200'>
            {title}
          </p>
          <h2
            className='md:display-2xl-extrabold text-neutral-25 display-md-extrabold mx-auto'
            style={{
              width: `clamp(${minWidth}, 47.44vw, ${maxWidth})`,
            }}
          >
            {subtitle}
          </h2>
        </div>

        {/* content */}
        {children}
      </m.div>
    </LazyMotion>
  );
};
