import styles from "./product-tab-item.module.scss";
import {classNames} from "../../../../utils/classNames";
import Image from "next/image";

function ProductTabItem(props) {
    const {
        className,
        image,
        label,
        is_active,
        ...other
    } = props;

    return (
        <div className={classNames([styles.item, is_active && styles.active, className])} {...other}>
            <div className={styles.item_img}>
                <Image src={image} alt={label} width={32} height={32}/>
            </div>
            <h6 className={classNames([styles.item_title])}>{label}</h6>
        </div>
    );
}

export default ProductTabItem;