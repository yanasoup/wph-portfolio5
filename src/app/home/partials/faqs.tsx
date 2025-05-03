import Image, { StaticImageData } from 'next/image';
import React from 'react';

import LazySection from '@/components/layouts/lazy-section';
import { Section } from '@/components/layouts/section';

import { faqData } from '@/constants/faq-data';
import { chunkArray } from '@/lib/utils';

const FAQS = () => {
  const chunkedFaqs = chunkArray(faqData, 2);
  return (
    <LazySection>
      <Section title='FAQ' subtitle='FREQUENTLY ASKED QUESTIONS' id='faq'>
        <div className='mt-6 md:mt-16 [&>div:last-child]:border-0 max-md:[&>div:last-child>div:last-child]:border-0'>
          {chunkedFaqs.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className='flex flex-wrap gap-4 divide-neutral-800 border-neutral-800 pb-4 max-md:divide-y md:mt-10 md:gap-10 md:divide-x md:border-b md:pb-10'
            >
              {group.map((item, itemIndex) => (
                <FaqItem key={itemIndex} {...item} />
              ))}
            </div>
          ))}
        </div>
      </Section>
    </LazySection>
  );
};

export default FAQS;

type FaqItemProps = {
  icon: StaticImageData;
  title: string;
  description: string;
};

const FaqItem: React.FC<FaqItemProps> = ({ icon, title, description = '' }) => {
  return (
    <div className='flex-1 basis-90 pb-4 max-md:border-b max-md:border-neutral-800'>
      <div className='flex w-full items-start justify-start gap-3'>
        <Image
          src={icon}
          alt='title'
          className='mb:size-8 text-primary-200 size-6'
        />
        <p className='text-neutral-25 md:display-xs-bold text-lg-bold'>
          {title}
        </p>
      </div>
      <p className='text-sm-medium md:text-md-medium mt-2 text-neutral-400 md:mt-6'>
        {description}
      </p>
    </div>
  );
};
