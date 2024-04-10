import ReadyGetStarted from "../../components/ReadyGetStarted";
import Features from "./components/Features";
import HomeCards from "./components/HomeCards";
import HomeHeader from "./components/HomeHeader";
import WhyChooseUs from "./components/WhyChooseUs";

const Home = () => {
  return (
    <>
      {/* Home Header */}
      <HomeHeader />

      {/* Home Cards */}
      <HomeCards />

      {/* Why Choose Us? */}
      <WhyChooseUs />

      {/* Features/Use Cases */}
      <Features />

      {/* Ready to get started? */}
      <ReadyGetStarted />
    </>
  );
};

export default Home;
