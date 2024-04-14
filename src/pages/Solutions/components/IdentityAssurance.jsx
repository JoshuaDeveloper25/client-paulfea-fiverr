import b2 from '../../../images/2b.png';
import c2 from '../../../images/2c.png';

import a3 from '../../../images/3a.png';
import b3 from '../../../images/3b.png';

const IdentityAssurance = () => {
  return (
    <section id='IdentityAssurance' className="container-page px-3 md:my-24 my-10 flex flex-col gap-8 lg:flex-row">
      <article className="flex flex-col lg:flex-row gap-8">
        <div>
          <h3 className="text-lg font-bold">{`B) Identity Assurance`}</h3>
          <p>
            Our robust identity verification suite empowers you to establish the
            appropriate Level of Assurance (LoA) quickly and reliably for your
            specific use case.
          </p>
        </div>
      </article>

      <article className="grid md:grid-cols-2 gap-10">
        <div className="max-w-full">
          <div>
            <img className="w-16" src={b2} alt={`Icon`} />
            <h3 className="my-2 font-bold">Document Verification</h3>
          </div>

          <div>
            Enhance user experience with our top-tier document verification
            service, offering a streamlined and rapid verification process
            guided by clear instructions.
          </div>
        </div>

        {/* 2 */}
        <div className="max-w-full">
          <div>
            <img className="w-16" src={c2} alt={`Icon`} />
            <h3 className="my-2 font-bold">Customer Authentication</h3>
          </div>

          <div>
            Strengthen product security and limit user access seamlessly,
            without introducing unnecessary friction to your customers’
            experience/
          </div>
        </div>
        
        <div className="max-w-full">
          <div>
            <img className="w-16" src={a3} alt={`Icon`} />
            <h3 className="my-2 font-bold">Address Verification</h3>
          </div>

          <div>
            Leverage our intelligent capture solutions to extract pertinent
            details from Proof of Address (PoA) documents and validate them
            against client and location data effortlessly.
          </div>
        </div>

        {/* 4 */}
        <div className="max-w-full">
          <div>
            <img className="w-16" src={b3} alt={`Icon`} />
            <h3 className="my-2 font-bold">Biometric Verification</h3>
          </div>

          <div>
            Employ our advanced biometric checks to ensure the identity document
            presenter matches the individual being verified, bolstering security
            measures effectively.
          </div>
        </div>
      </article>
    </section>
  );
};

export default IdentityAssurance;
