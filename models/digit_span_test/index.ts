// Generate digit span tests based on
// https://github.com/tadorfer/digit-span-test/blob/master/digitspantest_fw.py

type DigitSequence = {
  digits: string;
  userResponse: string;
};

class DigitSpanTest {
  title: string;
  instructions: string;
  digitSequences: DigitSequence[];
  score: number;

  constructor() {
    this.title = "Digit Span Test for Working Memory Evaluation";
    this.instructions = `This is a Digit Span Test that evaluates working memory performance.
        Try to remember the digits in the order that they are presented and repeat
        them once the sequence has stopped. If successful, the length of the 
        sequence will increase by 1. You can enter three incorrect sequences before the 
        test gets terminated. We will start out with 3 digits.`;
    this.digitSequences = [];
    this.score = 0;
  }

  generateSequence(digits: number): string {
    const sequence: number[] = [];
    while (sequence.length < digits) {
      const randomNumber = Math.floor(Math.random() * 10);
      if (
        sequence.length === 0 ||
        (sequence[sequence.length - 1] !== randomNumber - 1 &&
          sequence[sequence.length - 1] !== randomNumber + 1)
      ) {
        sequence.push(randomNumber);
      }
    }
    return sequence.join("");
  }

  addDigitSequence(digits: number, userResponse: string): void {
    const digitSequence: DigitSequence = {
      digits: this.generateSequence(digits),
      userResponse: userResponse,
    };
    this.digitSequences.push(digitSequence);
  }

  calculateScore(): void {
    let correctSequences = 0;
    for (const sequence of this.digitSequences) {
      if (sequence.digits === sequence.userResponse) {
        correctSequences += 1;
      }
    }
    this.score = correctSequences;
  }
}

function createDigitSpanTest(): DigitSpanTest {
  const digitSpanTest = new DigitSpanTest();
  // Add logic to execute the test and store the user's responses, as needed.
  return digitSpanTest;
}
