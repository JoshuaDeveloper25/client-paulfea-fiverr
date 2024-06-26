import ReadyGetStarted from "../../components/ReadyGetStarted";
import Features from "./components/Features";
import HomeCards from "./components/HomeCards";
import MoreInformation from "./components/MoreInformation";
import WhyChooseUs from "./components/WhyChooseUs";
import HomeHeader from "./components/HomeHeader";
import News from "./components/News";

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

      {/* More Information */}
      <MoreInformation />

      {/* News */}
      <News />

      {/* Ready to get started? */}
      <ReadyGetStarted />
    </>
  );
};

export default Home;
