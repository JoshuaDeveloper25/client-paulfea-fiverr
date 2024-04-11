import getInTouch from "../../../images/get-in-touch.jpg";
import { FaCheck } from "react-icons/fa6";

const WhyChooseUs = () => {
  return (
    <section className="container-page px-3 my-32">
      <article className="flex md:flex-row flex-col-reverse gap-6 py-5">
        <div className="flex-1">
          <h3 className="text-3xl mb-3">
            <span className="font-bold text-secondary animate-pulse">
              Why Choose
            </span>{" "}
            Us?
          </h3>

          <p className="text-gray-500 text-sm leading-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
            asperiores est unde delectus cupiditate temporibus laboriosam
            provident culpa nam corrupti aperiam, perspiciatis accusantium
            architecto!
          </p>

          <div className="space-y-3 my-7">
            <div className="flex items-center gap-3">
              <div>
                <FaCheck className="text-secondary" />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Quia magni netsum eos qui ratione sequi.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div>
                <FaCheck className="text-secondary" />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Quia magni netsum eos qui ratione sequi.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div>
                <FaCheck className="text-secondary" />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Quia magni netsum eos qui ratione sequi.
                </p>
              </div>
            </div>
          </div>

          <button
            className="bg-secondary md:w-auto w-full rounded animation-fade hover:bg-tertiary text-white px-4 py-1 shadow-lg"
            type="button"
          >
            Get Started
          </button>
        </div>

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
      </article>
    </section>
  );
};

export default WhyChooseUs;
