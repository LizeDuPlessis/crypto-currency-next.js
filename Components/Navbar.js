import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo2.jpg" width={130} height={80} alt="coin logo" />
      </div>

      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/about">
        <a>About</a>
      </Link>

      <Link href="/coins">
        <a>Crypto Coins</a>
      </Link>
    </nav>
  );
};

export default Navbar;
