import { getSession, useSession } from "next-auth/client";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import { PlusIcon } from "@heroicons/react/solid";

function Movie({ result }) {
  const [session] = useSession();
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/");
    }
  }, []);

  console.log(result);
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
        <section className="relative">
          <div className="relative min-h-[calc(100vh-80px)]">
            <Image
              src={
                `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
                `${BASE_URL}${result.poster_path}`
              }
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="absolute top-0 pt-44 px-10 space-y-6">
            <h1 className="text-5xl font-bold">
              {result.title || result.original_name}
            </h1>
            <div className="flex items-center space-x-5">
              <button className="bg-[#f9f9f9] text-black flex items-center py-2.5 px-6 rounded hover:bg-[#c6c6c6]">
                <img src="/images/play-icon-black.svg" alt="" className="h-8" />
                <span className="uppercase font-medium tracking-wide">
                  Play
                </span>
              </button>

              <button className="bg-black/30 text-[#f9f9f9] border border-[#f9f9f9] flex items-center py-2.5 px-6 rounded hover:bg-[#c6c6c6]">
                <img src="/images/play-icon-white.svg" alt="" className="h-8" />
                <span className="uppercase font-medium tracking-wide">
                  Trailer
                </span>
              </button>

              <div className="rounded-full border-2 border-white flex items-center justify-center w-11 h-11 cursor-pointer bg-black/60">
                <PlusIcon className="h-6" />
              </div>

              <div className="rounded-full border-2 border-white flex items-center justify-center w-11 h-11 cursor-pointer bg-black/60">
                <img src="/images/group-icon.svg" alt="" />
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Movie;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const { id } = context.query;

  const request = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US`
  ).then((response) => response.json());

  return {
    props: {
      session,
      result: request,
    },
  };
}
