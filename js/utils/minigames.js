// Minigames
// Math Game
const mathQuestionsHard = [
  {
    question: "log2(32)",
    answer: "5",
    wrong: () => ["2", "4", "6"],
  },
  {
    question: "ln(e^2)",
    answer: "2",
    wrong: () => ["e", "1", "undefined"],
  },
  {
    question: "e^ln(2)",
    answer: "2",
    wrong: () => ["e", "1.747465", "3.77778"],
  },
  {
    question: "e",
    answer: "2.71",
    wrong: () => ["3.14", "1.61", "√-1"],
  },
  {
    question: "Log(5) + log(20)",
    answer: "2",
    wrong: () => ["0", "-1", "1.30975"],
  },
  {
    question: "ln(e^3/e^2)",
    answer: "1",
    wrong: () => ["e^2", "1.555", "2"],
  },
  {
    question: "2.4949574949^0",
    answer: "1",
    wrong: () => ["0", "undefined", "5.737636"],
  },
  {
    question: "10^2",
    answer: "100",
    wrong: () => ["20", "200", "12"],
  },
  {
    question: "5^3",
    answer: "125",
    wrong: () => ["15", "500", "8"],
  },
  {
    question: "7^2",
    answer: "49",
    wrong: () => ["14", "70", "9"],
  },
  {
    question: "3^4",
    answer: "81",
    wrong: () => ["12", "7", "34"],
  },
  {
    question: "2^6",
    answer: "64",
    wrong: () => ["12", "8", "63"],
  },
  {
    question: "(1/3)^-2",
    answer: "9",
    wrong: () => ["-1/9", "1/9", "-9"],
  },
  {
    question: "9^(1/2)",
    answer: "3",
    wrong: () => ["81", "1/9", "1/3"],
  },
  {
    question: "i",
    answer: "√-1",
    wrong: () => ["3.14", "1.61", "2.71"],
  },
  {
    question: "√ln(e^36)",
    answer: "6",
    wrong: () => ["12.4845", "8", "e"],
  },
];

const trigValues = [
  {
    angle: "0",
    sin: "0",
    cos: "1",
    tan: "0",
    csc: "undefined",
    sec: "1",
    cot: "undefined",
  },
  {
    angle: "π/6",
    sin: "1/2",
    cos: "√3/2",
    tan: "√3/3",
    csc: "2",
    sec: "2√3/3",
    cot: "√3",
  },
  {
    angle: "π/3",
    sin: "√3/2",
    cos: "1/2",
    tan: "√3",
    csc: "2√3/3",
    sec: "2",
    cot: "√3/3",
  },
  {
    angle: "π/2",
    sin: "1",
    cos: "0",
    tan: "undefined",
    csc: "1",
    sec: "undefined",
    cot: "0",
  },
  {
    angle: "2π/3",
    sin: "√3/2",
    cos: "-1/2",
    tan: "-√3",
    csc: "2√3/3",
    sec: "-2",
    cot: "-√3/3",
  },
  {
    angle: "5π/6",
    sin: "1/2",
    cos: "-√3/2",
    tan: "-√3/3",
    csc: "2",
    sec: "-2√3/3",
    cot: "-√3",
  },
  {
    angle: "π",
    sin: "0",
    cos: "-1",
    tan: "0",
    csc: "undefined",
    sec: "-1",
    cot: "undefined",
  },
  {
    angle: "7π/6",
    sin: "-1/2",
    cos: "-√3/2",
    tan: "√3/3",
    csc: "-2",
    sec: "-2√3/3",
    cot: "√3",
  },
  {
    angle: "4π/3",
    sin: "-√3/2",
    cos: "-1/2",
    tan: "√3",
    csc: "-2√3/3",
    sec: "-2",
    cot: "√3/3",
  },
  {
    angle: "3π/2",
    sin: "-1",
    cos: "0",
    tan: "undefined",
    csc: "-1",
    sec: "undefined",
    cot: "0",
  },
  {
    angle: "5π/3",
    sin: "-√3/2",
    cos: "1/2",
    tan: "-√3",
    csc: "-2√3/3",
    sec: "2",
    cot: "-√3/3",
  },
  {
    angle: "11π/6",
    sin: "-1/2",
    cos: "√3/2",
    tan: "-√3/3",
    csc: "-2",
    sec: "2√3/3",
    cot: "-√3",
  },
];

