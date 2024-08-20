"use client";
import { Button } from "@/components/ui/button";
import { FaAddressCard, FaPhoneAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import {
 Form,
 FormControl,
 FormField,
 FormItem,
 FormLabel,
 FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { isValidPhoneNumber } from "react-phone-number-input";
import { z } from "zod";
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { Toaster } from "@/components/ui/toaster";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters."
  }),
  phone: z.string().refine(isValidPhoneNumber, { message: "Invalid phone number" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});
export default function ContactPage() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const { toast } = useToast();

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const response = await fetch('api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (responseData.success) {
        toast({
          title: 'Form submitted successfully',
          description: responseData.message,
        });
        form.reset();
      } else {
        toast({
          title: 'Error submitting form',
          description: responseData.message,
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error submitting form',
        description: 'An error occurred while submitting the form.',
        variant: 'destructive',
      });
    }
  }

  return (
    <section className="pb-16 mb-16 mt-20 w-full">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-3xl text-center font-bold tracking-tight text-black dark:text-white sm:text-4xl">Contact</h1>
        </div>
        <div className="lg:flex flex-col p-4 lg:items-center lg:mt-20 lg:border border-gray-500 rounded-r-none pt-20 lg:py-40 rounded-xl lg:w-1/3">
          <div className="space-y-4">
            <p className="text-lg flex items-center gap-2">
              <MdAttachEmail className="text-gray-600 dark:text-gray-300" />
              <span>Email: example@example.com</span>
            </p>
            <p className="text-lg flex items-center gap-2">
              <FaPhoneAlt className="text-gray-600 dark:text-gray-300" />
              <span>Phone: +1234567890</span>
            </p>
          </div>
        </div>
        <Form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField name="name">
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input placeholder="Your Name" {...form.register("name")} />
            </FormControl>
            <FormMessage>{form.formState.errors.name?.message}</FormMessage>
          </FormField>
          <FormField name="email">
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="Your Email" {...form.register("email")} />
            </FormControl>
            <FormMessage>{form.formState.errors.email?.message}</FormMessage>
          </FormField>
          <FormField name="phone">
            <FormLabel>Phone</FormLabel>
            <FormControl>
              <PhoneInput placeholder="Your Phone" {...form.register("phone")} />
            </FormControl>
            <FormMessage>{form.formState.errors.phone?.message}</FormMessage>
          </FormField>
          <FormField name="message">
            <FormLabel>Message</FormLabel>
            <FormControl>
              <Textarea placeholder="Your Message" {...form.register("message")} />
            </FormControl>
            <FormMessage>{form.formState.errors.message?.message}</FormMessage>
          </FormField>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
      <Toaster />
    </section>
  );
}