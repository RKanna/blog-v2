"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useAuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const { email, setEmail, password, setPassword, updateUserEmail } =
    useAuthContext();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      // .post(`http://localhost:3001/login`, { email, password })
      .post(`https://tame-pink-pike-sock.cyclic.app/login/`, {
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        if (result.data === "success") {
          updateUserEmail(email);
          router.push("/");
          toast("Login Success");
        } else if (result.data === "The password is incorrect") {
          window.alert("Password is incorrect");
        } else if (result.data === "The Email is not Registered with us") {
          window.alert("Email is Not Registered");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <section
      className="flex items-center justify-center min-h-screen"
      style={{ minHeight: "calc(100vh - 11rem)" }}
    >
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <h1 className="mb-6 text-2xl text-center">Sign In</h1>
        <div className="mb-5 ">
          <label
            htmlFor="email"
            className="block mb-2 text-sm text-gray-900 lg:font-medium dark:text-gray-900 lg:text-xl"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mb-5 sm:w-full md:w-full lg:w-[20rem] lg:h-[3.5rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900 lg:text-xl"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="sm:w-full md:w-full lg:w-[20rem] lg:h-[3.5rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="remember"
            className="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
          >
            Remember me
          </label>
        </div>
        <div className="flex flex-col gap-5 text-center lg:justify-between lg:flex-row">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 lg:text-xl"
          >
            Submit
          </button>
          <Link className="pt-2 lg:text-xl" href="Signup">
            Create a Account
          </Link>
        </div>

        <main></main>
      </form>
    </section>
  );
};

export default Login;
