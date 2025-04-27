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
        <DialogBody className='relative'>
          <Image
            src={
              variant === 'success'
                ? '/icons/icon-form-message-success.svg'
                : '/icons/icon-form-message-success.svg'
            }
            alt={variant === 'success' ? 'success' : 'error'}
            width={147}
            height={136}
            className='absolute -top-1/2 left-1/2 size-27 -translate-x-[calc(50%-0.9rem)] translate-y-[59%] md:size-33 md:-translate-x-[calc(50%-0.7rem)]'
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
            <Button className='mx-auto mt-6 max-w-90.25 text-sm font-bold text-neutral-950'>
              {loading ? 'Loading...' : 'BACK TO HOME'}
            </Button>
          </DialogClose>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
};

export default FormStatusDialog;
