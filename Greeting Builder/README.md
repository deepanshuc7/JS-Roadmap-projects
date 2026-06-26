# Greeting Builder

A simple JavaScript project that demonstrates how to build reusable functions by creating personalized greetings based on a person's name and the time of day.

Based on [Greeting Builder](https://roadmap.sh/projects/js-greeting-builder) by [Roadmap.sh](https://roadmap.sh/projects/js-greeting-builder)

##  Project Description

The Greeting Builder consists of three functions:

* **`formatName(firstName, lastName)`** – Combines a person's first and last name into a single string.
* **`getGreeting(timeOfDay)`** – Returns an appropriate greeting based on the time of day.
* **`createGreeting(firstName, lastName, timeOfDay)`** – Uses the previous two functions to generate a complete greeting.

This project is intended as a beginner-friendly exercise for practicing:

* JavaScript functions
* Function composition
* String interpolation (template literals)
* Conditional statements
* Code reusability

---

## 📁 Project Structure

```
greeting-builder/
│
├── main.js
└── README.md
```

---

##  Getting Started

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
cd greeting-builder
```

3. Run the JavaScript file:

```bash
node index.js
```

Or simply open the file in your browser's developer console.

---

##  Sample Output

```
Good morning, Ava Stone
Good evening, Noah Kim
Good afternoon, Mina Patel
```

---

##  Functions

### `formatName(firstName, lastName)`

Returns the full name as a single string.

**Example**

```javascript
formatName("John", "Doe");
```

**Returns**

```
John Doe
```

---

### `getGreeting(timeOfDay)`

Returns a greeting based on the supplied time of day.

| Input         | Output             |
| ------------- | ------------------ |
| `"morning"`   | `"Good morning"`   |
| `"afternoon"` | `"Good afternoon"` |
| `"evening"`   | `"Good evening"`   |

---

### `createGreeting(firstName, lastName, timeOfDay)`

Combines the formatted name and greeting into one personalized message.

**Example**

```javascript
createGreeting("John", "Doe", "morning");
```

**Returns**

```
Good morning, John Doe
```

---

##  Learning Objectives

* Create reusable JavaScript functions
* Pass data between functions
* Return values instead of printing directly
* Practice template literals
* Improve code organization and readability

---

##  License

This project is provided for educational purposes and is free to use and modify.
