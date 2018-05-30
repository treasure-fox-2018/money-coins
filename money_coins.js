function convertToCoin (money) {
  // your implementation code here
  let moneyObj = {
    10000: [],
    5000: [],
    2000: [],
    1000: [],
    500: [],
    200: [],
    100: [],
    50: [],
    20: [],
    10: [],
    1: [],
  }

  let keys = Object.keys(moneyObj)
  let hasil = []

  for (let a = keys.length-1; a >= 0; a--) {
    while ((money - keys[a]) > 0) {
      hasil.push(keys[a])
      money = money - keys[a]
    }
    console.log(a, money, hasil)
  }
  return hasil
}

// Drive code
console.log(convertToCoin(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(convertToCoin(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(convertToCoin(37454))
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