const trigIdentities = [
  {
    question: "sin²(x) + cos²(x)",
    answer: "1",
    wrong: () => ["0", "tan²(x)", "2sin(x)cos(x)"],
  },
  {
    question: "1 + tan²(x)",
    answer: "sec²(x)",
    wrong: () => ["csc²(x)", "1", "cot²(x)"],
  },
  {
    question: "1 + cot²(x)",
    answer: "csc²(x)",
    wrong: () => ["sec²(x)", "1", "tan²(x)"],
  },
  {
    question: "e^iπ + 1",
    answer: "0",
    wrong: () => ["1", "-1", "2sin(x)cos(x)"],
  },
  {
    question: "1/sin(x)",
    answer: "csc(x)",
    wrong: () => ["sec(x)", "cot(x)", "tan(x)"],
  },
  {
    question: "1/cos(x)",
    answer: "sec(x)",
    wrong: () => ["csc(x)", "cot(x)", "sin(x)"],
  },
  {
    question: "1/tan(x)",
    answer: "cot(x)",
    wrong: () => ["tan(x)", "sec(x)", "csc(x)"],
  },
  {
    question: "1/csc(x)",
    answer: "sin(x)",
    wrong: () => ["cos(x)", "sec(x)", "cot(x)"],
  },
  {
    question: "1/sec(x)",
    answer: "cos(x)",
    wrong: () => ["sin(x)", "csc(x)", "cot(x)"],
  },
  {
    question: "1/cot(x)",
    answer: "tan(x)",
    wrong: () => ["sin(x)", "sec(x)", "csc(x)"],
  },
  {
    question: "sin(x)/cos(x)",
    answer: "tan(x)",
    wrong: () => ["cot(x)", "sec(x)", "csc(x)"],
  },
  {
    question: "cos(x)/sin(x)",
    answer: "cot(x)",
    wrong: () => ["tan(x)", "sec(x)", "csc(x)"],
  },
  {
    question: "sin(π/2 - x)",
    answer: "cos(x)",
    wrong: () => ["sin(x)", "tan(x)", "sec(x)"],
  },
  {
    question: "cos(π/2 - x)",
    answer: "sin(x)",
    wrong: () => ["cos(x)", "cot(x)", "csc(x)"],
  },
  {
    question: "tan(π/2 - x)",
    answer: "cot(x)",
    wrong: () => ["tan(x)", "sec(x)", "csc(x)"],
  },
  {
    question: "cot(π/2 - x)",
    answer: "tan(x)",
    wrong: () => ["cot(x)", "sin(x)", "cos(x)"],
  },
  {
    question: "sec(π/2 - x)",
    answer: "csc(x)",
    wrong: () => ["sec(x)", "cot(x)", "cos(x)"],
  },
  {
    question: "csc(π/2 - x)",
    answer: "sec(x)",
    wrong: () => ["csc(x)", "tan(x)", "sin(x)"],
  },
  {
    question: "sin(-x)",
    answer: "-sin(x)",
    wrong: () => ["sin(x)", "-cos(x)", "cos(x)"],
  },
  {
    question: "cos(-x)",
    answer: "cos(x)",
    wrong: () => ["-cos(x)", "sin(x)", "-sin(x)"],
  },
  {
    question: "tan(-x)",
    answer: "-tan(x)",
    wrong: () => ["tan(x)", "-cot(x)", "cot(x)"],
  },
  {
    question: "csc(-x)",
    answer: "-csc(x)",
    wrong: () => ["csc(x)", "-sec(x)", "sec(x)"],
  },
  {
    question: "sec(-x)",
    answer: "sec(x)",
    wrong: () => ["-sec(x)", "csc(x)", "-csc(x)"],
  },
  {
    question: "cot(-x)",
    answer: "-cot(x)",
    wrong: () => ["cot(x)", "-tan(x)", "tan(x)"],
  },
  {
    question: "sin(a + b)",
    answer: "sin(a)cos(b) + cos(a)sin(b)",
    wrong: () => [
      "sin(a)cos(b) - cos(a)sin(b)",
      "sin(a)sin(b) + cos(a)cos(b)",
      "cos(a)cos(b) - sin(a)sin(b)",
    ],
  },
  {
    question: "sin(a - b)",
    answer: "sin(a)cos(b) - cos(a)sin(b)",
    wrong: () => [
      "sin(a)cos(b) + cos(a)sin(b)",
      "sin(a)sin(b) - cos(a)cos(b)",
      "cos(a)cos(b) + sin(a)sin(b)",
    ],
  },
  {
    question: "cos(a + b)",
    answer: "cos(a)cos(b) - sin(a)sin(b)",
    wrong: () => [
      "cos(a)cos(b) + sin(a)sin(b)",
      "sin(a)cos(b) + cos(a)sin(b)",
      "sin(a)sin(b) - cos(a)cos(b)",
    ],
  },
  {
    question: "cos(a - b)",
    answer: "cos(a)cos(b) + sin(a)sin(b)",
    wrong: () => [
      "cos(a)cos(b) - sin(a)sin(b)",
      "sin(a)cos(b) - cos(a)sin(b)",
      "sin(a)sin(b) + cos(a)cos(b)",
    ],
  },
  {
    question: "sin(2x)",
    answer: "2sin(x)cos(x)",
    wrong: () => ["sin²(x) + cos²(x)", "2sin(x)", "2cos(x)"],
  },
  {
    question: "cos(2x)",
    answer: "cos²(x) - sin²(x)",
    wrong: () => ["sin²(x) + cos²(x)", "2sin(x)cos(x)", "cos(x) - sin(x)"],
  },
  {
    question: "cos(2x)",
    answer: "2cos²(x) - 1",
    wrong: () => ["2sin²(x) - 1", "1 - 2cos²(x)", "cos²(x) + sin²(x)"],
  },
  {
    question: "cos(2x)",
    answer: "1 - 2sin²(x)",
    wrong: () => ["2sin²(x) - 1", "2cos²(x) - 1", "sin²(x) + cos²(x)"],
  },
  {
    question: "sin²(x/2)",
    answer: "(1 - cos(x))/2",
    wrong: () => ["(1 + cos(x))/2", "(1 - sin(x))/2", "(1 + sin(x))/2"],
  },
  {
    question: "cos²(x/2)",
    answer: "(1 + cos(x))/2",
    wrong: () => ["(1 - cos(x))/2", "(1 + sin(x))/2", "(1 - sin(x))/2"],
  },
  {
    question: "sin(a) + sin(b)",
    answer: "2sin((a+b)/2)cos((a-b)/2)",
    wrong: () => [
      "2cos((a+b)/2)sin((a-b)/2)",
      "2sin(a+b)cos(a-b)",
      "sin(a+b)cos(a-b)",
    ],
  },
  {
    question: "sin(a) - sin(b)",
    answer: "2cos((a+b)/2)sin((a-b)/2)",
    wrong: () => [
      "2sin((a+b)/2)cos((a-b)/2)",
      "2cos(a+b)sin(a-b)",
      "sin(a-b)cos(a+b)",
    ],
  },
  {
    question: "cos(a) + cos(b)",
    answer: "2cos((a+b)/2)cos((a-b)/2)",
    wrong: () => [
      "2sin((a+b)/2)sin((a-b)/2)",
      "2cos(a+b)cos(a-b)",
      "cos(a+b) + cos(a-b)",
    ],
  },
  {
    question: "cos(a) - cos(b)",
    answer: "-2sin((a+b)/2)sin((a-b)/2)",
    wrong: () => [
      "2sin((a+b)/2)sin((a-b)/2)",
      "2cos((a+b)/2)sin((a-b)/2)",
      "-2cos((a+b)/2)cos((a-b)/2)",
    ],
  },
  {
    question: "sin(a)sin(b)",
    answer: "[cos(a-b) - cos(a+b)]/2",
    wrong: () => [
      "[cos(a-b) + cos(a+b)]/2",
      "[sin(a-b) - sin(a+b)]/2",
      "cos(a-b) - cos(a+b)",
    ],
  },
  {
    question: "cos(a)cos(b)",
    answer: "[cos(a-b) + cos(a+b)]/2",
    wrong: () => [
      "[cos(a-b) - cos(a+b)]/2",
      "[sin(a-b) + sin(a+b)]/2",
      "cos(a-b) + cos(a+b)",
    ],
  },
  {
    question: "sin(a)cos(b)",
    answer: "[sin(a+b) + sin(a-b)]/2",
    wrong: () => [
      "[sin(a+b) - sin(a-b)]/2",
      "[cos(a+b) + cos(a-b)]/2",
      "sin(a+b) + sin(a-b)",
    ],
  },
];

