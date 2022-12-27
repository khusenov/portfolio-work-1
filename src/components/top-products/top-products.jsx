import styles from "./top-products.module.scss";
import {classNames} from "../../utils/classNames";
import Container from "../global/container/container";
import TopProductCard from "./top-product-card/top-product-card";
import product1 from "../../assets/images/top-product-1.png";
import product2 from "../../assets/images/top-product-2.png";
import product3 from "../../assets/images/top-product-3.png";
import Button from "../global/button/button";

function TopProducts(props) {
    const {
        className,
    } = props;

    return (
        <section className={classNames([styles.products, className])}>
            <Container>
                <div className={styles.products_body}>
                    <h2 className={classNames([styles.products_title])}>
                        Самое горячее на этой неделе
                    </h2>
                    <div className={styles.products_container}>
                        <TopProductCard
                            image={product1}
                            className={styles.products_card}
                            title="Мантовано"
                            paragraph="Пшеничная мука, вода, дрожжи и соль"
                        />
                        <TopProductCard
                            image={product2}
                            className={styles.products_card}
                            title="Матера"
                            paragraph="Манная крупа и мука из пшеницы твёрдых сортов"
                        />
                        <TopProductCard
                            image={product3}
                            className={styles.products_card}
                            title="Гриссини"
                            paragraph="Пшеничная мука, вода, молоко, дрожжи и соль"
                        />
                    </div>
                    <Button className={styles.products_btn}>Cмотреть всё</Button>
                </div>
            </Container>
        </section>
    );
}

export default TopProducts;