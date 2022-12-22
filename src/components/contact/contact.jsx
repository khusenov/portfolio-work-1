import styles from "./contact.module.scss"
import {classNames} from "../../utils/classNames";
import Container from "../global/container/container";
import {amalfi_regular} from "../../../pages/_app";

function Contact(props) {
    const {
        className,
        ...other
    } = props;

    return (
        <section className={classNames([styles.contact, className])} {...other}>
            <Container>
                <div className={styles.contact_body}>
                    <div className={styles.contact_content}>
                        <h2 className={classNames([styles.contact_content_title, amalfi_regular.className])}>Мы всегда вам рады</h2>
                        <div className={styles.contact_content_item}>
                            <h4 className={classNames([styles.contact_content_item_title, amalfi_regular.className])}>Приём заказов:</h4>
                            <p className={styles.contact_content_item_subtitle}>+7702 777 77 77</p>
                        </div>
                        <div className={styles.contact_content_item}>
                            <h4 className={classNames([styles.contact_content_item_title, amalfi_regular.className])}>Приходите к нам:</h4>
                            <p className={styles.contact_content_item_subtitle}>Loft pineapple, 22 Pink Street, New
                                York</p>
                        </div>
                    </div>
                    <div className={styles.contact_map}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4340.082132636351!2d-73.99676796384726!3d40.6981269198239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5572b244d2a2edb3!2zNDDCsDQxJzU0LjAiTiA3M8KwNTknMzguMCJX!5e0!3m2!1sen!2s!4v1671717205252!5m2!1sen!2s"
                            width="100%" height="450" style={{border: "0"}} allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Contact;