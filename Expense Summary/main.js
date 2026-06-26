function calculateTotal(expenses) {
  return expenses.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.amount;
  }, 0);
}

function calculateCategoryTotal(expenses, category) {
  return expenses.reduce((accumulator, currentItem) => {
    if (currentItem.category === category) {
      return accumulator + currentItem.amount;
    }
    return accumulator;
  }, 0);
}

function findLargestExpense(expenses) {
  if (expenses.length === 0) {
    return null;
  }

  return expenses.reduce((largest, currentItem) => {
    return currentItem.amount > largest.amount ? currentItem : largest;
  });
}

function createExpenseSummary(expenses) {
    return {
        total: calculateTotal(expenses),
        foodTotal: calculateCategoryTotal(expenses, 'food'),
        transportTotal: calculateCategoryTotal(expenses, 'transport'),
        largestExpense: findLargestExpense(expenses)
    };
}

const expenses = [
  { id: 1, category: "food", amount: 24 },
  { id: 2, category: "transport", amount: 15 },
  { id: 3, category: "food", amount: 18 },
  { id: 4, category: "books", amount: 40 },
];

console.log(createExpenseSummary(expenses));
console.log(calculateCategoryTotal(expenses, 'food'));
console.log(calculateCategoryTotal(expenses, 'health'));
console.log(findLargestExpense(expenses));
