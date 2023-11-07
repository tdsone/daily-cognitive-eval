// unit tests for n back test

import { StroopTest, Color } from ".";

describe("StroopTest", () => {
  test("generates the correct number of trials", () => {
    const numberOfTrials = 50;
    const stroopTest = new StroopTest(numberOfTrials);
    stroopTest.generateTrials();

    expect(stroopTest.trials.length).toBe(numberOfTrials);
  });

  test("generates trials with words and colors from the Color enum", () => {
    const numberOfTrials = 10;
    const stroopTest = new StroopTest(numberOfTrials);
    stroopTest.generateTrials();

    stroopTest.trials.forEach((trial: any) => {
      expect(Object.values(Color)).toContain(trial.word);
      expect(Object.values(Color)).toContain(trial.color);
    });
  });

  test("correctly identifies congruent and incongruent trials", () => {
    const numberOfTrials = 10;
    const stroopTest = new StroopTest(numberOfTrials);
    stroopTest.generateTrials();

    stroopTest.trials.forEach((trial: any) => {
      expect(trial.isCongruent).toBe(trial.word === trial.color);
    });
  });

  test("calculates results correctly", () => {
    const numberOfTrials = 50;
    const stroopTest = new StroopTest(numberOfTrials);
    stroopTest.generateTrials();

    // Mock simulateUserResponse to return the correct color for testing purposes
    stroopTest.simulateUserResponse = (trial: any) => trial.color;

    stroopTest.runTest();
    const results = stroopTest.calculateResults();

    const congruentTrials = stroopTest.trials.filter(
      (trial: any) => trial.isCongruent
    );
    const incongruentTrials = stroopTest.trials.filter(
      (trial: any) => !trial.isCongruent
    );

    expect(results.congruent).toBe(congruentTrials.length);
    expect(results.incongruent).toBe(incongruentTrials.length);
  });
});
