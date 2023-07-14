// import { Container } from "react-bootstrap";
// import SingleProducts from "./SingleProduct";
// import React from "react";
// import { Link } from "react-router-dom";

// import styles from "../styles/Products.module.css";
// import { Button } from "react-bootstrap";


// const Products = ({ title, style = {}, products = [], amount }) => {
//   const list = products.filter((_, i) => i < amount);
//   return (
//     <Container>
//       <section className={styles.products} style={style}>
//       {title && <h2>{title}</h2>}
//       <p className={styles.text}>with the freshness of kambucha</p>
//       <div className={styles.list}>
//         {list.map(({ id, images, title, weight, ingredients, price, rating }) => (
//           <Link to={`/products/${id}`} key={id} className={styles.product}>
//             <div
//               className={styles.image}
//               style={{ backgroundImage: `url(${images[0]})` }}
//             />

//             <div className={styles.wrapper}>
//               <div className={styles.attribute}>
//                 <div className={styles.filter}>Rating:</div>
//                 <div className={styles.applause}>
//                   <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M336 16V80c0 8.8-7.2 16-16 16s-16-7.2-16-16V16c0-8.8 7.2-16 16-16s16 7.2 16 16zm-98.7 7.1l32 48c4.9 7.4 2.9 17.3-4.4 22.2s-17.3 2.9-22.2-4.4l-32-48c-4.9-7.4-2.9-17.3 4.4-22.2s17.3-2.9 22.2 4.4zM135 119c9.4-9.4 24.6-9.4 33.9 0L292.7 242.7c10.1 10.1 27.3 2.9 27.3-11.3V192c0-17.7 14.3-32 32-32s32 14.3 32 32V345.6c0 57.1-30 110-78.9 139.4c-64 38.4-145.8 28.3-198.5-24.4L7 361c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l53 53c6.1 6.1 16 6.1 22.1 0s6.1-16 0-22.1L23 265c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l93 93c6.1 6.1 16 6.1 22.1 0s6.1-16 0-22.1L55 185c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l117 117c6.1 6.1 16 6.1 22.1 0s6.1-16 0-22.1l-93-93c-9.4-9.4-9.4-24.6 0-33.9zM433.1 484.9c-24.2 14.5-50.9 22.1-77.7 23.1c48.1-39.6 76.6-99 76.6-162.4l0-98.1c8.2-.1 16-6.4 16-16V192c0-17.7 14.3-32 32-32s32 14.3 32 32V345.6c0 57.1-30 110-78.9 139.4zM424.9 18.7c7.4 4.9 9.3 14.8 4.4 22.2l-32 48c-4.9 7.4-14.8 9.3-22.2 4.4s-9.3-14.8-4.4-22.2l32-48c4.9-7.4 14.8-9.3 22.2-4.4z"/></svg>
//                   <div>{rating} applause</div>
//                 </div>
//               </div>
//               <h3 className={styles.title}>{title}</h3>
//               <div className={styles.attribute}>
//                   <div className={styles.filter}>Weight:</div>
//                   <div className={styles.filterAtt}>{weight}</div>
//               </div>
//               <div className={styles.attribute}>
//                   <div className={styles.filter}>Taste:</div>
//                   <div className={styles.filterAtt}>{ingredients}</div>
//               </div>
//               <div className={styles.weight}>{weight}</div>
//               <div className={styles.info}>
//                 <div className={styles.prices}>
//                   <div className={styles.price}>$  {price}</div>
//                   <div className={styles.oldPrice}>
//                     $   {Math.floor(price * 0.8)}
//                   </div>
//                 </div>
//                 <Button variant="danger" className="styles.actions">
//                   Add to card</Button>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//       </section>
//     </Container>
//   );
// };

// export default Products;

import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../styles/Products.module.css";
import { Button } from "react-bootstrap";
import SingleProduct from "./SingleProduct";
import { ROUTES } from "../utils/routes";

const Products = ({ title, style = {}, products = [], amount }) => {
  const list = products.filter((_, i) => i < amount);
  return (
    <Container className={styles.products}>
      <section className={styles.product} style={style}>
        {title && <h2>{title}</h2>}
        <p className={styles.text}>with the freshness of kombucha</p>

        <div className={styles.filters}>
          <div>Filters <span>***</span></div>
          <div><span>***</span>Sort</div>
        </div>
        <div className={styles.list}>
          {list.map((product) => (
            <SingleProduct key={product.id} {...product} />
          ))}
        </div>
        <div className={styles.buttons_links}>
        <Link to={ROUTES.SHOP}>
          <Button className={styles.light} variant="light">Go to catalog</Button> 
        </Link>
        <Link>
        <Button className={styles.light} variant="light">Load more</Button> 
        </Link>
          
        </div>
      </section>
    </Container>
  );
};

export default Products;