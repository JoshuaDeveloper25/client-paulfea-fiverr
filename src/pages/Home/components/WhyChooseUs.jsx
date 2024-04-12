import whyChooseUs from "../../../images/whychooseus.jpg";
import { FaCheck } from "react-icons/fa6";

const WhyChooseUs = () => {
  return (
    <section className="container-page px-3 my-32">
      <article className="flex md:flex-row flex-col-reverse gap-6 py-5">
        <div className="flex-1">
          <h3 className="text-3xl mb-3">
            Why choose{" "}
            <span className="font-bold text-secondary animate-pulse">
              Hobzz?
            </span>
          </h3>

          <p className="text-gray-500 text-sm leading-6">
            The Hobzz platform provides unparalleled KYC solutions tailored to
            meet the diverse needs of modern businesses. From startups to
            multinational enterprises, we offer comprehensive, flexible, and
            top-rated identity verification services through our ComplyCube
            integration. Build trust in your business with our multi-layered
            online identity verification system.
          </p>

          <div className="space-y-3 my-7">
            <div className="flex items-center gap-3">
              <div>
                <FaCheck className="text-secondary" />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Seamless Integration for High Transaction Volume
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div>
                <FaCheck className="text-secondary" />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Global Reach with Extensive Coverage
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div>
                <FaCheck className="text-secondary" />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Extensive Data Points for Enhanced Verification
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div>
                <FaCheck className="text-secondary" />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  High Client Onboarding Rate for Business Growth
                </p>
              </div>
            </div>
          </div>

          <button
            className="bg-secondary md:w-auto rounded animation-fade hover:bg-tertiary text-white px-4 py-1 shadow-lg"
            type="button"
          >
            Get Started
          </button>
        </div>

        <div className="flex-1">
          <div className="md:max-w-full max-w-lg mx-auto">
            <img
              className="rounded w-full hover:opacity-85 animation-fade"
              loading="lazy"
              decoding="async"
              src={whyChooseUs}
              alt="Get In Touch Image"
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default WhyChooseUs;
