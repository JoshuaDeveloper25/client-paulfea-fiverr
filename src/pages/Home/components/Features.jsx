import Carousel from "../../../components/Carousel";
import feature1 from "../../../images/feature1.png";
import feature2 from "../../../images/feature2.png";
import feature3 from "../../../images/feature3.png";
import feature4 from "../../../images/feature4.png";
import feature5 from "../../../images/feature5.png";
import feature6 from "../../../images/feature6.png";

const Features = () => {
  return (
    <>
      <section className="container-page px-2 my-20">
        <h3 className="text-center text-3xl mb-14 animate-pulse">
          Use <span className="font-bold text-secondary ">Cases</span>{" "}
        </h3>

        {/* Carousel */}
        <Carousel
          feature1={feature1}
          feature2={feature2}
          feature3={feature3}
          feature4={feature4}
          feature5={feature5}
          feature6={feature6}
          titleOne={`Customer Onboarding`}
          paragraphOne={`Deter fraudsters without adding unnecessary friction to genuine customer journeys using Hobzz's smart and configurable identity verification checks, ensuring seamless onboarding processes while maintaining security.`}
          titleTwo={`Age Verification`}
          paragraphTwo={`Confidently provide age-restricted goods and services by combining document verification and biometric liveness through Hobzz's solutions, safeguarding your business while serving your customers responsibly.`}
          titleThree={`Fraud Prevention`}
          paragraphThree={`Ensure the security of your business relationships through innovative customer onboarding, robust re-authentication techniques, and biometrics provided by Hobzz, mitigating fraud risks effectively.`}
          titleFour={`Identity Verification`}
          paragraphFour={`Mitigate financial crime risk through comprehensive global anti-money laundering screening and rapid identity verification offered by Hobzz, enhancing compliance and security measures.`}
          titleFive={`Ongoing Due Diligence`}
          paragraphFive={`Empower your risk-based approach by letting Hobzz monitor customers and ensuring ongoing due diligence, enabling maximum compliance and automation for your business operations.`}
          titleSix={`Customer Verification`}
          paragraphSix={`Securely and accurately authenticate customers before accessing your services using Hobzz's multi-point biometric verification technology, enhancing security and trust in your business.`}
        />
      </section>
    </>
  );
};

export default Features;
