import { useState } from "react";

import "./FAQ.scss";

export default (FAQ) => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const toggleText1 = () => {
    setIsOpen1((prevIsOpen) => !prevIsOpen);
  };
  const toggleText2 = () => {
    setIsOpen2((prevIsOpen) => !prevIsOpen);
  };
  const toggleText3 = () => {
    setIsOpen3((prevIsOpen) => !prevIsOpen);
  };
  const toggleText4 = () => {
    setIsOpen4((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className="FAQ">
      <div className="FAQ_line">
        <div className="FAQ_line__title">
          <span>Energy value</span>
          <button onClick={toggleText1}>{isOpen1 ? "-" : "+"}</button>
        </div>
        <div className={`FAQ_line__text ${isOpen1 ? "open" : ""}`}>text</div>
      </div>
      <div className="FAQ_line">
        <div className="FAQ_line__title">
          <span>Storage conditions</span>
          <button onClick={toggleText2}>{isOpen2 ? "-" : "+"}</button>
        </div>
        <div className={`FAQ_line__text ${isOpen2 ? "open" : ""}`}>text</div>
      </div>
      <div className="FAQ_line">
        <div className="FAQ_line__title">
          <span>Shelf life</span>
          <button onClick={toggleText3}>{isOpen3 ? "-" : "+"}</button>
        </div>
        <div className={`FAQ_line__text ${isOpen3 ? "open" : ""}`}>text</div>
      </div>
      <div className="FAQ_line">
        <div className="FAQ_line__title">
          <span>Allergens</span>
          <button onClick={toggleText4}>{isOpen4 ? "-" : "+"}</button>
        </div>
        <div className={`FAQ_line__text ${isOpen4 ? "open" : ""}`}>text</div>
      </div>
    </div>
  );
};
