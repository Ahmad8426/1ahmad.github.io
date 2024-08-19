import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

const validationSchema = Yup.object({
  name: Yup.string().min(2, 'Username must be at least 2 characters.').required('Required'),
  phone: Yup.string().matches(/^[0-9]+$/, 'Invalid phone number').required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  message: Yup.string().min(10, 'Message must be at least 10 characters.').required('Required')
});

export default function ContactPage() {
  return (
    <section className="lg:flex w-full justify-center items-center p-4">
      <div className="lg:flex flex-col p-4 lg:items-center lg:mt-20 lg:border border-gray-500 rounded-r-none pt-20 lg:py-40 rounded-xl lg:w-1/3">
        <span className="p-4 inline-block w-full bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
          <h1 className="text-3xl text-center font-bold">Contact</h1>
        </span>
        <div className="space-y-4">
          <p className="text-lg flex items-center gap-2">
            <MdAttachEmail className="text-blue-500" />
            <Link href="mailto:ahmy40404@gmail.com" target="_blank" className="hover:underline text-blue-500 hover:text-blue-700 transition-colors px-4 py-2 border border-blue-500 rounded-md">ahmy40404@gmail.com</Link>
          </p>
          <p className="text-lg flex items-center gap-2">
            <FaPhoneAlt className="text-blue-500" />
            <Link href="tel:+916382429579" target="_blank" className="hover:underline text-blue-500 hover:text-blue-700 transition-colors px-4 py-2 border border-blue-500 rounded-md">+91 63824 29579</Link>
          </p>
        </div>
      </div>
      <div className="mt-10 lg:mt-20 border border-gray-500 lg:rounded-l-none p-10 rounded-xl lg:w-1/3">
        <Formik
          initialValues={{ name: '', email: '', phone: '', message: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            // Submit form data
            fetch('/api/contact', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(values),
            })
            .then(response => response.json())
            .then(data => {
              setSubmitting(false);
              // Handle response
            })
            .catch(error => {
              setSubmitting(false);
              // Handle error
            });
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-8 flex flex-col items-start">
              <div className="flex flex-col items-start w-full">
                <label htmlFor="name">Full Name</label>
                <Field type="text" name="name" placeholder="Enter Your Name" className="w-full" />
                <ErrorMessage name="name" component="div" className="text-red-500" />
              </div>
              <div className="flex flex-col items-start w-full">
                <label htmlFor="email">Email</label>
                <Field type="email" name="email" placeholder="Enter Your Email" className="w-full" />
                <ErrorMessage name="email" component="div" className="text-red-500" />
              </div>
              <div className="flex flex-col items-start w-full">
                <label htmlFor="phone">Phone Number</label>
                <Field type="tel" name="phone" placeholder="Enter a phone number" className="w-full" />
                <ErrorMessage name="phone" component="div" className="text-red-500" />
              </div>
              <div className="flex flex-col items-start w-full">
                <label htmlFor="message">Message</label>
                <Field as="textarea" name="message" placeholder="Enter Your Message" className="w-full" />
                <ErrorMessage name="message" component="div" className="text-red-500" />
              </div>
              <button type="submit" className="grid" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}