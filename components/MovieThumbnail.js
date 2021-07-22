import Image from "next/image";

function MovieThumbnail({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="min-w-[400px] min-h-[200px]">
      <Image
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        width={400}
        height={200}
        objectFit="cover"
      />
    </div>
  );
}

export default MovieThumbnail;
