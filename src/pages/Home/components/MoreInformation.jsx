import moreInformation from "../../../images/moreInformation.png";

const MoreInformation = () => {
  return (
    <section className="container-page px-3 md:my-32 my-8">
      <article className="flex flex-col md:flex-row gap-6 py-6">
        <div className="flex-1">
          <div className="md:max-w-full max-w-lg mx-auto">
            <img
              className="rounded w-full hover:opacity-85 animation-fade"
              loading="lazy"
              decoding="async"
              src={moreInformation}
              alt="Get In Touch Image"
            />
          </div>
        </div>

        <div className="flex-1">
          <h3 className="text-3xl mb-3 border-b-2 border-secondary pb-3">
            <span className="font-bold text-secondary">
              Enhance Compliance with<span className="block">Seamless KYC Checks</span>
            </span>
          </h3>

          <p className="text-gray-500 leading-7">
            Elevate your compliance standards effortlessly with our streamlined
            KYC checks. Leveraging our established setup, we ensure thorough
            verification processes for individuals, guaranteeing adherence to
            regulatory requirements with ease. Trust in our solution to uphold
            compliance while maintaining operational efficiency.
          </p>
        </div>
      </article>
    </section>
  );
};

export default MoreInformation;
