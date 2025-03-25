// Exercise 1
listFood = [
  [5, 2],
  [10, 4],
];

function calculateShoppingBudget(listFood) {
  let sum = 0;
  for (let i = 0; i < listFood.length; i++) {
    sum += listFood[i][0] * listFood[i][1];
  }
  return sum;
}
console.log(
  `Calculate Shopping Budget of the list = ${calculateShoppingBudget(listFood)}`
);

// Exercise 2

const listMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
function listSnail(matrix) {
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

console.log(listSnail(listMatrix));
