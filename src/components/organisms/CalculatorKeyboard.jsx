import React from "react";

import { CalculatorKey } from "../atoms/CalculatorKey.jsx";

import styles from "./calculatorKeyboard.module.css";

const digit0 = () => {
  console.log("Digit 0");
};
const digit1 = () => {
  console.log("Digit 1");
};
const digit2 = () => {
  console.log("Digit 2");
};
const digit3 = () => {
  console.log("Digit 3");
};
const digit4 = () => {
  console.log("Digit 4");
};
const digit5 = () => {
  console.log("Digit 5");
};
const digit6 = () => {
  console.log("Digit 6");
};
const digit7 = () => {
  console.log("Digit 7");
};
const digit8 = () => {
  console.log("Digit 8");
};
const digit9 = () => {
  console.log("Digit 9");
};

const add = () => {
  console.log("Add");
};
const divide = () => {
  console.log("Divide");
};
const multiply = () => {
  console.log("Multiply");
};
const substract = () => {
  console.log("Substract");
};
const compute = () => {
  console.log("Compute");
};

const changeSign = () => {
  console.log("Change sign");
};
const clearAll = () => {
  console.log("Clear all");
};
const considerAsPercent = () => {
  console.log("Consider as percent");
};
const decimalSeparator = () => {
  console.log("Decimal separator");
};

const CALCULATOR_KEYS = [
  "AC",
  "+/-",
  "%",
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ",",
  "=",
];

const CALCULATOR_KEYS_AND_OPERATORS = {
  AC: clearAll,
  "+/-": changeSign,
  "%": considerAsPercent,
  "/": divide,
  "7": digit7,
  "8": digit8,
  "9": digit9,
  "*": multiply,
  "4": digit4,
  "5": digit5,
  "6": digit6,
  "-": substract,
  "1": digit1,
  "2": digit2,
  "3": digit3,
  "+": add,
  "0": digit0,
  ",": decimalSeparator,
  "=": compute,
};

export function CalculatorKeyboard() {
  return (
    <div className={styles.calculatorContainer}>
      {CALCULATOR_KEYS.map((calculatorKey) => (
        <CalculatorKey
          keyName={calculatorKey}
          onClick={() => CALCULATOR_KEYS_AND_OPERATORS[calculatorKey]()}
          key={calculatorKey}
        />
      ))}
    </div>
  );
}
