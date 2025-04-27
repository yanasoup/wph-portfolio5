import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ClipLoader } from 'react-spinners';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import DecorationBox from '@/components/ui/decoration-box';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import FormStatusDialog from '@/components/ui/form-status-dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { socialMediaData } from '@/constants/social-media-data';

import HeroImage from '../../../../public/images/hero1.png';

const contactSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required',
    })
    .min(2, 'Name must be at least 2 characters long')
    .max(50, 'Name must be at most 50 characters long'),
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Please enter a valid email address'),
  message: z
    .string({
      required_error: 'Message is required',
    })
    .min(20, 'Message must be at least 20 characters long')
    .max(500, 'Message must be at most 500 characters long'),
});

const ContactForm = () => {
  const [loading, setLoading] = React.useState(false);

  const [showDialog, setShowDialog] = React.useState(false);
  const [variant, setVariant] = React.useState<'success' | 'error'>('success');

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(data: z.infer<typeof contactSchema>) {
    try {
      setLoading(true);
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      form.reset();
      setVariant('success');
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setShowDialog(true);
      setLoading(false);
    }
  }

  return (
    <section
      className='custom-container relative z-20 flex flex-wrap md:mt-20'
      id='contact'
    >
      <DecorationBox className='absolute top-0 left-0 z-100 h-[4.3rem] w-[6.45rem] -translate-y-[50%] rotate-180 md:h-[5.75rem] md:w-[8.625rem] md:-translate-y-[100%]' />

      <div className='flex-[1.8] basis-90 max-md:mb-10'>
        <div
          className='relative mx-auto'
          style={{
            width: 'clamp(21.75rem, 33.65vw, 26.25rem)',
          }}
        >
          <Image
            src={HeroImage}
            alt='hero'
            className='grayscale'
            style={{
              width: 'clamp(21.75rem, 33.65vw, 26.25rem)',
            }}
          />
          <div className='from-base-black absolute inset-0 bg-linear-to-t to-transparent' />
          <div className='from-base-black absolute inset-x-0 bottom-0 h-[70%] bg-linear-to-t to-transparent' />

          <div className='absolute bottom-0 left-1/2 z-60 -translate-x-1/2 translate-y-[22%] gap-4'>
            <div className='flex-start gap-4 md:gap-6'>
              {socialMediaData.map((icon) => (
                <Link
                  key={icon.alt}
                  href={icon.href}
                  className='bg-base-black flex-center size-16 rounded-full border border-neutral-800 p-2.5'
                >
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    className='size-7 md:size-9.5'
                  />
                </Link>
              ))}
            </div>

            <p className='text-md-bold text-base-white md:text-xl-bold mt-4 text-center'>
              Yana Supriatna
            </p>
            <div className='flex-center flex gap-3'>
              <p className='bg-primary-200 size-3 rounded-full'></p>
              <p className='text-sm-bold md:text-md-semibold text-neutral-400'>
                Available for Work
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex-[8.2] basis-90 max-md:px-4 max-md:pt-10'>
        <div id='contact'>
          <p className='text-md-medium md:text-lg-medium text-primary-200'>
            CONTACT
          </p>
          <h2 className='md:display-2xl-extrabold text-neutral-25 display-md-extrabold'>
            LET’S GET IN TOUCH
          </h2>
          <div className='mt-6 md:mt-12'>
            <Form {...form}>
              <form
                className='mx-auto max-w-180 space-y-4 md:space-y-6'
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <FormField
                  control={form.control}
                  name='name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <Input disabled={loading} {...field} />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <Input disabled={loading} {...field} />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='message'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <Textarea disabled={loading} {...field} />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  disabled={loading}
                  className='mt-4 w-full font-bold text-neutral-950 md:mt-6'
                >
                  {loading ? <ClipLoader size={20} /> : 'Send Message'}
                </Button>
              </form>
            </Form>
            <FormStatusDialog
              open={showDialog}
              variant={variant}
              loading={loading}
              onOpenChange={setShowDialog}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
