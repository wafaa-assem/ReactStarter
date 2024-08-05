export default function Contact() {
  return (
    <div className="py-5">
      <div className="text-cyan-950 flex justify-center items-center ">
        <div>
          <h2 className="text-center text-4xl font-bold mt-7">
            CONTACT SECTION
          </h2>
          <div className="my-4 flex items-center justify-center">
            <div className="w-20 h-1 bg-cyan-950 "></div>
            <i className="fa-solid fa-star mx-6"></i>
            <div className="w-20 h-1 bg-cyan-950 "></div>
          </div>
        </div>
      </div>
      <form className="max-w-md mx-auto py-5 px-2">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="floating_name"
            id="floating_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-400 focus:outline-none focus:ring-0 focus:border-cyan-400 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-cyan-400 peer-focus:dark:text-cyan-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            userName
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="number"
            name="floating_number"
            id="floating_number"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-400 focus:outline-none focus:ring-0 focus:border-cyan-400 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_number"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-cyan-400 peer-focus:dark:text-cyan-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            userAge
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-400 focus:outline-none focus:ring-0 focus:border-cyan-400 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-cyan-400 peer-focus:dark:text-cyan-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            userEmail
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="floating_password"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-400 focus:outline-none focus:ring-0 focus:border-cyan-400 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-cyan-400 peer-focus:dark:text-cyan-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            userPassword
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-cyan-400 hover:bg-cyan-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-cyan-400 dark:hover:bg-cyan-400 "
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
