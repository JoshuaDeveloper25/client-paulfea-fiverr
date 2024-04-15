import c3 from "../../../images/3c.png";

import a4 from "../../../images/4a.png";
import b4 from "../../../images/4b.png";
import c4 from "../../../images/4c.png";

const DueDiligenceAndComplance = () => {
  return (
    <section id='DueDiligence&Compliance' className="container-page px-3 mb-10">
      <article className="flex flex-col lg:flex-row gap-8">
        <div>
          <h3 className="text-lg font-bold">{`C) Due Diligence & Compliance`}</h3>
          <p>
            Our cutting-edge global compliance platform empowers you to conduct
            thorough investigations and establish business relationships
            worldwide in a matter of seconds.
          </p>
        </div>

        <article className="grid md:grid-cols-2 gap-10">
          <div>
            <div>
              <img
                loading="lazy"
                decoding="async"
                className="w-16"
                src={c3}
                alt={`Icon`}
              />
              <h3 className="my-2 font-bold">Know Your Customer</h3>
            </div>

            <div>
              Combat fraudulent activities while maintaining smooth customer
              journeys through our intelligent and customizable identity
              verification checks.
            </div>
          </div>

          {/* 2 */}
          <div>
            <div>
              <img
                loading="lazy"
                decoding="async"
                className="w-16"
                src={a4}
                alt={`Icon`}
              />
              <h3 className="my-2 font-bold">Anti Money Laundering</h3>
            </div>

            <div>
              Address regulatory requirements and combat financial crime and
              terrorist financing with ease through our innovative and
              seamlessly integrable AML platform.
            </div>
          </div>

          {/* 3 */}
          <div className="max-w-auto">
            <div>
              <img
                loading="lazy"
                decoding="async"
                className="w-16"
                src={b4}
                alt={`Icon`}
              />
              <h3 className="my-2 font-bold">Customer Due Diligence</h3>
            </div>

            <div>
              Whether performing standard customer due diligence (CDD) or
              enhanced due diligence (EDD), rely on our best-in-class onboarding
              flows to ensure compliance and mitigate risks effectively.
            </div>
          </div>

          {/* 4 */}
          <div className="max-w-auto">
            <div>
              <img
                loading="lazy"
                decoding="async"
                className="w-16"
                src={c4}
                alt={`Icon`}
              />
              <h3 className="my-2 font-bold">Risk Score</h3>
            </div>

            <div>
              Utilize our proprietary risk engine, which employs advanced
              algorithms to calculate AML risk scores for your customers,
              providing you with clear low, medium, or high-risk assessments.
            </div>
          </div>
        </article>
      </article>
    </section>
  );
};

export default DueDiligenceAndComplance;
