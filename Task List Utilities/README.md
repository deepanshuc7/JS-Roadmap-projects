# Task List Utilities

A simple JavaScript project that demonstrates how to build reusable helper functions for managing a task list while keeping the original data immutable.

Based on [Task List Utilities](https://roadmap.sh/projects/js-task-list-utilities) by [Roadmap.sh](https://roadmap.sh/projects/js-task-list-utilities)

## Project Description

The Task List Utilities project consists of four functions:

* **`addTask(tasks, title)`** – Returns a new array with a new incomplete task added.
* **`completeTask(tasks, taskId)`** – Returns a new array where only the matching task is marked as completed.
* **`removeTask(tasks, taskId)`** – Returns a new array without the specified task.
* **`countIncompleteTasks(tasks)`** – Returns the total number of incomplete tasks.

This project is intended as a beginner-friendly exercise for practicing:

* JavaScript functions
* Arrays and objects
* Array methods
* Immutability
* Code reusability

---

## Project Structure

```text
task-list-utilities/
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
cd task-list-utilities
```

3. Run the JavaScript file:

```bash
node main.js
```

Or simply open the file in your browser's developer console.

---

## Sample Output

```javascript
const tasks = [
  { id: 1, title: "Review variables", completed: true },
  { id: 2, title: "Practice functions", completed: false },
];

const withNewTask = addTask(tasks, "Build task utilities");

console.log(withNewTask.map((task) => task.title));
// ["Review variables", "Practice functions", "Build task utilities"]

const completed = completeTask(withNewTask, 2);

console.log(countIncompleteTasks(completed));
// 1

console.log(removeTask(completed, 1).map((task) => task.id));
// [2, 3]

console.log(tasks.length);
// 2

console.log(countIncompleteTasks(tasks));
// 1
```

---

## Functions

### `addTask(tasks, title)`

Returns a new array with a new task added. The original array remains unchanged.

**Example**

```javascript
addTask(tasks, "Learn array methods");
```

**Returns**

```javascript
[
  { id: 1, title: "Review variables", completed: true },
  { id: 2, title: "Practice functions", completed: false },
  { id: 3, title: "Learn array methods", completed: false }
]
```

---

### `completeTask(tasks, taskId)`

Returns a new array where the task matching the provided ID is marked as completed.

**Example**

```javascript
completeTask(tasks, 2);
```

**Returns**

```javascript
[
  { id: 1, title: "Review variables", completed: true },
  { id: 2, title: "Practice functions", completed: true }
]
```

---

### `removeTask(tasks, taskId)`

Returns a new array with the specified task removed.

**Example**

```javascript
removeTask(tasks, 1);
```

**Returns**

```javascript
[
  { id: 2, title: "Practice functions", completed: false }
]
```

---

### `countIncompleteTasks(tasks)`

Returns the number of tasks that are not yet completed.

**Example**

```javascript
countIncompleteTasks(tasks);
```

**Returns**

```text
1
```

---

## Learning Objectives

* Create reusable JavaScript helper functions
* Work with arrays of objects
* Practice immutable data manipulation
* Use array methods such as `map()`, `filter()`, and `reduce()`
* Improve code organization and readability

---

## License

This project is provided for educational purposes and is free to use and modify.
