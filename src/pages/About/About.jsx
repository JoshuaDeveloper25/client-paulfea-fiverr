import ReadyGetStarted from "../../components/ReadyGetStarted";
import AboutUsInformationThree from "./components/AboutUsInformation3";
import AboutUsInformationOne from "./components/AboutUsInformationOne";
import AboutUsInformationTwo from "./components/AboutUsInformationTwo";

const About = () => {
  return (
    <>
      {/* About Us Information One */}
      <AboutUsInformationOne />

      {/* About Us Information Two */}
      <AboutUsInformationTwo />

      {/* Title */}
      <AboutUsInformationThree />

      {/* Ready to get started? */}
      <ReadyGetStarted />
    </>
  );
};

export default About;
