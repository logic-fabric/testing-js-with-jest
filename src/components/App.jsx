import React from "react";

import { CalculatorKeyboard } from "./organisms/CalculatorKeyboard.jsx";

import styles from "./app.module.css";

export function App() {
  return (
    <main>
      <h1>React Calculator</h1>

      <CalculatorKeyboard />
    </main>
  );
}