function getWrongTrigAnswer(chosenFunc, existingAnswers) {
  let result;

  do {
    result =
      trigValues[Math.floor(Math.random() * trigValues.length)][chosenFunc];
  } while (existingAnswers.includes(result));

  return result;
}
let signSet1 = ["+", "-"];
let signSet2 = ["*", "/"];
let time = 0;
let timerInterval = setInterval(() => {
  if (time > 0) {
    time--;
    let timerDisplay = document.getElementById("MathTimer");
    if (timerDisplay) {
      document.getElementById("MathTimer").innerText = `Timer: ${time}`;
    }
  }
  if (time == 0) {
    processMathGame();
  }
}, 1000);
function processMathGame(button) {
  let button1 = document.getElementById("answerButtonAX1");
  let button2 = document.getElementById("answerButtonAX2");
  let button3 = document.getElementById("answerButtonAX3");
  let button4 = document.getElementById("answerButtonAX4");
  let display1 = document.getElementById("MathIntro");
  let display2 = document.getElementById("MathTimer");
  if (button && display1) {
    if (time == 0) {
      time = 30;
      if (player.ax.mathGamePoints.lt(20)) {
        let num1 = Math.floor(Math.random() * 100);
        let num2 = Math.floor(Math.random() * 100);
        let sign = signSet1[Math.floor(Math.random() * 2)];
        let answer;
        switch (sign) {
          case "+":
            answer = num1 + num2;

            break;
          case "-":
            answer = num1 - num2;

            break;
        }
        display1.innerText = `${num1} ${sign} ${num2}`;
        display1.dataset.answer = answer;
        let allAnswers = [
          answer,
          answer + Math.floor(Math.random() * 10),
          answer - Math.floor(Math.random() * 10),
          num2,
        ];
        const numbers = [0, 1, 2, 3];
        const shuffled = [...numbers].sort(() => Math.random() - 0.5);

        button1.innerText = allAnswers[shuffled[0]];
        button2.innerText = allAnswers[shuffled[1]];
        button3.innerText = allAnswers[shuffled[2]];
        button4.innerText = allAnswers[shuffled[3]];
      } else if (player.ax.mathGamePoints.lt(40)) {
        let num1 = Math.floor(Math.random() * 100);
        let num2 = Math.floor(Math.random() * 100);
        let sign = signSet2[Math.floor(Math.random() * 2)];
        let answer;
        switch (sign) {
          case "*":
            answer = num1 * num2;

            break;
          case "/":
            num2 = Math.floor(Math.random() * 20) + 1;
            answer = Math.floor(Math.random() * 20) + 1;
            num1 = num2 * answer;
            break;
        }
        display1.innerText = `${num1} ${sign} ${num2}`;
        display1.dataset.answer = answer;
        let allAnswers = [
          answer,
          answer + Math.floor(Math.random() * 10),
          answer - Math.floor(Math.random() * 10),
          num2,
        ];
        const numbers = [0, 1, 2, 3];
        const shuffled = [...numbers].sort(() => Math.random() - 0.5);

        button1.innerText = allAnswers[shuffled[0]];
        button2.innerText = allAnswers[shuffled[1]];
        button3.innerText = allAnswers[shuffled[2]];
        button4.innerText = allAnswers[shuffled[3]];
      } else if (player.ax.mathGamePoints.lt(70)) {
        let randomN = Math.floor(Math.random() * mathQuestionsHard.length);
        let question = mathQuestionsHard[randomN];

        display1.innerText = question.question;
        display1.dataset.answer = question.answer;

        let allAnswers = [question.answer, ...question.wrong()];
        const numbers = [0, 1, 2, 3];
        const shuffled = [...numbers].sort(() => Math.random() - 0.5);
        button1.innerText = allAnswers[shuffled[0]];
        button2.innerText = allAnswers[shuffled[1]];
        button3.innerText = allAnswers[shuffled[2]];
        button4.innerText = allAnswers[shuffled[3]];
      } else {
        let trigFunctions = ["sin", "cos", "tan", "sec", "csc", "cot"];
        let randomTrig = Math.floor(Math.random() * trigFunctions.length);
        let chosenFunc = trigFunctions[randomTrig];

        let randomN = Math.floor(Math.random() * trigValues.length);
        let angle = trigValues[randomN].angle;
        let answer = trigValues[randomN][chosenFunc];
        let question = `${chosenFunc}(${angle})`;

        display1.innerText = question;
        display1.dataset.answer = answer;
        let allAnswers = [answer];
        allAnswers.push(getWrongTrigAnswer(chosenFunc, allAnswers));
        allAnswers.push(getWrongTrigAnswer(chosenFunc, allAnswers));
        allAnswers.push(getWrongTrigAnswer(chosenFunc, allAnswers));
        const numbers = [0, 1, 2, 3];
        const shuffled = [...numbers].sort(() => Math.random() - 0.5);
        button1.innerText = allAnswers[shuffled[0]];
        button2.innerText = allAnswers[shuffled[1]];
        button3.innerText = allAnswers[shuffled[2]];
        button4.innerText = allAnswers[shuffled[3]];
      }
    }
    if (button.innerText == display1.dataset.answer) {
      if (display1.dataset.answer != "7") {
        player.ax.mathGamePoints = player.ax.mathGamePoints.add(1);
      }

      time = 30;
      if (player.ax.mathGamePoints.lt(20)) {
        let num1 = Math.floor(Math.random() * 100);
        let num2 = Math.floor(Math.random() * 100);
        let sign = signSet1[Math.floor(Math.random() * 2)];
        let answer;
        switch (sign) {
          case "+":
            answer = num1 + num2;

            break;
          case "-":
            answer = num1 - num2;

            break;
        }
        display1.innerText = `${num1} ${sign} ${num2}`;
        display1.dataset.answer = answer;
        let allAnswers = [
          answer,
          answer + Math.floor(Math.random() * 10),
          answer - Math.floor(Math.random() * 10),
          num2,
        ];
        const numbers = [0, 1, 2, 3];
        const shuffled = [...numbers].sort(() => Math.random() - 0.5);

        button1.innerText = allAnswers[shuffled[0]];
        button2.innerText = allAnswers[shuffled[1]];
        button3.innerText = allAnswers[shuffled[2]];
        button4.innerText = allAnswers[shuffled[3]];
      } else if (player.ax.mathGamePoints.lt(40)) {
        let num1 = Math.floor(Math.random() * 100);
        let num2 = Math.floor(Math.random() * 100);
        let sign = signSet2[Math.floor(Math.random() * 2)];
        let answer;
        switch (sign) {
          case "*":
            answer = num1 * num2;

            break;
          case "/":
            num2 = Math.floor(Math.random() * 20) + 1;
            answer = Math.floor(Math.random() * 20) + 1;
            num1 = num2 * answer;

            break;
        }
        display1.innerText = `${num1} ${sign} ${num2}`;
        display1.dataset.answer = answer;
        let allAnswers = [
          answer,
          answer + Math.floor(Math.random() * 10),
          answer - Math.floor(Math.random() * 10),
          num2,
        ];
        const numbers = [0, 1, 2, 3];
        const shuffled = [...numbers].sort(() => Math.random() - 0.5);

        button1.innerText = allAnswers[shuffled[0]];
        button2.innerText = allAnswers[shuffled[1]];
        button3.innerText = allAnswers[shuffled[2]];
        button4.innerText = allAnswers[shuffled[3]];
      } else if (player.ax.mathGamePoints.lt(70)) {
        let randomN = Math.floor(Math.random() * mathQuestionsHard.length);
        let question = mathQuestionsHard[randomN];

        display1.innerText = question.question;
        display1.dataset.answer = question.answer;
        let allAnswers = [question.answer, ...question.wrong()];
        const numbers = [0, 1, 2, 3];
        const shuffled = [...numbers].sort(() => Math.random() - 0.5);
        button1.innerText = allAnswers[shuffled[0]];
        button2.innerText = allAnswers[shuffled[1]];
        button3.innerText = allAnswers[shuffled[2]];
        button4.innerText = allAnswers[shuffled[3]];
      } else {
        let trigFunctions = ["sin", "cos", "tan", "sec", "csc", "cot"];
        let randomTrig = Math.floor(Math.random() * trigFunctions.length);
        let chosenFunc = trigFunctions[randomTrig];

        let randomN = Math.floor(Math.random() * trigValues.length);
        let angle = trigValues[randomN].angle;
        let answer = trigValues[randomN][chosenFunc];
        let question = `${chosenFunc}(${angle})`;

        display1.innerText = question;
        display1.dataset.answer = answer;
        let allAnswers = [answer];
        allAnswers.push(getWrongTrigAnswer(chosenFunc, allAnswers));
        allAnswers.push(getWrongTrigAnswer(chosenFunc, allAnswers));
        allAnswers.push(getWrongTrigAnswer(chosenFunc, allAnswers));
        const numbers = [0, 1, 2, 3];
        const shuffled = [...numbers].sort(() => Math.random() - 0.5);
        button1.innerText = allAnswers[shuffled[0]];
        button2.innerText = allAnswers[shuffled[1]];
        button3.innerText = allAnswers[shuffled[2]];
        button4.innerText = allAnswers[shuffled[3]];
      }
    } else {
      time = 30;
      if (player.ax.mathGamePoints.lt(20)) {
        let num1 = Math.floor(Math.random() * 100);
        let num2 = Math.floor(Math.random() * 100);
        let sign = signSet1[Math.floor(Math.random() * 2)];
        let answer;
        switch (sign) {
          case "+":
            answer = num1 + num2;

            break;
          case "-":
            answer = num1 - num2;

            break;
        }
        display1.innerText = `${num1} ${sign} ${num2}`;
        display1.dataset.answer = answer;
        let allAnswers = [
          answer,
          answer + Math.floor(Math.random() * 10),
          answer - Math.floor(Math.random() * 10),
          num2,
        ];
        const numbers = [0, 1, 2, 3];
        const shuffled = [...numbers].sort(() => Math.random() - 0.5);

        button1.innerText = allAnswers[shuffled[0]];
        button2.innerText = allAnswers[shuffled[1]];
        button3.innerText = allAnswers[shuffled[2]];
        button4.innerText = allAnswers[shuffled[3]];
      } else if (player.ax.mathGamePoints.lt(40)) {
        let num1 = Math.floor(Math.random() * 100);
        let num2 = Math.floor(Math.random() * 100);
        let sign = signSet2[Math.floor(Math.random() * 2)];
        let answer;
        switch (sign) {
          case "*":
            answer = num1 * num2;

            break;
          case "/":
            num2 = Math.floor(Math.random() * 20) + 1;
            answer = Math.floor(Math.random() * 20) + 1;
            num1 = num2 * answer;

            break;
        }
        display1.innerText = `${num1} ${sign} ${num2}`;
        display1.dataset.answer = answer;
        let allAnswers = [
          answer,
          answer + Math.floor(Math.random() * 10),
          answer - Math.floor(Math.random() * 10),
          num2,
        ];
        const numbers = [0, 1, 2, 3];
        const shuffled = [...numbers].sort(() => Math.random() - 0.5);

        button1.innerText = allAnswers[shuffled[0]];
        button2.innerText = allAnswers[shuffled[1]];
        button3.innerText = allAnswers[shuffled[2]];
        button4.innerText = allAnswers[shuffled[3]];
      } else if (player.ax.mathGamePoints.lt(70)) {
        let randomN = Math.floor(Math.random() * mathQuestionsHard.length);
        let question = mathQuestionsHard[randomN];

        display1.innerText = question.question;
        display1.dataset.answer = question.answer;
        let allAnswers = [question.answer, ...question.wrong()];
        const numbers = [0, 1, 2, 3];
        const shuffled = [...numbers].sort(() => Math.random() - 0.5);
        button1.innerText = allAnswers[shuffled[0]];
        button2.innerText = allAnswers[shuffled[1]];
        button3.innerText = allAnswers[shuffled[2]];
        button4.innerText = allAnswers[shuffled[3]];
      } else {
        let trigFunctions = ["sin", "cos", "tan", "sec", "csc", "cot"];
        let randomTrig = Math.floor(Math.random() * trigFunctions.length);
        let chosenFunc = trigFunctions[randomTrig];

        let randomN = Math.floor(Math.random() * trigValues.length);
        let angle = trigValues[randomN].angle;
        let answer = trigValues[randomN][chosenFunc];
        let question = `${chosenFunc}(${angle})`;

        display1.innerText = question;
        display1.dataset.answer = answer;
        let allAnswers = [answer];
        allAnswers.push(getWrongTrigAnswer(chosenFunc, allAnswers));
        allAnswers.push(getWrongTrigAnswer(chosenFunc, allAnswers));
        allAnswers.push(getWrongTrigAnswer(chosenFunc, allAnswers));
        const numbers = [0, 1, 2, 3];
        const shuffled = [...numbers].sort(() => Math.random() - 0.5);
        button1.innerText = allAnswers[shuffled[0]];
        button2.innerText = allAnswers[shuffled[1]];
        button3.innerText = allAnswers[shuffled[2]];
        button4.innerText = allAnswers[shuffled[3]];
      }
    }
  }
}

