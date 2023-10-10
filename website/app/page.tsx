import Image from "next/image";
import { Amaranth, Quicksand } from "next/font/google";

const amaranth = Amaranth({ subsets: ["latin"], weight: "700" });
const quicksand1 = Quicksand({ subsets: ["latin"], weight: "400" });
const quicksand2 = Quicksand({ subsets: ["latin"], weight: "700" });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24 bg-primary justify-center">
      <div className="flex flex-row items-center justify-even my-6">
        <h1 className="font-quicksand text-center text-xl text-darkgreentext font-bold text-text-darkgreen">
          <span className={quicksand2.className}>
            ENVIRONMENTAL DATA, POLICY, & JUSTICE
          </span>
        </h1>
        <div className="bg-midgreen h-3 w-3 rounded-full mx-3"></div>
        <div className="bg-darkgreen h-3 w-3 rounded-full mx-3"></div>
        <div className="bg-olivegreen h-3 w-3 rounded-full mx-3"></div>
        <div className="bg-white h-3 w-3 rounded-full mx-3"></div>
      </div>
      <div className="flex flex-row items-center justify-between my-6">
        <h1 className="text-center text-9xl font-bold text-white">
          <span className="stroke-black text-stroke-3 shadow-black drop-shadow-lg">
            <span className={amaranth.className}>HON 3397</span>
          </span>
        </h1>
      </div>
      <div className="my-6">
        <h1 className="font-quicksand text-xl font-bold text-lightgreen">
          <span className={quicksand1.className}>
            Group One - Kaitlin Wood, Ashish Job, Neha Joshi
          </span>
        </h1>
      </div>
      <div className="absolute right-0">
        <Image src="/plants.svg" width={750} height={750} alt={"Plants"} />
      </div>
    </main>
  );
}
