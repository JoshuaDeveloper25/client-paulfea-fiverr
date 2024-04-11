import getInTouch from "../../../images/get-in-touch.jpg";
import { AiOutlineBars } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";

const NewsCards = () => {
  return (
    <section className="container-page px-3 my-7">
      <div className="text-center my-6">
        <h2 className="px-5 inline-block text-4xl border-b border-secondary">
          Ne<span className="font-bold text-secondary animate-pulse">ws</span>
        </h2>
        <p className="text-gray-500 mt-3">Lastest news, tips and best practices.</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 row-gap-3 mb-10">
        <div className="flex gap-8">
          <button type="button" className="underline">
            View All
          </button>
          <button type="button">News</button>
          <button type="button">Product</button>
        </div>

        <div>
          <input
            className="focus:border-secondary block border border-tertiary text-black outline-none rounded w-full px-2 py-1"
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
          />
        </div>
      </div>

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
          type="button"
          className="border border-secondary  sm:w-auto w-full px-4 hover:bg-secondary/80 hover:text-white animation-fade my-3 rounded py-1"
        >
          Load More
        </button>
      </div>
    </section>
  );
};

export default NewsCards;
