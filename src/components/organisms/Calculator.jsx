import React from "react";

import { CalculatorDisplay } from "../molecules/CalculatorDisplay";
import { CalculatorKeyboard } from "./CalculatorKeyboard.jsx";

import styles from "./calculator.module.css";

export function Calculator() {
  return (
    <div className={styles.calculatorContainer}>
      <CalculatorDisplay />

      <CalculatorKeyboard />
    </div>
  );
}
