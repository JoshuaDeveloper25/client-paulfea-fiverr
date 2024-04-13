import { useQuery } from "@tanstack/react-query";
import { FaCalendarAlt } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import { useParams } from "react-router-dom";
import axios from "axios";
import formatDate from "../../utils/formatDate";

const Blog = () => {
  const params = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["news"],
    queryFn: async () => await axios.get(`news/get-new/${params?.blogId}`),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="container-page px-3 my-8">
      <div className="mx-auto max-w-2xl mb-8">
        <img
          src={data?.data?.image[0]?.cloudinary_url}
          className="w-full rounded-md shadow-lg"
          alt="Blog Image"
        />
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-secondary font-bold text-3xl mt-3">
          {data?.data?.title}
        </h2>

        <div className="flex items-center gap-3 row-gap-3">
          <div className="flex items-center gap-2">
            <AiOutlineBars />
            <p className="text-sm text-gray-700">
              Category:{" "}
              <span className="font-bold capitalize">{data?.data?.category}</span>
            </p>
          </div>

          <div className="flex items-center gap-2">
            <FaCalendarAlt />
            <p className="text-sm text-gray-700">
              Created At:{" "}
              <span className="font-bold capitalize">
                {formatDate(data?.data?.createdAt)}
              </span>
            </p>
          </div>
        </div>

        {data?.data?.textInfo?.map((text, id) => (
          <div key={id}>
            <p className="font-bold text-lg my-5">{text?.subheader}</p>
            <p>{text?.paragraph}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
