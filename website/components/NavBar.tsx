import Link from "next/link";

const NormalNavbar: React.FC = () => {
  return (
    <nav className="z-10 h-20 items-center fixed w-full">
      <div className=" h-12 flex justify-between text-darkgreentext border-none text-xl bg-navbarbg overflow-y-hidden py-10">
        <a href={"/"} className="ml-24 items-center justify-center flex">
        home
        </a>
        <h1 className="items-center justify-center flex">|</h1>
        <h1 className="items-center justify-center flex">pollutants</h1>
        <h1 className="items-center justify-center flex">|</h1>
        <h1 className="items-center justify-center flex">predictors</h1>
        <h1 className="items-center justify-center flex">|</h1>
        <h1 className="items-center justify-center flex">scatterplots</h1>
        <h1 className="items-center justify-center flex">|</h1>
        <h1 className="items-center justify-center flex">ml libraries</h1>
        <h1 className="items-center justify-center flex">|</h1>
        <h1 className="items-center justify-center flex">linear regression model</h1>
        <h1 className="items-center justify-center flex">|</h1>
        <h1 className="items-center justify-center flex mr-24">k-fold</h1>
      </div>
    </nav>
  );
};

export default NormalNavbar;