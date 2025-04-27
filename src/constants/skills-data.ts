import { StaticImageData } from 'next/image';

import iconCss from '../../public/icons/icon-css.svg';
import iconDocker from '../../public/icons/icon-docker.svg';
import iconExpressJS from '../../public/icons/icon-expressjs.svg';
import iconHtml from '../../public/icons/icon-html.svg';
import iconJs from '../../public/icons/icon-javascript.svg';
import iconMongoDB from '../../public/icons/icon-mongodb.svg';
import iconReact from '../../public/icons/icon-react.svg';
import iconTypescript from '../../public/icons/icon-typescript.svg';

type Skill = {
  icon: StaticImageData;
  title: string;
};

export const skillsData: Skill[] = [
  {
    icon: iconJs,
    title: 'JavaScript',
  },
  {
    icon: iconCss,
    title: 'CSS',
  },
  {
    icon: iconHtml,
    title: 'HTML',
  },
  {
    icon: iconExpressJS,
    title: 'Express.js',
  },
  {
    icon: iconMongoDB,
    title: 'MongoDB',
  },
  {
    icon: iconReact,
    title: 'React',
  },
  {
    icon: iconTypescript,
    title: 'TypeScript',
  },
  {
    icon: iconDocker,
    title: 'Docker',
  },
];

type SkillProficiency = {
  title: string;
  value: number;
};
export const skillProficiencies: SkillProficiency[] = [
  {
    title: 'React JS',
    value: 50,
  },
  {
    title: 'TypeScript',
    value: 80,
  },
  {
    title: 'Tailwind CSS',
    value: 90,
  },
  {
    title: 'HTML',
    value: 100,
  },
  {
    title: 'Docker',
    value: 70,
  },
  {
    title: 'Javascript',
    value: 90,
  },
];
