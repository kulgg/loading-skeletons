import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  return (
    <main className="">
      <h2 className="font-semibold">Home</h2>
    </main>
  );
}
