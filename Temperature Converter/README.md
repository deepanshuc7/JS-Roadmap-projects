# Temperature Converter

A simple JavaScript project that demonstrates how to build reusable functions for converting temperatures between Celsius and Fahrenheit while keeping conversion logic separate from display formatting.

Based on [Temperature Converter](https://roadmap.sh/projects/js-temperature-converter) by [Roadmap.sh](https://roadmap.sh/projects/js-temperature-converter)

## Project Description

The Temperature Converter consists of three functions:

* **`celsiusToFahrenheit(celsius)`** – Converts a Celsius temperature to Fahrenheit.
* **`fahrenheitToCelsius(fahrenheit)`** – Converts a Fahrenheit temperature to Celsius.
* **`formatTemperature(value, unit)`** – Formats the converted temperature as a readable string.

This project is intended as a beginner-friendly exercise for practicing:

* JavaScript functions
* Function composition
* Mathematical calculations
* String interpolation (template literals)
* Code reusability

---

## Project Structure

```text
temperature-converter/
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
cd temperature-converter
```

3. Run the JavaScript file:

```bash
node main.js
```

Or simply open the file in your browser's developer console.

---

## Sample Output

```text
77 F
20 C
32 F
0 C
```

---

## Functions

### `celsiusToFahrenheit(celsius)`

Converts a temperature from Celsius to Fahrenheit.

**Example**

```javascript
celsiusToFahrenheit(25);
```

**Returns**

```text
77
```

---

### `fahrenheitToCelsius(fahrenheit)`

Converts a temperature from Fahrenheit to Celsius.

**Example**

```javascript
fahrenheitToCelsius(68);
```

**Returns**

```text
20
```

---

### `formatTemperature(value, unit)`

Formats a temperature value with its unit into a readable string.

**Example**

```javascript
formatTemperature(77, "F");
```

**Returns**

```text
77 F
```

---

## Learning Objectives

* Create reusable JavaScript functions
* Separate business logic from presentation
* Perform mathematical calculations
* Return values from functions
* Practice template literals
* Improve code organization and readability

---

## License

This project is provided for educational purposes and is free to use and modify.
