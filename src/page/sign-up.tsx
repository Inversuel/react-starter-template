import { Input } from '@/components/ui/input';
import { Typography } from '@/components/ui/typography';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { ComboBox } from '@/components/ui/combo-box';
import React from 'react';

const GenderEnum = ['male', 'female', 'other'] as const;

export const formSchema = z
  .object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().max(30),
    rePassword: z.string().max(30),
    name: z.string().max(20),
    gender: z.enum(GenderEnum)
  })
  .refine((data) => data.password === data.rePassword, {
    message: 'Passwords do not much!',
    path: ['rePassword']
  });

export type formRegister = z.infer<typeof formSchema>;

const SignUp = () => {
  const form = useForm<formRegister>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      rePassword: '',
      name: '',
      gender: 'other'
    }
  });

  const onSubmit = async (values: formRegister) => {
    console.log(values);
  };

  return (
    <section className="flex flex-col justify-center gap-5">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col lg:grid lg:grid-cols-200 lg:justify-center gap-3">
          <Typography variant="h5" className="col-start-1 col-end-3">
            Create your account
          </Typography>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="name" {...field} />
                </FormControl>
                <FormDescription>This is your public display name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
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
          <FormField
            control={form.control}
            name="rePassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm your password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Repeat your password..." {...field} />
                </FormControl>
                <FormDescription>Please repeat your password</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gender"
            render={(field) => (
              <FormItem className="flex flex-col">
                <FormLabel>Gender</FormLabel>
                <FormControl>
                  <ComboBox
                    setValue={field.field.onChange}
                    value={field.field.value}
                    data={[
                      { label: 'Male', value: 'male' },
                      { label: 'Female', value: 'female' },
                      { label: 'Other', value: 'other' }
                    ]}
                    defaultValue={'Select your gender...'}
                    emptyText={'No gender found'}
                    placeholder="Search your gender..."
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          {form.formState.errors?.rePassword?.message && (
            <Typography>{form.formState.errors?.rePassword?.message}</Typography>
          )}
          <Button className="col-start-1 col-end-3">Send</Button>
        </form>
      </Form>
    </section>
  );
};

export default SignUp;
