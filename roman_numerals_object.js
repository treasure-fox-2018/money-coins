function convertToCoin (money) {
  var object = {
    a1 : 10000,
    a2 : 5000,
    a3 : 2000,
    a4 : 500,
    a5 : 200,
    a6 : 50,
    a7 : 20,
    a8 : 1
  }

  // console.log(object.a1)
  var result = [];
  

  for (var keys in object) {
    while (money >= object[keys]) {
      money = money - object[keys]
      result.push(object[keys])
     
    }
  }
  return result;
    // your implementation code here
}

// Drive code
console.log(convertToCoin(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(convertToCoin(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(convertToCoin(37454))
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
