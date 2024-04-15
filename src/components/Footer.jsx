import { FaFacebookSquare } from 'react-icons/fa';
import { CiLinkedin } from 'react-icons/ci';
import { BsTwitterX } from 'react-icons/bs';

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-auto px-3 py-10 bg-[#353848] text-white">
      <div className="container-page flex flex-col sm:flex-row sm:items-start items-center justify-between flex-wrap">
        {/* NewsLetter */}
        <div>
          <div className="flex gap-3 items-center mb-2">
            <a href="#">
              <CiLinkedin className="text-lg" />
            </a>
            <a href="#">
              <FaFacebookSquare className="text-lg" />
            </a>
            <a href="#">
              <BsTwitterX className="text-lg" />
            </a>
          </div>

          <div className="sm:mb-0 mb-3">
            <label className="font-bold" htmlFor="newsletter">
              Newsletter:
            </label>
            <input
              className="focus:border-secondary block border border-tertiary text-black outline-none rounded px-2 py-1"
              type="email"
              name="newsletter"
              id="newsletter"
              placeholder="Sign up...."
            />
          </div>

          <div className="sm:flex hidden mt-5">
            <p>&copy; 2024 Hobzz- All rights reserved</p>
          </div>
        </div>

        {/* Solutions */}
        <div>
          <h2 className="border-b border-tertiary text-center sm:mt-0 mt-3 sm:mb-4 mb-2">
            Solutions
          </h2>

          <div className="flex flex-col items-center">
            <Link
              to={`/solutions#CustomerScreening`}
              className="hover:text-secondary transition-all duration-150"
            >
              Customer Screening
            </Link>
            <Link
              to={`/solutions#IdentityAssurance`}
              className="hover:text-secondary transition-all duration-150"
            >
              Identity Assurance
            </Link>
            <Link
              to={`/solutions#DueDiligence&Compliance`}
              className="hover:text-secondary transition-all duration-150"
            >
              Due Diligence & Compliance
            </Link>
          </div>
        </div>

        {/* Resources */}
        <div>
          <h2 className="border-b border-tertiary text-center sm:mt-0 mt-3 sm:mb-4 mb-2">
            Resources
          </h2>

          <div className="flex flex-col items-center">
            <Link
              to={`/news`}
              className="hover:text-secondary transition-all duration-150"
            >
              News
            </Link>
            <Link
              to={`/pricing#faq`}
              className="hover:text-secondary transition-all duration-150"
            >
              FAQ's
            </Link>
          </div>
        </div>

        {/* Company */}
        <div>
          <h2 className="border-b border-tertiary text-center sm:mt-0 mt-3 sm:mb-4 mb-2">
            Company
          </h2>

          <div className="flex flex-col items-center">
            <Link
              to={`/about`}
              className="hover:text-secondary transition-all duration-150"
            >
              About
            </Link>
            <Link
              to={`/contact`}
              className="hover:text-secondary transition-all duration-150"
            >
              Contact
            </Link>
            <Link
              to={`/pricing`}
              className="hover:text-secondary transition-all duration-150"
            >
              Pricing
            </Link>
          </div>
        </div>

        {/* Legal */}
        <div>
          <h2 className="border-b border-tertiary text-center sm:mt-0 mt-3 sm:mb-4 mb-2">
            Legal
          </h2>

          <div className="flex flex-col items-center">
            <Link
              to={`/privacy`}
              className="hover:text-secondary transition-all duration-150"
            >
              Privacy
            </Link>
            <Link
              to={`/cookie-policy`}
              className="hover:text-secondary transition-all duration-150"
            >
              Cookie
            </Link>
            <Link
              to={`/terms`}
              className="hover:text-secondary transition-all duration-150"
            >
              Terms
            </Link>
          </div>
        </div>

        <div className="sm:hidden flex mt-5">
          <p>&copy; 2024 Hobzz- All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
