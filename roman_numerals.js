function convertToCoin (money) {
  // your implementation code here
  var newArray = [];
  var coin = {
    uang1: 10000,
    uang2: 5000,
    uang3: 2000,
    uang4: 1000,
    uang5: 500,
    uang6: 200,
    uang7: 100,
    uang8: 50,
    uang9: 20,
    uang10: 10,
    uang11: 1
  }

  for(var i in coin){
    while (money >= coin[i]) {
      newArray.push(coin[i]);
      money -= coin[i]
    }
  }
  return newArray;
}

// Drive code
console.log(convertToCoin(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(convertToCoin(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(convertToCoin(37454))
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
