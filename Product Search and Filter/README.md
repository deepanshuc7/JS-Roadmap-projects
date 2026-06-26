# Product Search and Filter

A simple JavaScript project that demonstrates how to search and filter a list of products using reusable helper functions and common array methods.

Based on [Product Search and Filter](https://roadmap.sh/projects/js-product-search-and-filter) by [Roadmap.sh](https://roadmap.sh/projects/js-product-search-and-filter)

## Project Description

The Product Search and Filter project consists of five functions:

* **`filterByCategory(products, category)`** – Returns all products that belong to the specified category.
* **`filterByMaxPrice(products, maxPrice)`** – Returns all products whose price is less than or equal to the specified maximum price.
* **`getInStockProducts(products)`** – Returns all products that are currently in stock.
* **`findProductById(products, productId)`** – Returns the product with the specified ID or `undefined` if no matching product exists.
* **`searchProducts(products, searchText)`** – Returns products whose names contain the search text, ignoring letter casing.

This project is intended as a beginner-friendly exercise for practicing:

* JavaScript functions
* Arrays and objects
* Array methods
* String manipulation
* Code reusability

---

## Project Structure

```text
product-search-and-filter/
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
cd product-search-and-filter
```

3. Run the JavaScript file:

```bash
node main.js
```

Or simply open the file in your browser's developer console.

---

## Sample Output

```javascript
["Notebook", "Pen Set"]

["Notebook", "Pen Set", "Water Bottle"]

{
  id: 3,
  name: "Pen Set",
  category: "stationery",
  price: 6,
  inStock: true
}

["Pen Set"]

["Notebook", "Pen Set", "Water Bottle"]

undefined
```

---

## Functions

### `filterByCategory(products, category)`

Returns all products that belong to the specified category.

**Example**

```javascript
filterByCategory(products, "stationery");
```

**Returns**

```javascript
[
  {
    id: 1,
    name: "Notebook",
    category: "stationery",
    price: 10,
    inStock: true
  },
  {
    id: 3,
    name: "Pen Set",
    category: "stationery",
    price: 6,
    inStock: true
  }
]
```

---

### `filterByMaxPrice(products, maxPrice)`

Returns all products whose price is less than or equal to the specified maximum price.

**Example**

```javascript
filterByMaxPrice(products, 20);
```

**Returns**

```javascript
[
  {
    id: 1,
    name: "Notebook",
    category: "stationery",
    price: 10,
    inStock: true
  },
  {
    id: 3,
    name: "Pen Set",
    category: "stationery",
    price: 6,
    inStock: true
  },
  {
    id: 4,
    name: "Water Bottle",
    category: "fitness",
    price: 18,
    inStock: true
  }
]
```

---

### `getInStockProducts(products)`

Returns all products that are currently in stock.

**Example**

```javascript
getInStockProducts(products);
```

**Returns**

```javascript
[
  {
    id: 1,
    name: "Notebook",
    category: "stationery",
    price: 10,
    inStock: true
  },
  {
    id: 3,
    name: "Pen Set",
    category: "stationery",
    price: 6,
    inStock: true
  },
  {
    id: 4,
    name: "Water Bottle",
    category: "fitness",
    price: 18,
    inStock: true
  }
]
```

---

### `findProductById(products, productId)`

Returns the product with the specified ID.

If no matching product exists, the function returns `undefined`.

**Example**

```javascript
findProductById(products, 3);
```

**Returns**

```javascript
{
  id: 3,
  name: "Pen Set",
  category: "stationery",
  price: 6,
  inStock: true
}
```

---

### `searchProducts(products, searchText)`

Returns products whose names include the search text, ignoring uppercase and lowercase letters.

**Example**

```javascript
searchProducts(products, "pen");
```

**Returns**

```javascript
[
  {
    id: 3,
    name: "Pen Set",
    category: "stationery",
    price: 6,
    inStock: true
  }
]
```

---

## Learning Objectives

* Create reusable JavaScript helper functions
* Work with arrays of objects
* Use array methods such as `filter()`, `find()`, and `map()`
* Perform case-insensitive string searches
* Return new arrays without modifying the original data
* Improve code organization and readability

---

## License

This project is provided for educational purposes and is free to use and modify.
