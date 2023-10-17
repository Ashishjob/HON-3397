import Image from "next/image";
import { Amaranth, Quicksand } from "next/font/google";
import { AiOutlineArrowDown } from "react-icons/ai";

const amaranth = Amaranth({ subsets: ["latin"], weight: "700" });
const quicksand1 = Quicksand({ subsets: ["latin"], weight: "400" });
const quicksand2 = Quicksand({ subsets: ["latin"], weight: "700" });

export default function Predictors() {
  return (
    <main id="Predictors">
      <div className="flex flex-col justify-center items-center bg-primary py-24">
        <h1 className="text-boxcolor text-5xl font-bold">
          <span className={quicksand2.className}>Predictors</span>
        </h1>
        <h2 className="text-xl mt-4">
          <span className={quicksand2.className}>
            environmental measurements that may influence pollutant
            concentration.
          </span>
        </h2>
        <Image className="mt-12 ml-10 select-none" src={"/predictorDiagram.svg"} width={1000} height={1000} alt={""} />
      </div>
    </main>
  );
}
