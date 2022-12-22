import styles from "./icon.module.scss";
import {classNames} from "../../../utils/classNames";

function Icon(props) {
    const {
        className,
        name,
    } = props;

    return (
        <i className={classNames([styles.icon, styles[name], className])}/>
    );
}

export default Icon;