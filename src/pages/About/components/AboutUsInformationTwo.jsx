import about2 from '../../../images/about2.png';

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
            Our platform boasts industry-leading uptime and performance, whilst
            also complying to the highest of standards. The platform is also
            continuously being updated to stay ahead of the ever-increasing
            demand of AML obligations.
          </p>

          <p className="text-gray-700 my-3">
            Our goal is to facilitate regulatory compliance for all types of
            business, allowing them to grow and increase economic output.
          </p>

          {/* <p className="text-gray-700">
            At Hobzz, we recognize the imperative of overcoming these obstacles.
            That's why we partner with ComplyCube, a dedicated platform
            streamlining regulatory compliance and fostering trust among
            businesses. By simplifying compliance processes and facilitating
            trust-building measures, ComplyCube accelerates growth trajectories
            and boosts economic productivity for both new ventures and
            established enterprises alike.
          </p> */}
        </div>
      </article>
    </section>
  );
};

export default AboutUsInformationTwo;
