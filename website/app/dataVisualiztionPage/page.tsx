"use client";
import Image from "next/image";
import { Amaranth, Quicksand } from "next/font/google";
import React, { useState, useEffect } from "react";

const amaranth = Amaranth({ subsets: ["latin"], weight: "700" });
const quicksand1 = Quicksand({ subsets: ["latin"], weight: "400" });
const quicksand2 = Quicksand({ subsets: ["latin"], weight: "700" });

export default function VisualizationPage() {
  const [showImage, setShowImage] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [buttonText, setButtonText] = useState("Run Program");

  const handleClick = () => {
    if (!buttonClicked) {
      setButtonText("Compiling . . .");
      compileCode();
    }
  };

  const compileCode = () => {
    // Simulate a compilation process with a timer (e.g., 3 seconds)
    setTimeout(() => {
      setShowImage(true);
      setButtonClicked(true);
      setButtonText("Compiled!");
    }, 3000); // 3000 milliseconds (3 seconds)
  };

  return (
    <main className="">
      <div className="flex flex-row">
        <div className="mt-20  w-1/2">
          <h1 className="text-3xl ml-12 underline mb-4 text-darkgreentext">
            <span className={amaranth.className}>Linear Regression</span>
          </h1>
          <button
            className="rounded-lg hover:animate-pulse ml-12 mt-6 mb-12 w-full select-none"
            onClick={handleClick}
            disabled={buttonClicked}
            style={{
              backgroundColor: "#174B41",
              color: "#E6ECE1",
              padding: "10px 20px",
              border: "none",
              cursor: buttonClicked ? "not-allowed" : "pointer",
            }}
          >
            <span className={quicksand2.className}>{buttonText}</span>
          </button>
        </div>
        {showImage && (
          <div className="ml-16 flex flex-col items-center justify-center select-none">
            <Image
              className="rounded-xl"
              src="/O3_CO_LinePlot.png"
              alt="Your Image"
              width={750}
              height={750}
            />
            <h1 className="italic pt-4 text-lightgreen text-lg">
              <span className={quicksand1.className}>Insert Caption</span>
            </h1>
          </div>
        )}
      </div>
    </main>
  );
}
