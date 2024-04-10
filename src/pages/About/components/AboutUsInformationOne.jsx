import about from "../../../images/about.png";

const AboutUsInformationOne = () => {
  return (
    <section className="container-page px-3">
      <div className="text-center my-6">
        <h2 className="px-5 inline-block text-4xl border-b border-secondary">
          Who are{" "}
          <span className="font-bold text-secondary animate-pulse">We?</span>
        </h2>
      </div>

      <article className="flex md:flex-row flex-col-reverse gap-6 py-5">
        <div className="flex-1">
          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            ea quae deserunt consequatur ratione temporibus dolores hic expedita
            ipsam animi obcaecati, eum incidunt. Voluptates commodi explicabo
            vitae corporis eius ab sunt fugit dicta itaque iste ratione
            consequatur, velit et fugiat quisquam deserunt minima voluptate.
            Illo ipsa iusto magni ad ipsum.
          </p>

          <p>
            Dolor sit amet consectetur adipisicing elit. Laudantium ea quae
            deserunt consequatur ratione temporibus dolores hic expedita ipsam
            animi obcaecati, eum incidunt.
          </p>
        </div>

        <div className="flex-1">
          <img
            loading="lazy"
            decoding="async"
            className="rounded"
            src={about}
            alt="About Image"
          />
        </div>
      </article>
    </section>
  );
};

export default AboutUsInformationOne;
