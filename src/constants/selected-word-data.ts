import { StaticImageData } from 'next/image';

import work1Src from '../../public/images/project1.jpg';
import work2Src from '../../public/images/project2.jpg';
import work3Src from '../../public/images/project3.jpg';
import work4Src from '../../public/images/project4.jpg';
import work5Src from '../../public/images/project5.jpg';
import work6Src from '../../public/images/project6.jpg';

type PortfolioItem = {
  image: StaticImageData;
  title: string;
  description: string;
  url?: string;
};

export const portfolioItemData: PortfolioItem[] = [
  {
    image: work1Src,
    title: 'Dashboard SaaS Task Management',
    description:
      'Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.',
  },
  {
    image: work2Src,
    title: 'Dashboard SaaS Task Management',
    description:
      'Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.',
    url: 'https://yanasoup-lapakpedia.vercel.app',
  },
  {
    image: work3Src,
    title: 'Dashboard SaaS Task Management',
    description:
      'Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.',
  },
  {
    image: work4Src,
    title: 'Dashboard SaaS Task Management',
    description:
      'Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.',
  },
  {
    image: work5Src,
    title: 'Dashboard SaaS Task Management',
    description:
      'Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.',
  },
  {
    image: work6Src,
    title: 'Dashboard SaaS Task Management',
    description:
      'Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.',
  },
];
