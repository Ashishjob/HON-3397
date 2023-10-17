import Image from "next/image";
import { Amaranth, Quicksand } from "next/font/google";
import { AiOutlineArrowDown } from "react-icons/ai";

const amaranth = Amaranth({ subsets: ["latin"], weight: "700" });
const quicksand1 = Quicksand({ subsets: ["latin"], weight: "400" });
const quicksand2 = Quicksand({ subsets: ["latin"], weight: "700" });

export default function AirPollutants() {
  return (
    <main id="AirPollutants">
      <div className="flex flex-col justify-center items-center bg-navbarbg text-lightgreen text-4xl font-bold py-24">
        <span className={quicksand2.className}>
          Investigating Air Pollutants
        </span>
        <div className="flex flex-row justify-evenly w-1/2 mt-16">
          <section className="flex flex-col items-center text-black text-lg">
            <Image
              className="select-none"
              src="/CO2_structure.svg"
              width={150}
              height={150}
              alt={"CO2"}
            />
            <h1 className="font-bold text-3xl">
              <span className={quicksand2.className}>
                CO<sub>2</sub>
              </span>
            </h1>
            <h1 className="">
              <span className={quicksand1.className}>
                <span>&#40;</span>Carbon dioxide<span>&#41;</span>
              </span>
            </h1>
          </section>
          <section className="flex flex-col items-center text-black text-lg mt-2">
            <Image
              className="select-none"
              src="/O3_structure.svg"
              width={130}
              height={130}
              alt={"O3"}
            />
            <h1 className="font-bold text-3xl mt-5">
              <span className={quicksand2.className}>
                O<sub>3</sub>
              </span>
            </h1>
            <h1 className="">
              <span className={quicksand1.className}>
                <span>&#40;</span>Ozone<span>&#41;</span>
              </span>
            </h1>
          </section>
          <section className="flex flex-col items-center text-black text-lg">
            <Image
              className="select-none"
              src="/SO2_structure.svg"
              width={130}
              height={130}
              alt={"SO2"}
            />
            <h1 className="font-bold text-3xl mt-5">
              <span className={quicksand2.className}>
                SO<sub>2</sub>
              </span>
            </h1>
            <h1 className="">
              <span className={quicksand1.className}>
                <span>&#40;</span>Sulfur dioxide<span>&#41;</span>
              </span>
            </h1>
          </section>
        </div>
        <div className="flex flex-row justify-evenly w-1/3 mt-16">
          <section className="flex flex-col items-center text-black text-lg">
            <Image
              className="select-none"
              src="/NO2_structure.svg"
              width={150}
              height={150}
              alt={"NO2"}
            />
            <h1 className="font-bold text-3xl mt-2">
              <span className={quicksand2.className}>
                NO<sub>2</sub>
              </span>
            </h1>
            <h1 className="">
              <span className={quicksand1.className}>
                <span>&#40;</span>Nitrogen dioxide<span>&#41;</span>
              </span>
            </h1>
          </section>
          <section className="flex flex-col items-center text-black text-lg mt-2">
            <Image
              className="select-none"
              src="/NOx_structure.svg"
              width={200}
              height={200}
              alt={"NOx"}
            />
            <h1 className="font-bold text-3xl">
              <span className={quicksand2.className}>
                NO<sub>x</sub>
              </span>
            </h1>
            <h1 className="">
              <span className={quicksand1.className}>
                <span>&#40;</span>Nitrogen oxides<span>&#41;</span>
              </span>
            </h1>
          </section>
        </div>
      </div>
    </main>
  );
}
