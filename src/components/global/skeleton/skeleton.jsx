import styles from "./skeleton.module.scss";
import {classNames} from "../../../utils/classNames";

function Skeleton(props) {
    const {
        className,
        ...other
    } = props;

    return (
        <div
            className={classNames([
                styles.skeleton,
                className
            ])}
            {...other}
        />
    );
}

export default Skeleton;