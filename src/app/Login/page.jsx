import Link from "next/link";

const page = () => {
  return (
    <section
      className="flex items-center justify-center min-h-screen"
      style={{ minHeight: "calc(100vh - 11rem)" }}
    >
      <form className="max-w-sm mx-auto">
        <h1 className="mb-6 text-2xl text-center">Sign In</h1>
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
            for="remember"
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

export default page;
