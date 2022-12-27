import "../src/styles/index.css"
import localFont from "@next/font/local";
import {gsap} from "gsap";
import styles from "../src/styles/variables.module.scss"
import {classNames} from "../src/utils/classNames";

export const circeRoundedFont_regular = localFont({
    src: "./fonts/CirceRounded-Regular.otf"
});

export const circeRoundedFont_light = localFont({
    src: "./fonts/CirceRounded-Light.otf"
})

export const circeRounded_thin = localFont({
    src: "./fonts/CirceRounded-Thin.otf"
})

export const amalfi_regular = localFont({
    src: "./fonts/Amalfi-Regular.otf"
})

gsap.defaults({
    duration: styles.transition_time * 2
})

function MyApp({Component, pageProps}) {
    return (
        <main className={classNames([ amalfi_regular.className, circeRoundedFont_regular.className])}>
            <Component {...pageProps} />
        </main>
    )
}

export default MyApp