// Square
const correctSequence = [
  "cyan",
  "yellow",
  "violet",
  "blue",
  "orange",
  "green",
  "black",
];

let gameBegun = false;
let gameOver = false;
let squareRecordingPlaying = false;
let squareMusicPlaying = false;

let clicked = {
  cyanClicked: false,
  yellowClicked: false,
  violetClicked: false,
  blueClicked: false,
  orangeClicked: false,
  greenClicked: false,
  blackClicked: false,
};

function initiateSquareGame() {
  // Square minigame(Dimensions)
  var recording = document.getElementById("colorRecording");
  var music = document.getElementById("flowermanlyrics");

  gameBegun = true;
  if (gameBegun && !player.d.squareGameCompleted) {
    squareRecordingPlaying = true;
    toggleMusic();
    if (squareRecordingPlaying) {
      recording.play();
    }
    if (squareMusicPlaying) {
      music.pause();
    }
    recording.addEventListener("ended", function () {
      squareRecordingPlaying = false;
      squareMusicPlaying = true;
      updateMusicDisplay();
      if (squareMusicPlaying) {
        music.play();
        randomizedMovement();
      }
    });
  } else {
    music.pause();
    let squares = {
      cyan: document.getElementById("cyan"),
      yellow: document.getElementById("yellow"),
      violet: document.getElementById("purple"),
      blue: document.getElementById("blue"),
      orange: document.getElementById("orange"),
      green: document.getElementById("green"),
      black: document.getElementById("black"),
      red: document.getElementById("red"),
    };

    squares.cyan.style.backgroundColor = "lightgreen";
    squares.yellow.style.backgroundColor = "lightgreen";
    squares.violet.style.backgroundColor = "lightgreen";
    squares.blue.style.backgroundColor = "lightgreen";
    squares.orange.style.backgroundColor = "lightgreen";
    squares.green.style.backgroundColor = "lightgreen";
    squares.black.style.backgroundColor = "lightgreen";
    squares.red.style.backgroundColor = "lightgreen";
    gameBegun = false;
    return;
  }
}
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function randomizedMovement() {
  while (gameBegun) {
    if (gameOver) {
      break;
    }
    let squares = {
      cyan: document.getElementById("cyan"),
      yellow: document.getElementById("yellow"),
      violet: document.getElementById("purple"),
      blue: document.getElementById("blue"),
      orange: document.getElementById("orange"),
      green: document.getElementById("green"),
      black: document.getElementById("black"),
    };
    let colors = ["cyan", "yellow", "purple", "blue", "orange", "green"];
    let randomIndices = {
      x1: Math.floor(Math.random() * 6),
      x2: Math.floor(Math.random() * 6),
      x3: Math.floor(Math.random() * 6),
      x4: Math.floor(Math.random() * 6),
      x5: Math.floor(Math.random() * 6),
      x6: Math.floor(Math.random() * 6),
    };
    squares.cyan.style.backgroundColor = colors[randomIndices.x1];
    squares.yellow.style.backgroundColor = colors[randomIndices.x2];
    squares.violet.style.backgroundColor = colors[randomIndices.x3];
    squares.blue.style.backgroundColor = colors[randomIndices.x4];
    squares.orange.style.backgroundColor = colors[randomIndices.x5];
    squares.green.style.backgroundColor = colors[randomIndices.x6];

    await wait(1400);
  }
}
function cyanSquare() {
  var wrongSound = document.getElementById("wrongSound");
  if (gameBegun) {
    clicked.cyanClicked = true;
  }
}
function yellowSquare() {
  var wrongSound = document.getElementById("wrongSound");
  if (gameBegun && clicked.cyanClicked) {
    clicked.yellowClicked = true;
  } else {
    wrongSound.play();
    clicked.cyanClicked = false;
  }
}
function purpleSquare() {
  var wrongSound = document.getElementById("wrongSound");
  if (gameBegun && clicked.cyanClicked && clicked.yellowClicked) {
    clicked.violetClicked = true;
  } else {
    wrongSound.play();
    clicked.cyanClicked = false;
    clicked.yellowClicked = false;
  }
}
function blueSquare() {
  var wrongSound = document.getElementById("wrongSound");
  if (
    gameBegun &&
    clicked.cyanClicked &&
    clicked.yellowClicked &&
    clicked.violetClicked
  ) {
    clicked.blueClicked = true;
  } else {
    wrongSound.play();
    clicked.cyanClicked = false;
    clicked.yellowClicked = false;
    clicked.violetClicked = false;
  }
}
function orangeSquare() {
  var wrongSound = document.getElementById("wrongSound");
  if (
    gameBegun &&
    clicked.cyanClicked &&
    clicked.yellowClicked &&
    clicked.violetClicked &&
    clicked.blueClicked
  ) {
    clicked.orangeClicked = true;
  } else {
    wrongSound.play();
    clicked.cyanClicked = false;
    clicked.yellowClicked = false;
    clicked.violetClicked = false;
    clicked.blueClicked = false;
  }
}
function greenSquare() {
  var wrongSound = document.getElementById("wrongSound");
  if (
    gameBegun &&
    clicked.cyanClicked &&
    clicked.yellowClicked &&
    clicked.violetClicked &&
    clicked.blueClicked &&
    clicked.orangeClicked
  ) {
    clicked.greenClicked = true;
  } else {
    wrongSound.play();
    clicked.cyanClicked = false;
    clicked.yellowClicked = false;
    clicked.violetClicked = false;
    clicked.blueClicked = false;
    clicked.orangeClicked = false;
  }
}
function blackSquare() {
  var wrongSound = document.getElementById("wrongSound");
  if (
    gameBegun &&
    clicked.cyanClicked &&
    clicked.yellowClicked &&
    clicked.violetClicked &&
    clicked.blueClicked &&
    clicked.orangeClicked &&
    clicked.greenClicked
  ) {
    clicked.blackClicked = true;
    squareGameProcessed();
  } else {
    wrongSound.play();
    clicked.cyanClicked = false;
    clicked.yellowClicked = false;
    clicked.violetClicked = false;
    clicked.blueClicked = false;
    clicked.orangeClicked = false;
    clicked.greenClicked = false;
  }
}
function squareGameProcessed() {
  let squares = {
    cyan: document.getElementById("cyan"),
    yellow: document.getElementById("yellow"),
    violet: document.getElementById("purple"),
    blue: document.getElementById("blue"),
    orange: document.getElementById("orange"),
    green: document.getElementById("green"),
    black: document.getElementById("black"),
  };
  if (gameBegun) {
    if (
      clicked.cyanClicked &&
      clicked.yellowClicked &&
      clicked.violetClicked &&
      clicked.blueClicked &&
      clicked.orangeClicked &&
      clicked.greenClicked &&
      clicked.blackClicked
    ) {
      squareRecordingPlaying = false;
      sqaureMusicPlaying = false;
      player.d.squareGameCompleted = true;
      initiateSquareGame();
    }
  }
}

