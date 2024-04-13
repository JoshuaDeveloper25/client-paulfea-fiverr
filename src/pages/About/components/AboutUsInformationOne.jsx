import about from "../../../images/about.png";

const AboutUsInformationOne = () => {
  return (
    <section className="container-page px-3">
      <div className="text-center my-20">
        <h2 className="px-5 inline-block text-4xl border-b border-secondary">
          Who are{" "}
          <span className="font-bold text-secondary animate-pulse">We?</span>
        </h2>
      </div>

      <article className="flex md:flex-row flex-col-reverse gap-16 py-5">
        <div className="flex-1">
          <p className="text-gray-700 mb-3">
            Hobzz seamlessly integrates with ComplyCube, an all-in-one
            verification platform revolutionizing regulatory compliance
            worldwide. ComplyCube is designed to empower businesses like ours to
            meet global regulatory standards, enhance customer conversion rates,
            and effectively combat fraudulent activities, all while ensuring a
            smooth experience for our genuine users.
          </p>

          <p className="text-gray-700">
            With ComplyCube, Hobzz gains access to a comprehensive suite of Know
            Your Customer (KYC) tools tailored to our unique business model.
            Whether we're operating in telecoms, fintech, e-commerce, on-demand
            services, crowdfunding, or any other industry, ComplyCube equips us
            with the necessary building blocks for efficient compliance and
            seamless customer onboarding.
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
