import Image from "next/image";
import LandingPage from "./landingPage/page";
import VisualizationPage from "./dataVisualiztionPage/page";


export default function Home() {
  return (
    <main className="bg-primary min-h-screen pt-40">
      <LandingPage/>
      <VisualizationPage/>
    </main>
  );
}
