import { useEffect } from "react";
import { pricingCards } from "../../../DB/DB";
import { FaCheck } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";

const PricingCards = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const pricing = document.getElementById("pricing");

    if (pricing && location.hash) {
      // Desplaza la ventana para que la sección sea visible
      pricing.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.key]);

  return (
    <section id="pricing" className="container-page px-3">
      <div className="text-center my-16">
        <h2 className=" px-5 inline-block font-bold text-4xl border-b border-secondary">
          Pric
          <span>ing</span>
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
              style={{ backfaceVisibility: "hidden" }}
              className={`${
                pricingCard?.pricingHighStatus && "border-secondary"
              } relative min-h-[38rem] animation-fade hover:scale-105 border flex flex-col items-center justify-between shadow-lg rounded-md max-w-[20rem] w-full text-center py-6`}
              key={pricingCard?.id}
            >
              <div>
                <h3 className="text-lg font-bold">
                  {pricingCard?.pricingTitle}
                </h3>
                <h4 className="max-w-60 mx-auto text-sm my-1 text-gray-800">
                  {pricingCard?.pricingDesc}
                </h4>
                <h4 className="text-sm font-bold my-1 text-gray-800">
                  {pricingCard?.pricingChecks}
                </h4>

                <ul className="my-4 text-start">
                  {pricingCard?.pricingDetails?.map((pricingDetail, id) => {
                    return (
                      <li className="my-2 text-gray-900" key={id}>
                        <FaCheck className="inline text-secondary me-3" />
                        {pricingDetail}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div>
                <h4 className="text-3xl font-bold my-1 text-gray-800">
                  {pricingCard?.pricingLargeText}
                </h4>

                <h4 className="text-sm font-regular my-1 text-gray-800">
                  {pricingCard?.pricingSmallText}
                </h4>
                <button
                  className="text-white bg-secondary px-2 py-1 shadow-lg rounded hover:scale-105 animation-fade mt-4"
                  type="button"
                  onClick={() => navigate(`/signup`)}
                >
                  {pricingCard?.pricingButton}
                </button>
              </div>

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
