import { useNavigate } from "react-router-dom";
import getInTouch from "../../../images/get-in-touch.jpg";

const NewsCards = () => {
  const navigate = useNavigate();

  return (
    <section className="container-page px-3 my-7">
      <div className="text-center my-6">
        <h2 className="px-5 inline-block text-4xl border-b border-secondary">
          Ne<span className="font-bold text-secondary animate-pulse">ws</span>
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 row-gap-3 mb-10">
        <div className="flex gap-8">
          <button type="button" className="underline">View All</button>
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
        <div className="max-w-[20rem] text-center">
          <img src={getInTouch} />
          <h3 className="text-lg font-bold">Title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            numquam.
          </p>
          <button
            type="button"
            className="bg-secondary text-white hover:bg-secondary/80 animation-fade w-full my-3 rounded py-1"
          >
            Watch More
          </button>
        </div>

        <div className="max-w-[20rem] text-center">
          <img src={getInTouch} />
          <h3 className="text-lg font-bold">Title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            numquam.
          </p>
          <button
            type="button"
            className="bg-secondary text-white hover:bg-secondary/80 animation-fade w-full my-3 rounded py-1"
          >
            Watch More
          </button>
        </div>

        <div className="max-w-[20rem] text-center">
          <img src={getInTouch} />
          <h3 className="text-lg font-bold">Title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            numquam.
          </p>
          <button
            type="button"
            className="bg-secondary text-white hover:bg-secondary/80 animation-fade w-full my-3 rounded py-1"
          >
            Watch More
          </button>
        </div>

        <div className="max-w-[20rem] text-center">
          <img src={getInTouch} />
          <h3 className="text-lg font-bold">Title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            numquam.
          </p>
          <button
            type="button"
            className="bg-secondary text-white hover:bg-secondary/80 animation-fade w-full my-3 rounded py-1"
          >
            Watch More
          </button>
        </div>

        <div className="max-w-[20rem] text-center">
          <img src={getInTouch} />
          <h3 className="text-lg font-bold">Title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            numquam.
          </p>
          <button
            type="button"
            className="bg-secondary text-white hover:bg-secondary/80 animation-fade w-full my-3 rounded py-1"
          >
            Watch More
          </button>
        </div>

        <div className="max-w-[20rem] text-center">
          <img src={getInTouch} />
          <h3 className="text-lg font-bold">Title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            numquam.
          </p>
          <button
            type="button"
            className="bg-secondary text-white hover:bg-secondary/80 animation-fade w-full my-3 rounded py-1"
          >
            Watch More
          </button>
        </div>

        <div className="max-w-[20rem] text-center">
          <img src={getInTouch} />
          <h3 className="text-lg font-bold">Title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            numquam.
          </p>
          <button
            type="button"
            className="bg-secondary text-white hover:bg-secondary/80 animation-fade w-full my-3 rounded py-1"
          >
            Watch More
          </button>
        </div>

        <div className="max-w-[20rem] text-center">
          <img src={getInTouch} />
          <h3 className="text-lg font-bold">Title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            numquam.
          </p>
          <button
            type="button"
            className="bg-secondary text-white hover:bg-secondary/80 animation-fade w-full my-3 rounded py-1"
          >
            Watch More
          </button>
        </div>

        <div className="max-w-[20rem] text-center">
          <img src={getInTouch} />
          <h3 className="text-lg font-bold">Title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            numquam.
          </p>
          <button
            type="button"
            className="bg-secondary text-white hover:bg-secondary/80 animation-fade w-full my-3 rounded py-1"
          >
            Watch More
          </button>
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
