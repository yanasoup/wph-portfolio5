import { StaticImageData } from 'next/image';

import iconDribble from '../../public/icons/icon-dribble.svg';
import iconInstagram from '../../public/icons/icon-instagram.svg';
import iconLinkedIn from '../../public/icons/icon-linkedin.svg';

type Icon = {
  href: string;
  src: StaticImageData;
  alt: string;
};

export const socialMediaData: Icon[] = [
  {
    href: 'https://www.dribble.com/',
    src: iconDribble,
    alt: 'Dribble',
  },
  {
    href: 'https://www.instagram.com/',
    src: iconInstagram,
    alt: 'Instagram',
  },
  {
    href: 'https://www.linkedin.com/',
    src: iconLinkedIn,
    alt: 'LinkedIn',
  },
];
