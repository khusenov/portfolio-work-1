import Head from 'next/head'
import Navbar from "../src/components/navbar/navbar";
import Header from "../src/components/header/header";
import Divider from "../src/components/global/divider/divider";
import TopProducts from "../src/components/top-products/top-products";
import Anniversary from "../src/components/anniversary/anniversary";
import Products from "../src/components/products/products";
import Process from "../src/components/process/process";
import Mix from "../src/components/mix/mix";
import Contact from "../src/components/contact/contact";
import Footer from "../src/components/footer/footer";

export default function Home() {
    return (
        <>
            <Head>
                <title>Bakery</title>
                <meta property="og:url" content="https://portfolio-work-1.vercel.app"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Bakery"/>
                <meta
                    property="og:description"
                    content="Свежый хлеб из натуральных ингредиентов с бесплатной доставкой к порогу вашего дома"
                />
                <meta property="og:image" content="/social_preview.jpg"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Navbar/>
            <Header/>
            <Divider/>
            <TopProducts/>
            <Anniversary/>
            <Products/>
            <Process/>
            <Divider direction="bottom"/>
            <Mix/>
            <Contact/>
            <Footer/>
        </>
    )
}
