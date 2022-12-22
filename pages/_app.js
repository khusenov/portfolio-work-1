import "../src/styles/index.css"
import localFont from "@next/font/local";

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

function MyApp({Component, pageProps}) {
    return (
        <main className={circeRoundedFont_regular.className}>
            <Component {...pageProps} />
        </main>
    )
}

export default MyApp
