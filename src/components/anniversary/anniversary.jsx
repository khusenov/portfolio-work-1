import styles from "./anniversary.module.scss";
import {classNames} from "../../utils/classNames";
import Container from "../global/container/container";
import image1 from "../../assets/images/anniversary-1.png";
import image2 from "../../assets/images/anniversary-2.png";
import Image from "next/image";
import AnniversaryCard from "./anniversary-card/anniversary-card";
import {amalfi_regular} from "../../../pages/_app";

function Anniversary(props) {
    const {
        className,
        id,
    } = props;

    return (
        <section
            className={classNames([styles.section, className])}
            id={id}
        >
            <Container>
                <div className={styles.section_body}>
                    <h2 className={classNames([styles.section_title, amalfi_regular.className])}>Випекаем с душой и любовью уже 11 лет</h2>
                    <div className={styles.section_container}>
                        <div className={styles.section_container_content}>
                            <AnniversaryCard
                                className={styles.section_container_content_card}
                                icon="wheat-2"
                                title="Натуральные ингредиенты"
                                paragraph="Используем муку из ьио-зерна, выращенного без вредных химическых удобренний"
                            />
                            <AnniversaryCard
                                className={styles.section_container_content_card}
                                icon="home-tree"
                                title="Домашнее производство"
                                paragraph="Наши пекари готовят хлеб в ручную, с душой и любовью"
                            />
                            <AnniversaryCard
                                className={styles.section_container_content_card}
                                icon="book-cooking"
                                title="Традиционные рецепты"
                                paragraph="Рецепты нашего хлеьа передаются из поколения в поколение"
                            />
                        </div>
                        <div className={styles.section_container_img}>
                            <Image src={image1} alt="image 1" priority={true} style={{width: "100%"}}/>
                        </div>
                    </div>
                    <div className={styles.section_container}>
                        <div className={styles.section_container_img}>
                            <Image src={image2} alt="image 2" priority={true} style={{width: "100%"}}/>
                        </div>
                        <div className={styles.section_container_content}>
                            <AnniversaryCard
                                className={styles.section_container_content_card}
                                icon="breads-set"
                                title="Разнообразие вкусов"
                                paragraph="Болшой ассортимент хлеба, необычные начинки и новинки каждую неделю"
                            />
                            <AnniversaryCard
                                className={styles.section_container_content_card}
                                icon="globe-eco"
                                title="Забота о природе"
                                paragraph="Мы стремимся использовать экологичную одноразовую посуду и упаковку"
                            />
                            <AnniversaryCard
                                className={styles.section_container_content_card}
                                icon="wheat-bread"
                                title="Домашный уют"
                                paragraph="Аромат нашего горячего хлеба и домашний вкус украсят любую трапезу"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Anniversary;