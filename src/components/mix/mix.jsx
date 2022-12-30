import styles from "./mix.module.scss";
import {classNames} from "../../utils/classNames";
import Container from "../global/container/container";
import mixImage from "../../assets/images/mix.png";
import mix1 from "../../assets/images/mix-1.png";
import mix2 from "../../assets/images/mix-2.png";
import mix3 from "../../assets/images/mix-3.png";
import Image from "next/image";
import MixCard from "./mix-card/mix-card";
import MixDivider from "./mix-divider/mix-divider";
import Button from "../global/button/button";

function Mix(props) {
    const {
        className,
        ...other
    } = props;

    return (
        <section className={classNames([styles.section, className])} {...other}>
            <Container>
                <div className={styles.section_body}>
                    <h2 className={classNames([styles.section_title])}>Еженеделбная корзина хлеба</h2>
                    <div className={styles.section_container}>
                        <div className={styles.section_content}>
                            <h4 className={classNames([styles.section_content_title])}>#1. Микс</h4>
                            <p className={styles.section_content_paragraph}>
                                Подпишитесь на еженедельную доставку хлебной корзины. Аккуратно доставим к порогу вашего
                                дома в удобное вам время.
                            </p>
                            <div className={styles.section_content_cards}>
                                <MixCard
                                    image={mix1}
                                    title="2 багета"
                                />
                                <MixCard
                                    image={mix2}
                                    title="3 булочки"
                                />
                                <MixCard
                                    image={mix3}
                                    title="1 ржаной"
                                />
                            </div>
                            <MixDivider className={styles.section_content_divider}/>
                            <Button>Подписаться</Button>
                        </div>
                        <div className={styles.section_img}>
                            <Image src={mixImage} alt="mix" priority={true} width={300} height={300}/>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Mix;