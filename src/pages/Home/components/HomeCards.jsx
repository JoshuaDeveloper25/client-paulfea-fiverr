import cardImageOne from '../../../images/container1.png';
import cardImageTwo from '../../../images/container2.png';
import cardImageThree from '../../../images/container3.png';
import { useNavigate } from 'react-router-dom';

const HomeCards = () => {
  const navigate = useNavigate();

  return (
    <section className="container-page px-2 md:my-16 my-8">
      <div className="text-center my-8">
        <h2 className="text-secondary text-3xl font-bold">
          KYC Solutions: Fast, Efficient, Comprehensive
        </h2>
        <p className="text-sm text-gray-400 max-w-3xl mx-auto my-2">
          Perform rapid and cost-effective KYC checks. Verify identities in
          under 30 seconds and prevent money laundering, terrorism, and fraud.
        </p>
      </div>

      <div className="flex flex-wrap justify-center row-gap-4 gap-8 mt-14">
        <div className="max-w-[20rem] border hover:border-b-secondary rounded-lg animation-fade shadow-lg">
          <div className="max-w-48 mx-auto">
            <img
              loading="lazy"
              decoding="async"
              className="w-full pt-5"
              src={cardImageOne}
              alt="Card Image 1"
            />
          </div>
          <div className="text-center px-4">
            <h3 className="my-2  font-bold text-md uppercase text-gray-700 mt-3">
              Know Your Customer
            </h3>
            <div className="h-1 w-12 bg-secondary my-3 mb-4 mx-auto"></div>
            <p className="text-gray-500 text-sm my-2">
              Conduct swift and efficient due diligence screenings.
            </p>
            <button
              type="button"
              onClick={() => navigate(`/solutions`)}
              className="bg-secondary shadow-lg  text-white hover:bg-secondary/80 animation-fade  px-2 mt-3 mb-7 rounded py-1"
            >
              Explore
            </button>
          </div>
        </div>

        <div className="max-w-[20rem] border hover:border-b-secondary rounded-lg animation-fade shadow-lg">
          <div className="max-w-48 mx-auto">
            <img
              loading="lazy"
              decoding="async"
              className="w-full pt-5"
              src={cardImageTwo}
              alt="Card Image 1"
            />
          </div>
          <div className="text-center px-4">
            <h3 className="my-2  font-bold text-md uppercase text-gray-700 mt-3">
              Identity Verification
            </h3>
            <div className="h-1 w-12 bg-secondary my-3 mb-4 mx-auto"></div>
            <p className="text-gray-500 text-sm my-2">
              Customer identity verification in under 30 seconds.
            </p>
            <button
              type="button"
              onClick={() => navigate(`/solutions`)}
              className="bg-secondary shadow-lg text-white hover:bg-secondary/80 animation-fade  px-2 mt-3 mb-7 rounded py-1"
            >
              Explore
            </button>
          </div>
        </div>

        <div className="max-w-[20rem] border hover:border-b-secondary rounded-lg animation-fade shadow-lg">
          <div className="max-w-48 mx-auto">
            <img
              loading="lazy"
              decoding="async"
              className="w-full pt-5"
              src={cardImageThree}
              alt="Card Image 1"
            />
          </div>
          <div className="text-center px-4">
            <h3 className="my-2  font-bold text-md uppercase text-gray-700 mt-3">
              Anti-Money Laundering and Preventing Funding of Terrorism
            </h3>
            <div className="h-1 w-12 bg-secondary my-3 mb-4 mx-auto"></div>
            <p className="text-gray-500 text-sm my-2">
              Prevent money laundering and the funding of terrorism.
            </p>
            <button
              type="button"
              onClick={() => navigate(`/solutions`)}
              className="bg-secondary shadow-lg text-white hover:bg-secondary/80 animation-fade  px-2 mt-3 mb-7 rounded py-1"
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
