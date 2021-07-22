import Head from "next/head";
import Brands from "../components/Brands";
import Header from "../components/Header";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Slider />
      <Brands />
      <section></section>
    </div>
  );
}
