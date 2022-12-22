import styles from "./products-card.module.scss";
import {classNames} from "../../../utils/classNames";
import Image from "next/image";
import {amalfi_regular} from "../../../../pages/_app";

function ProductsCard(props) {
    const {
        className,
        image,
        title,
        paragraph,
        price
    } = props;

    return (
        <div className={classNames([styles.card, className])}>
            <div className={styles.card_img}>
                <Image src={image} alt={title} priority={true}/>
            </div>
            <h4 className={classNames([styles.card_title, amalfi_regular.className])}>{title}</h4>
            <p className={styles.card_paragraph}>{paragraph}</p>
            <p className={styles.card_price}>{price}</p>
        </div>
    );
}

export default ProductsCard;