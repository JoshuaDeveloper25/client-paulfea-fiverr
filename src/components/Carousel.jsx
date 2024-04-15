import Slider from "react-slick";

const Carousel = ({
  titleOne,
  paragraphOne,
  titleTwo,
  paragraphTwo,
  titleThree,
  paragraphThree,
  titleFour,
  paragraphFour,
  titleFive,
  paragraphFive,
  titleSix,
  paragraphSix,
  feature1,
  feature2,
  feature3,
  feature4,
  feature5,
  feature6,
}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 1,
          dots: false,
        },
      },

      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
          dots: false,
        },
      },

      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="text-center">
        <img
          loading="lazy"
          decoding="async"
          src={feature1}
          className="w-24 rounded-full mx-auto mb-1"
        />
        <h3 className="text-gray-600 my-2 font-bold text-lg">{titleOne}</h3>
        <p className="text-[.8rem] text-gray-500">{paragraphOne}</p>
      </div>

      <div className="text-center">
        <img
          loading="lazy"
          decoding="async"
          src={feature2}
          className="w-24 rounded-full mx-auto mb-1"
        />
        <h3 className="text-gray-600 my-2 font-bold text-lg">{titleTwo}</h3>
        <p className="text-[.8rem] text-gray-500">{paragraphTwo}</p>
      </div>

      <div className="text-center">
        <img
          loading="lazy"
          decoding="async"
          src={feature3}
          className="w-24 rounded-full mx-auto mb-1"
        />
        <h3 className="text-gray-600 my-2 font-bold text-lg">{titleThree}</h3>
        <p className="text-[.8rem] text-gray-500">{paragraphThree}</p>
      </div>

      <div className="text-center">
        <img
          loading="lazy"
          decoding="async"
          src={feature4}
          className="w-24 rounded-full mx-auto mb-1"
        />
        <h3 className="text-gray-600 my-2 font-bold text-lg">{titleFour}</h3>
        <p className="text-[.8rem] text-gray-500">{paragraphFour}</p>
      </div>

      <div className="text-center">
        <img
          loading="lazy"
          decoding="async"
          src={feature5}
          className="w-24 rounded-full mx-auto mb-1"
        />
        <h3 className="text-gray-600 my-2 font-bold text-lg">{titleFive}</h3>
        <p className="text-[.8rem] text-gray-500">{paragraphFive}</p>
      </div>

      <div className="text-center">
        <img
          loading="lazy"
          decoding="async"
          src={feature6}
          className="w-24 rounded-full mx-auto mb-1"
        />
        <h3 className="text-gray-600 my-2 font-bold text-lg">{titleSix}</h3>
        <p className="text-[.8rem] text-gray-500">{paragraphSix}</p>
      </div>
    </Slider>
  );
};

export default Carousel;
