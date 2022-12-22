import styles from "./logo.module.scss";
import {classNames} from "../../../utils/classNames";
import logo from "../../../assets/images/Logo.svg"
import Image from "next/image";

function Logo(props) {
    const {className} = props;

    return (
        <div className={classNames([styles.logo, className])}>
            <Image src={logo} alt="logo" priority={true}/>
        </div>
    );
}

export default Logo;