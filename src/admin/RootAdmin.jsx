import { Link, Outlet, useNavigate, Navigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useContext, useState } from "react";
import { links } from "../utils/adminRoutes";
import { FaArrowLeft } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import logo from "../images/logo.png";

const RootAdmin = () => {
  const { state, dispatch } = useContext(UserContext);
  const [navOpen, setNavOpen] = useState(false);
  const [navOpenResponsive, setNavOpenResponsive] = useState(false);
  const navigate = useNavigate();

  const signOut = () => {
    dispatch({ type: "LOG_OUT" });
    navigate(`/`);
  };

  if (state.userInfo.role !== "admin") {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex min-h-svh">
      {/* MOBILE */}
      {/* <!-- drawer init and toggle --> */}
      <div className="md:hidden flex">
        <div className="text-center">
          <button
            onClick={() => setNavOpenResponsive(true)}
            className="text-3xl"
            type="button"
            data-drawer-show={`drawer-example`}
          >
            <IoMenu />
          </button>
        </div>
      </div>

      {/* <!-- drawer component --> */}
      <div
        id="drawer-example"
        className={`md:hidden fixed top-0 max-w-full left-0 z-40 h-screen p-4 overflow-y-auto transition-transform duration-500 bg-[#000000ef] w-80  ${
          !navOpenResponsive ? "-translate-x-full" : null
        }`}
        tabIndex="-1"
        aria-labelledby="drawer-label"
      >
        <div className="flex flex-col h-full">
          <h5
            id="drawer-label"
            className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
          >
            <Link to={`/`}>
              <FaArrowLeft className="mb-3 text-white" />
            </Link>
          </h5>
          <button
            type="button"
            data-drawer-hide="drawer-example"
            aria-controls="drawer-example"
            className="text-gray-400 bg-transparent hover:text-white rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center hover:bg-dark dark:hover:text-white"
            onClick={() => setNavOpenResponsive(false)}
          >
            <svg
              className="w-3 h-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
          <div className="flex flex-col">
            <Link to={`/admin/`}>
              <img
                loading="lazy"
                decoding="async"
                className="w-32 mb-3"
                src={logo}
                alt={`Logo`}
              />
            </Link>
            {links?.map((adminRoute, id) => (
              <Link
                key={id}
                to={adminRoute?.to}
                className="mb-2 pb-1 hover:shadow-lg hover:scale-105 animation-fade text-secondary border-b border-gray-400/25"
              >
                {adminRoute?.text}
              </Link>
            ))}{" "}
          </div>

          <Link
            className="block mt-auto px-4 text-center py-2 text-white bg-secondary hover:bg-secondary/60 cursor-pointer rounded-md"
            onClick={signOut}
          >
            Sign Out
          </Link>
        </div>
      </div>

      {/* DESKTOP */}
      {/* --> This is the navbar */}
      {!navOpen && (
        <nav className="relative hidden md:flex flex-col justify-between row-gap-4 bg-[#000000bd] p-5 me-5">
          
          <IoIosArrowBack
            onClick={() => setNavOpen((prev) => !prev)}
            className={`md:flex hidden text-2xl absolute cursor-pointer left-[10.5rem] top-[43%] transition-transform duration-300 ${
              !navOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          />

          <div className="flex flex-col gap-2">
            <Link to={`/`}>
              <FaArrowLeft className="mb-3 text-secondary" />
            </Link>

            <Link to={`/admin/`}>
              <img
                loading="lazy"
                decoding="async"
                className="w-32 mb-3"
                src={logo}
                alt={`Logo`}
              />
            </Link>

            {links?.map((adminRoute, id) => (
              <Link
                key={id}
                to={adminRoute?.to}
                className="mb-2 pb-1 hover:shadow-lg hover:scale-105 animation-fade text-secondary border-b border-gray-400/25"
              >
                {adminRoute?.text}
              </Link>
            ))}
          </div>

          <div>
            {" "}
            <Link
              to="#"
              className="block px-4 text-center py-2 text-white bg-secondary hover:bg-secondary/60 cursor-pointer rounded-md"
              onClick={signOut}
            >
              Sign Out
            </Link>
          </div>
        </nav>
      )}

      {navOpen && (
        <IoIosArrowForward
          onClick={() => setNavOpen((prev) => !prev)}
          className={`md:flex hidden text-2xl absolute cursor-pointer left-[0] top-[43%]`}
        />
      )}

      {/* --> This is the admin panel */}
      <main className="ms-8">
        <Outlet />
      </main>
    </div>
  );
};

export default RootAdmin;
