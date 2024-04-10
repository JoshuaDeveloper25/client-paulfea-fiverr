import about2 from "../../../images/about2.png";

const AboutUsInformationTwo = () => {
  return (
    <section className="container-page px-3">
      <article className="flex flex-col md:flex-row gap-6 py-5">
        <div className="flex-1">
          <img className="rounded" src={about2} alt="About Image" />
        </div>

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
      </article>
    </section>
  );
};

export default AboutUsInformationTwo;
