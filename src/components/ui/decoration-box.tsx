import { motion } from 'framer-motion';
import React from 'react';

import { cn } from '@/lib/utils';

type DecorationBoxProps = {
  className?: string;
};
const DecorationBox: React.FC<DecorationBoxProps> = ({ className }) => {
  return (
    <div className={cn('flex flex-wrap', className)}>
      <TransparentDecorationBox />
      <GreenDecorationBox />
      <TransparentDecorationBox />
      <GreenDecorationBox />
      <TransparentDecorationBox />
      <GreenDecorationBox />
    </div>
  );
};

export default DecorationBox;

const TransparentDecorationBox = () => {
  return <div className='size-[2.15rem] md:size-[2.875rem]' />;
};

const GreenDecorationBox = () => {
  return (
    <motion.div
      initial={{
        x: -150,
        rotate: 0,
      }}
      animate={{ x: 0, rotate: 360 }}
      transition={{
        type: 'spring',
        duration: 1.5,
        delay: 2.5,
      }}
      className='bg-primary-400 size-[2.15rem] md:size-[2.875rem]'
    />
  );
};