// Cosmic Quiz
const questions = [
  {
    question: "Who made this quiz?",
    answer: "Stylinage",
  },
  {
    question: "What color are these squares?",
    answer: "lightblue",
  },
  {
    question: "Who made TMT?",
    answer: "Acamaeda",
  },
  {
    question: "Who made The Prestige Tree?",
    answer: "Jacorb",
  },
  {
    question: "Who invented gravity?",
    answer: "Newton",
  },
  {
    question: "Who criticized Athenian officials?",
    answer: "Socrates",
  },
  {
    question: "Who figured we are geocentric?",
    answer: "Aristotle",
  },
  {
    question: "Who is The Demon?",
    answer: "You",
  },
  {
    question: "Who corrupted The Cosmos?",
    answer: "Us",
  },
];
const pAnswers = [
  ["Stylinage", "Acamaeda", "Flame", "Jacorb"],
  ["cyan", "turqoise", "lightblue", "indigo"],
  ["Me", "Stylinage", "Flame", "Acamaeda"],
  ["You", "Stylinage", "Acamaeda", "Jacorb"],
  ["Newton", "Einstein", "Oppenheimer", "Socrates"],
  ["Plato", "Hesiod", "Socrates", "Pericles"],
  ["Copernicus", "Tao", "Aristotle", "Socrates"],
  ["You", "You", "You", "You"],
  ["Us", "Us", "Us", "Us"],
];
let quizBegun = false;
let quizOver = false;
let quizMusicPlaying = false;
let questionCount = 0;
let quizfailed = false;
let hillPlaying = false;
// Earth
function end() {
  if (player.ct.nuke.gte(1)) {
    let bLight = document.getElementById("blindingLight");
    bLight.style.display = "block";
    player.d.earthNuked = true;
    var explosion = document.getElementById("explosion");
    explosion.play();
    destruction();
    bLight.style.display = "none";
  }
}
function destruction() {
  var HILL = document.getElementById("HILL");
  hillPlaying = true;
  HILL.play();
  updateMusicDisplay();
  toggleMusic();
  let demon = document.getElementById("DemonEmblem");
  demon.style.display = "block";

  if (player.d.earthNuked) {
    player.ct.nuke = new Decimal(0);
    hillPlaying = false;
    HILL.pause();
    updateMusicDisplay();

    demon.style.display = "none";
    let earth = document.getElementById("Earth");
    earth.style.display = "none";
  }
}
function challengeExit() {
  var HILL = document.getElementById("HILL");
  hillPlaying = false;
  HILL.pause();
  updateMusicDisplay();
  let demon = document.getElementById("DemonEmblem");
  demon.style.display = "none";
}
// Earth
function initiateQuiz() {
  if (questionCount == 10) {
    hillPlaying = false;
    HILL.pause();
    player.d.cosmicQuizCompleted = true;
    questionSquare.style.backgroundColor = "lightgreen";
    answerSquare1.style.backgroundColor = "lightgreen";
    answerSquare2.style.backgroundColor = "lightgreen";
    answerSquare3.style.backgroundColor = "lightgreen";
    answerSquare4.style.backgroundColor = "lightgreen";
    let demon = document.getElementById("DemonEmblem");
    demon.style.display = "none";
  }
  let questionSquare = document.getElementById("quizIntro");
  let answerSquare1 = document.getElementById("answerButtonQ1");
  let answerSquare2 = document.getElementById("answerButtonQ2");
  let answerSquare3 = document.getElementById("answerButtonQ3");
  let answerSquare4 = document.getElementById("answerButtonQ4");
  if (player.d.cosmicQuizCompleted) {
    questionSquare.style.backgroundColor = "lightgreen";
    answerSquare1.style.backgroundColor = "lightgreen";
    answerSquare2.style.backgroundColor = "lightgreen";
    answerSquare3.style.backgroundColor = "lightgreen";
    answerSquare4.style.backgroundColor = "lightgreen";
    quizBegun = false;
    return;
  }
  var HILL = document.getElementById("HILL");
  HILL.pause();
  quizBegun = true;
  quizMusicPlaying = true;
  updateMusicDisplay();
  toggleMusic();
  var music = document.getElementById("recycling");

  let startButton = document.getElementById("startButtonQ");
  let questionButton = document.getElementById("quizIntro");

  if (quizBegun) {
    if (quizMusicPlaying) {
      music.play();
    }
    startButton.style.display = "none";
  }
  questionCount = 1;

  if (questionCount == 1 || quizfailed) {
    questionSquare.innerText = questions[0].question;

    const numbers = [0, 1, 2, 3];
    const shuffled = [...numbers].sort(() => Math.random() - 0.5);

    answerSquare1.innerText = pAnswers[0][shuffled[0]];
    answerSquare2.innerText = pAnswers[0][shuffled[1]];
    answerSquare3.innerText = pAnswers[0][shuffled[2]];
    answerSquare4.innerText = pAnswers[0][shuffled[3]];

    quizfailed = false;
  }
}

