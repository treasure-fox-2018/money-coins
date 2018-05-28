function convertToCoin (money) {
  let currency = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1];
  let index = 0;
  let output = [];

  while (money !== 0) {
    if (money - currency[index] >= 0) {
      output.push(currency[index]);
      money -= currency[index];
    }
    else { index++ }
  }
  return output;
}

// Drive code
console.log(convertToCoin(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(convertToCoin(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(convertToCoin(37454))
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]