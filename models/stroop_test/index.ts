// generate stroop tests

enum Color {
  Red = "red",
  Blue = "blue",
  Green = "green",
  Yellow = "yellow",
}

type StroopTrial = {
  word: Color;
  color: Color;
  isCongruent: boolean;
};

class StroopTest {
  numberOfTrials: number;
  trials: StroopTrial[];
  results: boolean[];

  constructor(numberOfTrials: number) {
    this.numberOfTrials = numberOfTrials;
    this.trials = [];
    this.results = [];
  }

  private generateTrial(): StroopTrial {
    const colors = Object.values(Color);
    const word = colors[Math.floor(Math.random() * colors.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const isCongruent = word === color;
    return { word, color, isCongruent };
  }

  generateTrials(): void {
    for (let i = 0; i < this.numberOfTrials; i++) {
      this.trials.push(this.generateTrial());
    }
  }

  runTest(): void {
    for (const trial of this.trials) {
      // Simulate the user's response here or integrate with your frontend code to get the user's response
      const userResponse = this.simulateUserResponse(trial);
      this.results.push(userResponse === trial.color);
    }
  }

  private simulateUserResponse(trial: StroopTrial): Color {
    // Simulate the user's response; replace this with actual user input when integrating with frontend code
    return trial.color;
  }

  calculateResults(): { congruent: number; incongruent: number } {
    let congruentCorrect = 0;
    let incongruentCorrect = 0;

    for (let i = 0; i < this.trials.length; i++) {
      if (this.results[i]) {
        if (this.trials[i].isCongruent) {
          congruentCorrect++;
        } else {
          incongruentCorrect++;
        }
      }
    }

    return {
      congruent: congruentCorrect,
      incongruent: incongruentCorrect,
    };
  }
}

// Example usage:

// const numberOfTrials = 50;
// const stroopTest = new StroopTest(numberOfTrials);

// stroopTest.generateTrials();
// stroopTest.runTest();
// const results = stroopTest.calculateResults();

// console.log("Results:");
// console.log("Congruent correct:", results.congruent);
// console.log("Incongruent correct:", results.incongruent);
