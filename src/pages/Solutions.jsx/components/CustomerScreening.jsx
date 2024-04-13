import a1 from '../../../images/1a.png';
import b1 from '../../../images/1b.png';
import c1 from '../../../images/1c.png';

import a2 from '../../../images/2a.png';

const CustomerScreening = () => {
  return (
    <section className="container-page px-3">
      <div className="text-center my-14">
        <h2 className="animate-pulse px-5 inline-block text-4xl border-b border-secondary mb-4">
          Solutions
        </h2>

        <p className="text-gray-600">
          Find out more about our wide array of KYC and AML solutions
        </p>
      </div>

      <article className="flex flex-col lg:flex-row gap-8">
        <div>
          <h3 className="text-lg font-bold">{`A) Customer Screening`}</h3>
          <p>
            Our customer screening solution offers unparalleled global coverage,
            intelligent technology, and an extensive array of data sources,
            providing you with the utmost peace of mind.
          </p>
        </div>

        <article className="grid md:grid-cols-2 gap-10">
          {/* 1 */}
          <div>
            <div>
              <img className="w-16" src={a1} alt={`Icon`} />
              <h3 className="my-2 font-bold">Sanction & PEP screening</h3>
            </div>

            <div>
              Benefit from our screening capability, which delivers extensive
              coverage of sanctioned individuals, Politically Exposed Persons
              (PEPs), and companies.
            </div>
          </div>

          {/* 2 */}
          <div>
            <div>
              <img className="w-16" src={b1} alt={`Icon`} />
              <h3 className="my-2 font-bold">Adverse media checks</h3>
            </div>

            <div>
              Safeguard your reputation by leveraging our AI-powered adverse
              media service to screen customers before onboarding them, ensuring
              comprehensive risk mitigation.
            </div>
          </div>

          {/* 3 */}
          <div className="max-w-full">
            <div>
              <img className="w-16" src={c1} alt={`Icon`} />
              <h3 className="my-2 font-bold">Watchlist screening</h3>
            </div>

            <div>
              Utilize Hobzz’s comprehensive coverage of global AML watchlist
              sources and flexible automation features, seamlessly integrated
              with Complycube, to ensure compliance with the most stringent
              regulations.
            </div>
          </div>

          {/* 4 */}
          <div className="max-w-full">
            <div>
              <img className="w-16" src={a2} alt={`Icon`} />
              <h3 className="my-2 font-bold">Continuous monitoring</h3>
            </div>

            <div>
              Stay ahead of your Ongoing Due Diligence (ODD) requirements with
              our continuous monitoring service, receiving real-time
              notifications of any changes in your customers’ status.
            </div>
          </div>
        </article>
      </article>
    </section>
  );
};

export default CustomerScreening;
