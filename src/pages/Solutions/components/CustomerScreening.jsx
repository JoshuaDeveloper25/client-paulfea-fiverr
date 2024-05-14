import a1 from '../../../images/1a.png';
import b1 from '../../../images/1b.png';
import c1 from '../../../images/1c.png';

import a2 from '../../../images/2a.png';

const CustomerScreening = () => {
  return (
    <>
      <div className="text-center my-14">
        <h2 className="px-5 inline-block font-bold text-4xl border-b border-secondary mb-4">
          Solutions
        </h2>

        <p className="text-gray-600">
          Find out more about our wide array of KYC and AML solutions
        </p>
      </div>

      <section
        id="CustomerScreening"
        className="container-page px-3 flex flex-col gap-8 lg:flex-row"
      >
        <article className="flex-1 lg:max-w-xs flex flex-col lg:flex-row gap-8">
          <div>
            <h3 className="text-lg font-bold">{`Customer Screening`}</h3>
            <p>
              Hobzz’s customer screening solution offers unmatched global
              coverage, smart technology and a vast collection of data sources,
              ensuring that our customers are confident in their KYC checks.
            </p>
          </div>
        </article>

        <article className="flex-1 grid md:grid-cols-2 gap-10">
          <div>
            <div>
              <img
                className="w-16"
                loading="lazy"
                decoding="async"
                src={a1}
                alt={`Icon`}
              />
              <h3 className="my-2 font-bold">Sanction & PEP screening</h3>
            </div>

            <div>
              <p>
                Our unmatched global coverage together with our vast collection
                of data sources allows our platform to deliver extensive
                coverage of sanctioned individuals and companies, as well as
                Politically Exposed Persons (PEPs).
              </p>
            </div>
          </div>

          {/* 2 */}
          <div>
            <div>
              <img
                className="w-16"
                loading="lazy"
                decoding="async"
                src={b1}
                alt={`Icon`}
              />
              <h3 className="my-2 font-bold">Adverse media checks</h3>
            </div>

            <div>
              <p>
                Our platform also utilises Artificial Intelligence to perform
                adverse media checks on individuals, companies and PEPs,
                allowing such media to be detected by our users prior to
                onboarding clients.
              </p>
            </div>
          </div>

          {/* 3 */}
          <div className="max-w-full">
            <div>
              <img
                className="w-16"
                loading="lazy"
                decoding="async"
                src={c1}
                alt={`Icon`}
              />
              <h3 className="my-2 font-bold">Watchlist screening</h3>
            </div>

            <div>
              <p>
                Hobzz also offers extensive global coverage of AML watchlist
                sources, allowing users to ensure compliance with the most
                stringent regulations.
              </p>
            </div>
          </div>

          {/* 4 */}
          <div className="max-w-full">
            <div>
              <img
                className="w-16"
                loading="lazy"
                decoding="async"
                src={a2}
                alt={`Icon`}
              />
              <h3 className="my-2 font-bold">Continuous monitoring</h3>
            </div>

            <div>
              <p>
                Our continuous monitoring service allows users to stay ahead of
                their Ongoing Due Diligence (ODD) obligations by providing
                real-time notifications to users of any changes in their
                customers’ status.
              </p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default CustomerScreening;
