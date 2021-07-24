function Movie({ result }) {
  console.log(result);
  return <div></div>;
}

export default Movie;

export async function getServerSideProps(context) {
  const { id } = context.query;

  const request = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US`
  ).then((response) => response.json());

  return {
    props: {
      result: request,
    },
  };
}
