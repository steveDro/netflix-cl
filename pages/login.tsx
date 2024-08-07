import React, { useState } from "react";

import Head from "next/head";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import useAuth, { AuthProvider } from "../hooks/useAuth";

type FormValues = {
  email: string;
  password: string;
};
export default function login() {
  const [login, setLogin] = useState(false);
  const { signIn, signUp } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async ({ email, password }) => {
    if (login) {
      await signIn(email, password);
    } else {
      await signUp(email, password);
    }
  };

  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />
      <img
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative mt-24 space-y-8 rounded bg-black/70
                     py-10 px-6 md:mt-0 md:max-w-md md:px-14"
      >
        <h1 className="text-4xl font-semibold">Sign In</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input
              className="input"
              type="email"
              {...register("email", { required: true })}
              placeholder="Email"
            />
            {errors.email && (
              <p className="p-1 text-[13px] font-light  text-orange-500">
                Please enter a valid email.
              </p>
            )}
          </label>

          <label className="inline-block w-full">
            <input
              className="input"
              type="password"
              {...register("password", { required: true })}
              placeholder="Password"
            />
            {errors.password && (
              <p className="p-1 text-[13px] font-light  text-orange-500">
                Please enter a valid password.
              </p>
            )}
          </label>

          <button
            className="w-full rounded bg-[#e50914] py-3 font-semibold"
            type="submit"
            onClick={() => setLogin(true)}
          >
            Sign In
          </button>
          <div className="text-[gray]">
            {`New to Netflix? `}
            <button type="submit" className="text-white hover:underline">
              Sign up now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
