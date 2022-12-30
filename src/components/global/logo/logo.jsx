import styles from "./logo.module.scss";
import {classNames} from "../../../utils/classNames";
import logo from "../../../assets/images/Logo.svg"
import Image from "next/image";

function Logo(props) {
    const {className} = props;

    return (
        <div className={classNames([styles.logo, className])}>
            <Image src={logo} alt="logo" width={220} height={40}/>
        </div>
    );
}

export default Logo;