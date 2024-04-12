import { useNavigate } from "react-router-dom";

const ReadyGetStarted = () => {
  const navigate = useNavigate();

  return (
    <section className="mx-3">
      <div className="container-page px-3 py-7 rounded my-5 border bg-secondary text-white">
        <h2 className="animate-pulse text-center text-3xl mb-4 font-bold">
          Ready to get{" "}
          <span className=" text-white">started?</span>
        </h2>

        <div className="flex justify-center gap-4 mt-7">
          <div>
            <button
              className="border bg-white text-secondary animation-fade hover:scale-110   rounded px-2 py-1"
              style={{ backfaceVisibility: "hidden" }}
              type="button"
            >
              Start Now
            </button>
          </div>

          <div>
            <button
              className="border border-white animation-fade hover:scale-110 hover:text-white text-white  rounded px-2 py-1"
              style={{ backfaceVisibility: "hidden" }}
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
