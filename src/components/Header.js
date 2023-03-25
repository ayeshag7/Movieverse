import logo from "../assets/movieverse-logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const Header = () => {

  const activeClass = "text-lg block py-2 pr-4 pl-3 text-white bg-red-600 rounded md:bg-transparent md:text-red-600 md:p-0 dark:text-white";
  const inActiveClass = "text-lg block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-600 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

  const navigate = useNavigate();

  const [hidden, setHidden] = useState(true);
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const queryTerm = event.target.search.value;
    event.target.reset();

    return navigate(`/search?q=${queryTerm}`)

  };

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode))

    if (darkMode && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, 
  [darkMode])

  return (

    <header>
        <nav className="bg-white border-b-2 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900 dark:border-b-1 dark:border-gray-900">
          <div className="flex flex-wrap items-center justify-between mx-auto">
            
            <Link href="/" className="flex items-center">
                <img src={logo} className="h-10 mr-2 sm:h-12" alt="Movieverse Logo" />
                <span className="text-2xl font-semibold self-center whitespace-nowrap dark:text-white">Movieverse</span>
            </Link>

            <div id="mobile-nav" className="flex md:order-2">

              <button onClick={() => setDarkMode(!darkMode)} className="border rounded-lg border-gray-300 bg-gray-50 hover:bg-gray-100 px-3 py-2 mr-2 dark:bg-gray-700 dark:border-gray-600 max-sm:hidden text-gray-500 hover:text-red-600 dark:hover:text-white">
                  { darkMode ? (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-brightness-high" viewBox="0 0 16 16"><path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/></svg>) : 
                  (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moon-fill" viewBox="0 0 16 16"><path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/></svg>) }
              </button>

              <button onClick={() => setHidden(!hidden)} type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Search</span>
              </button>

              <div className="relative hidden md:block">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                  <span className="sr-only">Search icon</span>
                </div>

                <form onSubmit={handleSubmit}>
                  <input type="text" id="search-navbar" name="search" className="block w-full p-3 pl-10 sm:text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-600 focus:border-red-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-600 dark:focus:border-red-600" placeholder="Search..." autoComplete="off"/>
                </form>

              </div>

              <button onClick={() => setHidden(!hidden)} data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                <span className="sr-only">Open menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
              </button>
            
            </div>

            <div id="nav-links" className={`${hidden ? "hidden" : ""} items-center justify-between w-full md:flex md:w-auto md:order-1`}>

              <div className="relative mt-3 md:hidden">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>

                <form onSubmit={handleSubmit}>
                  <input type="text" id="search-navbar" name="search" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-600 focus:border-red-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-600 dark:focus:border-red-600" placeholder="Search..." autoComplete="off"/>
                </form>
              </div>

              <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <NavLink to="" className={({isActive}) => isActive ? activeClass : inActiveClass } end>Home</NavLink>
                </li>
                <li>
                  <NavLink to="movies/popular" className={({isActive}) => isActive ? activeClass : inActiveClass }>Popular</NavLink>
                </li>
                <li>
                  <NavLink to="movies/top" className={({isActive}) => isActive ? activeClass : inActiveClass }>Top Rated</NavLink>
                </li>
                <li>
                  <NavLink to="movies/upcoming" className={({isActive}) => isActive ? activeClass : inActiveClass }>Upcoming</NavLink>
                </li>
              </ul>

            </div>

          </div>
      </nav>
    </header>
    

  )
}
