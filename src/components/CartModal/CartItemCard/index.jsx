import { MdDelete } from "react-icons/md";
import styles from "./style.module.scss";

export const CartItemCard = ({ product, removeCartProduct }) => {
   console.log(product.img)
   return (
      <li className={styles.modalCard}>
         <div className={styles.CardContainer}>
            <div className={styles.cardProduct}>
               <img src={product.img} alt={product.name} /> 
               <h3>{product.name}</h3>
            </div>
            <button aria-label="delete" title="Remover item"
               onClick={() => removeCartProduct(product.id)}>
               <MdDelete size={21} />
            </button>
         </div>
      </li>
   );
};
