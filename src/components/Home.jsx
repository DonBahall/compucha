import { Col, Container, Image, Row } from "react-bootstrap";
import Products from "./Products";
import { useSelector } from "react-redux";
import AnimatedLine from "./AnimatedLine";
import styles from "../styles/Home.module.css";
import Group_1 from "../img/Group_1.png";
import Group_2 from "../img/Group_2.png";
import Rectangle from "../img/Rectangle.png";
import KOMBUCHA from "../img/KOMBUCHA.png";
import pngwing from "../img/pngwing.png";
import Arrow from "../img/vector/Arrow.png";
import Bottle from "../img/bottle.png";
import Flowers from "../img/Flowers.png";
import Orange from "../img/orange.png";
import Gratefruit from "../img/grapefruit.png";
import Botla from "../img/botla.png";
import KOMBUCHArIGHT from "../img/KOMBUCHArIGHT.png";
import HomeHead from "../pages/F2/HomeHead/HomeHead";
import { ROUTES } from "../utils/routes";
import { Link } from "react-router-dom";
import Modern from "../pages/F2/Modern/Modern";
import Find from "../pages/F2/Find/Find";

function Home() {
  const { list } = useSelector(({ products }) => products);

  return (
    <div className={styles.home}>
      <HomeHead />
      <AnimatedLine />
      <div className={styles.pics} justifyContent="between">
        <Image src={Group_1} rounded className={styles.picBotton} />
        <Image src={Group_2} rounded className={styles.leaf} />
      </div>

      <div className={styles.section}>
        <h3 className={styles.section_title}>What is kombucha</h3>
        <p className={styles.section_text}>
          Kombucha is a naturally fermented beverage made from tea and sugar.
          Fermentation results in a special culture of probiotics and enzymes.
        </p>
        <div className={styles.position_img}>
          <Image src={Rectangle} rounded className={styles.section_Rectangle} />
        </div>
        <p className={styles.section_textt}>
          Contains antioxidants that your body will benefit from helps to keep
          you energized and{" "}
          <span className={styles.pink}>fresh after a busy day.</span>
        </p>
      </div>

      <Container fluid className={styles.cont_imgs}>
        <Row className={styles.section_imgs}>
          <Col>
            <Image className={styles.section_kombucha} src={KOMBUCHA} />
            <div className={styles.section_benefits}>
              <p className={styles.section_benefitsP}>Benefits</p>
              <img src={Arrow} alt="" />
            </div>
          </Col>
          <Col className={styles.section_pngwing}>
            <Image src={pngwing} />
          </Col>
        </Row>
      </Container>

      <div className={styles.sectionFluent}>
        <h3 className={styles.section_title}>Feel charge of health</h3>
        <Image src={Bottle} rounded className={styles.section_FluidImg} />
        <h3 className={styles.section_titleSec}>That kambucha gives to you</h3>
      </div>

      <div>
        <Image src={Flowers} className={styles.section_imgLeft} />
        <p className={styles.imgLeft_title}>Kambucha makes your holiday</p>
        <p className={styles.imgLeft_text}>
          Embrace the Vibrant Holiday Experience with Kambucha's Unmatched
          Taste, Energy, and Healthy Lifestyle Benefits!
        </p>
      </div>

      <div className={styles.Taste}>TASTE GOOD</div>
      <Modern />
      <Container fluid className={styles.Botla}>
        <Image src={Botla} className={styles.Botla_img} />
      </Container>

      <div className={styles.sectionBlue}>
        <Image src={Orange} className={styles.imgBlue_little} />
        <Image src={Gratefruit} className={styles.imgBlue_big} />

        <p className={styles.sectionBlue_p1}>Revitalize</p>
        <p className={styles.sectionBlue_p2}>
          Your
          <br /> Body
        </p>
        <Link to={ROUTES.SHOP} className={styles.sectionBlue_p1}>
          with Kombucha
        </Link>
        <p className={styles.sectionBlue_p3}>AND Choose</p>
        <div>
          <Image className={styles.spot} src={KOMBUCHArIGHT} />
          <div className={styles.spot_sec}>
            <p className={styles.spot_p}>
              Future
              <br /> Favorite
              <br /> Drink
            </p>
            <img className={styles.spot_arrow} src={Arrow} alt="" />
          </div>
        </div>
      </div>

      <Products products={list} amount={4} />

      <Find />
    </div>
  );
}
export default Home;
