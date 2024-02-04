import { Input } from '@/components/ui/input';
import { Typography } from '@/components/ui/typography';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import React from 'react';

export const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string()
});

export type formLogin = z.infer<typeof formSchema>;

const SignIn = () => {
  const form = useForm<formLogin>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = (values: formLogin) => {
    console.log(values);
  };

  return (
    <section className="flex flex-col justify-center gap-5 xl:mx-28">
      <Typography variant="h6">Logn in to your account</Typography>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="password..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="col-start-1 col-end-3">Send</Button>
        </form>
      </Form>
    </section>
  );
};

export default SignIn;
