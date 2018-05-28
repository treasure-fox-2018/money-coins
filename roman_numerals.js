function convertToCoin (money) {
  // your implementation code here
  var pecahan = [ 10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1]
  var result = ''
  var arr = []

  for (var i = 0; i < pecahan.length; i++) {
    // contoh case 1: apakah money lebih besar dari 500? iya so di push 500
    // next ada sisa 43, apakah 43 >= 20? yes jadi push 20 karena 43-20
    // 23 >= 20? yes so push 20 and so on
    while(money >= pecahan[i]) {
      arr.push(pecahan[i])
      money = money - pecahan[i]
    }  
  }
  return arr
}

// Drive code
console.log(convertToCoin(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(convertToCoin(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(convertToCoin(37454))
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
