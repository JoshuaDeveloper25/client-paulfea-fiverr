import { useNavigate } from "react-router-dom";

const ReadyGetStarted = () => {
  const navigate = useNavigate();

  return (
    <section className="mx-3">
      <div className="container-page px-3 py-7 rounded my-5 border bg-secondary">
        <h2 className="text-center text-3xl mb-4">
          Ready to get{" "}
          <span className="animate-pulse font-bold text-white">
            started?
          </span>
        </h2>

        <div className="flex justify-center gap-4 mt-7">
          <div>
            <button
              className="border border-white animation-fade hover:text-white hover:bg-tertiary text-white hover:border-transparent rounded px-2 py-1"
              type="button"
            >
              Start Now
            </button>
          </div>

          <div>
            <button
              className="border border-white animation-fade hover:text-white hover:bg-tertiary text-white hover:border-transparent rounded px-2 py-1"
              type="button"
              onClick={() => navigate(`/contact`)}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyGetStarted;
