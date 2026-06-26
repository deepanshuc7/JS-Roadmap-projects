# String Formatter

A simple JavaScript project that demonstrates how to clean and format user input by removing unnecessary spaces, normalizing letter casing, and combining reusable helper functions.

Based on [String Formatter](https://roadmap.sh/projects/js-string-formatter) by [Roadmap.sh](https://roadmap.sh/projects/js-string-formatter)

## Project Description

The String Formatter consists of three functions:

* **`cleanText(text)`** – Removes leading and trailing whitespace from a string.
* **`capitalize(text)`** – Capitalizes the first letter of a string while converting the remaining characters to lowercase.
* **`formatDisplayName(firstName, lastName)`** – Cleans and capitalizes both names before returning a properly formatted display name.

This project is intended as a beginner-friendly exercise for practicing:

* JavaScript functions
* String manipulation
* Function composition
* String methods
* Code reusability

---

## Project Structure

```text
string-formatter/
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
cd string-formatter
```

3. Run the JavaScript file:

```bash
node main.js
```

Or simply open the file in your browser's developer console.

---

## Sample Output

```text
Ava Stone
Noah Kim
Mina Patel
```

---

## Functions

### `cleanText(text)`

Removes whitespace from the beginning and end of a string.

**Example**

```javascript
cleanText("  Hello World  ");
```

**Returns**

```text
Hello World
```

---

### `capitalize(text)`

Converts the first character of a string to uppercase and the remaining characters to lowercase.

**Example**

```javascript
capitalize("jAVaScRiPt");
```

**Returns**

```text
Javascript
```

---

### `formatDisplayName(firstName, lastName)`

Cleans and capitalizes both the first and last names before combining them into a single display name.

**Example**

```javascript
formatDisplayName("  ava", "STONE  ");
```

**Returns**

```text
Ava Stone
```

---

## Learning Objectives

* Create reusable JavaScript helper functions
* Manipulate strings using built-in methods
* Normalize user input
* Compose functions to avoid repeating logic
* Improve code organization and readability

---

## License

This project is provided for educational purposes and is free to use and modify.
