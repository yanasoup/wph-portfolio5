import { StaticImageData } from 'next/image';

import logoTrello from '../../public/icons/icon-trello.svg';
import logoUpwork from '../../public/icons/icon-upwork.svg';
import logoZapier from '../../public/icons/icon-zapier.svg';
import logoZoom from '../../public/icons/icon-zoom.svg';

type Testimoni = {
  title: string;
  subtitle: string;
  rating: number;
  description: string;
  companyLogo: StaticImageData;
};

export const testimonialData: Testimoni[] = [
  {
    title: 'Thom Haye',
    subtitle: 'Project Manager',
    rating: 5,
    description:
      'Highly skilled frontend developer with an eye for design. Transformed our wireframes into a seamless and responsive web experience. Highly recommended!',
    companyLogo: logoUpwork,
  },
  {
    title: 'Emily Carter',
    subtitle: 'Head of Product',
    rating: 5,
    description:
      'An absolute pleasure to work with! Delivered a stunning, high-performance website that exceeded expectations. Attention to detail and problem-solving skills are top-notch!',
    companyLogo: logoTrello,
  },
  {
    title: 'Sarah Lee',
    subtitle: 'Engineering Manager',
    rating: 5,
    description:
      'An exceptional frontend developer with a deep understanding of UI/UX principles. The ability to translate design into pixel-perfect code is truly impressive. A valuable asset to any team!',
    companyLogo: logoZapier,
  },
  {
    title: 'Michael Brown',
    subtitle: 'Lead Developer',
    rating: 5,
    description:
      'A pleasure to collaborate with! Writes clean, maintainable code while effectively working with designers and backend engineers. Outstanding work!',
    companyLogo: logoZoom,
  },
  {
    title: 'Thom Haye',
    subtitle: 'Project Manager',
    rating: 5,
    description:
      'Highly skilled frontend developer with an eye for design. Transformed our wireframes into a seamless and responsive web experience. Highly recommended!',
    companyLogo: logoUpwork,
  },
  {
    title: 'Emily Carter',
    subtitle: 'Head of Product',
    rating: 5,
    description:
      'An absolute pleasure to work with! Delivered a stunning, high-performance website that exceeded expectations. Attention to detail and problem-solving skills are top-notch!',
    companyLogo: logoTrello,
  },
  {
    title: 'Sarah Lee',
    subtitle: 'Engineering Manager',
    rating: 5,
    description:
      'An exceptional frontend developer with a deep understanding of UI/UX principles. The ability to translate design into pixel-perfect code is truly impressive. A valuable asset to any team!',
    companyLogo: logoZapier,
  },
  {
    title: 'Michael Brown',
    subtitle: 'Lead Developer',
    rating: 5,
    description:
      'A pleasure to collaborate with! Writes clean, maintainable code while effectively working with designers and backend engineers. Outstanding work!',
    companyLogo: logoZoom,
  },
];
