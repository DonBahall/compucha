import Slider from "react-slick";
import SingleProduct from "../../../components/SingleProduct";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./SmalSlider.scss";

export default (SmalSlider) => {
  const settings = {
    dots: true,
    arrows: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };
  let obj = {
    id: 1,
    images: "./img/image_small.png",
    name: "hello",
    weight: 123,
    ingredients: "banana, apple",
    price: 100,
    rating: 123,
  };
  return (
    <div>
      <h2>Popular</h2>

      <Slider {...settings}>
        <SingleProduct
          id={obj.id}
          images={obj.images}
          name={obj.name}
          weight={obj.weight}
          ingredients={obj.ingredients}
          price={obj.price}
          rating={obj.rating}
        />
        <SingleProduct
          id={obj.id}
          images={obj.images}
          name={obj.name}
          weight={obj.weight}
          ingredients={obj.ingredients}
          price={obj.price}
          rating={obj.rating}
        />
        <SingleProduct
          id={obj.id}
          images={obj.images}
          name={obj.name}
          weight={obj.weight}
          ingredients={obj.ingredients}
          price={obj.price}
          rating={obj.rating}
        />
      </Slider>
    </div>
  );
};
