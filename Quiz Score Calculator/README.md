# Quiz Score Calculator

A simple JavaScript project that demonstrates how to evaluate quiz results by comparing user answers with the correct answers and generating a score summary using reusable helper functions.

Based on [Quiz Score Calculator](https://roadmap.sh/projects/js-quiz-score-calculator) by [Roadmap.sh](https://roadmap.sh/projects/js-quiz-score-calculator)

## Project Description

The Quiz Score Calculator consists of five functions:

* **`isAnswerCorrect(question, userAnswer)`** – Determines whether a user's answer matches the correct answer.
* **`countCorrectAnswers(questions, userAnswers)`** – Counts the number of correctly answered questions.
* **`calculatePercentage(correctCount, totalQuestions)`** – Calculates the user's percentage score.
* **`getResultMessage(percentage)`** – Returns a feedback message based on the percentage score.
* **`createQuizResult(questions, userAnswers)`** – Returns an object containing the quiz results.

This project is intended as a beginner-friendly exercise for practicing:

* JavaScript functions
* Arrays and objects
* Array methods
* Function composition
* Code reusability

---

## Project Structure

```text
quiz-score-calculator/
│
├── main.js
└── README.md
```

---

## Getting Started

### Prerequisites

* Node.js (optional) or any modern web browser
* A code editor such as VS Code

### Running the Project

1. Clone this repository:

```bash
git clone https://github.com/deepanshuc7/JS-Roadmap-projects.git
```

2. Navigate to the project folder:

```bash
cd quiz-score-calculator
```

3. Run the JavaScript file:

```bash
node main.js
```

Or simply open the file in your browser's developer console.

---

## Sample Output

```javascript
createQuizResult(questions, userAnswers);

// {
//   correctCount: 3,
//   totalQuestions: 4,
//   percentage: 75,
//   message: "You passed"
// }

countCorrectAnswers(questions, userAnswers);
// 3

calculatePercentage(3, questions.length);
// 75

createQuizResult(questions, partialAnswers);

// {
//   correctCount: 1,
//   totalQuestions: 4,
//   percentage: 25,
//   message: "Keep practicing"
// }
```

---

## Functions

### `isAnswerCorrect(question, userAnswer)`

Checks whether the user's answer matches the correct answer.

**Example**

```javascript
isAnswerCorrect(
  { id: 1, correctAnswer: "B" },
  { questionId: 1, answer: "B" }
);
```

**Returns**

```text
true
```

---

### `countCorrectAnswers(questions, userAnswers)`

Matches each question with its corresponding user answer and returns the number of correct answers.

**Example**

```javascript
countCorrectAnswers(questions, userAnswers);
```

**Returns**

```text
3
```

---

### `calculatePercentage(correctCount, totalQuestions)`

Calculates the quiz score as a percentage.

**Example**

```javascript
calculatePercentage(3, 4);
```

**Returns**

```text
75
```

---

### `getResultMessage(percentage)`

Returns a short feedback message based on the percentage score.

| Percentage | Message             |
| ---------: | ------------------- |
|     80–100 | `"Excellent work"`  |
|      60–79 | `"You passed"`      |
|   Below 60 | `"Keep practicing"` |

---

### `createQuizResult(questions, userAnswers)`

Returns an object containing:

* `correctCount`
* `totalQuestions`
* `percentage`
* `message`

**Example**

```javascript
createQuizResult(questions, userAnswers);
```

**Returns**

```javascript
{
  correctCount: 3,
  totalQuestions: 4,
  percentage: 75,
  message: "You passed"
}
```

---

## Learning Objectives

* Create reusable JavaScript helper functions
* Work with arrays of objects
* Match related data using IDs
* Calculate percentages
* Return structured data using objects
* Improve code organization and readability

---

## License

This project is provided for educational purposes and is free to use and modify.
