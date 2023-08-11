import { useState } from "react";

import "./Find.scss";

export default (Find) => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);
  const [isOpen10, setIsOpen10] = useState(false);

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
  const toggleText5 = () => {
    setIsOpen5((prevIsOpen) => !prevIsOpen);
  };
  const toggleText6 = () => {
    setIsOpen6((prevIsOpen) => !prevIsOpen);
  };
  const toggleText7 = () => {
    setIsOpen7((prevIsOpen) => !prevIsOpen);
  };
  const toggleText8 = () => {
    setIsOpen8((prevIsOpen) => !prevIsOpen);
  };
  const toggleText9 = () => {
    setIsOpen9((prevIsOpen) => !prevIsOpen);
  };
  const toggleText10 = () => {
    setIsOpen10((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className="Find">
      <h2>Find Your Answers Here</h2>
      <p>Everything you’d ever want to know about our organic raw kombucha</p>

      <div className="FAQ">
        <div className="FAQ_line">
          <div className="FAQ_line__title">
            <span>How is kombucha made?</span>
            <button onClick={toggleText1}>{isOpen1 ? "-" : "+"}</button>
          </div>
          <div className={`FAQ_line__text ${isOpen1 ? "open" : ""}`}>
            How is kombucha made?
          </div>
        </div>
        <div className="FAQ_line">
          <div className="FAQ_line__title">
            <span>Is your kombucha probiotic?</span>
            <button onClick={toggleText2}>{isOpen2 ? "-" : "+"}</button>
          </div>
          <div className={`FAQ_line__text ${isOpen2 ? "open" : ""}`}>
            Is your kombucha probiotic?
          </div>
        </div>
        <div className="FAQ_line">
          <div className="FAQ_line__title">
            <span>How long have people been drinking kombucha?</span>
            <button onClick={toggleText3}>{isOpen3 ? "-" : "+"}</button>
          </div>
          <div className={`FAQ_line__text ${isOpen3 ? "open" : ""}`}>
            How long have people been drinking kombucha?
          </div>
        </div>
        <div className="FAQ_line">
          <div className="FAQ_line__title">
            <span>What’s so special about raw kombucha? </span>
            <button onClick={toggleText4}>{isOpen4 ? "-" : "+"}</button>
          </div>
          <div className={`FAQ_line__text ${isOpen4 ? "open" : ""}`}>
            What’s so special about raw kombucha?{" "}
          </div>
        </div>
        <div className="FAQ_line">
          <div className="FAQ_line__title">
            <span>Is there caffeine In Kombucha?</span>
            <button onClick={toggleText5}>{isOpen5 ? "-" : "+"}</button>
          </div>
          <div className={`FAQ_line__text ${isOpen5 ? "open" : ""}`}>
            Is there caffeine In Kombucha?
          </div>
        </div>
        <div className="FAQ_line">
          <div className="FAQ_line__title">
            <span>Is your kombucha raw (unpasteurized?)</span>
            <button onClick={toggleText6}>{isOpen6 ? "-" : "+"}</button>
          </div>
          <div className={`FAQ_line__text ${isOpen6 ? "open" : ""}`}>
            Is your kombucha raw (unpasteurized?)
          </div>
        </div>
        <div className="FAQ_line">
          <div className="FAQ_line__title">
            <span>What’s the deal with sugar and kombucha? </span>
            <button onClick={toggleText7}>{isOpen7 ? "-" : "+"}</button>
          </div>
          <div className={`FAQ_line__text ${isOpen7 ? "open" : ""}`}>
            What’s the deal with sugar and kombucha?
          </div>
        </div>
        <div className="FAQ_line">
          <div className="FAQ_line__title">
            <span>Is Kombucha organic? How about non-GMO? Gluten free? </span>
            <button onClick={toggleText8}>{isOpen8 ? "-" : "+"}</button>
          </div>
          <div className={`FAQ_line__text ${isOpen8 ? "open" : ""}`}>
            Is Kombucha organic? How about non-GMO? Gluten free?{" "}
          </div>
        </div>
        <div className="FAQ_line">
          <div className="FAQ_line__title">
            <span>Does kombucha contain alcohol?</span>
            <button onClick={toggleText9}>{isOpen9 ? "-" : "+"}</button>
          </div>
          <div className={`FAQ_line__text ${isOpen9 ? "open" : ""}`}>
            Does kombucha contain alcohol?
          </div>
        </div>
        <div className="FAQ_line">
          <div className="FAQ_line__title">
            <span>Should I keep my Kombucha cold?</span>
            <button onClick={toggleText10}>{isOpen10 ? "-" : "+"}</button>
          </div>
          <div className={`FAQ_line__text ${isOpen10 ? "open" : ""}`}>
            Should I keep my Kombucha cold?
          </div>
        </div>
      </div>
    </div>
  );
};
