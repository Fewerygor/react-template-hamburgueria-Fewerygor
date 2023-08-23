import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./style.module.scss";


export const Header = ({ setIsOpen, setProductList, saveProductList, cartList }) => {
   const [value, setValue] = useState("");


   const searchFilter = (e) => {
      e.preventDefault();
      if (value.length !== 0) {
         console.log(value)
         const productFiltered = saveProductList.filter(product => product.name.toLowerCase().includes(value.toLowerCase()));
         setProductList(productFiltered);
      } else {
         setProductList(saveProductList);
      }
   }

   return (
      <header>
         <div className={styles.headerContainer}>
            <div className={styles.logoHeader}>
               <img src={Logo} alt="Logo Kenzie Burguer" />
            </div>
            <div className={styles.formContainer}>
               <button className={styles.buttonCart} onClick={() => setIsOpen(true)}>
                  <MdShoppingCart size={21} />
                  <span>{cartList.length}</span>
               </button>
               <form onSubmit={searchFilter}>
                  <input
                     type="text"
                     placeholder="Digitar Pesquisa"
                     value={value}
                     onChange={(e) => setValue(e.target.value)}
                  />
                  <button type="submit">
                     <MdSearch size={21} />
                  </button>
               </form>
            </div>
         </div>
      </header>
   );
};
