import styles from "./process.module.scss";
import {classNames} from "../../utils/classNames";
import Container from "../global/container/container";
import ProcessCard from "./process-card/process-card";

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
                    <h2 className={styles.section_title}>Горячий хлеб уже в пути</h2>
                    <div className={styles.section_cards}>
                        <ProcessCard
                            order_num="1"
                            icon="breads-set"
                            title="Заказ"
                            paragraph="Закажите хлеб онлайн или по телефону"
                        />
                        <ProcessCard
                            order_num="2"
                            icon="scooter"
                            title="Доставка"
                            paragraph="Выберите время доставки и способ оплаты"
                        />
                        <ProcessCard
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