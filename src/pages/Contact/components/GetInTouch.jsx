import getInTouch from "../../../images/get-in-touch.jpg";

const GetInTouch = () => {
  return (
    <section className="container-page px-3">
      <div className="text-center my-6">
        <h2 className="px-5 inline-block text-4xl border-b border-secondary">
          Contact <span className="font-bold text-secondary animate-pulse">Us</span>
        </h2>
      </div>

      <article className="flex  md:flex-row flex-col-reverse gap-6 py-5">
        <div className="flex-1">
          <h3 className="text-center text-3xl mb-3"><span className="font-bold text-secondary animate-pulse">Get In</span> Touch</h3>

          <form className="flex flex-col gap-3">
            <div className="flex gap-3">
              <div className="flex-1">
                <input
                  type="text"
                  className="outline-none w-full px-2 py-1 rounded-sm focus:border-secondary border"
                  placeholder="Name"
                />
              </div>

              <div className="flex-1">
                <input
                  type="email"
                  className="outline-none w-full px-2 py-1 rounded-sm focus:border-secondary border"
                  placeholder="Email"
                />
              </div>
            </div>

            <textarea
              className="outline-none h-40 w-full px-2 py-1 rounded-sm focus:border-secondary border"
              placeholder="Message"
            ></textarea>
          </form>

          <button
            className="bg-secondary md:w-auto w-full rounded animation-fade hover:bg-tertiary text-white px-4 py-1 mt-5"
            type="button"
          >
            Send
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

export default GetInTouch;
