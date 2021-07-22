import { useSession } from "next-auth/client";
import Head from "next/head";
import Brands from "../components/Brands";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Slider from "../components/Slider";

export default function Home() {
  const [session] = useSession();

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {!session ? (
        <Hero />
      ) : (
        <>
          <Slider />
          <Brands />
          <section></section>
        </>
      )}
    </div>
  );
}
