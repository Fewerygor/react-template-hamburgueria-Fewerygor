import styles from "./style.module.scss";

export const ProductCard = ({ product, addCartProduct }) => {
    return (
        <li className={styles.cardList}>
            <div className={styles.imageContainer}>
                <img src={product.img} alt={product.name} />
            </div>
            <div className={styles.cardContainer}>
                <div className={styles.cardBox}>
                    <h3>{product.name}</h3>
                    <p>{product.category}</p>
                    <p className={styles.paragraph}>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</p>
                    <button onClick={() => addCartProduct(product)}>Adicionar</button>
                </div>
            </div>
        </li>
    )
}