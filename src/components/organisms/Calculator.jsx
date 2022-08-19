import React from "react";

import { CalculatorDisplay } from "../atoms/CalculatorDisplay.jsx";
import { CalculatorKeyboard } from "../molecules/CalculatorKeyboard.jsx";

import styles from "./calculator.module.css";

export function Calculator() {
  return (
    <div className={styles.calculatorContainer}>
      <CalculatorDisplay />

      <CalculatorKeyboard />
    </div>
  );
}
