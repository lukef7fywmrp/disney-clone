function Show({ result }) {
  console.log(result);
  return <div></div>;
}

export default Show;

export async function getServerSideProps(context) {
  const { id } = context.query;

  const request = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.API_KEY}&language=en-US`
  ).then((response) => response.json());

  return {
    props: {
      result: request,
    },
  };
}
