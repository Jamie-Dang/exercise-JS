// Exercise 1
list_food = [
  [5, 2],
  [10, 4],
];

function calculateShoppingBudget(list_food) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i][0] * list[i][1];
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
    // shift() dùng để lấy hàng / giá trị đầu
    let temp = matrix.shift();
    list = list.concat(temp);

    for (let i = 0; i < matrix.length; i++) {
      // shift() dùng để lấy hàng / giá trị cuối cùng
      let temp = matrix[i].pop();
      if (temp !== undefined) {
        list.push(temp);
      }
    }

    if (matrix.length > 0) {
      let temp = matrix.pop();
      // reverse() dùng để đảo ngược giá trị
      list = list.concat(temp.reverse());
    }

    for (let i = matrix.length - 1; i >= 0; i--) {
      // Lấy cột / những giá trị đầu từ dưới lên trên
      let temp = matrix[i].shift();
      if (temp !== undefined) {
        list.push(temp);
      }
    }

    if (matrix.length <= 0) {
      is_continue = false;
    }
  }

  return list;
}

console.log(snail(list_matrix));
// Kết quả: [1, 2, 3, 6, 9, 8, 7, 4, 5]
