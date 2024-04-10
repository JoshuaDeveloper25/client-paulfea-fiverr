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
        <img src={image} className="w-24 mx-auto mb-1" />
        <h3>{titleOne}</h3>
        <p>{paragraphOne}</p>
      </div>

      <div className="text-center">
        <img src={image} className="w-24 mx-auto mb-1" />
        <h3>{titleTwo}</h3>
        <p>{paragraphTwo}</p>
      </div>

      <div className="text-center">
        <img src={image} className="w-24 mx-auto mb-1" />
        <h3>{titleThree}</h3>
        <p>{paragraphThree}</p>
      </div>

      <div className="text-center">
        <img src={image} className="w-24 mx-auto mb-1" />
        <h3>{titleFour}</h3>
        <p>{paragraphFour}</p>
      </div>

      <div className="text-center">
        <img src={image} className="w-24 mx-auto mb-1" />
        <h3>{titleFive}</h3>
        <p>{paragraphFive}</p>
      </div>

      <div className="text-center">
        <img src={image} className="w-24 mx-auto mb-1" />
        <h3>{titleSix}</h3>
        <p>{paragraphSix}</p>
      </div>

      <div className="text-center">
        <img src={image} className="w-24 mx-auto mb-1" />
        <h3>{titleSeven}</h3>
        <p>{paragraphSeven}</p>
      </div>

      <div className="text-center">
        <img src={image} className="w-24 mx-auto mb-1" />
        <h3>{titleEight}</h3>
        <p>{paragraphEight}</p>
      </div>
    </Slider>
  );
};

export default Carousel;
