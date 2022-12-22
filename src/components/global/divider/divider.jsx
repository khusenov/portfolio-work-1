import styles from "./divider.module.scss";
import {classNames} from "../../../utils/classNames";

function Divider(props) {
    const {
        className,
        direction,
    } = props;

    return (
        <div className={classNames([styles.divider, styles[direction], className])}/>
    );
}

export default Divider;