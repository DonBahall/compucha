import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import { Button } from "react-bootstrap";
import vector from "../img/vector/Vector.png";
import styles from "../styles/Products.module.css";

const SingleProduct = ({ products }) => {
  
  return (
    <div className={styles.list}>
      {products.map(({ id, name, img, weight, rating, ingredients, price }) => (
        <Link to={`/products/${id}`} key={id} className={styles.product}>
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <Image className={styles.image} src={img} alt="" />
              <div className={styles.applauseMain}>
                <div className={styles.filter}>Rating:</div>
                <div className={styles.applause}>
                  <div className={styles.rating}>{rating}</div>
                  <img src={vector} alt="applause" className={styles.svg} />
                </div>
              </div>
            </div>
            <h3 className={styles.title}>{name}</h3>
            <div className={styles.attribute}>
              <div className={styles.filter}>Size:</div>
              <div className={styles.filterAtt}>{weight} l</div>
            </div>
            <div className={`${styles.attribute} ${styles.addattribute}`}>
              <div className={styles.filter}>Taste:</div>
              <div className={styles.filterAtt}>
                {ingredients.map((ingredient) => ingredient.name).join(", ")}
              </div>
            </div>
            <div className={styles.info}>
              <div className={styles.prices}>
                <div className={styles.price}>$ {price.toFixed(2)}</div>
                <div className={styles.oldPrice}>$ {(price * 0.8).toFixed(2)}</div>
              </div>
              <Button variant="danger" className={styles.actions}>
                Add to cart
              </Button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SingleProduct;