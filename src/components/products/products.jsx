import styles from "./products.module.scss";
import {classNames} from "../../utils/classNames";
import ProductsTab from "./products-tab/products-tab";
import Container from "../global/container/container";
import {useEffect, useState} from "react";
import ProductsCard from "./products-card/products-card";
import {categoryApi} from "../../__fake-api__/category-api";
import {productsApi} from "../../__fake-api__/products-api";

function Products(props) {
    const {
        className,
        ...other
    } = props;

    const [tabs, setTabs] = useState([]);
    const [activeTab, setActiveTab] = useState(null);

    const [products, setProducts] = useState([]);

    async function getCategories() {
        try {
            const res = await categoryApi.getCategories();
            const tabItems = res.results.map(_category => (
                {
                    image: _category.image,
                    label: _category.name,
                    value: _category.id,
                }
            ));

            setTabs(tabItems);
            setActiveTab(tabItems[0]);
        } catch (err) {
            console.log(err)
        }
    }

    async function getProducts(category_id) {
        try {
            const res = await productsApi.getProducts(category_id);
            setProducts(res.results);
        } catch (err) {
            console.error(err)
        }
    }

    function handleTabsChange(item) {
        setActiveTab(item)
    }

    useEffect(() => {
        getCategories().catch(console.error);
    }, []);

    useEffect(() => {
        if (activeTab) {
            getProducts(activeTab.value).catch(console.error);
        }
    }, [activeTab])

    return (
        <section
            className={classNames([styles.section, className])}
            {...other}
        >
            <Container>
                <div className={styles.section_body}>
                    <ProductsTab
                        tab_items={tabs}
                        active_tab={activeTab}
                        onChange={handleTabsChange}
                    />
                    <div className={styles.section_cards}>
                        {products.map(_product => (
                            <ProductsCard
                                className={styles.section_cards_item}
                                image={_product.image}
                                title={_product.name}
                                paragraph={_product.paragraph}
                                price={_product.price}
                                key={_product.id}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Products;