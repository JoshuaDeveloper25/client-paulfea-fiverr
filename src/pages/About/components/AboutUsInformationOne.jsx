import about from '../../../images/about.png';

const AboutUsInformationOne = () => {
  return (
    <section className="container-page px-3">
      <div className="text-center lg:my-16 my-4">
        <h2 className="px-5 font-bold inline-block text-4xl border-b border-secondary">
          Who are <span className=" text-secondary animate-pulse">We?</span>
        </h2>
      </div>

      <article className="flex md:flex-row flex-col-reverse md:gap-16 gap-6 md:py-5 py-2">
        <div className="flex-1">
          <p className="text-gray-700 mb-3">
            Hobzz offers an all-in-one verification platform revolutionizing
            regulatory compliance worldwide, empowering businesses to meet
            international regulatory standards, boost customer conversion rates,
            and effectively combat fraudulent activities, whilst also ensuring
            genuine users enjoy a seamless experience.
          </p>
          <p className="text-gray-700 mb-3">
            Hobzz provides a diverse range of Know Your Customer (KYC) tools for
            any type of business model. Whether operating in fintech,
            e-commerce, on-demand services, crowdfunding, or any other industry,
            Hobzz provides the essential tools for streamlined compliance and
            effortless customer onboarding.
          </p>
        </div>

        <div className="flex-1">
          <img
            loading="lazy"
            decoding="async"
            className="rounded"
            src={about}
            alt="About Image"
          />
        </div>
      </article>
    </section>
  );
};

export default AboutUsInformationOne;
