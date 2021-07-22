import { getSession, useSession } from "next-auth/client";
import Head from "next/head";
import Brands from "../components/Brands";
import MovieCollection from "../components/MovieCollection";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Slider from "../components/Slider";

export default function Home({ nowPlaying }) {
  const [session] = useSession();

  return (
    <div>
      <Head>
        <title>Disney</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {!session ? (
        <Hero />
      ) : (
        <main className="relative min-h-screen">
          <div className="bg-home bg-center bg-cover bg-no-repeat bg-fixed absolute inset-0 ">
            <Slider />
            <Brands />
            {/* <section className=" max-w-[1370px] mx-auto flex flex-col justify-center items-center mt-14"> */}
            <MovieCollection results={nowPlaying} />
            <MovieCollection results={nowPlaying} />
            {/* </section> */}
          </div>
        </main>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const request = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=1`
  ).then((response) => response.json());

  return {
    props: {
      session,
      nowPlaying: request.results,
    },
  };
}
