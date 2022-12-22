import styles from "./process-card.module.scss";
import {classNames} from "../../../utils/classNames";
import Icon from "../../global/icon/icon";

function ProcessCard(props) {
    const {
        className,
        order_num,
        icon,
        title,
        paragraph
    } = props;

    return (
        <div className={classNames([styles.card, className])}>
            <span className={styles.card_num}>{order_num}</span>
            <div className={styles.card_content}>
                <Icon className={styles.card_content_icon} name={icon}/>
                <h6 className={styles.card_content_title}>{title}</h6>
                <p className={styles.card_content_paragraph}>{paragraph}</p>
            </div>
        </div>
    );
}

export default ProcessCard;