function quizConfiguration() {
  var music = document.getElementById("recycling");
  var HILL = document.getElementById("HILL");
  if (quizBegun) {
    let questionSquare = document.getElementById("quizIntro");
    let answerSquare1 = document.getElementById("answerButtonQ1");
    let answerSquare2 = document.getElementById("answerButtonQ2");
    let answerSquare3 = document.getElementById("answerButtonQ3");
    let answerSquare4 = document.getElementById("answerButtonQ4");
    if (questionCount == 10) {
      hillPlaying = false;
      HILL.pause();
      player.d.cosmicQuizCompleted = true;
      questionSquare.style.backgroundColor = "lightgreen";
      answerSquare1.style.backgroundColor = "lightgreen";
      answerSquare2.style.backgroundColor = "lightgreen";
      answerSquare3.style.backgroundColor = "lightgreen";
      answerSquare4.style.backgroundColor = "lightgreen";
      let demon = document.getElementById("DemonEmblem");
      demon.style.display = "none";
      quizBegun = false;
    }

    questionSquare.innerText = questions[questionCount - 1].question;

    const numbers = [0, 1, 2, 3];
    const shuffled = [...numbers].sort(() => Math.random() - 0.5);

    answerSquare1.innerText = pAnswers[questionCount - 1][shuffled[0]];
    answerSquare2.innerText = pAnswers[questionCount - 1][shuffled[1]];
    answerSquare3.innerText = pAnswers[questionCount - 1][shuffled[2]];
    answerSquare4.innerText = pAnswers[questionCount - 1][shuffled[3]];

    if (questionCount >= 8) {
      questionSquare.style.backgroundColor = "darkred";
      answerSquare1.style.backgroundColor = "darkred";
      answerSquare2.style.backgroundColor = "darkred";
      answerSquare3.style.backgroundColor = "darkred";
      answerSquare4.style.backgroundColor = "darkred";
      let demon = document.getElementById("DemonEmblem");
      demon.style.display = "block";
      music.pause();
      HILL.play();
      hillPlaying = true;
    }
  }
}

