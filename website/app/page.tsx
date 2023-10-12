import Image from "next/image";
import LandingPage from "./landingPage/page";
import VisualizationPage from "./dataVisualiztionPage/page";
import { Amaranth } from "next/font/google";

const amaranth = Amaranth({ subsets: ["latin"], weight: "700" });

export default function Home() {
  return (
    <main className="bg-primary min-h-screen pt-40">
      <div className="hidden lg:block">
        <LandingPage />
        <VisualizationPage />
      </div>
      <div className="lg:hidden items-center justify-center text-center bg-primary min-h-screen pt-0">
        <h1>
          <span className="text-7xl font-bold text-white text-stroke-3 md:hidden">
            <span className={amaranth.className}>
              This site is not optimized for mobile view yet, but it will be
              soon!
            </span>
          </span>
          <span className="text-9xl font-bold text-white text-stroke-3 hidden md:block lg:hidden">
            <span className={amaranth.className}>
              This site is not optimized for tablet view yet, but it will be
              soon!
            </span>
          </span>
        </h1>
      </div>
    </main>
  );
}
