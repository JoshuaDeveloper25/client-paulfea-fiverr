import about3 from "../../../images/about3.png";

const AboutUsInformationThree = () => {
  return (
    <section className="container-page px-3 mb-16">
      <div className="text-center my-20">
        <h2 className="px-5 inline-block text-4xl border-b border-secondary">
          Complycube's powerful{"  "}
          <span className="font-bold text-secondary animate-pulse">
            compliance stack
          </span>
        </h2>
        <p className="text-gray-600 mt-3 text-lg">
          Discover the power of compliance with Hobzz and ComplyCube:
        </p>
      </div>

      <article className="flex md:flex-row flex-col-reverse gap-6 py-5">
        <div className="flex-1 md:px-8 px-2">
          <h3 className="text-gray-900 font-bold">
            Unrivaled AML/KYC Capabilities:
          </h3>
          <p className="text-gray-700 text-sm mb-4">
            Elevate your compliance game with our comprehensive suite, covering
            everything from KYC screening to identity verification, all
            seamlessly integrated into one platform.
          </p>

          <h3 className="text-gray-900 font-bold">
            Cutting-edge Analytical Insights:
          </h3>
          <p className="text-gray-700 text-sm mb-4">
            Stay ahead of regulatory demands with our advanced analytics layer,
            harnessing continuous monitoring, a dynamic knowledge graph, and an
            intelligent scorecard to drive proactive compliance strategies.
          </p>

          <h3 className="text-gray-900 font-bold">Tailored Risk Management:</h3>
          <p className="text-gray-700 text-sm mb-4">
            Utilize our AI-driven engine and sophisticated risk models to
            implement bespoke AML/KYC risk assessments that align perfectly with
            your business objectives and regulatory requirements.
          </p>

          <h3 className="text-gray-900 font-bold">
            Effortless Workflow-Centric Compliance:
          </h3>
          <p className="text-gray-700 text-sm">
            Transform KYC processes into a breeze for both customers and
            compliance teams with our smart workflows, ensuring a frictionless
            experience while maintaining rigorous compliance standards.
          </p>
        </div>

        <div className="flex-1">
          <img
            loading="lazy"
            decoding="async"
            className="rounded"
            src={about3}
            alt="About Image"
          />
        </div>
      </article>
    </section>
  );
};

export default AboutUsInformationThree;
