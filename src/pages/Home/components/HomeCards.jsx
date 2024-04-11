import cardImage from "../../../images/about3.png";

const HomeCards = () => {
  return (
    <section className="container-page px-2 my-16">
      <div className="text-center my-8">
        <h2 className="text-secondary text-3xl font-bold">
          Lorem ipsum dolor sit amet.
        </h2>
        <p className="text-sm text-gray-400 max-w-3xl mx-auto my-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
          suscipit, itaque recusandae eligendi exercitationem uilam. have
          suffered alteration, by injected humour, or new randomised words .
        </p>
      </div>

      <div className="flex flex-wrap justify-center row-gap-4 gap-8">
        <div className="max-w-[20rem] border hover:border-b-secondary rounded-b-lg animation-fade shadow-lg">
          <div className="max-w-30">
            <img
              loading="lazy"
              decoding="async"
              className="w-full"
              src={cardImage}
              alt="Card Image 1"
            />
          </div>
          <div className="text-center px-4">
            <h3 className="my-2  font-bold text-md uppercase text-gray-700 mt-3">
              Jhon Doe
            </h3>
            <div className="h-1 w-12 bg-secondary my-3 mb-4 mx-auto"></div>
            <p className="text-gray-500 text-sm my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit et,
              cum quis magni saepe sint!
            </p>
            <button
              type="button"
              className="bg-secondary text-white hover:bg-secondary/80 animation-fade  px-2 my-3 rounded py-1"
            >
              Explore
            </button>
          </div>
        </div>

        <div className="max-w-[20rem] border hover:border-b-secondary rounded-b-lg animation-fade shadow-lg">
          <div className="max-w-30">
            <img
              loading="lazy"
              decoding="async"
              className="w-full"
              src={cardImage}
              alt="Card Image 1"
            />
          </div>
          <div className="text-center px-4">
            <h3 className="my-2  font-bold text-md uppercase text-gray-700 mt-3">
              Jhon Doe
            </h3>
            <div className="h-1 w-12 bg-secondary my-3 mb-4 mx-auto"></div>
            <p className="text-gray-500 text-sm my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit et,
              cum quis magni saepe sint!
            </p>
            <button
              type="button"
              className="bg-secondary text-white hover:bg-secondary/80 animation-fade  px-2 my-3 rounded py-1"
            >
              Explore
            </button>
          </div>
        </div>

        <div className="max-w-[20rem] border hover:border-b-secondary rounded-b-lg animation-fade shadow-lg">
          <div className="max-w-30">
            <img
              loading="lazy"
              decoding="async"
              className="w-full"
              src={cardImage}
              alt="Card Image 1"
            />
          </div>
          <div className="text-center px-4">
            <h3 className="my-2  font-bold text-md uppercase text-gray-700 mt-3">
              Jhon Doe
            </h3>
            <div className="h-1 w-12 bg-secondary my-3 mb-4 mx-auto"></div>
            <p className="text-gray-500 text-sm my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit et,
              cum quis magni saepe sint!
            </p>
            <button
              type="button"
              className="bg-secondary text-white hover:bg-secondary/80 animation-fade  px-2 my-3 rounded py-1"
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
