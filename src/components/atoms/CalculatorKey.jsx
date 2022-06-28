import React from "react";

import styles from "./calculatorKey.module.css";

export function CalculatorKey(props) {
  const { keyName, onClick } = props;

  return (
    <button
      className={`${styles.calculatorKey} ${
        ["AC", "+/-", "%"].includes(keyName)
          ? styles.specialKey
          : ["/", "*", "-", "+", "="].includes(keyName)
          ? styles.operatorKey
          : ""
      } ${keyName === "0" ? styles.zeroKey : ""}`}
      onClick={onClick}
      key={`key-${keyName}`}
    >
      {keyName}
    </button>
  );
}
