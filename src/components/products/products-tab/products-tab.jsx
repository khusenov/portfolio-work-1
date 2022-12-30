import styles from "./products-tab.module.scss";
import {classNames} from "../../../utils/classNames";
import ProductTabItem from "./product-tab-item/product-tab-item";

function ProductsTab(props) {
    const {
        className,
        tab_items,
        onChange,
        active_tab,
    } = props;

    function handleChangeTab(item) {
        onChange && onChange(item)
    }

    return (
        <div className={classNames([styles.tab, className])}>
            <div className={styles.tab_container}>
                {tab_items.map(_item => (
                    <div className={styles.tab_item} key={_item.value}>
                        <ProductTabItem
                            className={styles.item}
                            onClick={() => handleChangeTab(_item)}
                            image={_item.image}
                            label={_item.label}
                            is_active={active_tab.value === _item.value}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductsTab;