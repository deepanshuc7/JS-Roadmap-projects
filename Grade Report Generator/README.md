# Grade Report Generator

A simple JavaScript project that demonstrates how to generate a student grade report using reusable helper functions to determine grades, pass/fail status, and personalized feedback.

Based on [Grade Report Generator](https://roadmap.sh/projects/js-grade-report-generator) by [Roadmap.sh](https://roadmap.sh/projects/js-grade-report-generator)

## Project Description

The Grade Report Generator consists of four functions:

* **`getLetterGrade(score)`** – Determines the letter grade based on the student's numeric score.
* **`hasPassed(score)`** – Returns whether the student has passed based on the minimum passing score.
* **`getFeedback(grade)`** – Returns a feedback message based on the student's letter grade.
* **`createGradeReport(name, score)`** – Returns an object containing the student's name, score, grade, pass status, and feedback.

This project is intended as a beginner-friendly exercise for practicing:

* JavaScript functions
* Conditional statements
* Function composition
* Objects
* Code reusability

---

## Project Structure

```text
grade-report-generator/
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
cd grade-report-generator
```

3. Run the JavaScript file:

```bash
node main.js
```

Or simply open the file in your browser's developer console.

---

## Sample Output

```javascript
createGradeReport("Ava", 92);

// {
//   name: "Ava",
//   score: 92,
//   grade: "A",
//   passed: true,
//   feedback: "Excellent work"
// }

createGradeReport("Noah", 48);

// {
//   name: "Noah",
//   score: 48,
//   grade: "F",
//   passed: false,
//   feedback: "Keep practicing"
// }

createGradeReport("Mina", 75);

// {
//   name: "Mina",
//   score: 75,
//   grade: "C",
//   passed: true,
//   feedback: "You passed"
// }

createGradeReport("Sam", 60);

// {
//   name: "Sam",
//   score: 60,
//   grade: "D",
//   passed: true,
//   feedback: "You passed"
// }
```

---

## Functions

### `getLetterGrade(score)`

Returns the student's letter grade based on the numeric score.

**Example**

```javascript
getLetterGrade(92);
```

**Returns**

```text
A
```

---

### `hasPassed(score)`

Returns `true` if the score is **60 or higher**, otherwise returns `false`.

**Example**

```javascript
hasPassed(75);
```

**Returns**

```text
true
```

---

### `getFeedback(grade)`

Returns a feedback message based on the student's letter grade.

| Grade | Feedback            |
| ----- | ------------------- |
| `"A"` | `"Excellent work"`  |
| `"B"` | `"Great job"`       |
| `"C"` | `"You passed"`      |
| `"D"` | `"You passed"`      |
| `"F"` | `"Keep practicing"` |

---

### `createGradeReport(name, score)`

Returns an object containing the complete grade report.

**Example**

```javascript
createGradeReport("Ava", 92);
```

**Returns**

```javascript
{
  name: "Ava",
  score: 92,
  grade: "A",
  passed: true,
  feedback: "Excellent work"
}
```

---

## Learning Objectives

* Create reusable JavaScript helper functions
* Practice conditional logic
* Return structured data using objects
* Compose multiple helper functions into a complete solution
* Improve code organization and readability

---

## License

This project is provided for educational purposes and is free to use and modify.
