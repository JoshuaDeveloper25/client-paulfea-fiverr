import { pricingCards } from "../../../DB/DB";

const PricingCards = () => {
  return (
    <section className="container-page px-3">
      <div className="text-center my-10">
        <h2 className=" px-5 inline-block text-4xl border-b border-secondary">
          Pric
          <span className="font-bold text-secondary animate-pulse">ing</span>
        </h2>
      </div>

      <article className="flex gap-10 flex-wrap items-start my-16 justify-center">
        {pricingCards.map((pricingCard) => {
          return (
            <div
              className="relative flex flex-col items-center justify-center shadow-lg rounded-sm sm:min-w-[20rem] w-full sm:w-auto text-center py-3"
              key={pricingCard?.id}
            >
              <h3 className="text-lg font-medium">
                {pricingCard?.pricingTitle}
              </h3>

              <ul className="list-disc my-4">
                {pricingCard?.pricingDetails?.map((pricingDetail, id) => {
                  return (
                    <li className="my-2" key={id}>
                      {pricingDetail}
                    </li>
                  );
                })}
              </ul>

              <button
                className="text-white bg-secondary px-2 py-1 rounded hover:scale-105 animation-fade"
                type="button"
              >
                {pricingCard?.pricingButton}
              </button>

              {pricingCard?.pricingHighStatus && (
                <div className="bg-red-500 text-white w-40 absolute -top-5">
                  <p>Popular</p>
                </div>
              )}
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default PricingCards;
