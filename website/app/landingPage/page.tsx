import Image from "next/image";
import { Amaranth, Quicksand } from "next/font/google";
import { AiOutlineArrowDown } from "react-icons/ai";

const amaranth = Amaranth({ subsets: ["latin"], weight: "700" });
const quicksand1 = Quicksand({ subsets: ["latin"], weight: "400" });
const quicksand2 = Quicksand({ subsets: ["latin"], weight: "700" });

export default function LandingPage() {
  return (
    <main>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col justify-center p-24">
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
        
        <div className="flex flex-row relative m-0 mt-48 animate-pulse text-3xl text-darkgreentext">
          <span className={quicksand1.className}><h1 className="mr-2">Scroll Down</h1></span>
          <AiOutlineArrowDown />
        </div>
        </div>
        <div className="relative right-0 select-none">
          <Image src="/Plants.svg" width={750} height={750} alt={"Plants"} />
        </div>
      </div>
    </main>
  );
}
