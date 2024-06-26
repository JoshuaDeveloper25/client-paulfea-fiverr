import { AiOutlineBars } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import formatDate from "../../../utils/formatDate";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const News = () => {
  const navigate = useNavigate();

  // --> Load or fetch the latest news...
  const { data, isLoading, isError } = useQuery({
    queryKey: ["news"],
    queryFn: async () =>
      await axios?.get(`/news/get-latest-news`).then((res) => res.data),
  });

  if (isLoading) return <p>Loading...</p>;

  console.log(data)
  return (
    <section className="container-page px-3 md:my-16 my-6">
      <h3 className="text-center text-4xl">
        Latest{" "}
        <span className="font-bold text-secondary">News</span>
      </h3>
      <p className="text-center text-gray-500 text-md mb-8">
        Lastest news, tips and best practices.
      </p>

      <div className="flex flex-wrap justify-center row-gap-3 gap-7">
        {data?.length > 0 &&
          data?.map((info) => {
            return (
              <div
                className="md:max-w-[23rem] max-w-[18rem] cursor-pointer shadow-lg rounded-sm"
                onClick={() => navigate(`/blog/${info._id}`)}
                key={info._id}
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src={info?.image[0]?.cloudinary_url}
                  className="rounded-sm object-contain h-44 w-full"
                />
                <div className="px-4 md:py-6 py-2">
                  <h3 className="text-md font-bold text-secondary text-[1rem] leading-5">
                    {info?.title}
                  </h3>

                  <div className="flex gap-3 my-2">
                    <div className="flex items-center gap-2">
                      <AiOutlineBars className="text-xs text-gray-800" />
                      <h3 className="text-gray-400 text-xs">
                        Category:{" "}
                        <span className="text-black">{info?.category}</span>
                      </h3>
                    </div>

                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-xs text-gray-800" />
                      <h3 className="text-gray-400 text-xs">
                        {formatDate(info?.createdAt)}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-500 text-[.8rem]">
                    {info?.textInfo[0]?.subheader}
                  </p>

                  <p className="text-gray-500 text-[.8rem] truncate">
                    {info?.textInfo[0]?.paragraph}
                  </p>
                </div>
              </div>
            );
          })}
      </div>

      <div className="text-center mt-6">
        <button
          onClick={() => navigate(`/news`)}
          type="button"
          className="shadow-lg border bg-secondary text-white px-4 hover:bg-secondary/80 hover:text-white animation-fade my-3 rounded py-1"
        >
          Find More
        </button>
      </div>
    </section>
  );
};

export default News;
