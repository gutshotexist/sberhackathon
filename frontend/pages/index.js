import Head from "next/head";
import NavBar from "../components/NavBar";
import Hero from "../components/hero";
import Faqcomponent from "../components/faq";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Faqcomponent />
      <Footer />
      <Head>
        <title>SP - источник внешних данных на Siberium</title>
        <meta
          name="SiberiumPythia"
          content="Надежный источник внешних данных для DeFi приложений в децентрализованной сети Siberium."
        />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
    </div>
  );
}
