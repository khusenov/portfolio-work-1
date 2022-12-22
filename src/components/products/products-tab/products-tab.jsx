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
            {tab_items.map(_item => (
                <div className={styles.tab_item} key={_item.value}>
                    <ProductTabItem
                        onClick={() => handleChangeTab(_item)}
                        className={styles.item}
                        icon={_item.icon}
                        label={_item.label}
                        is_active={active_tab.value === _item.value}
                    />
                </div>
            ))}
        </div>
    );
}

export default ProductsTab;