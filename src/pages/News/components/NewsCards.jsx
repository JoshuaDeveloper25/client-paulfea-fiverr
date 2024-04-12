import { AiOutlineBars } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import formatDate from "../../../utils/formatDate";

const NewsCards = ({ query, isFetching, handleQuery, data }) => {
  return (
    <section className="container-page px-3 my-7">
      <div className="text-center my-6">
        <h2 className="px-5 inline-block text-4xl border-b border-secondary">
          Ne<span className="font-bold text-secondary animate-pulse">ws</span>
        </h2>

        <p className="text-gray-500 mt-3">
          Lastest news, tips and best practices.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 row-gap-3 mb-10">
        <div className="flex gap-8">
          <button
            onClick={() => handleQuery("viewAll", true)}
            type="button"
            className={query?.viewAll ? "border-b-2 border-secondary text-secondary font-bold " : null} 
          >
            View All
          </button>

          <button
            className={
              query?.category?.toLowerCase() === "news" ? "border-b-2 border-secondary text-secondary font-bold " : null
            }
            onClick={() => handleQuery("category", "news")}
            type="button"
          >
            News
          </button>

          <button
            onClick={() => handleQuery("category", "product")}
            type="button"
            className={
              query?.category?.toLowerCase() === "product" ? "border-b-2 border-secondary text-secondary font-bold " : null
            }
          >
            Product
          </button>

          <button
            onClick={() => handleQuery("category", "guides")}
            type="button"
            className={
              query?.category?.toLowerCase() === "guides" ? "border-b-2 border-secondary text-secondary font-bold " : null
            }
          >
            Guides
          </button>
        </div>

        {/* --> Search bar input */}
        <div>
          <input
            onChange={(e) => handleQuery("title", e.target.value)}
            className="focus:border-secondary block border border-tertiary text-black outline-none rounded w-full px-2 py-1"
            type="search"
            name="search"
            id="search"
            placeholder="Search..."
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 min-[450px]:grid-cols-2 row-gap-3 gap-7">
        {data?.docs?.map((info) => {
          return (
            <div key={info._id} className="shadow-lg rounded-sm">
              <img
                src={info?.image[0]?.cloudinary_url}
                className="rounded-sm object-contain h-44 w-full"
              />
              <div className="px-3 py-2">
                <h3 className="text-md font-bold text-secondary">
                  {info?.title}
                </h3>

                <div className="flex gap-3 my-2">
                  <div className="flex items-center gap-2">
                    <AiOutlineBars className="text-xs text-gray-800" />
                    <h3 className="text-gray-400 text-xs">{info?.category}</h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-xs text-gray-800" />
                    <h3 className="text-gray-400 text-xs">
                      {formatDate(info?.createdAt)}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-500 text-[.8rem]">
                  {info?.textInfo[0]?.paragraph}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {isFetching && (
        <>
          <article className="grid md:grid-cols-3 min-[450px]:grid-cols-2 row-gap-3 gap-7">
            <div class="mt-5 shadow-lg rounded-md p-4 max-w-sm w-full mx-auto">
              <div class="animate-pulse">
                <div class="bg-gray-300 h-44 w-full"></div>
                <div class="flex-1 space-y-3 py-1">
                  <div class="h-2 w-20 bg-gray-300"></div>
                  <div class="space-y-2">
                    <div class="flex gap-4">
                      <div class="h-2 w-20 bg-gray-300 col-span-2"></div>
                      <div class="h-2 w-28 bg-gray-300 col-span-1"></div>
                    </div>
                    <div class="h-10 bg-gray-300"></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-5 shadow-lg rounded-md p-4 max-w-sm w-full mx-auto">
              <div class="animate-pulse">
                <div class="bg-gray-300 h-44 w-full"></div>
                <div class="flex-1 space-y-3 py-1">
                  <div class="h-2 w-20 bg-gray-300"></div>
                  <div class="space-y-2">
                    <div class="flex gap-4">
                      <div class="h-2 w-20 bg-gray-300 col-span-2"></div>
                      <div class="h-2 w-28 bg-gray-300 col-span-1"></div>
                    </div>
                    <div class="h-10 bg-gray-300"></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-5 shadow-lg rounded-md p-4 max-w-sm w-full mx-auto">
              <div class="animate-pulse">
                <div class="bg-gray-300 h-44 w-full"></div>
                <div class="flex-1 space-y-3 py-1">
                  <div class="h-2 w-20 bg-gray-300"></div>
                  <div class="space-y-2">
                    <div class="flex gap-4">
                      <div class="h-2 w-20 bg-gray-300 col-span-2"></div>
                      <div class="h-2 w-28 bg-gray-300 col-span-1"></div>
                    </div>
                    <div class="h-10 bg-gray-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </>
      )}

      {data?.hasNextPage && (
        <div className="text-center mt-10">
          <button
            onClick={() => handleQuery("page")}
            type="button"
            disabled={isFetching}
            className="disabled:opacity-50 border border-secondary  sm:w-auto w-full px-4 hover:bg-secondary/80 hover:text-white animation-fade my-3 rounded py-1"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default NewsCards;
