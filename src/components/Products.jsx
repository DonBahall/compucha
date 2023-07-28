import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Products.module.css";
import { Button } from "react-bootstrap";
import SingleProduct from "./SingleProduct";
import { ROUTES } from "../utils/routes";
import filter from "../img/vector/Filter.png"
import sort from "../img/vector/Icon.png"

const Products = ({ name, style = {}, products = [], amount }) => {
  const list = products.filter((_, i) => i < amount);
  const handleButtonClick = () => {
    alert('Cheers, mate! Your cart just scored some epic drinks!');
  };
  
  return (
    <div className={styles.section} > 
    {/* //style={style} */}
      <h2 className={styles.sectionTitle}>Look, choose, <br/> taste and  </h2>
      <h2 className={styles.sectionTitlePink}> enjoy!</h2>
      <div className={styles.filters}>
        <div className={styles.filters_group}>
          <div className={styles.filters_item}>Filters </div>
          <img src={filter} alt="filter" className={styles.svg} />
      </div>
      <div className={styles.filters_group}>
        <div className={styles.filters_item}>Sort</div>
          <img src={sort} alt="sort" className={styles.svg} />
        </div>
      </div>
      <SingleProduct products={products}/>
      <div className={styles.buttons_links}>
        <Link to={ROUTES.SHOP}>
          <Button className={styles.light} variant="light">Go to catalog</Button> 
        </Link>
        <Link>
        <Button className={styles.light} variant="light" onClick={handleButtonClick}>
          Load more
        </Button> 
        </Link>          
      </div>      
    </div>
  );
};

export default Products;