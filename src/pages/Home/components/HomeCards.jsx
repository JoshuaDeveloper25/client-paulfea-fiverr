import cardImage from "../../../images/get-in-touch.jpg";

const HomeCards = () => {
  return (
    <section className="container-page px-2 my-8">
      <div className="flex flex-wrap justify-center row-gap-4 gap-4">
        <div className="max-w-[20rem]">
          <div className="max-w-30">
            <img
              loading="lazy"
              decoding="async"
              className="w-full"
              src={cardImage}
              alt="Card Image 1"
            />
          </div>
          <div className="text-center">
            <h3 className="my-2 text-lg font-bold">Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit et,
              cum quis magni saepe sint!
            </p>
            <button
              type="button"
              className="bg-secondary text-white hover:bg-secondary/80 animation-fade w-full my-3 rounded py-1"
            >
              Watch More
            </button>
          </div>
        </div>

        <div className="max-w-[20rem]">
          <div className="max-w-30">
            <img
              loading="lazy"
              decoding="async"
              className="w-full"
              src={cardImage}
              alt="Card Image 2"
            />
          </div>
          <div className="text-center">
            <h3 className="my-2 text-lg font-bold">Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit et,
              cum quis magni saepe sint!
            </p>
            <button
              type="button"
              className="bg-secondary text-white hover:bg-secondary/80 animation-fade w-full my-3 rounded py-1"
            >
              Watch More
            </button>
          </div>
        </div>

        <div className="max-w-[20rem]">
          <div className="max-w-30">
            <img
              loading="lazy"
              decoding="async"
              className="w-full"
              src={cardImage}
              alt="Card Image 3"
            />
          </div>
          <div className="text-center">
            <h3 className="my-2 text-lg font-bold">Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit et,
              cum quis magni saepe sint!
            </p>
            <button
              type="button"
              className="bg-secondary text-white hover:bg-secondary/80 animation-fade w-full my-3 rounded py-1"
            >
              Watch More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
