import { categoryOptions } from "../../../DB/DB";
import getInTouch from "../../../images/contact.jpg";

const GetInTouch = () => {
  return (
    <section className="container-page px-3 md:my-16 my-8">
      <div className="text-center mt-6 md:mb-16 mb-8">
        <h2 className="px-5 inline-block text-4xl font-bold border-b border-secondary">
          Contact Us
        </h2>
      </div>

      <article className="flex  md:flex-row flex-col-reverse gap-6 py-5">
        <form className="flex-1">
          <h3 className="text-center text-3xl mb-3">
            <span className="font-bold text-secondary ">
              Get In Touch
            </span>{" "}
          </h3>

          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3">
              <div className="flex-1">
                <input
                  type="text"
                  className="outline-none w-full px-2 py-1 rounded-sm focus:border-secondary border"
                  placeholder="Name"
                />
              </div>

              <div className="flex-1">
                <input
                  type="text"
                  className="outline-none w-full px-2 py-1 rounded-sm focus:border-secondary border"
                  placeholder="Company"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex-1">
                <input
                  type="email"
                  className="outline-none w-full px-2 py-1 rounded-sm focus:border-secondary border"
                  placeholder="Email"
                />
              </div>

              <div className="flex-1">
                <select className="outline-none w-full h-full px-2 py-1 rounded-sm focus:border-secondary border">
                  <option defaultValue={``}>--Category--</option>
                  {categoryOptions?.map((companyOption) => (
                    <option
                      key={companyOption?.id}
                      value={companyOption?.value}
                    >
                      {companyOption?.text}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex-1">
                <textarea
                  placeholder="Message"
                  name="message"
                  cols={30}
                  className="outline-none w-full px-2 py-1 rounded-sm focus:border-secondary border resize-y"
                ></textarea>
              </div>
            </div>
          </div>

          <button
            className="bg-secondary md:w-auto shadow-lg w-full rounded animation-fade hover:bg-tertiary text-white px-4 py-1 mt-5"
            type="submit"
          >
            Send
          </button>
        </form>

        <div className="flex-1">
          <div className="md:max-w-full max-w-lg mx-auto h-full">
            <img
              className="rounded w-full h-full hover:opacity-85 animation-fade object-cover"
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

export default GetInTouch;
