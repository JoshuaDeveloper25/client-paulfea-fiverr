import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import { useContext, useState } from "react";
import { UserContext } from "../context";

const Header = () => {
  const { state } = useContext(UserContext);
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  const navigate = useNavigate();

  const signUp = () => {
    navigate(`/signup`);
    setIsNavOpen(false);
  };

  return (
    <>
      <header className="container-page w-full px-3 py-3">
        <div className="flex items-center justify-between">
          <div>
            <Link>
              <img
                loading="lazy"
                decoding="async"
                className="relative z-[1000] w-28"
                src={logo}
                alt={`Logo`}
              />
            </Link>
          </div>

          <nav>
            {/* MOBILE-MENU */}
            <section className="flex lg:hidden">
              <div
                className="HAMBURGER-ICON space-y-2 cursor-pointer"
                onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
              >
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              </div>

              <div
                className={
                  isNavOpen
                    ? "fixed hamburguer-open w-full h-[100vh] top-0 left-0 bg-white z-10 flex flex-col justify-evenly items-center"
                    : "hidden"
                }
              >
                <div
                  className="CROSS-ICON absolute top-0 right-0 px-8 py-3"
                  onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                >
                  <svg
                    className="h-8 w-8 text-gray-600 cursor-pointer"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center gap-6 justify-between min-h-[250px]">
                  <li className="border-b border-gray-400 hover:shadow-lg text-secondary hover:border-secondary transition-all duration-150 hover:scale-110 uppercase">
                    <Link onClick={() => setIsNavOpen(false)} to="/solutions">
                      Solutions
                    </Link>
                  </li>

                  <li className="border-b border-gray-400 hover:shadow-lg text-secondary hover:border-secondary transition-all duration-150 hover:scale-110 uppercase">
                    <Link onClick={() => setIsNavOpen(false)} to="/about">
                      About
                    </Link>
                  </li>

                  <li className="border-b border-gray-400 hover:shadow-lg text-secondary hover:border-secondary transition-all duration-150 hover:scale-110 uppercase">
                    <Link onClick={() => setIsNavOpen(false)} to="/pricing">
                      Pricing
                    </Link>
                  </li>

                  <li className="border-b border-gray-400 hover:shadow-lg text-secondary hover:border-secondary transition-all duration-150 hover:scale-110 uppercase">
                    <Link onClick={() => setIsNavOpen(false)} to="/contact">
                      Contact
                    </Link>
                  </li>

                  {!state?.userInfo.token && (
                    <>
                      <li className="border-b border-gray-400 hover:shadow-lg text-secondary hover:border-secondary transition-all duration-150 hover:scale-110 uppercase">
                        <Link onClick={() => setIsNavOpen(false)} to="/login">
                          Log In
                        </Link>
                      </li>

                      <button
                        onClick={signUp}
                        type="button"
                        className="bg-secondary text-white hover:bg-secondary/50 hover:text-white hover:bg-secondary hover:border-secondary transition-all duration-300 rounded px-3 py-1"
                      >
                        Sign Up
                      </button>
                    </>
                  )}

                  {state?.userInfo.token && <DropDown />}
                </ul>
              </div>
            </section>

            {/* DESKTOP-MENU */}
            <ul className="hidden space-x-8 lg:flex items-center">
              <Link
                className="text-secondary hover:shadow-lg hover:shadow-secondary-green animation-fade"
                to={`/solutions`}
              >
                Solutions
              </Link>

              <Link
                className="text-secondary hover:shadow-lg hover:shadow-secondary-green animation-fade"
                to={`/about`}
              >
                About
              </Link>

              <Link
                className="text-secondary hover:shadow-lg hover:shadow-secondary-green animation-fade"
                to={`/pricing`}
              >
                Pricing
              </Link>

              <Link
                className="text-secondary hover:shadow-lg hover:shadow-secondary-green animation-fade"
                to={`/contact`}
              >
                Contact
              </Link>

              {!state?.userInfo.token && (
                <>
                  <Link
                    className="text-secondary hover:shadow-lg hover:shadow-secondary-green animation-fade"
                    to={`/login`}
                  >
                    Log in
                  </Link>

                  <div>
                    <button
                      onClick={signUp}
                      type="button"
                      className="bg-secondary text-white hover:bg-secondary/50 hover:text-white hover:bg-secondary hover:border-secondary transition-all duration-300 rounded px-3 py-1"
                    >
                      Sign Up
                    </button>
                  </div>
                </>
              )}

              {state?.userInfo.token && <DropDown />}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { state, dispatch } = useContext(UserContext);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative group">
      <button
        onClick={handleToggle}
        id="dropdown-button"
        className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
      >
        <span className="mr-2">{state.userInfo.name}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 ml-2 -mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        id="dropdown-menu"
        className={`${
          !isOpen && "hidden"
        } absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1`}
      >
        {state?.userInfo?.role === "admin" && (
          <>
            <Link
              to="/manage-users"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 hover:text-secondary/90 cursor-pointer rounded-md"
            >
              Manage Users
            </Link>

            <Link
              to="/manage-news"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 hover:text-secondary/90 cursor-pointer rounded-md"
            >
              Manage News
            </Link>
          </>
        )}

        <Link
          to="#"
          className="block px-4 py-2 text-red-700 hover:bg-red-300/50 active:bg-blue-100 cursor-pointer rounded-md"
          onClick={() => dispatch({ type: "LOG_OUT" })}
        >
          Sign Out
        </Link>
      </div>
    </div>
  );
};

export default Header;
