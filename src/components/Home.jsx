import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ROUTES } from "../utils/routes";
import Products from "./Products";
import { useSelector } from "react-redux";
import AnimatedLine from "./AnimatedLine";
import styles from "../styles/Home.module.css";

function Home() {
  const { list } = useSelector(({products}) => products) ;
  
    return (
<Container className={styles.home} fluid>
        <p>
          BaraShop
        </p>
        <h1 className="title">Combucha</h1>
        <h3 className="about">Sugar Free, Keto, Vegan<br/>& Gluten Free</h3>
        <Row>
          <Col>
          <p>FLAVORS Available in tore</p>
          <FontAwesomeIcon icon="arrow-right" />
          </Col>

        <Link to={ROUTES.SHOP}>
          <Col>
          <Button variant="danger"> 
            Catalog
          </Button>
          </Col>

        </Link>
        </Row>
        <AnimatedLine/>
        <Products products={list} amount={4} title="Give it a shot" />
</Container>

    )
    }
export default Home;