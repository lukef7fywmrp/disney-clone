import Image from "next/image";

function MovieThumbnail({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="min-w-[300px] min-h-[150px] rounded-md overflow-hidden cursor-pointer">
      <Image
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        width={300}
        height={150}
        objectFit="cover"
        className="rounded-md"
      />
    </div>
  );
}

export default MovieThumbnail;
