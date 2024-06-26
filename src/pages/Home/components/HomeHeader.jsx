import { useNavigate } from 'react-router-dom';
import homeHeader from '../../../images/home-bg.jpg';

const HomeHeader = () => {
  const navigate = useNavigate();

  return (
    <section
      className="bg-no-repeat bg-center bg-cover min-h-[85vh]"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${homeHeader})`,
      }}
    >
      <div className="container-page text-center px-3 py-3">
        <div className="flex flex-col items-center justify-center h-[75vh]">
          <h2 className="text-4xl text-white font-bold">
            Identification Verification Platform
          </h2>
          <p className="max-w-2xl mx-auto text-gray-100 my-3">
            Onboard more customers by using the most complete and flexible
            online Identity Verification & KYC Solutions. Our platform swiftly
            authenticates customers’ identities within seconds using ID
            documents, selfies and other reliable data sources.
          </p>

          <div className="flex justify-center items-center gap-4">
            <div>
              <button
                className="animation-fade shadow-lg text-white bg-secondary hover:bg-secondary/80 font-bold px-4 py-1 rounded"
                type="button"
                onClick={() => navigate(`/pricing`)}
              >
                Begin
              </button>
            </div>

            <div>
              <button
                className="hover:border-secondary shadow-lg hover:text-secondary animation-fade border border-white text-white px-3 py-1 rounded"
                type="button"
                onClick={() => navigate(`/contact`)}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeader;
