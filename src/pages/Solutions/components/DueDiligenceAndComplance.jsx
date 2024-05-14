import c3 from '../../../images/3c.png';

import a4 from '../../../images/4a.png';
import b4 from '../../../images/4b.png';
import c4 from '../../../images/4c.png';

const DueDiligenceAndComplance = () => {
  return (
    <section id="DueDiligence&Compliance" className="container-page px-3 mb-10">
      <article className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 lg:max-w-xs">
          <h3 className="text-lg font-bold">{`Due Diligence & Compliance`}</h3>
          <p>
            Our cutting-edge global compliance platform empowers users to
            conduct thorough investigations within a matter of seconds prior to
            proceeding with business relationships.
          </p>
        </div>

        <article className="flex-1 grid md:grid-cols-2 gap-10">
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
              <p>
                Hobzz’s intelligent and customizable identity verification
                checks allow users to screen clients against worldwide data
                coverage spanning over 220+ territories by utilising advanced
                document checks to detect spoofing and prevent fraud.
              </p>
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
              <p>
                Hobzz’s innovative AML platform allows users to effortlessly
                adhere to global regulatory AML and CFT requirements through
                automated policies which are customizable to be in line with
                users’ risk based approach.
              </p>
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
              <p>
                Whether performing standard due diligence checks (CDD) or
                enhanced due diligence checks (EDD), Hobzz offers a variety of
                KYC checks together with real-time monitoring capabilities to
                mitigate risks effectively.
              </p>
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
              <p>
                Hobzz incorporates a risk engine which employs customizable
                advanced algorithms to calculate AML risk scores for your
                customers, providing users with low, medium or high-risk
                assessment scores which are easily explainable and traceable.
              </p>
            </div>
          </div>
        </article>
      </article>
    </section>
  );
};

export default DueDiligenceAndComplance;
