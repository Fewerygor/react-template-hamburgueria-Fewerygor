import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "./style.module.scss";

export const CartModal = ({ cartList, removeCartProduct, setIsOpen, setCartList }) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   const cleanModal = () => {
      setCartList([]);
   }

   return (
      <div className={styles.modalContainer} role="dialog">
         <div className={styles.modalControler}>
            <div className={styles.modalHeader}>
               <div className={styles.modalTitle}>
                  <h2>Carrinho de compras</h2>
                  <button aria-label="close" title="Fechar" onClick={() => setIsOpen(false)}>
                     <MdClose size={21} />
                  </button>
               </div>
            </div>
            <div className={styles.modalMain}>
               <div className={styles.modalList}>
                  <ul className={styles.list}>
                     {cartList.map((product) => (
                        <CartItemCard key={product.id}
                           product={product}
                           removeCartProduct={removeCartProduct}
                        />
                     ))}
                  </ul>
               </div>
               <div className={styles.totalContainer}>
                  <div className={styles.totalValueContainer}>
                     <span className={styles.textSpan}>Total</span>
                     <span className={styles.valueSpan}>{total.toLocaleString('pt-BR',
                        { style: "currency", currency: "BRL" })}
                     </span>
                  </div>
                  <button className={styles.buttonRemoveAll}
                     onClick={cleanModal}>Remover todos</button>
               </div>
            </div>
         </div>
      </div>
   );
};
