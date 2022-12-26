import styles from "./nav-sidebar.module.scss";
import {classNames} from "../../../utils/classNames";
import {gsap} from "gsap";
import {useEffect, useRef, useState} from "react";

function NavSidebar(props) {
    const {
        className,
        isOpen,
        onClose,
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
                onClick={onClose && onClose}
                {...other}
            />
            <div
                className={styles.sidebar}
                ref={sidebarRef}
                style={{...(!isVisible && {display: "none"})}}
            >

            </div>
        </>

    );
}

export default NavSidebar;