function processQuiz1() {
  let answerSquare1 = document.getElementById("answerButtonQ1");
  if (quizBegun) {
    if (questions[questionCount - 1].answer == answerSquare1.innerText) {
      questionCount += 1;
      quizConfiguration();
    } else {
      quizfailed = true;
      initiateQuiz();
    }
  }
}
function processQuiz2() {
  let answerSquare2 = document.getElementById("answerButtonQ2");
  if (quizBegun) {
    if (questions[questionCount - 1].answer == answerSquare2.innerText) {
      questionCount += 1;
      quizConfiguration();
    } else {
      quizfailed = true;
      initiateQuiz();
    }
  }
}
function processQuiz3() {
  let answerSquare3 = document.getElementById("answerButtonQ3");
  if (quizBegun) {
    if (questions[questionCount - 1].answer == answerSquare3.innerText) {
      questionCount += 1;
      quizConfiguration();
    } else {
      quizfailed = true;
      initiateQuiz();
    }
  }
}
function processQuiz4() {
  let answerSquare4 = document.getElementById("answerButtonQ4");
  if (quizBegun) {
    if (questions[questionCount - 1].answer == answerSquare4.innerText) {
      questionCount += 1;
      quizConfiguration();
    } else {
      quizfailed = true;
      initiateQuiz();
    }
  }
}
// music controls
var gunsUnlocked = false;
var gunsPlaying = false;
var musicPlay = false;
var trackIndex = 0;
var trackIds = [
  "whobe",
  "sevensuns",
  "bgm",
  "mother",
  "spear",
  "hammer",
  "flowerman",
];

