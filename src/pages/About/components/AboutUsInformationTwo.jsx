import about2 from "../../../images/about2.png";

const AboutUsInformationTwo = () => {
  return (
    <section className="container-page px-3 mt-12">
      <article className="flex flex-col md:flex-row md:gap-16 gap-6 md:py-5 py-2">
        <div className="flex-1">
          <img
            loading="lazy"
            decoding="async"
            className="rounded"
            src={about2}
            alt="About Image"
          />
        </div>

        <div className="flex-1">
          <p className="text-gray-700">
            While internet businesses are outpacing traditional sectors in
            growth, global online commerce still represents a mere fraction of
            overall economic activity, accounting for approximately 3 percent in
            2018, as reported by the International Monetary Fund.
          </p>

          <p className="text-gray-700 my-3">
            The barriers to further expansion are well-documented: regulatory
            intricacies, trust deficits, and outdated financial infrastructures
            hinder the full potential of the digital economy.
          </p>

          <p className="text-gray-700">
            At Hobzz, we recognize the imperative of overcoming these obstacles.
            That's why we partner with ComplyCube, a dedicated platform
            streamlining regulatory compliance and fostering trust among
            businesses. By simplifying compliance processes and facilitating
            trust-building measures, ComplyCube accelerates growth trajectories
            and boosts economic productivity for both new ventures and
            established enterprises alike.
          </p>
        </div>
      </article>
    </section>
  );
};

export default AboutUsInformationTwo;
