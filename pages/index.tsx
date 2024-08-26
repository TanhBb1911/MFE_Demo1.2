import Image from "next/image";
import { Inter } from "next/font/google";
import Guide from "@/components/guide";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1>HERE THE REMOTE PORT 3</h1>
      <Guide />
    </>);
}
