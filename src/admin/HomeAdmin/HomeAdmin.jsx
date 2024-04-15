import { links } from "../../utils/adminRoutes";
import { Link, useNavigate } from "react-router-dom";

const HomeAdmin = () => {
  const navigate = useNavigate();

  return (
    <section className="container-page px-3">
      <div className="flex flex-wrap justify-between gap-5 mt-10">
        {links?.map((link, id) => {
          return (
            <div
              key={id}
              onClick={() => navigate(`${link?.to}`)}
              className={`flex items-center justify-center w-full min-h-[15rem] md:min-w-[30rem] min-w-auto  cursor-pointer border-secondary border animation-fade hover:border-transparent hover:bg-secondary hover:text-white text-4xl font-bold text-center  text-black  rounded px-5`}
            >
              {link?.text}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HomeAdmin;
