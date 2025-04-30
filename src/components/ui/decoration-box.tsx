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
  return <div className='bg-primary-400 size-[2.15rem] md:size-[2.875rem]' />;
};
