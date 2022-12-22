import styles from "./top-product-card.module.scss";
import {classNames} from "../../../utils/classNames";
import Image from "next/image";

function TopProductCard(props) {
    const {
        className,
        image,
        title,
        paragraph
    } = props;

    return (
        <div className={classNames([styles.card, className])}>
            <div className={styles.card_header}>
                <Image src={image} alt={title} priority={true}/>
            </div>
            <h4 className={styles.card_title}>{title}</h4>
            <p className={styles.card_paragraph}>{paragraph}</p>
        </div>
    );
}

export default TopProductCard;