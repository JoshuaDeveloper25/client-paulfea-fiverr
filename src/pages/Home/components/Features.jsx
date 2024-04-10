import Carousel from "../../../components/Carousel";
import logo from "../../../images/logo.png";

const Features = () => {
  return (
    <>
      <section className="container-page px-2 my-8">
        <h3 className="text-center text-3xl mb-8">
          <span className="font-bold text-secondary animate-pulse">
            Features /
          </span>{" "}
          Use Cases
        </h3>

        {/* Carousel */}
        <Carousel
          image={logo}
          titleOne={`Title`}
          paragraphOne={`This is the text for paragraph.`}
          titleTwo={`Title`}
          paragraphTwo={`This is the text for paragraph.`}
          titleThree={`Title`}
          paragraphThree={`This is the text for paragraph.`}
          titleFour={`Title`}
          paragraphFour={`This is the text for paragraph.`}
          titleFive={`Title`}
          paragraphFive={`This is the text for paragraph.`}
          titleSix={`Title`}
          paragraphSix={`This is the text for paragraph.`}
          titleSeven={`Title`}
          paragraphSeven={`This is the text for paragraph.`}
          titleEight={`Title`}
          paragraphEight={`This is the text for paragraph.`}
        />
      </section>
    </>
  );
};

export default Features;
