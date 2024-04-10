import getInTouch from "../../../images/get-in-touch.jpg";

const News = () => {
  return (
    <section className="container-page px-3 my-7">
      <h3 className="text-center text-4xl mb-8">
        <span className="font-bold text-secondary animate-pulse">Ne</span>ws
      </h3>

      <div className="flex flex-wrap justify-center row-gap-3 gap-7">
        <div className="max-w-[15rem] text-center">
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

        <div className="max-w-[15rem] text-center">
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

        <div className="max-w-[15rem] text-center">
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
          Find More
        </button>
      </div>
    </section>
  );
};

export default News;
