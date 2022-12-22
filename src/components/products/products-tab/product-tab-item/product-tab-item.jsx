import styles from "./product-tab-item.module.scss";
import {classNames} from "../../../../utils/classNames";
import Icon from "../../../global/icon/icon";
import {amalfi_regular} from "../../../../../pages/_app";

function ProductTabItem(props) {
    const {
        className,
        icon,
        label,
        is_active,
        ...other
    } = props;

    return (
        <div className={classNames([styles.item, is_active && styles.active, className])} {...other}>
            <div className={styles.item_img}>
                <Icon className={styles.icon} name={icon}/>
            </div>
            <h6 className={classNames([styles.item_title, amalfi_regular.className])}>{label}</h6>
        </div>
    );
}

export default ProductTabItem;