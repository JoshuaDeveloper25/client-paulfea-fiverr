import getInTouch from "../../../images/get-in-touch.jpg";

const MoreInformation = () => {
  return (
    <section className="container-page px-3">
      <article className="flex flex-col md:flex-row gap-6 py-6">
        <div className="flex-1">
          <div className="md:max-w-full max-w-lg mx-auto">
            <img
              className="rounded w-full hover:opacity-85 animation-fade"
              loading="lazy"
              decoding="async"
              src={getInTouch}
              alt="Get In Touch Image"
            />
          </div>
        </div>

        <div className="flex-1 md:text-end text-start">
          <h3 className="text-3xl mb-3">
            <span className="font-bold text-secondary animate-pulse">
              Why Choose
            </span>{" "}
            Us?
          </h3>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
            asperiores est unde delectus cupiditate temporibus laboriosam
            provident culpa nam corrupti aperiam, iure numquam fugiat aliquam
            error, doloribus perspiciatis accusantium architecto!
          </p>

          <p className="mt-3">
            Asinc adipisicing elit. Maiores asperiores est unde delectus
            cupiditate temporibus laboriosam provident culpa nam corrupti
            aperiam, iure numquam fugiat aliquam error, doloribus perspiciatis
            accusantium architecto!
          </p>

          <button
            className="bg-secondary md:w-auto w-full rounded animation-fade hover:bg-tertiary text-white px-4 py-1 mt-5"
            type="button"
          >
            More Information
          </button>
        </div>
      </article>
    </section>
  );
};

export default MoreInformation;
