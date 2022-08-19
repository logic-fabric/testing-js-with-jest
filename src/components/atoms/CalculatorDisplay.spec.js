import React from "react";
import { render } from "react-testing-library";
import "react-testing-library/cleanup-after-each";

import { CalculatorDisplay } from "./CalculatorDisplay.jsx";

test("CalculatorDisplay renders", () => {
  const { debug } = render(<CalculatorDisplay />);

  debug();
});
