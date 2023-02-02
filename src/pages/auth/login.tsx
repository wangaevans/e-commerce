import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginForm } from '../../types';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginForm>();
  const router = useRouter();
  const onSubmitForm = async (values: LoginForm) => {
    try {
      const status = await signIn('credentials', {
        redirect: false,
        email: values.email,
        password: values.password,
        callbackUrl: '/',
      });
      if (status?.ok) {
        reset();
        toast.success('Logged in  successfully');
        router.push(status.url);
      }
    } catch (error) {
      toast.error(`Error! Authentication failed!`);
    }
  };
  return (
    <div className="container mx-auto px-[20px] md:px-[40px] text-gray-800 pt-24">
      <ToastContainer />
      <h1 className="text-2xl text-center font-semibold text-primary uppercase">
        Login Into Your Account
      </h1>
      <form
        className="md:max-w-[410px] mx-auto flex flex-col gap-5 my-5"
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <div className={`flex flex-col`}>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            {...register('email', {
              required: {
                value: true,
                message: 'Please enter your email',
              },
            })}
            className={`${
              errors.email
                ? 'ring-[1px] ring-primary border-none'
                : 'ring-[1px]-transparent'
            }`}
          />
        </div>

        <div className="flex flex-col ">
          <label>Password</label>
          <div
            className={`${
              errors.password
                ? 'ring-[1px] ring-primary border-none'
                : 'ring-[1px]-transparent'
            } flex items-center border bg-white  rounded`}
          >
            <span
              className="text-xl text-gray-800 pl-3 cursor-pointer"
              onClick={() => {
                if (!showPassword) setShowPassword(true);
                else setShowPassword(!true);
              }}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            <input
              type={`${!showPassword ? 'password' : 'text'}`}
              placeholder="Enter password"
              {...register('password', {
                required: {
                  value: true,
                  message: 'Please enter your password',
                },
              })}
              className="bg-transparent border-none flex-1"
            />
          </div>
        </div>
        <a className="dark:text-white underline  text-gray-800" href="">
          Forgot Password?
        </a>
        <div className="grid place-items-center md:col-span-2">
          <button
            type="submit"
            className="text-white px-7 py-3 rounded bg-primary hover:opacity-90 hover:blur-2 grid place-items-center w-full"
          >
            Sign In
          </button>
        </div>
        <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
          <p className="text-center text-xl font-semibold mx-4 mb-0 dark:text-white">
            Or
          </p>
        </div>
        <div className="flex flex-row items-center justify-center lg:justify-start">
          {/* <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="flex mr-3 p-3 bg-blue-600  font-medium text-xs leading-tight uppercase rounded-full shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out mx-1"
          > */}
          {/* <span>Sign in with</span>{' '}
            <img
              className="object-cover w-fit h-fit"
              src="https://freesvg.org/img/1534129544.png"
            />
          </button> */}
        </div>
        <div className="grid place-items-center">
          <p className="dark:text-white my-2">
            Do not have an account?{' '}
            <span className="text-primary">
              <Link href="/auth/signup">Sign Up</Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
