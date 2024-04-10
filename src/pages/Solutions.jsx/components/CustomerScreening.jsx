import { RiCustomerService2Line } from "react-icons/ri";

const CustomerScreening = () => {
  return (
    <section className="container-page px-3">
      <div className="text-center my-6">
        <h2 className="px-5 inline-block text-4xl border-b border-secondary mb-8">
          Solu
          <span className="font-bold text-secondary animate-pulse">tions</span>
        </h2>
      </div>

      <article className="flex flex-col md:flex-row gap-8">
        <div>
          <h3 className="text-lg font-bold">Customer Screening</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
            laudantium velit laboriosam. Iure, excepturi harum? Autem
            consectetur provident eaque ipsum!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-10">
          {/* 1 */}
          <div>
            <div>
              <RiCustomerService2Line className="text-3xl" />
              <h3 className="my-2">Title</h3>
            </div>

            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium facere ex in nam modi aperiam, nostrum placeat minus
              fugiat? Ea.
            </div>
          </div>

          {/* 2 */}
          <div>
            <div>
              <RiCustomerService2Line className="text-3xl" />
              <h3 className="my-2">Title</h3>
            </div>

            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium facere ex in nam modi aperiam, nostrum placeat minus
              fugiat? Ea.
            </div>
          </div>
        </div>
      </article>

      <article className="flex flex-col sm:flex-row lg:gap-10 gap-6 justify-end items-end mt-6 mb-8">
        {/* 3 */}
        <div className="md:max-w-[29.4%] max-w-auto">
          <div>
            <RiCustomerService2Line className="text-3xl" />
            <h3 className="my-2">Title</h3>
          </div>

          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            facere ex in nam modi aperiam, nostrum placeat minus fugiat? Ea.
          </div>
        </div>

        {/* 4 */}
        <div className="md:max-w-[29.4%] max-w-auto">
          <div>
            <RiCustomerService2Line className="text-3xl" />
            <h3 className="my-2">Title</h3>
          </div>

          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            facere ex in nam modi aperiam, nostrum placeat minus fugiat? Ea.
          </div>
        </div>
      </article>
    </section>
  );
};

export default CustomerScreening;
