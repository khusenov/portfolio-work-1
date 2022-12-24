import styles from "./process.module.scss";
import {classNames} from "../../utils/classNames";
import Container from "../global/container/container";
import ProcessCard from "./process-card/process-card";
import {amalfi_regular} from "../../../pages/_app";

function Process(props) {
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
                    <h2 className={classNames([styles.section_title, amalfi_regular.className])}>Горячий хлеб уже в пути</h2>
                    <div className={styles.section_cards}>
                        <ProcessCard
                            className={styles.section_cards_item}
                            order_num="1"
                            icon="breads-set"
                            title="Заказ"
                            paragraph="Закажите хлеб онлайн или по телефону"
                        />
                        <ProcessCard
                            className={styles.section_cards_item}
                            order_num="2"
                            icon="scooter"
                            title="Доставка"
                            paragraph="Выберите время доставки и способ оплаты"
                        />
                        <ProcessCard
                            className={styles.section_cards_item}
                            order_num="3"
                            icon="human"
                            title="Получение"
                            paragraph="Насладитесь изысканным вкусом и ароматом"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Process;