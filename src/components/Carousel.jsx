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
  titleSeven,
  paragraphSeven,
  titleEight,
  paragraphEight,
  image,
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
        <img src={image} className="w-36 mx-auto mb-1" />
        <h3 className="text-gray-600 font-bold text-lg">{titleOne}</h3>
        <p className="text-sm text-gray-500">{paragraphOne}</p>
      </div>

      <div className="text-center">
        <img src={image} className="w-36 mx-auto mb-1" />
        <h3 className="text-gray-600 font-bold text-lg">{titleTwo}</h3>
        <p className="text-sm text-gray-500">{paragraphTwo}</p>
      </div>

      <div className="text-center">
        <img src={image} className="w-36 mx-auto mb-1" />
        <h3 className="text-gray-600 font-bold text-lg">{titleThree}</h3>
        <p className="text-sm text-gray-500">{paragraphThree}</p>
      </div>

      <div className="text-center">
        <img src={image} className="w-36 mx-auto mb-1" />
        <h3 className="text-gray-600 font-bold text-lg">{titleFour}</h3>
        <p className="text-sm text-gray-500">{paragraphFour}</p>
      </div>

      <div className="text-center">
        <img src={image} className="w-36 mx-auto mb-1" />
        <h3 className="text-gray-600 font-bold text-lg">{titleFive}</h3>
        <p className="text-sm text-gray-500">{paragraphFive}</p>
      </div>

      <div className="text-center">
        <img src={image} className="w-36 mx-auto mb-1" />
        <h3 className="text-gray-600 font-bold text-lg">{titleSix}</h3>
        <p className="text-sm text-gray-500">{paragraphSix}</p>
      </div>

      <div className="text-center">
        <img src={image} className="w-36 mx-auto mb-1" />
        <h3 className="text-gray-600 font-bold text-lg">{titleSeven}</h3>
        <p className="text-sm text-gray-500">{paragraphSeven}</p>
      </div>

      <div className="text-center">
        <img src={image} className="w-36 mx-auto mb-1" />
        <h3 className="text-gray-600 font-bold text-lg">{titleEight}</h3>
        <p className="text-sm text-gray-500">{paragraphEight}</p>
      </div>
    </Slider>
  );
};

export default Carousel;
