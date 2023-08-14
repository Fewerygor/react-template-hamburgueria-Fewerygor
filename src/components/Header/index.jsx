import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./style.module.scss"


export const Header = ({ setIsOpen }) => {
   const [value, setValue] = useState("");

   return (
      <header >
         <div className={styles.headerContainer}>
            <div className={styles.logoHeader}>
               <img src={Logo} alt="Logo Kenzie Burguer" />
            </div>
            <div className={styles.formContainer}>
               <button className={styles.buttonCart} onClick={() => setIsOpen(true)}>
                  <MdShoppingCart size={21} />
                  <span>0</span>
               </button>
               <form>
                  <input
                     type="text"
                     placeholder="Digitar Pesquisa"
                     value={value}
                     onChange={(e) => setValue(e.target.value)}
                  />
                  <button type="submit"

                  >
                     <MdSearch size={21} />
                  </button>
               </form>
            </div>
         </div>
      </header>
   );
};
