import { links } from "../../utils/adminRoutes";
import { Link } from "react-router-dom";

const HomeAdmin = () => {
  return (
    <section className="container-page px-3">
      <div className="flex flex-wrap items-center gap-10 row-gap-3 mt-10">
        {links?.map((link, id) => {
          return (
            <Link
              to={link?.to}
              className={`border-secondary border animation-fade hover:border-transparent hover:bg-secondary hover:text-white text-4xl font-bold text-center flex items-center justify-center text-black max-w-72 h-52 rounded px-5`}
              key={id}
            >
              {link?.text}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default HomeAdmin;
