import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";

const LogInForm = () => {
  return (
    <>
      <section className="container-page px-2 py-10">
        <div className="max-w-sm mx-auto">
          <div>
            <img
              loading="lazy"
              decoding="async"
              className="w-36 mx-auto"
              src={logo}
              alt={"Logo Hobbz"}
            />
          </div>

          <form className="bg-white shadow-lg px-3 py-4 rounded">
            <h2 className="text-center text-2xl mb-5">Log In</h2>

            <div className="flex flex-col gap-3">
              <div className="flex-1">
                <input
                  type="email"
                  className="outline-none w-full px-2 py-1 rounded-sm focus:border-secondary border"
                  placeholder="Email"
                />
              </div>

              <div className="flex-1">
                <input
                  type="password"
                  className="outline-none w-full px-2 py-1 rounded-sm focus:border-secondary border"
                  placeholder="Password"
                />
              </div>

              <button
                type="button"
                className="text-center w-full text-black border-secondary transition-all duration-150 border py-1 rounded hover:text-white hover:bg-secondary"
              >
                Log In
              </button>
            </div>
          </form>

          <div className="my-3">
            <p className="text-center">
              Don't have account?{" "}
              <Link
                to={`/signup`}
                className="border-b border-tertiary hover:text-secondary hover:border-secondary animation-fade"
              >
                Signup
              </Link>
            </p>
          </div>

          <div className="flex justify-center gap-3">
            <Link className="hover:text-secondary animation-fade">Contact</Link>
            -
            <Link className="hover:text-secondary animation-fade">Privacy</Link>
            -<Link className="hover:text-secondary animation-fade">Terms</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogInForm;
