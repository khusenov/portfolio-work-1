import styles from "./anniversary-card.module.scss";
import {classNames} from "../../../utils/classNames";
import Icon from "../../global/icon/icon";

function AnniversaryCard(props) {
    const {
        className,
        icon,
        title,
        paragraph
    } = props;

    return (
        <div className={classNames([styles.card, className])}>
            <Icon className={styles.card_icon} name={icon}/>
            <div className={styles.card_content}>
                <h4 className={classNames([styles.card_content_title])}>{title}</h4>
                <p className={classNames(["small", styles.card_content_paragraph])}>{paragraph}</p>
            </div>
        </div>
    );
}

export default AnniversaryCard;