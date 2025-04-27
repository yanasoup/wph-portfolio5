import React from 'react';

import DecorationBox from '@/components/ui/decoration-box';

const Footer = () => {
  return (
    <footer className='flex-center relative mt-16 h-16 border-t border-neutral-800 md:mt-30 md:h-20'>
      <DecorationBox className='absolute top-0 right-0 z-10 h-[4.3rem] w-[6.45rem] -translate-y-[100%] md:h-[5.75rem] md:w-[8.625rem]' />
      <p className='md:text-md-regular text-xs-regular text-neutral-400'>
        © 2025 Yana Supriatna. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
