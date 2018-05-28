function convertToCoin (money) {
  // your implementation code here
  if (money === 0) return 0;

  let currency = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1];
  let index = 0

  for (let i = 0; i < currency.length; i++) {
    if (money - currency[i] >= 0) {
      money -= currency[i];
      index = i;
      break;
    }
  }
  
  return `${currency[index]}, ` + convertToCoin(money)
}

// Drive code
console.log(convertToCoin(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(convertToCoin(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(convertToCoin(37454))
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
