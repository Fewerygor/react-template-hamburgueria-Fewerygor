import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { api } from "../../api";
import { toast } from "react-toastify";

export const HomePage = () => {
   const [productList, setProductList] = useState([]);
   const localCart = localStorage.getItem('@cartProduct'); 
   const [cartList, setCartList] = useState(localCart ? JSON.parse(localCart) : []);
   const [isOpen, setIsOpen] = useState(false);
   const [saveProductList, setSaveProductList] = useState([]);

   useEffect(() => {
      const getProduct = async () => {
         try {
            const { data } = await api.get("/products")
            setProductList(data);
            setSaveProductList(data);
         } catch (error) {
            console.log(error)
         }
      };
      getProduct();
   }, []);

   useEffect(() => {
      localStorage.setItem('@cartProduct', JSON.stringify(cartList))
   }, [cartList])

   const addCartProduct = (product) => {
      if (!cartList.some(cartList => cartList.id == product.id)) {
         setCartList([...cartList, product])
         toast.success('Produto foi adicionado no carrinho!')
      } else {
         toast.error('Esse produto já foi adicionado!')
      }
   }

   const removeCartProduct = (productId) => {
      const newCartList = cartList.filter(product => product.id !== productId)
      setCartList(newCartList);
   }

   // useEffect montagem - carrega os produtos da API e joga em productList
   // useEffect atualização - salva os produtos no localStorage (carregar no estado)
   // adição, exclusão, e exclusão geral do carrinho
   // renderizações condições e o estado para exibir ou não o carrinho
   // filtro de busca
   // estilizar tudo com sass de forma responsiva

   return (
      <>
         {isOpen ? (
            <CartModal cartList={cartList}
               removeCartProduct={removeCartProduct}
               setIsOpen={setIsOpen}
               setCartList={setCartList}
            />
         ) : (
            null
         )}
         
         <Header setIsOpen={setIsOpen} 
         productList={productList} 
         setProductList={setProductList} 
         saveProductList={saveProductList}
         cartList={cartList}
         />
         <main>
            <ProductList productList={productList}
               addCartProduct={addCartProduct}
            />
         </main>
      </>
   );
};
