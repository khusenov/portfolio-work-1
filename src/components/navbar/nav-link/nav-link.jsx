import styles from "./nav-link.module.scss";
import {classNames} from "../../../utils/classNames";


function NavLink(props) {
    const {
        className,
        children,
    } = props;
    return (
        <span
            className={classNames([styles.link, className])}
        >
            {children}
        </span>
    );
}

export default NavLink;