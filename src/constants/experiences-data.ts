import { StaticImageData } from 'next/image';

import asterixIcon from '../../public/icons/icon-asterix.svg';

type Experience = {
  icon: StaticImageData;
  title: string;
};

export const myExperiencesData: Experience[] = [
  {
    icon: asterixIcon,
    title: 'React Expert',
  },
  {
    icon: asterixIcon,
    title: 'Precise Website Implementation',
  },
  {
    icon: asterixIcon,
    title: 'TypeScript Proficiency',
  },
  {
    icon: asterixIcon,
    title: 'Clean, Maintainable Code',
  },
  {
    icon: asterixIcon,
    title: 'Responsive Website Development',
  },
  {
    icon: asterixIcon,
    title: 'UI Design Proficiency (Figma)',
  },
];

export const otherExperiencesData: Experience[] = [
  {
    icon: asterixIcon,
    title: 'Basic React Knowledge',
  },
  {
    icon: asterixIcon,
    title: 'Inconsistent Design Translation',
  },
  {
    icon: asterixIcon,
    title: 'Little to No TypeScript Knowledge',
  },
  {
    icon: asterixIcon,
    title: 'Unstructured Code',
  },
  {
    icon: asterixIcon,
    title: 'Inconsistent Responsiveness',
  },
  {
    icon: asterixIcon,
    title: 'No Design Skills',
  },
];
