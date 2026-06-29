# JSON Response Normalizer

A simple JavaScript project that demonstrates how to transform API response data into a smaller, more useful structure by filtering and mapping nested objects using reusable helper functions.

Based on [JSON Response Normalizer](https://roadmap.sh/projects/js-json-response-normalizer) by [Roadmap.sh](https://roadmap.sh/projects/js-json-response-normalizer)

## Project Description

The JSON Response Normalizer project consists of three functions:

* **`getPublishedArticles(response)`** – Returns only the articles whose status is `"published"`.
* **`toArticleSummary(article)`** – Converts an article object into a simplified summary object.
* **`normalizeArticles(response)`** – Returns a list of summaries for published articles only.

This project is intended as a beginner-friendly exercise for practicing:

* JavaScript functions
* Arrays and objects
* Nested object access
* Array methods
* Data transformation
* Code reusability

---

## Project Structure

```text id="j28gy2"
json-response-normalizer/
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

```bash id="f7n3a4"
git clone https://github.com/deepanshuc7/JS-Roadmap-projects.git
```

2. Navigate to the project folder:

```bash id="ucqg5m"
cd json-response-normalizer
```

3. Run the JavaScript file:

```bash id="wbm2mk"
node main.js
```

Or simply open the file in your browser's developer console.

---

## Sample Output

```javascript id="38yckh"
normalizeArticles(apiResponse);

// [
//   {
//     id: "a1",
//     title: "Learning JavaScript",
//     authorName: "Ava Stone",
//     views: 1200
//   },
//   {
//     id: "a3",
//     title: "Async Basics",
//     authorName: "Mina Patel",
//     views: 900
//   }
// ]

getPublishedArticles(apiResponse).length;
// 2

toArticleSummary(apiResponse.data[0]);

// {
//   id: "a1",
//   title: "Learning JavaScript",
//   authorName: "Ava Stone",
//   views: 1200
// }
```

---

## Functions

### `getPublishedArticles(response)`

Returns only the published articles from the API response.

**Example**

```javascript id="xok0jq"
getPublishedArticles(apiResponse);
```

**Returns**

```javascript id="ey5zh5"
[
  {
    id: "a1",
    title: "Learning JavaScript",
    status: "published",
    author: { name: "Ava Stone" },
    stats: { views: 1200 }
  },
  {
    id: "a3",
    title: "Async Basics",
    status: "published",
    author: { name: "Mina Patel" },
    stats: { views: 900 }
  }
]
```

---

### `toArticleSummary(article)`

Converts an article object into a simplified summary object.

**Example**

```javascript id="mff4uo"
toArticleSummary(apiResponse.data[0]);
```

**Returns**

```javascript id="4d3rzk"
{
  id: "a1",
  title: "Learning JavaScript",
  authorName: "Ava Stone",
  views: 1200
}
```

---

### `normalizeArticles(response)`

Returns a list of simplified summaries for all published articles.

**Example**

```javascript id="p5j36v"
normalizeArticles(apiResponse);
```

**Returns**

```javascript id="85n1q8"
[
  {
    id: "a1",
    title: "Learning JavaScript",
    authorName: "Ava Stone",
    views: 1200
  },
  {
    id: "a3",
    title: "Async Basics",
    authorName: "Mina Patel",
    views: 900
  }
]
```

---

## Learning Objectives

* Create reusable JavaScript helper functions
* Work with nested objects
* Use array methods such as `filter()` and `map()`
* Transform API response data into a simpler structure
* Preserve the original data without mutation
* Improve code organization and readability

---

## License

This project is provided for educational purposes and is free to use and modify.
