import { useEffect, useState } from "react";
import ReadyGetStarted from "../../components/ReadyGetStarted";
import NewsCards from "./components/NewsCards";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const News = () => {
  const [query, setQuery] = useState({ viewAll: true, page: 1, title: "" });
  console.log(query);

  const { data, isLoading, refetch, isFetching } = useQuery({
    queryKey: ["news"],
    queryFn: async () =>
      await axios
        ?.get(`/news/get-filtered-news`, {
          params: query,
        })
        .then((res) => res.data),
  });

  const handleQuery = (name, value) => {
    if (name === "category") {
      setQuery((prev) => ({ ...prev, page: 1, viewAll: false }));
    }

    if (name === "viewAll") {
      const infoQuery = query;

      delete infoQuery?.category;
      setQuery(infoQuery);
    }

    if (name === "page") {
      return setQuery((prev) => ({
        ...prev,
        [name]: prev?.[name] ? ++prev[name] : 2,
      }));
    }

    // if (name === "title") {
    //   return setQuery((prev) => {
    //     if (value) {
    //       console.log(value, "poniendo valor");
    //       return { ...prev, [name]: value };
    //     }

    //     // delete prev.title;
    //     console.log("entre a deleteing");
    //     return prev;
    //   });
    // }

    setQuery((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const searching = setTimeout(() => {
      refetch();
    }, 1000);

    return () => {
      clearTimeout(searching);
    };
  }, [query.title, query]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {/* News Cards */}
      <NewsCards
        query={query}
        isFetching={isFetching}
        handleQuery={handleQuery}
        data={data}
      />

      {/* Ready to get started? */}
      <ReadyGetStarted />
    </>
  );
};

export default News;
