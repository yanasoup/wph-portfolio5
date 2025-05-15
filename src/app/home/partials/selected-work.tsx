import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

import LazySection from '@/components/layouts/lazy-section';
import { Section } from '@/components/layouts/section';

import { portfolioItemData } from '@/constants/selected-word-data';
import { chunkArray } from '@/lib/utils';
const SelectedWork = () => {
  const chunkedData = chunkArray(portfolioItemData, 3);

  return (
    <LazySection>
      <Section title='PORTFOLIO' subtitle='SELECTED WORK' id='projects'>
        <div className='mx-auto mt-6 flex flex-wrap gap-8 md:mt-16 md:gap-12'>
          {chunkedData.map((group, groupIndex) => (
            <div key={groupIndex} className='flex flex-wrap gap-8 md:gap-5'>
              {group.map((item, itemIndex) => (
                <PortfolioItem key={itemIndex} {...item} />
              ))}
            </div>
          ))}
        </div>
      </Section>
    </LazySection>
  );
};

export default SelectedWork;

type PortfolioItemProps = {
  image: StaticImageData;
  title: string;
  description: string;
  url?: string;
};

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  image,
  title,
  description,
  url,
}) => {
  return (
    <div className='group relative flex-1 basis-80 cursor-pointer'>
      {url && (
        <div className='bg-neutral-25 visit-link flex-center absolute top-[52%] left-1/2 z-20 size-20 translate-x-[38%] rounded-full p-2 transition-all duration-300 ease-in-out md:size-0 md:opacity-0 md:group-hover:size-25 md:group-hover:opacity-100'>
          <Link
            href={url}
            target='_blank'
            className='md:text-lg-bold text-md-bold px-6.5 py-8.5 text-neutral-950'
          >
            VISIT
          </Link>
        </div>
      )}
      <Image
        src={image}
        alt={title}
        className='rounded-2xl object-contain transition-transform delay-0 duration-500 ease-in-out hover:scale-105 hover:rotate-1 md:rounded-3xl'
      />
      <h4 className='text-neutral-25 md:display-xs-bold text-xl-bold mt-3 md:mt-4'>
        {title}
      </h4>
      <p className='text-sm-regular md:text-md-regular mt-3 text-neutral-400 md:mt-4'>
        {description}
      </p>
    </div>
  );
};
