import Link from "next/link";
const Signup = () => {
  return (
    <section
      className="flex items-center justify-center min-h-screen"
      style={{ minHeight: "calc(100vh - 11rem)" }}
    >
      <form className="max-w-sm mx-auto">
        <h1 className="mb-6 text-2xl text-center">Sign Up</h1>
        <div classNameName="mb-5 ">
          <label
            for="username"
            className="block mb-2 text-sm text-gray-900 lg:font-medium dark:text-gray-900 lg:text-xl"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className="mb-5 sm:w-full md:w-1/2 lg:w-[20rem] lg:h-[3.5rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Username"
            required
          />
        </div>
        <div classNameName="mb-5 ">
          <label
            for="email"
            className="block mb-2 text-sm text-gray-900 lg:font-medium dark:text-gray-900 lg:text-xl"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mb-5 sm:w-full md:w-1/2 lg:w-[20rem] lg:h-[3.5rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900 lg:text-xl"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="sm:w-full md:w-1/2 lg:w-[20rem] lg:h-[3.5rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-5">
          <label
            for="confirm-password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900 lg:text-xl"
          >
            Confirm password
          </label>
          <input
            type="password"
            id="confirm-password"
            className="sm:w-full md:w-1/2 lg:w-[20rem] lg:h-[3.5rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div className="flex flex-col gap-5 text-center lg:justify-between lg:flex-row">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 lg:text-xl"
          >
            Submit
          </button>
          <Link className="pt-2 lg:text-xl" href="Login">
            Back to Login
          </Link>
        </div>

        <main></main>
      </form>
    </section>
  );
};

export default Signup;
