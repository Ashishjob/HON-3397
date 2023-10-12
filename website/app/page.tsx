import Image from "next/image";
import LandingPage from "./landingPage/page";
import VisualizationPage from "./dataVisualiztionPage/page";
import MobileLandingPage from "./mobileLandingPage/page";
import MobileVisualizationPage from "./mobileDataVisualizationPage/page";
import { Amaranth } from "next/font/google";

const amaranth = Amaranth({ subsets: ["latin"], weight: "700" });

export default function Home() {
  return (
    <main className="bg-primary min-h-screen pt-40">
      <div className="hidden lg:block">
        <LandingPage />
        <VisualizationPage />
      </div>
      <div className="lg:hidden">
        <MobileLandingPage />
        <MobileVisualizationPage />
      </div>
    </main>
  );
}
