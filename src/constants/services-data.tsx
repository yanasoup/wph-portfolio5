import { MonitorIcon } from 'lucide-react';

type Service = {
  index: string;
  icon: React.ReactNode;
  title: string;
  description: string;
};

export const serviceData: Service[] = [
  {
    index: '01',
    icon: <MonitorIcon className='text-primary-200 size-8' />,
    title: 'Custom Website Development',
    description:
      'Building responsive, fast, and scalable websites tailored to your needs.',
  },
  {
    index: '02',
    icon: <MonitorIcon className='text-primary-200 size-8' />,
    title: 'Web Performance Optimization',
    description:
      'Enhancing website speed, SEO, and overall performance for better user experience.',
  },
  {
    index: '03',
    icon: <MonitorIcon className='text-primary-200 size-8' />,
    title: 'Website Maintenance & Debugging',
    description:
      'Fixing bugs, improving UI, and ensuring smooth performance over time.',
  },
];
