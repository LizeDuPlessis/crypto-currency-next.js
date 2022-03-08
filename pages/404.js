import { useEffect } from "react";
import { useRouter } from "next/router";
const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);

    console.log("redirect to home page");
  }, []);
  return (
    <div>
      <h1>Oooops!</h1>
      <p>This page was not found!</p>
    </div>
  );
};

export default NotFound;
