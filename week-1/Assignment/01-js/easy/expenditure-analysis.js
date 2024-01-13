/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let result = [];
  let categories = {};

  for (let transaction of transactions) {
    let category = transaction.category;
    let amount = transaction.price;

    if (!categories[category]) {
      categories[category] = {
        category,
        totalSpent: 0,
      };
    }

    categories[category].totalSpent += amount;
  }

  Object.values(categories).forEach((categoryData) => {
    result.push({
      category: categoryData.category,
      totalSpent: categoryData.totalSpent,
    });
  });

  return result;
}


module.exports = calculateTotalSpentByCategory;
