import styles from "./products-empty-state.module.scss";
import {classNames} from "../../../utils/classNames";

function ProductsEmptyState(props) {
    const {
        className,
        ...other
    } = props;

    return (
        <div className={classNames([styles.empty_state, className])} {...other}>
            <div className={styles.empty_state_img}>
                <span></span>
            </div>
            <h4 className={styles.empty_state_title}>Товары не найдены!</h4>
        </div>
    );
}

export default ProductsEmptyState;