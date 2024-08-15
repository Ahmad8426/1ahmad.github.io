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
import { z } from "zod";
import { isValidPhoneNumber } from "libphonenumber-js";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { Toaster } from "@/components/ui/toaster";

const FormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().refine((value) => {
    if (!value) return false;
    try {
      return isValidPhoneNumber(value);
    } catch {
      return false;
    }
  }, { message: "Invalid phone number" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof FormSchema>;

export default function ContactPage() {
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const { toast } = useToast();

  async function onSubmit(data: FormValues) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (responseData.success) {
        toast({
          title: "Form submitted successfully",
          description: responseData.message,
        });
        form.reset();
      } else {
        toast({
          title: "Error submitting form",
          description: responseData.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error submitting form",
        description: "An error occurred while submitting the form.",
        variant: "destructive",
      });
    }
  }

  return (
    <section className="lg:flex w-full justify-center items-center p-4">
      <div className="lg:flex flex-col p-4 lg:items-center lg:mt-20 lg:border border-gray-500 rounded-r-none pt-20 lg:py-40 rounded-xl lg:w-1/3">
        <span className="p-4 inline-block w-full bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
          <h1 className="text-3xl text-center font-bold">Contact</h1>
        </span>
        <div className="">
          <p className="text-lg lg:flex items-center flex-wrap gap-4">
            <span className="flex items-center inline-block gap-2">
              <MdAttachEmail />
              <span className="">
                <Link href="mailto:ahmy40404@gmail.com" target="_blank">Email</Link>:
              </span>
            </span>
            ahmy40404@gmail.com
          </p>
          <p className="text-lg lg:flex items-center flex-wrap gap-4">
            <span className="flex items-center inline-block gap-2">
              <FaPhoneAlt />
              <span className="">
                <Link href="tel:+916382429579" target="_blank">Phone</Link>:
              </span>
            </span>
            +91 63824 29579
          </p>
          <p className="text-lg lg:flex items-center flex-wrap gap-4">
            <span className="flex items-center inline-block gap-2">
              <FaAddressCard />
              <span className="">
                <Link href="" target="_blank">Address</Link>:
              </span>
            </span>
            Chennai, Tamil Nadu, India
          </p>
        </div>
      </div>
      <div className="mt-10 lg:mt-20 border border-gray-500 lg:rounded-l-none p-10 rounded-xl lg:w-1/3">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 flex flex-col items-start"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start w-full">
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Your Name" className="w-full" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start w-full">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Your Email" className="w-full" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start w-full">
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter Your Message" className="w-full" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="grid">
              Submit
            </Button>
          </form>
        </Form>
      </div>
      <Toaster />
    </section>
  );
}
