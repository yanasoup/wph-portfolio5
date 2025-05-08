import Image from 'next/image';
import React from 'react';

import { Button } from './button';
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from './dialog';

interface FormStatusDialogProps extends React.ComponentProps<typeof Dialog> {
  variant: 'success' | 'error';
  loading?: boolean;
}

const FormStatusDialog: React.FC<FormStatusDialogProps> = ({
  variant,
  loading,
  ...props
}) => {
  return (
    <Dialog {...props}>
      <DialogContent>
        <DialogBody
          className='relative mx-auto px-6 pt-20 pb-6 md:px-8 md:pb-8'
          style={{
            width: 'clamp(22.56rem, 38.38vw, 29.94rem)',
            height: 'clamp(17rem, 22.92vw, 17.88rem)',
          }}
        >
          <Image
            src={
              variant === 'success'
                ? '/icons/icon-form-message-success.svg'
                : '/icons/icon-form-message-success.svg'
            }
            alt={variant === 'success' ? 'success' : 'error'}
            width={147}
            height={136}
            className='absolute -top-1/2 left-1/2 size-30 -translate-x-[calc(50%-0.9rem)] translate-y-[59%] md:size-33 md:-translate-x-[calc(50%-0.7rem)]'
          />
          <DialogTitle>
            {variant === 'success'
              ? 'Message Sent Successfully!'
              : 'Oops! Your message couldn’t be sent.'}
          </DialogTitle>
          <DialogDescription>
            {variant === 'success'
              ? 'Thank you for reaching out. I’ll get back to you as soon as possible.'
              : 'Please try again later or check your internet connection.'}
          </DialogDescription>
          <DialogClose asChild>
            <Button
              className='mx-auto mt-6 h-12 w-78.25 text-sm font-bold text-neutral-950 md:h-12 md:w-90.25'
              style={{
                width: 'clamp(19.56rem, 28.93vw, 22.56rem)',
              }}
            >
              {loading ? 'Loading...' : 'BACK TO HOME'}
            </Button>
          </DialogClose>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
};

export default FormStatusDialog;
