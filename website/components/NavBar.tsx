import Link from "next/link";
import { Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';


const NormalNavbar: React.FC = () => {
  return (
    <nav className="z-10 h-20 items-center fixed w-full">
      <div className=" h-12 flex justify-evenly text-darkgreentext border-none text-sm bg-navbarbg overflow-y-hidden py-10">
        <a href={"/"} className="items-center justify-center flex">
        home
        </a>
        <h1 className="items-center justify-center flex">|</h1>
        <a href={"#AirPollutants"} className="items-center justify-center flex">
        pollutants
        </a>
        <h1 className="items-center justify-center flex">|</h1>
        <h1 className="items-center justify-center flex">predictors</h1>
        <h1 className="items-center justify-center flex">|</h1>
        <h1 className="items-center justify-center flex">scatterplots</h1>
        <h1 className="items-center justify-center flex">|</h1>
        <h1 className="items-center justify-center flex">ml libraries</h1>
        <h1 className="items-center justify-center flex">|</h1>
        <h1 className="items-center justify-center flex">linear regression model</h1>
        <h1 className="items-center justify-center flex">|</h1>
        <h1 className="items-center justify-center flex">k-fold</h1>
        <h1 className="items-center justify-center flex">|</h1>
        <h1 className="items-center justify-center flex">measuring performance</h1>
        <h1 className="items-center justify-center flex">|</h1>
        <h1 className="items-center justify-center flex">trained linear models</h1>
        <h1 className="items-center justify-center flex">|</h1>
        <h1 className="items-center justify-center flex">program code & raw output</h1>
      </div>
    </nav>
  );
};

export default NormalNavbar;