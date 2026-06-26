# Number Checker

A simple JavaScript project that demonstrates how to use reusable boolean helper functions to analyze a number and generate a descriptive report about its properties.

Based on [Number Checker](https://roadmap.sh/projects/js-number-checker) by [Roadmap.sh](https://roadmap.sh/projects/js-number-checker)

## Project Description

The Number Checker consists of five functions:

* **`isPositive(number)`** – Returns `true` if the number is greater than `0`.
* **`isNegative(number)`** – Returns `true` if the number is less than `0`.
* **`isZero(number)`** – Returns `true` if the number is exactly `0`.
* **`isEven(number)`** – Returns `true` if the number is even.
* **`describeNumber(number)`** – Combines the helper functions and returns an object describing the number.

This project is intended as a beginner-friendly exercise for practicing:

* JavaScript functions
* Boolean logic
* Function composition
* Objects
* Code reusability

---

## Project Structure

```text
number-checker/
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
cd number-checker
```

3. Run the JavaScript file:

```bash
node main.js
```

Or simply open the file in your browser's developer console.

---

## Sample Output

```javascript
describeNumber(10);
// {
//   positive: true,
//   negative: false,
//   zero: false,
//   even: true,
//   odd: false
// }

describeNumber(-7);
// {
//   positive: false,
//   negative: true,
//   zero: false,
//   even: false,
//   odd: true
// }

describeNumber(0);
// {
//   positive: false,
//   negative: false,
//   zero: true,
//   even: true,
//   odd: false
// }
```

---

## Functions

### `isPositive(number)`

Returns `true` if the number is greater than `0`.

**Example**

```javascript
isPositive(5);
```

**Returns**

```text
true
```

---

### `isNegative(number)`

Returns `true` if the number is less than `0`.

**Example**

```javascript
isNegative(-8);
```

**Returns**

```text
true
```

---

### `isZero(number)`

Returns `true` if the number is exactly `0`.

**Example**

```javascript
isZero(0);
```

**Returns**

```text
true
```

---

### `isEven(number)`

Returns `true` if the number is evenly divisible by `2`.

**Example**

```javascript
isEven(12);
```

**Returns**

```text
true
```

---

### `describeNumber(number)`

Returns an object describing whether the number is positive, negative, zero, even, or odd.

**Example**

```javascript
describeNumber(7);
```

**Returns**

```javascript
{
  positive: true,
  negative: false,
  zero: false,
  even: false,
  odd: true
}
```

---

## Learning Objectives

* Create reusable JavaScript helper functions
* Work with boolean values
* Combine multiple functions into a single result
* Return structured data using objects
* Improve code organization and readability

---

## License

This project is provided for educational purposes and is free to use and modify.
