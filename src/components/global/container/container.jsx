import styles from "./container.module.scss";
import {classNames} from "../../../utils/classNames";

function Container(props) {
    const {
        className,
        children
    } = props;

    return (
        <div className={classNames([styles.container, className])}>
            {children}
        </div>
    );
}

export default Container;