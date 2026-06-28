# User Profile Formatter

A simple JavaScript project that demonstrates how to extract and format data from a nested user object into a structure suitable for displaying in a user interface or returning from an API.

Based on [User Profile Formatter](https://roadmap.sh/projects/js-user-profile-formatter) by [Roadmap.sh](https://roadmap.sh/projects/js-user-profile-formatter)

## Project Description

The User Profile Formatter project consists of five functions:

* **`getDisplayName(user)`** – Returns the user's first and last name as a single string.
* **`getLocation(user)`** – Returns the user's location in the format `"City, Country"`.
* **`getContactSummary(user)`** – Returns an object containing the user's email and phone number.
* **`isAccountActive(user)`** – Returns `true` if the user's account status is `"active"`.
* **`createProfileSummary(user)`** – Returns a formatted summary object containing the display name, location, contact information, account status, and subscription plan.

This project is intended as a beginner-friendly exercise for practicing:

* JavaScript functions
* Nested objects
* Object composition
* Function composition
* Code reusability

---

## Project Structure

```text
user-profile-formatter/
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
cd user-profile-formatter
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
  displayName: "Ava Stone",
  location: "London, UK",
  contact: {
    email: "ava@example.com",
    phone: null
  },
  active: true,
  plan: "pro"
}

"Ava Stone"

true

{
  email: "ava@example.com",
  phone: null
}
```

---

## Functions

### `getDisplayName(user)`

Returns the user's full name.

**Example**

```javascript
getDisplayName(user);
```

**Returns**

```text
Ava Stone
```

---

### `getLocation(user)`

Returns the user's location formatted as `"City, Country"`.

**Example**

```javascript
getLocation(user);
```

**Returns**

```text
London, UK
```

---

### `getContactSummary(user)`

Returns an object containing the user's email and phone number.

The `phone` property remains `null` when no phone number is available.

**Example**

```javascript
getContactSummary(user);
```

**Returns**

```javascript
{
  email: "ava@example.com",
  phone: null
}
```

---

### `isAccountActive(user)`

Returns whether the user's account is active.

**Example**

```javascript
isAccountActive(user);
```

**Returns**

```text
true
```

---

### `createProfileSummary(user)`

Returns a formatted summary of the user's profile.

**Example**

```javascript
createProfileSummary(user);
```

**Returns**

```javascript
{
  displayName: "Ava Stone",
  location: "London, UK",
  contact: {
    email: "ava@example.com",
    phone: null
  },
  active: true,
  plan: "pro"
}
```

---

## Learning Objectives

* Create reusable JavaScript helper functions
* Work with nested objects
* Extract and transform object data
* Compose multiple helper functions into a single result
* Return structured data using objects
* Improve code organization and readability

---

## License

This project is provided for educational purposes and is free to use and modify.
