// Exercise 1
list_food = [
  [5, 2],
  [10, 4],
];

function calculateShoppingBudget(list_food) {
  let sum = 0;
  for (let i = 0; i < list_food.length; i++) {
    sum += list_food[i][0] * list_food[i][1];
  }
  return sum;
}
console.log(
  `Calculate Shopping Budget of the list = ${calculateShoppingBudget(
    list_food
  )}`
);

// Exercise 2

const list_matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
function snail(matrix) {
  let list = [];
  let is_continue = true;

  while (is_continue) {
    const topRow = matrix.shift();
    list = list.concat(topRow);

    for (let i = 0; i < matrix.length; i++) {
      const rightColumn = matrix[i].pop();
      if (rightColumn !== undefined) {
        list.push(rightColumn);
      }
    }

    if (matrix.length > 0) {
      const bottomRow = matrix.pop();
      list = list.concat(bottomRow.reverse());
    }

    for (let i = matrix.length - 1; i >= 0; i--) {
      const leftColumn = matrix[i].shift();
      if (leftColumn !== undefined) {
        list.push(leftColumn);
      }
    }

    if (matrix.length <= 0) {
      is_continue = false;
    }
  }

  return list;
}

console.log(snail(list_matrix));
