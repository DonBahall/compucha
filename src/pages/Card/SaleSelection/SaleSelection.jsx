import { useState } from "react";

import "./SaleSelection.scss";

export default (SaleSelection) => {
  const [selectedOption, setSelectedOption] = useState("How it tastes");
  const [size, setSize] = useState("250g");
  const [bottleType, setBottleType] = useState("Glass");
  const [count, setCount] = useState(1);

  const handleInputChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleInputSizeChange = (e) => {
    setSize(e.target.value);
  };
  const handleInputBottleTypeChange = (e) => {
    setBottleType(e.target.value);
  };

  return (
    <div className="SaleSelection">
      <h2>A kambucha classic super name</h2>
      <div className="priceRating">
        <div className="priceRating_left">
          <h4>In stock</h4>
          <p>
            $85 <span>$85</span>
          </p>
        </div>
        <div className="priceRating_right">
          <div className="priceRating_right__block">
            <div className="priceRating_right__info">
              <h5>Rating</h5>
              <p>11234 </p>
              <p>claps</p>
            </div>
            <div className="priceRating_right__button">
              <button>
                <img src="./img/claps.svg" alt="" />
              </button>
            </div>
          </div>
          <span>Support favorite kombucha</span>
        </div>
      </div>
      <div className="SaleSelection_toggle">
        <div className="SaleSelection_toggle__head">
          <div className="SaleSelection_toggle__head_title">
            <label>
              <input
                type="radio"
                name="choes_info"
                value="How it tastes"
                checked={selectedOption === "How it tastes"}
                onChange={handleInputChange}
              />{" "}
              How it tastes
            </label>
            <label>
              <input
                type="radio"
                name="choes_info"
                value="Composition"
                checked={selectedOption === "Composition"}
                onChange={handleInputChange}
              />{" "}
              Composition
            </label>
          </div>
          <div
            className={`line_bottom_top ${
              selectedOption === "Composition" ? "transformed" : ""
            }`}
          ></div>
          <div className="line_bottom"></div>
        </div>
        <div className="SaleSelection_toggle__text">
          {selectedOption === "How it tastes"
            ? "A flavorful raisin blend of classic kambucha with exquisite herbs and          plants, which gives a special taste and beneficial properties."
            : "Composition"}
        </div>
      </div>
      <div className="section_size">
        <h4>Size</h4>
        <div className="section_size__size">
          <label className={size === "250g" ? "size_checked" : ""}>
            <input
              type="radio"
              name="size"
              value="250g"
              checked={size === "250g"}
              onChange={handleInputSizeChange}
            />
            250g
          </label>
          <label className={size === "500g" ? "size_checked" : ""}>
            <input
              type="radio"
              name="size"
              value="500g"
              checked={size === "500g"}
              onChange={handleInputSizeChange}
            />
            500g
          </label>
          <label className={size === "750g" ? "size_checked" : ""}>
            <input
              type="radio"
              name="size"
              value="750g"
              checked={size === "750g"}
              onChange={handleInputSizeChange}
            />
            750g
          </label>
        </div>
        <h4>Bottle type</h4>
        <div className="section_size__type">
          <label className={bottleType === "Glass" ? "bottleType_checked" : ""}>
            <input
              type="radio"
              name="bottleType"
              value="Glass"
              checked={bottleType === "Glass"}
              onChange={handleInputBottleTypeChange}
            />
            Glass
          </label>
          <label
            className={bottleType === "Plastic" ? "bottleType_checked" : ""}
          >
            <input
              type="radio"
              name="bottleType"
              value="Plastic"
              checked={bottleType === "Plastic"}
              onChange={handleInputBottleTypeChange}
            />
            Plastic
          </label>
          <label className={bottleType === "Metal" ? "bottleType_checked" : ""}>
            <input
              type="radio"
              name="bottleType"
              value="Metal"
              checked={bottleType === "Metal"}
              onChange={handleInputBottleTypeChange}
            />
            Metal
          </label>
        </div>
        <div className="section_size__count">
          <div className="section_size__count___count">
            <button
              className={count < 2 ? "dissable" : ""}
              onClick={() => setCount((prev) => +prev - 1)}
              disabled={count < 2 ? true : false}
            >
              -
            </button>

            <span>{count}</span>
            <button
              className="disable"
              onClick={() => setCount((prev) => +prev + 1)}
            >
              +
            </button>
          </div>
          <div className="section_size__count___button">
            <button>
              {" "}
              <img src="./img/shopping_cart_one.svg" alt="shopping_cart_one" />
              Add to card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
