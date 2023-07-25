import MainSlider from "./MainSlider/MainSlider";
import SaleSelection from "./SaleSelection/SaleSelection";
import "./Card.scss";
import Delivery from "./Delivery/Delivery";
import FAQ from "./FAQ/FAQ";
import SmalSlider from "./SmalSlider/SmalSlider";

export default (Card) => {
  return (
    <div className="Card_big">
      <MainSlider />
      <SaleSelection />
      <Delivery />
      <FAQ />
      <SmalSlider />
    </div>
  );
};
