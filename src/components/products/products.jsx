import styles from "./products.module.scss";
import {classNames} from "../../utils/classNames";
import ProductsTab from "./products-tab/products-tab";
import Container from "../global/container/container";
import {useState} from "react";
import product1 from "../../assets/images/product-1.png";
import product2 from "../../assets/images/product-2.png";
import product3 from "../../assets/images/product-3.png";
import product4 from "../../assets/images/product-4.png";
import product5 from "../../assets/images/product-5.png";
import product6 from "../../assets/images/product-6.png";
import ProductsCard from "./products-card/products-card";

const tabs = [
    {
        icon: "category-item-1",
        label: "Булочки",
        value: "category-1"
    },
    {
        icon: "category-item-2",
        label: "Багеты",
        value: "category-2"
    },
    {
        icon: "category-item-3",
        label: "Пшеничный",
        value: "category-3"
    },
    {
        icon: "category-item-4",
        label: "Ржаной",
        value: "category-4"
    },
    {
        icon: "category-item-5",
        label: "Кукурузный",
        value: "category-5"
    }
]

function Products(props) {
    const {
        className,
        id,
    } = props;

    const [activeTab, setActiveTab] = useState(tabs[0]);

    function handleTabsChange(item) {
        setActiveTab(item)
    }

    return (
        <section
            className={classNames([styles.section, className])}
            id={id}
        >
            <Container>
                <div className={styles.section_body}>
                    <ProductsTab
                        tab_items={tabs}
                        active_tab={activeTab}
                        onChange={handleTabsChange}
                    />
                    <div className={styles.section_cards}>
                        <ProductsCard
                            className={styles.section_cards_item}
                            image={product1}
                            title="Микета"
                            paragraph="Мука, вода, дрожжи, соль, кунжут"
                            price="150₽"
                        />
                        <ProductsCard
                            className={styles.section_cards_item}
                            image={product2}
                            title="Микета"
                            paragraph="Мука, вода, дрожжи, соль, кунжут"
                            price="150₽"
                        />
                        <ProductsCard
                            className={styles.section_cards_item}
                            image={product3}
                            title="Микета"
                            paragraph="Мука, вода, дрожжи, соль, кунжут"
                            price="150₽"
                        />
                        <ProductsCard
                            className={styles.section_cards_item}
                            image={product4}
                            title="Микета"
                            paragraph="Мука, вода, дрожжи, соль, кунжут"
                            price="150₽"
                        />
                        <ProductsCard
                            className={styles.section_cards_item}
                            image={product5}
                            title="Микета"
                            paragraph="Мука, вода, дрожжи, соль, кунжут"
                            price="150₽"
                        />
                        <ProductsCard
                            className={styles.section_cards_item}
                            image={product6}
                            title="Микета"
                            paragraph="Мука, вода, дрожжи, соль, кунжут"
                            price="150₽"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Products;