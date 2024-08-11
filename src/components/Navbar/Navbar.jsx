import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scroll, setScroll] =useState(false)

  function toggleMenu(){
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if (window.scrollY>30){
        setScroll(true)
      }else{
        setScroll(false)
      }
    })
  },[])


  return (
    <nav  className={`bg-gray-700 border-gray-200 dark:bg-gray-900 text-white fixed z-50 top-0 left-0 right-0 transition-all delay-100 ${scroll? `py-[-5px]`: `p-[12px]`}`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
        <Link to="" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">
            START FRAMEWORK
          </span>
        </Link>
        <button
        onClick={toggleMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isMenuOpen? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4   rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="about"
                className="md:block inline py-2 px-1 text-white font-bold rounded  md:border-0   "
              >
                ABOUT
              </NavLink>
            </li>
            <li className="my-4 md:my-0">
              <NavLink
                to="portfolio"
                className="md:block inline py-2 px-1 text-white font-bold rounded  md:border-0   "
              >
                PORTFOLIO
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                className="md:block inline py-2 px-1 text-white font-bold rounded  md:border-0   "
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
