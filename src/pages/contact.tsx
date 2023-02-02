import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { UserSubmitForm } from "../types";
import { getSession } from "next-auth/react";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserSubmitForm>();
  const router = useRouter();
  const onSubmitForm = async (values: UserSubmitForm) => {
    try {
      const response = await axios.post("/api/contact", values);
      console.log(response);
      if (response.status === 200) {
        reset();
        router.push("/");
        toast.success("message sent successfully");
      }
    } catch (error) {
      toast.error(`Error! Please try again!`);
    }
  };
  return (
    <div className="px-[20px] md:px-[40px] text-gray-800 pt-5">
      <ToastContainer/>
      <p className="text-xl font-semibold text-primary">Contact Us</p>
      <form
        className="grid md:grid-cols-2 gap-5 my-5"
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <div className={`flex flex-col`}>
          <label>Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            {...register("name", {
              required: {
                value: true,
                message: "Please enter your name",
              },
            })}
            className={`${errors.name
                ? "ring-[1px] ring-primary border-none"
                : "ring-[1px]-transparent"
              }`}
          />
          <span className={`${errors ? "text-red-400" : "hidden"}`}>
            {errors.name?.message}
          </span>
        </div>
      
        <div className="flex flex-col ">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter Email address"
            {...register("email", {
              required: {
                value: true,
                message: "Please enter your email",
              },
            })}
            className={`${errors.email
                ? "ring-[1px] ring-primary border-none"
                : "ring-[1px]-transparent"
              }`}
          />
          <span className={`${errors ? "text-red-400" : "hidden"}`}>
            {errors.email?.message}
          </span>
        </div>
        
        <div className="flex flex-col md:col-span-2 ">
          <label>Message</label>
          <textarea
            rows={3}
            placeholder="write your message here"
            {...register("message", {
              required: {
                value: true,
                message: "Please enter your message",
              },
            })}
            className={`${errors.message
                ? "ring-[1px] ring-primary border-none"
                : "ring-[1px]-transparent"
              }`}
          />
          <span className={`${errors ? "text-red-400" : "hidden"}`}>
            {errors.message?.message}
          </span>
        </div>
        <div className="grid place-items-center md:col-span-2">
          <button
            type="submit"
            className="text-white px-7 py-3 bg-primary hover:opacity-90 hover:blur-2 grid place-items-center md:max-w-1/5"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;

export async function getServerSideProps({ req }: any) {
  const session = await getSession({ req })

  if (!session) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false
      }
    }
  }

  return {
    props: { session }
  }
}
