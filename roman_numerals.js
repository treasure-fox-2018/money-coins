function convertToCoin (money) {
  // your implementation code 
  var moneyConv = [10000, 5000, 2000, 500, 200, 50, 20, 1 ];
  var hasil = [];

  for (var i = 0 ; i < moneyConv.length ; i ++) {
    while (money >= moneyConv[i]) {
      money -= moneyConv[i]
      hasil.push(moneyConv[i])
    }
  }
return hasil
}

// Drive code
console.log(convertToCoin(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

 console.log(convertToCoin(7752))
// //output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(convertToCoin(37454))
// //output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
