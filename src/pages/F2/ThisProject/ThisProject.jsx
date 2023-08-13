import { useState } from "react";
import "./ThisProject.scss";

export default (ThisProject) => {
  const [star1, setStar1] = useState(false);
  const [star2, setStar2] = useState(false);
  const [star3, setStar3] = useState(false);
  const [star4, setStar4] = useState(false);
  const [star5, setStar5] = useState(false);
  const [rating, setRating] = useState("  ");

  const star1handle = () => {
    setStar1(true);
    setStar2(false);
    setStar3(false);
    setStar4(false);
    setStar5(false);
    setRating("very bad");
  };
  const star2handle = () => {
    setStar1(true);
    setStar2(true);
    setStar3(false);
    setStar4(false);
    setStar5(false);
    setRating("bad");
  };
  const star3handle = () => {
    setStar1(true);
    setStar2(true);
    setStar3(true);
    setStar4(false);
    setStar5(false);
    setRating("Nice");
  };
  const star4handle = () => {
    setStar1(true);
    setStar2(true);
    setStar3(true);
    setStar4(true);
    setStar5(false);
    setRating("Good");
  };
  const star5handle = () => {
    setStar1(true);
    setStar2(true);
    setStar3(true);
    setStar4(true);
    setStar5(true);
    setRating("very good!");
  };
  return (
    <section className="ThisProject">
      <h2 className="ThisProject_title">
        This project is <span>completely non-profit</span>
      </h2>
      <p>
        This study project was created by a group of enthusiasts. Therefore, we
        would be very grateful for your evaluation and feedback.
      </p>
      <img src="./img/give_us_like.gif" alt="form" />
      <form action="" className="ThisProject_form">
        <p>Please leave your rating and comment below </p>
        <div className="ThisProject_form__stars">
          <svg>
            <path
              d="M13.9374 0L16.5806 10.4148L27.3025 9.7103L18.2142 15.4425L22.1975 25.4219L13.9374 18.5498L5.67733 25.4219L9.66058 15.4425L0.572319 9.7103L11.2942 10.4148L13.9374 0Z"
              fill={star1 ? "#FEAA14" : "#ADB5BD"}
              onClick={star1handle}
            />
          </svg>
          <svg>
            <path
              d="M13.9374 0L16.5806 10.4148L27.3025 9.7103L18.2142 15.4425L22.1975 25.4219L13.9374 18.5498L5.67733 25.4219L9.66058 15.4425L0.572319 9.7103L11.2942 10.4148L13.9374 0Z"
              fill={star2 ? "#FEAA14" : "#ADB5BD"}
              onClick={star2handle}
            />
          </svg>
          <svg>
            <path
              d="M13.9374 0L16.5806 10.4148L27.3025 9.7103L18.2142 15.4425L22.1975 25.4219L13.9374 18.5498L5.67733 25.4219L9.66058 15.4425L0.572319 9.7103L11.2942 10.4148L13.9374 0Z"
              fill={star3 ? "#FEAA14" : "#ADB5BD"}
              onClick={star3handle}
            />
          </svg>
          <svg>
            <path
              d="M13.9374 0L16.5806 10.4148L27.3025 9.7103L18.2142 15.4425L22.1975 25.4219L13.9374 18.5498L5.67733 25.4219L9.66058 15.4425L0.572319 9.7103L11.2942 10.4148L13.9374 0Z"
              fill={star4 ? "#FEAA14" : "#ADB5BD"}
              onClick={star4handle}
            />
          </svg>
          <svg>
            <path
              d="M13.9374 0L16.5806 10.4148L27.3025 9.7103L18.2142 15.4425L22.1975 25.4219L13.9374 18.5498L5.67733 25.4219L9.66058 15.4425L0.572319 9.7103L11.2942 10.4148L13.9374 0Z"
              fill={star5 ? "#FEAA14" : "#ADB5BD"}
              onClick={star5handle}
            />
          </svg>
        </div>
        <p>{rating}</p>
        <p>Comment</p>
        <textarea
          name=""
          id=""
          placeholder="Hello! I really liked your kombucha shop)"
        ></textarea>
        <input type="submit" value="Send comment" />
      </form>
    </section>
  );
};
