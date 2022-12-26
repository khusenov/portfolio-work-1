import styles from "./icon.module.scss";
import {classNames} from "../../../utils/classNames";

function Icon(props) {
    const {
        className,
        name,
        ...other
    } = props;

    return (
        <i
            className={classNames([styles.icon, styles[name], className])}
            {...other}
        />
    );
}

export default Icon;