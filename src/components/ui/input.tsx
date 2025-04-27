import * as React from 'react';

import { cn } from '@/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot='input'
      className={cn(
        'text-sm-regular md:text-md-regular bg-base-black h-11 w-full rounded-md px-3 py-2 outline-none placeholder:text-neutral-500 md:h-12 md:rounded-xl md:px-4 md:py-2.25',
        'border border-neutral-800 focus:ring-[1px] focus:ring-neutral-500',
        className
      )}
      {...props}
    />
  );
}

export { Input };
