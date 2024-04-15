import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';

const LogInForm = ({ children }) => {
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
              alt={'Logo Hobbz'}
            />
          </div>

          <div className="bg-white shadow-lg px-3 py-4 rounded">
            <h2 className="text-center text-2xl mb-5">Log In</h2>

            <div className="flex flex-col gap-3">
              <div className="flex-1">
                <input
                  type="email"
                  className="outline-none w-full px-2 py-1 rounded-sm focus:border-secondary border"
                  placeholder="Email"
                  name="email"
                  required
                />
              </div>

              <div className="flex-1">
                <input
                  type="password"
                  className="outline-none w-full px-2 py-1 rounded-sm focus:border-secondary border"
                  placeholder="Password"
                  name="password"
                  required
                />
              </div>

              {children}
            </div>
          </div>

          <div className="my-3">
            <p className="text-center">
              Don't have account?{' '}
              <Link
                to={`/signup`}
                className="border-b border-tertiary hover:text-secondary hover:border-secondary animation-fade"
              >
                Signup
              </Link>
            </p>
          </div>

          <div className="flex justify-center gap-3">
            <Link
              to={`/contact`}
              className="hover:text-secondary animation-fade"
            >
              Contact
            </Link>
            -
            <Link to={`/privacy`} className="hover:text-secondary animation-fade">Privacy</Link>
            -<Link to={`/terms`} className="hover:text-secondary animation-fade">Terms</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogInForm;