var trackNames = [
  "Who Might You Be?",
  "Sunset of The Seven Suns",
  "Theory of Everything 2",
  "A Mother's Love",
  "Spear of Justice",
  "Hammer of Justice",
  "Flowerman",
];
if (localStorage.getItem("gunsUnlocked") === "true") {
  trackIds.push("guns");
  trackNames.push("Guns Blazing");
}

var currentAudio;
var currentTrack;
function getCurrentAudio() {
  if (!currentAudio) {
    currentAudio = document.getElementById(trackIds[trackIndex]);
  }
  updateMusicDisplay();
  return currentAudio;
}
function updateMusicDisplay() {
  const musicDisplay = document.getElementById("NewsOutlet");
  if (musicDisplay) {
    if (squareMusicPlaying) {
      musicDisplay.innerText = "Currently Playing: Flowerman with lyrics";
    } else {
      musicDisplay.innerText = `Currently Playing: ${trackNames[trackIndex]}`;
    }
    if (quizMusicPlaying) {
      musicDisplay.innerText = "Currently Playing: Inappropiate Recycling";
    } else {
      musicDisplay.innerText = `Currently Playing: ${trackNames[trackIndex]}`;
    }
    if (hillPlaying) {
      musicDisplay.innerText = "Currently Playing: HILL";
    } else {
      musicDisplay.innerText = `Currently Playing: ${trackNames[trackIndex]}`;
    }
    if (gunsPlaying) {
      musicDisplay.innerText = "Currently Playing: Guns Blazing";
    } else {
      musicDisplay.innerText = `Currently Playing: ${trackNames[trackIndex]}`;
    }
  }
}
function toggleMusic() {
  let audioEl = getCurrentAudio();
  var guns = document.getElementById("guns");
  guns.pause();
  gunsPlaying = false;
  if (!audioEl) return;
  if (gunsPlaying) {
    audioEl.pause();
    return;
  }
  if ((squareRecordingPlaying || squareMusicPlaying) && gameBegun) {
    audioEl.pause();
    return;
  }
  if (quizMusicPlaying && quizBegun) {
    audioEl.pause();
    return;
  }
  if (hillPlaying) {
    audioEl.pause();
    return;
  }
  if (musicPlay) {
    audioEl.pause();
  } else {
    audioEl.play();
  }

  musicPlay = !musicPlay;
  updateMusicDisplay();
}

//voltaic sector related
function voltaicSector() {
  gunsPlaying = true;
  gunsUnlocked = true;
  if (!localStorage.getItem("gunsUnlocked")) {
    localStorage.setItem("gunsUnlocked", "true");
    trackIds.push("guns");
    trackNames.push("Guns Blazing");
  }
  var guns = document.getElementById("guns");
  let audioEl = getCurrentAudio();
  audioEl.pause();
  guns.play();
}

function skipTrack() {
  // move to next track
  let oldAudio = getCurrentAudio();

  trackIndex = (trackIndex + 1) % trackIds.length;
  currentAudio = document.getElementById(trackIds[trackIndex]);

  if (musicPlay) {
    if (oldAudio) oldAudio.pause();
    if (currentAudio) currentAudio.play();
  }
  updateMusicDisplay();
}

function addText(id) {
  // All tab content IDs
  const tabs = ["Introduction", "Music", "Description & Info"];

  // Hide all tabs
  tabs.forEach((tabId) => {
    document.getElementById(tabId).style.display = "none";
  });

  // Show the clicked tab
  const tab = document.getElementById(id);
  tab.style.display = "block";

  // Set the text for the tab
  switch (id) {
    case "Introduction":
      tab.innerHTML =
        "Welcome to the Cosmic Tree! You're goal is to unlock the cosmos. In order to harness infinity you must obtain 1 encapsulated singularity. This is a very late and hard stat so be prepared to grind!";
      tab.style.fontSize = "26px";
      tab.style.fontWeight = "bold";
      break;
    case "Music":
      tab.innerHTML = `Tracks: 1, DJ-NATE Theory of Everything 2;<br> 
			2, MasterSwordRemix A Mother's love; <br>
			3, Toby Fox Spear of Justice;<br>
			4, Toby Fox Hammer of Justice;<br> 
			5, Toby Fox Flower Man;<br>
			6, Toby Fox Sunset of The Seven Suns;<br>
			Square Minigame: Toby Fox-Nongagos Flower Man with lyrics;<br>
			Cosmic Quiz: Toby Fox: Innapropiate Recycling, Sonic.exe - HILL theme;<br>
			Earth Nuking: Sonic.exe - HILL theme; <br>
      (7)Guns Blazing: MasterSwordRemix; <br>
			Toby Fox music managed by Materia Music<br>
			Simply click on the red music note to enable or mute, and the blue play button to skip tracks`;
      tab.style.fontSize = "26px";
      tab.style.fontWeight = "bold";
      break;

    case "Description & Info":
      tab.innerHTML = `Most of the coding is from The Modding Tree by Acamaeda and FlamemasterNFX<br>
			The Prestige Tree was made by Jacorb and Aarex<br>
			The Cosmic Tree is made by Anthony/Stylinage/Thorn/ any other alias on discord<br>
			<hr>
			The Cosmic Tree was inspired by many sources. First and foremost is The Prestige Tree. Button Simulator Excavation Discoveries was the other inspiration.
			<br><hr>
			Discord is the best place you reach me or join any other server. Links for the other two servers are already provided(more to come) `;

      tab.style.fontSize = "26px";
      tab.style.fontWeight = "bold";
      break;
  }
}
//Weapons = bossfight

function weaponsFunction(button) {
  if (button) {
    player.equipped = button.dataset.answer;
  }
}
