import Image from "next/image";
import { Amaranth, Quicksand } from "next/font/google";
import { AiOutlineArrowDown } from "react-icons/ai";

const amaranth = Amaranth({ subsets: ["latin"], weight: "700" });
const quicksand1 = Quicksand({ subsets: ["latin"], weight: "400" });
const quicksand2 = Quicksand({ subsets: ["latin"], weight: "700" });

export default function MobileLandingPage() {
  return (
    <main className="bg-primary min-h-screen">
      <div className="flex flex-col items-center justify-center p-6">
        <div className="text-center my-6">
          <h1 className="font-quicksand text-2xl text-darkgreentext font-bold text-text-darkgreen">
            <span className={quicksand2.className}>
              ENVIRONMENTAL DATA, POLICY, & JUSTICE
            </span>
          </h1>
        </div>
        <div className="my-6">
          <h1 className="text-center text-8xl font-bold text-white">
            <span className="stroke-black text-stroke-2 shadow-black drop-shadow-lg m-6 sm:text-5xl md:text-8xl">
              <span className={amaranth.className}>HON 3397</span>
            </span>
          </h1>
        </div>
        <div className="my-6">
          <h1 className="font-quicksand text-2xl sm:text-3xl md:text-4xl font-bold text-lightgreen text-center">
            <span className={quicksand1.className}>
              Group One - 
              <br></br>
              Kaitlin Wood, Ashish Job, Neha Joshi
            </span>
          </h1>
        </div>
        <div className="flex flex-row items-center my-6 text-darkgreentext">
          <span className={quicksand1.className}>
            <h1 className="mr-2 text-2xl">Scroll Down</h1>
          </span>
          <AiOutlineArrowDown size={36} />
        </div>
      </div>
      <div className="flex flex-row justify-center select-none items-center">
        <Image src="/Plants.svg" width={350} height={350} alt="Plants" />
      </div>
  </main>
);
}
