import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import { useState } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  const navigate = useNavigate();

  return (
    <>
      <header className="container-page w-full px-3">
        <div className="flex items-center justify-between">
          <div>
            <Link>
              <img className="w-28" src={logo} alt={`Logo`} />
            </Link>
          </div>

          <nav>
            {/* MOBILE-MENU */}
            <section className="flex lg:hidden">
              <div
                className="HAMBURGER-ICON space-y-2"
                onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
              >
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              </div>

              <div
                className={
                  isNavOpen
                    ? "absolute w-full h-[100vh] top-0 left-0 bg-white z-10 flex flex-col justify-evenly items-center"
                    : "hidden"
                }
              >
                <div
                  className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                  onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                >
                  <svg
                    className="h-8 w-8 text-gray-600"
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
                  <li className="border-b border-gray-400 hover:text-secondary hover:border-secondary transition-all duration-150 hover:scale-110 uppercase">
                    <a href="/solutions">Solutions</a>
                  </li>

                  <li className="border-b border-gray-400 hover:text-secondary hover:border-secondary transition-all duration-150 hover:scale-110 uppercase">
                    <a href="/resources">Resources</a>
                  </li>

                  <li className="border-b border-gray-400 hover:text-secondary hover:border-secondary transition-all duration-150 hover:scale-110 uppercase">
                    <a href="/pricing">Pricing</a>
                  </li>

                  <li className="border-b border-gray-400 hover:text-secondary hover:border-secondary transition-all duration-150 hover:scale-110 uppercase">
                    <a href="/company">Company</a>
                  </li>

                  <li className="border-b border-gray-400 hover:text-secondary hover:border-secondary transition-all duration-150 hover:scale-110 uppercase">
                    <a href="/login">Log In</a>
                  </li>

                  <button
                    onClick={() => navigate(`/signup`)}
                    type="button"
                    className="border border-tertiary hover:text-white hover:bg-secondary hover:border-secondary transition-all duration-300 rounded px-3 py-1"
                  >
                    Sign Up
                  </button>
                </ul>
              </div>
            </section>

            {/* DESKTOP-MENU */}
            <ul className="hidden space-x-8 lg:flex items-center">
              <Link
                className="hover:text-secondary transition-all duration-200"
                to={`/solutions`}
              >
                Solutions
              </Link>

              <Link
                className="hover:text-secondary transition-all duration-200"
                to={`/resources`}
              >
                Resources
              </Link>

              <Link
                className="hover:text-secondary transition-all duration-200"
                to={`/pricing`}
              >
                Pricing
              </Link>

              <Link
                className="hover:text-secondary transition-all duration-200"
                to={`/company`}
              >
                Company
              </Link>

              <Link
                className="hover:text-secondary transition-all duration-200"
                to={`/login`}
              >
                Log in
              </Link>

              <div>
                <button
                  onClick={() => navigate(`/signup`)}
                  type="button"
                  className="border border-tertiary hover:text-white hover:bg-secondary hover:border-secondary transition-all duration-300 rounded px-3 py-1"
                >
                  Sign Up
                </button>
              </div>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
