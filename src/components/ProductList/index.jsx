import { ProductCard } from "./ProductCard";
import styles from "./style.module.scss";

export const ProductList = ({ productList, addCartProduct }) => {
   return (
      <ul className={styles.list}>
         {productList.map((product) => (
            <ProductCard key={product.id}
               product={product}
               addCartProduct={addCartProduct} />
         ))}
      </ul>
   );
};
