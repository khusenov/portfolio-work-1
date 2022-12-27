import styles from "./header.module.scss";
import Container from "../global/container/container";
import {classNames} from "../../utils/classNames";
import {amalfi_regular} from "../../../pages/_app";
import Button from "../global/button/button";

import header from "../../assets/images/header-main.png";
import headerBg from "../../assets/images/header-bg.png";
import Image from "next/image";

function Header(props) {
    const {
        className,
    } = props;

    return (
        <header className={classNames([styles.header, className])}>
            <Container>
                <div className={styles.header_body}>
                    <div className={styles.header_content}>
                        <h1 className={`${styles.header_content_title}`}>
                            Мы делаем хлеб полезным и вкусным
                        </h1>
                        <p className={styles.header_content_paragraph}>
                            Свежый хлеб из натуральных ингредиентов
                            с бесплатной доставкой к порогу вашего дома
                        </p>
                        <Button className={styles.header_content_btn}>Заказать хлеб</Button>
                    </div>
                    <div className={styles.header_img}>
                        <Image src={header} alt="bread" priority={true}/>
                        <Image className={styles.header_img_bg} src={headerBg} alt="breadcrumbs" priority={true}/>
                    </div>
                </div>
            </Container>
        </header>
    );
}

export default Header;