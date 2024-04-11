import getInTouch from "../../../images/get-in-touch.jpg";
import { AiOutlineBars } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const News = () => {
  const navigate = useNavigate();

  return (
    <section className="container-page px-3 my-7">
      <h3 className="text-center text-4xl">
        <span className="font-bold text-secondary  animate-pulse">Ne</span>ws
      </h3>
      <p className="text-center text-gray-500 text-md mb-8">Lastest news, tips and best practices.</p>


      <div className="flex flex-wrap justify-center row-gap-3 gap-7">
        <div className="max-w-[20rem] shadow-lg rounded-sm">
          <img src={getInTouch} className="rounded-sm" />
          <div className="px-3 py-2">
            <h3 className="text-md font-bold text-secondary">
              The Guide To LinkdIn Ads
            </h3>

            <div className="flex gap-3 my-2">
              <div className="flex items-center gap-2">
                <AiOutlineBars className="text-xs text-gray-800" />
                <h3 className="text-gray-400 text-xs">Category</h3>
              </div>

              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-xs text-gray-800" />
                <h3 className="text-gray-400 text-xs">10 Apr. 2024</h3>
              </div>
            </div>

            <p className="text-gray-500 text-[.8rem]">
              Quis autem velist ets reprehender net etid quiste voluptate velite
              esse quam nihis etsa sedit netsid varias.
            </p>
          </div>
        </div>

        <div className="max-w-[20rem] shadow-lg rounded-sm">
          <img src={getInTouch} className="rounded-sm" />
          <div className="px-3 py-2">
            <h3 className="text-md font-bold text-secondary">
              The Guide To LinkdIn Ads
            </h3>

            <div className="flex gap-3 my-2">
              <div className="flex items-center gap-2">
                <AiOutlineBars className="text-xs text-gray-800" />
                <h3 className="text-gray-400 text-xs">Category</h3>
              </div>

              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-xs text-gray-800" />
                <h3 className="text-gray-400 text-xs">10 Apr. 2024</h3>
              </div>
            </div>

            <p className="text-gray-500 text-[.8rem]">
              Quis autem velist ets reprehender net etid quiste voluptate velite
              esse quam nihis etsa sedit netsid varias.
            </p>
          </div>
        </div>

        <div className="max-w-[20rem] shadow-lg rounded-sm">
          <img src={getInTouch} className="rounded-sm" />
          <div className="px-3 py-2">
            <h3 className="text-md font-bold text-secondary">
              The Guide To LinkdIn Ads
            </h3>

            <div className="flex gap-3 my-2">
              <div className="flex items-center gap-2">
                <AiOutlineBars className="text-xs text-gray-800" />
                <h3 className="text-gray-400 text-xs">Category</h3>
              </div>

              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-xs text-gray-800" />
                <h3 className="text-gray-400 text-xs">10 Apr. 2024</h3>
              </div>
            </div>

            <p className="text-gray-500 text-[.8rem]">
              Quis autem velist ets reprehender net etid quiste voluptate velite
              esse quam nihis etsa sedit netsid varias.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={() => navigate(`/news`)}
          type="button"
          className="border border-secondary  sm:w-auto w-full px-4 hover:bg-secondary/80 hover:text-white animation-fade my-3 rounded py-1"
        >
          Find More
        </button>
      </div>
    </section>
  );
};

export default News;
