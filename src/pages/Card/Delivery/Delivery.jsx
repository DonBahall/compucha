import "./Delivery.scss";

export default (Delivery) => {
  return (
    <div className="delivery">
      <div className="delivery_header">
        <div>Delivery</div>
        <div>
          We will send it <br />
          <span>tomorrow at 11:00</span>
        </div>
      </div>

      <div className="delivery_info">
        <div className="delivery_info__line">
          <div className="left">
            <img src="./img/delivery.svg" alt="delivery" />
            Courier delivery
          </div>
          <div className="right">
            <p>$2 -$5</p>
            <p>According to the delivery service tariffs</p>
          </div>
        </div>
        <div className="delivery_info__line">
          <div className="left">
            <img src="./img/box.svg" alt="box" />
            Self-delivery from postal operator offices
          </div>
          <div className="right">
            <p>$1 -$3</p>
            <p>According to the delivery service tariffs</p>
          </div>
        </div>
      </div>
    </div>
  );
};
