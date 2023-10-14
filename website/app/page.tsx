import Image from "next/image";
import LandingPage from "./landingPage/page";
import VisualizationPage from "./dataVisualiztionPage/page";
import MobileLandingPage from "./mobileLandingPage/page";
import MobileVisualizationPage from "./mobileDataVisualizationPage/page";
import { Amaranth } from "next/font/google";
import NormalNavbar from "@/components/NavBar";

const amaranth = Amaranth({ subsets: ["latin"], weight: "700" });

export default function Home() {
  return (
    <main className="bg-primary min-h-screen pt-40">
      <div className="hidden lg:block">
        <LandingPage />
        <div className="flex flex-row items-center justify-center bg-navbarbg p-12">
          <Image
            src="/chemicalStructures.png"
            alt={"chemical structures"}
            width={1000}
            height={1000}
          ></Image>
        </div>
        <div className="flex flex-row items-center justify-center bg-primary p-12">
          <Image
            src="/predictors.png"
            alt={"predictors"}
            width={1500}
            height={1500}
          ></Image>
        </div>
        <div className="flex flex-row items-center justify-center bg-navbarbg pt-12">
          <Image
            src="/scatterPlot.png"
            alt={"predictors"}
            width={2500}
            height={1500}
          ></Image>
        </div>
        <div className="flex flex-row items-center justify-center bg-primary pt-12">
          <Image
            src="/MLinPY.png"
            alt={"predictors"}
            width={2500}
            height={1500}
          ></Image>
        </div>
        <div className="flex flex-row items-center justify-center bg-navbarbg pt-12">
          <Image
            src="/regressionKFold.png"
            alt={"predictors"}
            width={2500}
            height={1500}
          ></Image>
        </div>
        <div className="flex flex-row items-center justify-center bg-navbarbg pt -12">
          <Image
            src="/metrics.png"
            alt={"predictors"}
            width={2500}
            height={1500}
          ></Image>
        </div>
        <div className="flex flex-row items-center justify-center bg-primary pt -12">
          <Image
            src="/trainedLM.png"
            alt={"predictors"}
            width={2500}
            height={1500}
          ></Image>
        </div>
        <div className="flex flex-row items-center justify-center bg-navbarbg pt -12">
          <Image
            src="/code.png"
            alt={"predictors"}
            width={2500}
            height={1500}
          ></Image>
        </div>
      </div>
      <div className="lg:hidden">
        <MobileLandingPage />
        <MobileVisualizationPage />
      </div>
    </main>
  );
}
