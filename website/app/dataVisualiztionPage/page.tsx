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

  const pythonCode = `import pandas as pd
  from sklearn.model_selection import train_test_split
  from sklearn.linear_model import LinearRegression
  from sklearn.preprocessing import OneHotEncoder
  from sklearn.compose import ColumnTransformer
  from sklearn.pipeline import Pipeline
  from sklearn.metrics import mean_squared_error, r2_score
  
  data = pd.read_csv('data.csv')
  
  X = data[['PAT_ZIP', 'RACE']]
  y = data['LENGTH_OF_STAY']
  
  X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
  
  categorical_features = ['Zip Code', 'Race']
  categorical_transformer = Pipeline([
      ('onehot', OneHotEncoder(sparse=false, handle_unknown='ignore'))
  ])
  
  preprocessor = ColumnTransformer(
      transformers=[
          ('cat', categorical_transformer, categorical_features)
      ])
  
  # Create a pipeline with preprocessing and a linear regression model
  model = Pipeline([
      ('preprocessor', preprocessor),
      ('regressor', LinearRegression())
  ])
  
  model.fit(X_train, y_train)
  
  y_pred = model.predict(X_test)
  
  mse = mean_squared_error(y_test, y_pred)
  r2 = r2_score(y_test, y_pred)
  
  print(f"Mean Squared Error: {mse}")
  print(f"R-squared (R²): {r2}")
  
  coefficients = model.named_steps['regressor'].coef_
  intercept = model.named_steps['regressor'].intercept_
  print("Coefficients:", coefficients)
  print("Intercept:", intercept)`;

  return (
    <main className="">
              <div className="h-6 bg-darkgreen mx-8 rounded-xl mt-12"></div>

      <div className="flex flex-row">
        <div className="mt-20  w-1/2">
          <h1 className="text-3xl ml-12 underline mb-4 text-darkgreentext">
            <span className={amaranth.className}>Code Title</span>
          </h1>

          <pre
            style={{
              backgroundColor: "#E6ECE1",
              padding: "10px",
              borderRadius: "5px",
              whiteSpace: "pre-wrap",
              color: "#4E774F",
              position: "relative",
            }}
          >
            <code
              style={{
                counterReset: "line",
              }}
            >
              {pythonCode.split("\n").map((line, index) => (
                <div
                  key={index}
                  style={{
                    display: "block",
                    counterIncrement: "line",
                    paddingLeft: "2em",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: "2em",
                      textAlign: "right",
                      marginRight: "1em",
                      color: "#999",
                    }}
                  >
                    {index + 1}
                  </span>
                  {line}
                </div>
              ))}
            </code>
          </pre>
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
