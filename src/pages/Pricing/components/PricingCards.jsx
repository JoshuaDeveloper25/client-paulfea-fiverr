import { pricingCards } from "../../../DB/DB";
import { FaCheck } from "react-icons/fa6";

const PricingCards = () => {
  return (
    <section className="container-page px-3">
      <div className="text-center my-16">
        <h2 className=" px-5 inline-block text-4xl border-b border-secondary">
          Pric
          <span className="font-bold text-secondary animate-pulse">ing</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-md mx-auto">
          Flexible identity verification pricing and KYC services designed to
          fit businesses of all sizes.
        </p>
      </div>

      <article className="flex gap-10 flex-wrap items-start my-16 justify-center">
        {pricingCards.map((pricingCard) => {
          return (
            <div
              style={{ backfaceVisibility: "hidden"}}
              className={`${pricingCard?.pricingHighStatus && 'border-secondary'} relative min-h-[38rem] animation-fade hover:scale-105 border flex flex-col items-center justify-center shadow-lg rounded-md sm:min-w-[20rem] w-full sm:w-auto text-center py-6`}
              key={pricingCard?.id}
            >
              <h3 className="text-lg font-bold">{pricingCard?.pricingTitle}</h3>
              <h4 className="max-w-60 mx-auto text-sm my-1 text-gray-800">
                {pricingCard?.pricingDesc}
              </h4>
              <h4 className="text-sm font-bold my-1 text-gray-800">
                {pricingCard?.pricingChecks}
              </h4>

              <ul className="my-4">
                {pricingCard?.pricingDetails?.map((pricingDetail, id) => {
                  return (
                    <li className="my-2 text-gray-900" key={id}>
                      <FaCheck className="inline text-secondary me-3" />
                      {pricingDetail}
                    </li>
                  );
                })}
              </ul>

              <h4 className="text-sm font-bold my-1 text-gray-800">
                {pricingCard?.pricingLargeText}
              </h4>

              <h4 className="text-sm font-bold my-1 text-gray-800">
                {pricingCard?.pricingSmallText}
              </h4>

              <button
                className="text-white bg-secondary px-2 py-1 rounded hover:scale-105 animation-fade mt-4"
                type="button"
              >
                {pricingCard?.pricingButton}
              </button>

              {pricingCard?.pricingHighStatus && (
                <div className="bg-secondary text-white w-40 absolute rounded -top-5">
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
