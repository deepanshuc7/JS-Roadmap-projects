# Price Calculator

A simple JavaScript project that demonstrates how to calculate product pricing by applying discounts and taxes using reusable helper functions while keeping the calculation logic organized.

Based on [Price Calculator](https://roadmap.sh/projects/js-price-calculator) by [Roadmap.sh](https://roadmap.sh/projects/js-price-calculator)

## Project Description

The Price Calculator consists of four functions:

* **`calculateDiscount(price, discountPercent)`** – Calculates the discount amount based on the original price.
* **`calculateTax(priceAfterDiscount, taxPercent)`** – Calculates the tax amount after the discount has been applied.
* **`calculateFinalPrice(price, discountPercent, taxPercent)`** – Applies the discount, adds tax, and returns the final price.
* **`createPriceSummary(price, discountPercent, taxPercent)`** – Returns an object containing the original price, discount amount, tax amount, and final price.

This project is intended as a beginner-friendly exercise for practicing:

* JavaScript functions
* Function composition
* Mathematical calculations
* Objects
* Code reusability

---

## Project Structure

```text
price-calculator/
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
cd price-calculator
```

3. Run the JavaScript file:

```bash
node main.js
```

Or simply open the file in your browser's developer console.

---

## Sample Output

```javascript
createPriceSummary(100, 10, 20);

// {
//   price: 100,
//   discount: 10,
//   tax: 18,
//   finalPrice: 108
// }
```

---

## Functions

### `calculateDiscount(price, discountPercent)`

Calculates the discount amount based on the original price.

**Example**

```javascript
calculateDiscount(100, 10);
```

**Returns**

```text
10
```

---

### `calculateTax(priceAfterDiscount, taxPercent)`

Calculates the tax amount using the discounted price.

**Example**

```javascript
calculateTax(90, 20);
```

**Returns**

```text
18
```

---

### `calculateFinalPrice(price, discountPercent, taxPercent)`

Applies the discount first, then calculates and adds tax to return the final price.

**Example**

```javascript
calculateFinalPrice(100, 10, 20);
```

**Returns**

```text
108
```

---

### `createPriceSummary(price, discountPercent, taxPercent)`

Returns an object containing the complete pricing breakdown.

**Example**

```javascript
createPriceSummary(100, 10, 20);
```

**Returns**

```javascript
{
  price: 100,
  discount: 10,
  tax: 18,
  finalPrice: 108
}
```

---

## Learning Objectives

* Create reusable JavaScript helper functions
* Perform percentage-based calculations
* Separate business logic into small functions
* Return structured data using objects
* Improve code organization and readability

---

## License

This project is provided for educational purposes and is free to use and modify.
