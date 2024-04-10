import ReadyGetStarted from "../../components/ReadyGetStarted";
import PricingCards from "./components/PricingCards";
import FAQ from "./components/FAQ";

const Pricing = () => {
  return (
    <>
      {/* Pricing Cards */}
      <PricingCards />

      {/* Frequently Asked Questions */}
      <FAQ />

      {/* Ready to get started? */}
      <ReadyGetStarted />
    </>
  );
};

export default Pricing;
