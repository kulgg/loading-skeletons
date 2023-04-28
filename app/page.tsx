import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/hello`);
  const json = await response.text();

  return (
    <main className="">
      <div>{json}</div>
    </main>
  );
}
