import styles from "./nav-burger.module.scss";
import {classNames} from "../../../utils/classNames";

function NavBurger(props) {
    const {
        className,
        ...other
    } = props;

    return (
        <div className={classNames([styles.burger, className])} {...other}>
            <span className={styles.burger_line}/>
            <span className={styles.burger_line}/>
            <span className={styles.burger_line}/>
        </div>
    );
}

export default NavBurger;