import { Icon } from '@iconify/react';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

import LazySection from '@/components/layouts/lazy-section';
import { Section } from '@/components/layouts/section';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from '@/components/ui/carousel';

import { testimonialData } from '@/constants/testimonial-data';
import { chunkArray } from '@/lib/utils';

const Testimonials = () => {
  const chunkedData = chunkArray(testimonialData, 2);
  return (
    <LazySection>
      <Section title='TESTIMONIALS' subtitle='PEOPLE SAYS ABOUT ME'>
        <Carousel className='mt-6 md:mt-16' orientation='horizontal'>
          <CarouselContent>
            {chunkedData.map((group, groupIndex) => (
              <CarouselItem key={groupIndex}>
                <div key={groupIndex} className='flex flex-wrap gap-4'>
                  {group.map((testi) => (
                    <TestimonialCard key={testi.title} {...testi} />
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNavigation />
        </Carousel>
      </Section>
    </LazySection>
  );
};

export default Testimonials;

type TestimonialCardProps = {
  title: string;
  subtitle: string;
  rating: number;
  description: string;
  companyLogo: StaticImageData;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  title,
  subtitle,
  rating,
  description,
  companyLogo,
}) => {
  return (
    <div className='bg-base-black flex-1 basis-90 rounded-2xl border border-neutral-800 p-4 md:rounded-3xl md:p-6'>
      <div className='flex flex-wrap items-center justify-between'>
        <div className=''>
          <p className='text-lg-bold md:text-xl-bold text-neutral-25'>
            {title}
          </p>
          <p className='md:text-lg-medium text-md-regular mt-1 text-neutral-400'>
            {subtitle}
          </p>
        </div>
        <Image src={companyLogo} alt='title' className='h-8 w-auto md:h-12' />
      </div>
      <div className='flex'>
        {new Array(rating).fill(null).map((_, index) => (
          <Icon
            key={index}
            icon='material-symbols:star-rounded'
            className='text-[2rem] text-[#f3993f]'
          />
        ))}
      </div>
      <p className='text-md-medium md:text-lg-medium mt-3 line-clamp-4 text-neutral-400 md:line-clamp-3'>
        {description}
      </p>
    </div>
  );
};
