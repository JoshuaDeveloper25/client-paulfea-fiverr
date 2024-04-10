const ReadyGetStarted = () => {
  return (
    <section className="container-page px-3 py-7 rounded my-5 border border-secondary">
      <h2 className="text-center text-3xl mb-4">Ready to get <span className="font-bold text-secondary">started?</span></h2>

      <div className="flex justify-center gap-4">
        <div>
          <button className="border border-secondary animation-fade hover:text-white hover:bg-tertiary hover:border-transparent rounded px-2 py-1" type="button">Button One</button>
        </div>

        <div>
          <button className="border border-secondary animation-fade hover:text-white hover:bg-tertiary hover:border-transparent rounded px-2 py-1" type="button">Button Two</button>
        </div>
      </div>
    </section>
  );
};

export default ReadyGetStarted;
