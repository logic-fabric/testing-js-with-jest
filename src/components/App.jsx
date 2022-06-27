import React from "react";

import { Calculator } from "./organisms/Calculator.jsx";

import styles from "./app.module.css";

export function App() {
  return (
    <main>
      <h1>React Calculator</h1>

      <Calculator />
    </main>
  );
}
