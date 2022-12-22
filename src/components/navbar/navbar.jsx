import styles from "./navbar.module.scss"
import {classNames} from "../../utils/classNames";
import Container from "../global/container/container";
import Logo from "../global/logo/logo";
import NavLink from "./nav-link/nav-link";
import Icon from "../global/icon/icon";

function Navbar(props) {
    const {
        className,
    } = props;
    return (
        <nav className={classNames([styles.nav, className])}>
            <Container>
                <div className={styles.nav_body}>
                    <Logo className={styles.nav_logo}/>
                    <ul className={styles.nav_menu}>
                        <li className={styles.nav_menu_item}>
                            <NavLink className={styles.nav_menu_link}>Меню</NavLink>
                        </li>
                        <li className={styles.nav_menu_item}>
                            <NavLink className={styles.nav_menu_link}>О нас</NavLink>
                        </li>
                        <li className={styles.nav_menu_item}>
                            <NavLink className={styles.nav_menu_link}>Доставка</NavLink>
                        </li>
                        <li className={styles.nav_menu_item}>
                            <NavLink className={styles.nav_menu_link}>Контакты</NavLink>
                        </li>
                    </ul>
                    <div className={styles.nav_contact}>
                        <div className={styles.nav_contact_top}>Прием заказов с 10:00 до 20:00</div>
                        <div className={styles.nav_contact_bottom}>
                            <Icon className={styles.icon} name="phone"/>
                            <p>+(420) 774-051-379</p>
                        </div>
                    </div>
                </div>
            </Container>
        </nav>
    );
}

export default Navbar;