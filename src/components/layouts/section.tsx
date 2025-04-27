import React from 'react';

import { cn } from '@/lib/utils';

type SectionProps = {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  id?: string;
  className?: string;
};

export const Section: React.FC<SectionProps> = ({
  children,
  title,
  subtitle,
  id,
  className,
}) => {
  return (
    <div className={cn('custom-container py-10 md:py-20', className)} id={id}>
      {/* heading */}
      <div className='text-center'>
        <p className='text-md-medium md:text-lg-medium text-primary-200'>
          {title}
        </p>
        <h2 className='md:display-2xl-extrabold text-neutral-25 display-md-extrabold'>
          {subtitle}
        </h2>
      </div>

      {/* content */}
      {children}
    </div>
  );
};
