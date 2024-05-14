import b2 from '../../../images/2b.png';
import c2 from '../../../images/2c.png';

import a3 from '../../../images/3a.png';
import b3 from '../../../images/3b.png';

const IdentityAssurance = () => {
  return (
    <section
      id="IdentityAssurance"
      className="container-page px-3 md:my-24 my-10 flex flex-col gap-8 lg:flex-row"
    >
      <article className="lg:max-w-xs flex-1 flex flex-col lg:flex-row gap-8">
        <div>
          <h3 className="text-lg font-bold">{`Identity Assurance`}</h3>
          <p>
            Hobzz’s identity verification service empowers customers to
            establish their appropriate Level of Assurance (LOA) according to
            their needs.
          </p>
        </div>
      </article>

      <article className="flex-1 grid md:grid-cols-2 gap-10">
        <div className="max-w-full">
          <div>
            <img
              loading="lazy"
              decoding="async"
              className="w-16"
              src={b2}
              alt={`Icon`}
            />
            <h3 className="my-2 font-bold">Document Verification</h3>
          </div>

          <div>
            <p>
              Our document verification service enhances user experience by
              offering a rapid and streamlined verification process guided by
              clear instructions.
            </p>
          </div>
        </div>

        {/* 2 */}
        <div className="max-w-full">
          <div>
            <img
              loading="lazy"
              decoding="async"
              className="w-16"
              src={c2}
              alt={`Icon`}
            />
            <h3 className="my-2 font-bold">Customer Authentication</h3>
          </div>

          <div>
            <p>
              Hobzz’s multi-point biometric matching technology service uses
              proprietary face maps to accurately authenticate customers faces,
              allowing users to securely verify their customers’ identity prior
              to offering any service without imposing any unnecessary burdens
              on the customer.
            </p>
          </div>
        </div>

        <div className="max-w-full">
          <div>
            <img
              loading="lazy"
              decoding="async"
              className="w-16"
              src={a3}
              alt={`Icon`}
            />
            <h3 className="my-2 font-bold">Address Verification</h3>
          </div>

          <div>
            <p>
              Hobzz’s multi-point biometric matching technology service uses
              proprietary face maps to accurately authenticate customers faces,
              allowing users to securely verify their customers’ identity prior
              to offering any service without imposing any unnecessary burdens
              on the customer.
            </p>
          </div>
        </div>

        {/* 4 */}
        <div className="max-w-full">
          <div>
            <img
              loading="lazy"
              decoding="async"
              className="w-16"
              src={b3}
              alt={`Icon`}
            />
            <h3 className="my-2 font-bold">Biometric Verification</h3>
          </div>

          <div>
            <p>
              Hobzz also utilises advanced biometric checks to ensure that the
              individuals submitting the identity documents is the same
              individual, protecting users from imposters using advanced
              presentation attaches such as 3D masks.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default IdentityAssurance;
