import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const NotFound = () => {
  return (
    <div className="min-h-svh grid place-items-center">
      <div className="text-center">
        <p className="text-8xl font-bold text-secondary">404</p>

        <p className="text-4xl my-2">Page not found</p>

        <Link to={'/'} className="text-blue-700 underline text-xl">
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
