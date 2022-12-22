import styles from "./button.module.scss";
import {classNames} from "../../../utils/classNames";

function Button(props) {
    const {
        className,
        children
    } = props;

    return (
        <button className={classNames([styles.btn, className])}>
            {children}
        </button>
    );
}

export default Button;