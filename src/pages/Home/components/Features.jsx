import Carousel from '../../../components/Carousel';
import feature1 from '../../../images/feature1.png';
import feature2 from '../../../images/feature2.png';
import feature3 from '../../../images/feature3.png';
import feature4 from '../../../images/feature4.png';
import feature5 from '../../../images/feature5.png';
import feature6 from '../../../images/feature6.png';

const Features = () => {
  return (
    <>
      <section className="container-page px-2 md:my-20 my-4">
        <h3 className="text-center text-3xl mb-14">
          Use <span className="font-bold text-secondary ">Cases</span>{' '}
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
          paragraphOne={`Hobzz’s smart and configurable identity verification checks helps to deter fraudsters without adding unnecessary burdens upon genuine customers.`}
          titleTwo={`Age Verification`}
          paragraphTwo={`Safely offer age-restricted goods and services by merging document verification with biometric liveness, ensuring confident product sales while safeguarding vulnerable demographics.`}
          titleThree={`Fraud Prevention`}
          paragraphThree={`Enhance the security of your business relationships through cutting-edge customer onboarding strategies, robust re-authentication methods, and state-of-the-art biometric technology.`}
          titleFour={`Identity Verification`}
          paragraphFour={`Mitigate financial crime risk through thorough AML screening and swift identity verification.`}
          titleFive={`Ongoing Due Diligence`}
          paragraphFive={`Hobzz’s automated ongoing due diligence checks enable customers to ensure maximum compliance with their risk-based approach.`}
          titleSix={`Customer Verification`}
          paragraphSix={`Ensure secure and precise customer authentication by leveraging our advanced multi-point biometric verification technology.`}
        />
      </section>
    </>
  );
};

export default Features;
