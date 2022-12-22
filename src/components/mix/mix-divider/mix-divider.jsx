import styles from "./mix-divider.module.scss";
import {classNames} from "../../../utils/classNames";
import Icon from "../../global/icon/icon";

function MixDivider(props) {
    const {
        className,
        ...other
    } = props;

    return (
        <div className={classNames([styles.divider, className])} {...other}>
            <div className={styles.divider_line}/>
            <Icon className={styles.divider_icon} name="wheat-3"/>
            <div className={styles.divider_line}/>
        </div>
    );
}

export default MixDivider;