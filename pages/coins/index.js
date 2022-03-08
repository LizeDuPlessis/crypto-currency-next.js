import Link from "next/link";
import styles from "../../styles/Coins.module.css";
export const getStaticProps = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );
  const data = await res.json();
  return {
    props: { coins: data },
  };
};

const Coins = ({ coins }) => {
  console.log(coins, "COINS");
  return (
    <div>
      <h1>All coins:</h1>
      {coins?.map((coin) => (
        <Link href={`coins/${coin.id}`} key={coin.id}>
          <a className={styles.single}>
            <h3>{coin.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Coins;
