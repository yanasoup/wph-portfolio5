import { StaticImageData } from 'next/image';

import logoTrello from '../../public/icons/icon-trello.svg';
import logoUpwork from '../../public/icons/icon-upwork.svg';
import logoZapier from '../../public/icons/icon-zapier.svg';
import logoZoom from '../../public/icons/icon-zoom.svg';
import work1Src from '../../public/images/project1.jpg';
import work2Src from '../../public/images/project2.jpg';
import work3Src from '../../public/images/project3.jpg';
import work4Src from '../../public/images/project4.jpg';

type WorkItem = {
  workImage: StaticImageData;
  index: number;
  title: string;
  subtitle: string;
  description: string;
  logoImage: StaticImageData;
};

export const profesionalWorkData: WorkItem[] = [
  {
    workImage: work1Src,
    index: 1,
    subtitle: 'Frontend Developer',
    title: '2020 - 2022',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences',
    logoImage: logoUpwork,
  },
  {
    workImage: work2Src,
    index: 2,
    subtitle: 'Frontend Developer',
    title: '2020 - 2022',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences',
    logoImage: logoTrello,
  },
  {
    workImage: work3Src,
    index: 3,
    subtitle: 'Frontend Developer',
    title: '2020 - 2022',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences',
    logoImage: logoZoom,
  },
  {
    workImage: work4Src,
    index: 4,
    subtitle: 'Frontend Developer',
    title: '2020 - 2022',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences',
    logoImage: logoZapier,
  },
];
