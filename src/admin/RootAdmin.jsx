import { Link, Outlet, useNavigate, Navigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import { useContext, useState } from "react";
import { links } from "../utils/adminRoutes";
import { FaArrowLeft } from "react-icons/fa";
import logo from "../images/logo.png";

const RootAdmin = () => {
  const { state, dispatch } = useContext(UserContext);
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
      {/* --> This is the navbar */}
      <nav className="flex flex-col justify-between row-gap-4 bg-[#000000bd]  p-5">
        <div className="flex flex-col gap-2">
          <Link to={`/`}>
            <FaArrowLeft className="mb-3 text-secondary" />
          </Link>

          <Link to={`/admin/`}>
            <img className="w-32 mb-3" src={logo} alt={`Logo`} />
          </Link>

          {links?.map((adminRoute, id) => {
            return (
              <Link
                key={id}
                to={adminRoute?.to}
                className="mb-2 pb-1 hover:shadow-lg hover:scale-105 animation-fade text-secondary border-b border-gray-400/25"
              >
                {adminRoute?.text}
              </Link>
            );
          })}
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

      {/* --> This is the admin panel */}
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default RootAdmin;
