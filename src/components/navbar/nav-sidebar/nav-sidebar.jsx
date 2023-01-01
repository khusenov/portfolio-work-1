import styles from "./nav-sidebar.module.scss";
import {classNames} from "../../../utils/classNames";
import {gsap} from "gsap";
import {useEffect, useRef, useState} from "react";
import NavLink from "../nav-link/nav-link";
import Icon from "../../global/icon/icon";

function NavSidebar(props) {
    const {
        className,
        isOpen,
        closeHandler,
        ...other
    } = props;

    const [isVisible, setIsVisible] = useState(false);

    const outsideRef = useRef(null);
    const sidebarRef = useRef(null);

    const open = () => {
        if (!outsideRef.current || !sidebarRef.current) {
            return;
        }

        gsap.fromTo(outsideRef.current, {
            opacity: 0,
        }, {
            opacity: 1,
            onStart: () => setIsVisible(true)
        });
        gsap.fromTo(sidebarRef.current, {
            xPercent: 100,
        }, {
            xPercent: 0
        })

        document.body.style.overflow = "hidden"
    };
    const close = () => {
        if (!outsideRef.current || !sidebarRef.current) {
            return;
        }

        gsap.to(sidebarRef.current, {
            xPercent: 100,
        })
        gsap.to(outsideRef.current, {
            opacity: 0,
            onComplete: () => setIsVisible(false)
        })

        document.body.style.overflow = "auto"
    };

    useEffect(() => {
        isOpen ? open() : close();
    }, [isOpen])

    return (
        <>
            <div
                className={classNames([styles.sidebar_outside, className])}
                ref={outsideRef}
                style={{...(!isVisible && {display: "none"})}}
                onClick={closeHandler && closeHandler}
                {...other}
            />
            <div
                className={styles.sidebar}
                ref={sidebarRef}
                style={{...(!isVisible && {display: "none"})}}
            >
                <ul className={styles.sidebar_menu}>
                    <li className={styles.sidebar_menu_item}>
                        <NavLink>Меню</NavLink>
                    </li>
                    <li className={styles.sidebar_menu_item}>
                        <NavLink>О нас</NavLink>
                    </li>
                    <li className={styles.sidebar_menu_item}>
                        <NavLink>Доставка</NavLink>
                    </li>
                    <li className={styles.sidebar_menu_item}>
                        <NavLink>Контакты</NavLink>
                    </li>
                </ul>
                <Icon
                    onClick={closeHandler && closeHandler}
                    className={styles.sidebar_close}
                    name="close"
                />
            </div>
        </>

    );
}

export default NavSidebar;