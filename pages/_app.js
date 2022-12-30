import "../src/styles/index.css"
import {gsap} from "gsap";
import styles from "../src/styles/variables.module.scss"




gsap.defaults({
    duration: styles.transition_time * 2
})

function MyApp({Component, pageProps}) {
    return (
        <Component {...pageProps} />
    )
}

export default MyApp
