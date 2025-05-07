import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'flex justify-center items-center shrink-0 disabled:pointer-events-none disabled:opacity-50 cursor-pointer disabled:text-neutral-800 outline-none',
  {
    variants: {
      variant: {
        default:
          'bg-primary-200 text-neutral-950 text-sm-bold md:text-md-bold rounded-full hover:shadow-[0_0_22px_rgba(146,255,4,0.6)]',
        circleWhite: 'bg-neutral-25 rouded-full',
        outline:
          'border border-neutral-800 rounded-full hover:border-neutral-700 text-primary-200',
      },
      size: {
        default: 'md:h-14 h-12 px-21.8',
        circleWhite: 'md:size-25 size:12.5',
        icon: 'size-10 md:size-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
