# Cart Total Calculator

A simple JavaScript project that demonstrates how to calculate a shopping cart summary by computing the subtotal, discount, tax, and final total using reusable helper functions.

Based on [Cart Total Calculator](https://roadmap.sh/projects/js-cart-total-calculator) by [Roadmap.sh](https://roadmap.sh/projects/js-cart-total-calculator)

## Project Description

The Cart Total Calculator consists of four functions:

* **`calculateSubtotal(items)`** – Calculates the subtotal by multiplying each item's price by its quantity and summing the results.
* **`calculateDiscount(subtotal, discountPercent)`** – Calculates the discount amount based on the subtotal.
* **`calculateTax(amountAfterDiscount, taxPercent)`** – Calculates the tax amount after the discount has been applied.
* **`createCartSummary(items, discountPercent, taxPercent)`** – Returns an object containing the subtotal, discount, tax, and final total.

This project is intended as a beginner-friendly exercise for practicing:

* JavaScript functions
* Arrays and objects
* Function composition
* Mathematical calculations
* Code reusability

---

## Project Structure

```text
cart-total-calculator/
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
cd cart-total-calculator
```

3. Run the JavaScript file:

```bash
node main.js
```

Or simply open the file in your browser's developer console.

---

## Sample Output

```javascript
const cartItems = [
  { name: "Notebook", price: 10, quantity: 2 },
  { name: "Pen", price: 2, quantity: 5 },
  { name: "Bag", price: 30, quantity: 1 },
];

createCartSummary(cartItems, 10, 5);

// {
//   subtotal: 60,
//   discount: 6,
//   tax: 2.7,
//   total: 56.7
// }

calculateSubtotal(cartItems);
// 60

const singleItemCart = [
  { name: "Mouse", price: 25, quantity: 2 },
];

createCartSummary(singleItemCart, 0, 10);

// {
//   subtotal: 50,
//   discount: 0,
//   tax: 5,
//   total: 55
// }
```

---

## Functions

### `calculateSubtotal(items)`

Calculates the subtotal by multiplying each item's price by its quantity and adding the results together.

**Example**

```javascript
calculateSubtotal([
  { name: "Notebook", price: 10, quantity: 2 },
  { name: "Pen", price: 2, quantity: 5 },
]);
```

**Returns**

```text
30
```

---

### `calculateDiscount(subtotal, discountPercent)`

Calculates the discount amount using the subtotal and discount percentage.

**Example**

```javascript
calculateDiscount(60, 10);
```

**Returns**

```text
6
```

---

### `calculateTax(amountAfterDiscount, taxPercent)`

Calculates the tax amount after the discount has been applied.

**Example**

```javascript
calculateTax(54, 5);
```

**Returns**

```text
2.7
```

---

### `createCartSummary(items, discountPercent, taxPercent)`

Returns an object containing the complete cart summary.

**Example**

```javascript
createCartSummary(
  [
    { name: "Notebook", price: 10, quantity: 2 },
    { name: "Pen", price: 2, quantity: 5 },
    { name: "Bag", price: 30, quantity: 1 },
  ],
  10,
  5
);
```

**Returns**

```javascript
{
  subtotal: 60,
  discount: 6,
  tax: 2.7,
  total: 56.7
}
```

---

## Learning Objectives

* Create reusable JavaScript helper functions
* Work with arrays of objects
* Perform calculations using loops and object properties
* Separate business logic into small, reusable functions
* Return structured data using objects
* Improve code organization and readability

---

## License

This project is provided for educational purposes and is free to use and modify.
