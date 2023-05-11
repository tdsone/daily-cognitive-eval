// Test the modules in this folder

import { matrixGeneration } from "./generate_tests";

test("Matrix Generation Code Runs", () => {
  // run matrix generation without errors
  expect(matrixGeneration()).toBeUndefined();
});
