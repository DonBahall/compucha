import Slider from "react-slick";
import "./MainSlider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default (MainSlider) => {
  const settings = {
    // dots: true,
    arrows: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };
  return (
    <div
      className="Main_Slider_back"
      style={{
        backgroundImage: `url(./img/backgroud_img.png)`,
      }}
    >
      <div className="Main_Slider_back__sale" style={{ zIndex: 3 }}>
        Sale 15%
      </div>
      <Slider {...settings}>
        <div>
          <img src="./img/Bottle_shadow.png" alt="bottle" />
        </div>
        <div>
          <img src="./img/Bottle_shadow.png" alt="bottle" />
        </div>
        <div>
          <img src="./img/Bottle_shadow.png" alt="bottle" />
        </div>
        <div>
          <img src="./img/Bottle_shadow.png" alt="bottle" />
        </div>
      </Slider>
    </div>
  );
};
