import styles from "./footer.module.scss";
import {classNames} from "../../utils/classNames";
import Container from "../global/container/container";
import Icon from "../global/icon/icon";

function Footer(props) {
    const {
        className,
        ...other
    } = props;

    return (
        <footer className={classNames([styles.section, className])} {...other}>
            <Container>
                <div className={styles.section_body}>
                    <div className={styles.section_item}>
                        <h6 className={classNames([styles.section_item_title])}>Способы оплаты</h6>
                        <p className={styles.section_item_paragraph}>
                            Вы можеты оплатыть свой заказ онлайн или наличными при получении
                        </p>
                    </div>
                    <div className={styles.section_item}>
                        <h6 className={classNames([styles.section_item_title])}>Доставка</h6>
                        <p className={styles.section_item_paragraph}>
                            Доставка осуществляется бесплатноб два раза в день по всему Алматы
                        </p>
                    </div>
                    <div className={styles.section_item}>
                        <h6 className={classNames([styles.section_item_title])}>Партнёрам</h6>
                        <p className={styles.section_item_paragraph}>
                            Стать поставщиком
                        </p>
                    </div>
                    <div className={styles.section_item}>
                        <h6 className={classNames([styles.section_item_title])}>Подписывайтесь</h6>
                        <div className={styles.section_item_icons}>
                            <Icon className={styles.icon} name="instagram"/>
                            <Icon className={styles.icon} name="facebook"/>
                            <Icon className={styles.icon} name="telegram"/>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;