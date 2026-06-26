# Expense Summary

A simple JavaScript project that demonstrates how to analyze a list of expenses by calculating totals, filtering expenses by category, and finding the largest expense using reusable helper functions.

Based on [Expense Summary](https://roadmap.sh/projects/js-expense-summary) by [Roadmap.sh](https://roadmap.sh/projects/js-expense-summary)

## Project Description

The Expense Summary project consists of four functions:

* **`calculateTotal(expenses)`** – Calculates the total amount spent across all expenses.
* **`calculateCategoryTotal(expenses, category)`** – Calculates the total amount spent for a specified category.
* **`findLargestExpense(expenses)`** – Returns the complete expense object with the highest amount, or `null` if the expense list is empty.
* **`createExpenseSummary(expenses)`** – Returns an object containing the total expenses, total food expenses, total transport expenses, and the largest expense.

This project is intended as a beginner-friendly exercise for practicing:

* JavaScript functions
* Arrays and objects
* Array reduction with `reduce()`
* Function composition
* Code reusability

---

## Project Structure

```text
expense-summary/
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
cd expense-summary
```

3. Run the JavaScript file:

```bash
node main.js
```

Or simply open the file in your browser's developer console.

---

## Sample Output

```javascript
{
  total: 97,
  foodTotal: 42,
  transportTotal: 15,
  largestExpense: {
    id: 4,
    category: "books",
    amount: 40
  }
}

42

0

{
  id: 4,
  category: "books",
  amount: 40
}
```

---

## Functions

### `calculateTotal(expenses)`

Calculates the total amount spent across all expenses.

**Example**

```javascript
calculateTotal(expenses);
```

**Returns**

```text
97
```

---

### `calculateCategoryTotal(expenses, category)`

Calculates the total amount spent for a specified category.

**Example**

```javascript
calculateCategoryTotal(expenses, "food");
```

**Returns**

```text
42
```

---

### `findLargestExpense(expenses)`

Returns the expense object with the highest amount.

If the expense list is empty, the function returns `null`.

**Example**

```javascript
findLargestExpense(expenses);
```

**Returns**

```javascript
{
  id: 4,
  category: "books",
  amount: 40
}
```

---

### `createExpenseSummary(expenses)`

Returns an object containing:

* `total`
* `foodTotal`
* `transportTotal`
* `largestExpense`

**Example**

```javascript
createExpenseSummary(expenses);
```

**Returns**

```javascript
{
  total: 97,
  foodTotal: 42,
  transportTotal: 15,
  largestExpense: {
    id: 4,
    category: "books",
    amount: 40
  }
}
```

---

## Learning Objectives

* Create reusable JavaScript helper functions
* Work with arrays of objects
* Master the `reduce()` array method
* Filter and aggregate data
* Return structured data using objects
* Improve code organization and readability

---

## License

This project is provided for educational purposes and is free to use and modify.
