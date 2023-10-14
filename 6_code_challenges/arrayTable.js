// Write a function called createTable(rows, columns) that takes two parameters: rows (number of rows) and columns (number of columns). The function should generate a table represented as an array of arrays, where each inner array represents a row and contains the row's data. Each cell in the table should contain the product of its row index and column index.

function createTable(rows, columns) {
    const outerArray = []

  for (let i = 0; i < rows; i++) {
    const innerArray = []
    for(let j = 0; j < columns; j++) {
        innerArray.push(i * j)
    }
    outerArray.push(innerArray)
  }
  return outerArray
}

// Test the function with different values
const table1 = createTable(3, 4);
console.log(table1);

/* Expected Outcome:
[
  [0, 0, 0, 0],
  [0, 1, 2, 3],
  [0, 2, 4, 6]
]
 */

const table2 = createTable(5, 5);
console.log(table2);