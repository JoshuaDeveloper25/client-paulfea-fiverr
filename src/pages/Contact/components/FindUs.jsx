const FindUs = () => {
  return (
    <section className="container-page px-3 md:my-20 my-8 md:mb-24 mb-10">
      <article className="flex md:flex-row-reverse flex-col-reverse gap-8 py-5">
        <div className="flex-1">
          <h3 className="text-center text-3xl mb-3 font-bold">
            Find Us
          </h3>

          <p className="mb-3 text-justify text-gray-700 leading-5">
            Find Hobzz at our central office location or reach out online for
            assistance. Stay connected with us on social media for updates and
            insights
          </p>

          <h3 className="leading-4 font-bold">Address:</h3>

          <p className="leading-6">
            <span className="block">Premiere Business Centre,</span> Suite 1,
            Level 2, <span className="block">Mosta, MST 1750</span> Malta
          </p>

          <h3 className="leading-4 my-3">
            <span className="font-bold block">Email:</span>{" "}
            <span className="text-secondary/90">info@hobzz.com</span>
          </h3>

          <h3 className="leading-4">
            <span className="font-bold block">Telephone:</span>{" "}
            <span className="text-secondary/90">(+356) 2011 9700</span>
          </h3>
        </div>

        <div className="flex-1">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3231.2341660774!2d14.415662110947407!3d35.91676791688544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPremiere%20Business%20Centre%2C%20Suite%201%2C%20Level%202%2C%20Mosta%2C%20MST%201750%20Malta!5e0!3m2!1ses-419!2shn!4v1713031686710!5m2!1ses-419!2shn"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </article>
    </section>
  );
};

export default FindUs;
