import styles from "./mix-card.module.scss";
import {classNames} from "../../../utils/classNames";
import Image from "next/image";

function MixCard(props) {
    const {
        className,
        image,
        title,
        ...other
    } = props;

    return (
        <div className={classNames([styles.card, className])} {...other}>
            <div className={styles.card_img}>
                <Image src={image} alt={title} priority={true} style={{width: "100%"}}/>
            </div>
            <h6 className={classNames([styles.card_title])}>{title}</h6>
        </div>
    );
}

export default MixCard;