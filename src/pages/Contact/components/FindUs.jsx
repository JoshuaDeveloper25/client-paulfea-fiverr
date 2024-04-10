const FindUs = () => {
  return (
    <section className="container-page px-3 my-10">
      <article className="flex md:flex-row flex-col-reverse gap-8 py-5">
        <div className="flex-1">
          <h3 className="text-center text-3xl mb-3">
            Find <span className="text-secondary font-bold animate-pulse">us!</span>
          </h3>

          <p className="mb-3 text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium dignissimos unde assumenda incidunt ipsam vitae quo at,
            saepe dicta quis culpa rem eligendi ducimus, eos laudantium qui
            deleniti! Optio quisquam maxime eaque beatae architecto inventore,
            mollitia in blanditiis doloremque? Nobis velit numquam possimus
            tempore, rerum impedit nam ex magni similique?
          </p>
          <h3>
            <span className="font-bold">Phone</span>:{" "}
            <span className="text-secondary/90">+1 0000 0000</span>
          </h3>
          <h3>
            <span className="font-bold">Email</span>:{" "}
            <span className="text-secondary/90">email@gmail.com</span>
          </h3>
        </div>

        <div className="flex-1">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2718837.30170895!2d-123.72279183195094!3d37.5498411673494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20EE.%20UU.!5e0!3m2!1ses-419!2shn!4v1712707625362!5m2!1ses-419!2shn"
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
