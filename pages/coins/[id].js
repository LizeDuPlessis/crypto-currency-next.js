export const getStaticPaths = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );
  const data = await res.json();

  const paths = data.map((coin) => {
    return {
      params: { id: coin.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=100&page=1&sparkline=false/${id}`
  );
  const data = await res.json();

  return {
    props: { coin: data },
  };
};

const Details = ({ coin }) => {
  return (
    <div>
      Details
      <h3> {coin?.name}</h3>
    </div>
  );
};

export default Details;
