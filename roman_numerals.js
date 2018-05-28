function convertToCoin (money) {
  var arrOfObjConversion = [
    {
      number: 1,
    },
    {
      number: 10,
    },
    {
      number: 20,
    },
    {
      number: 50,
    },
    {
      number: 100,
    },
    {
      number: 500,
    },
    {
      number: 1000,
    },
    {
      number: 2000,
    },
    {
      number: 5000,
    },
    {
      number: 10000,
    }
  ];
  var i = arrOfObjConversion.length - 1;
  var arrOfCoins = [];

  while (money !== 0) {
    var arrayAccessNumber = arrOfObjConversion[i].number;
    var inspector = money - arrayAccessNumber;
    // console.log(inspector);
    if (inspector >= 0) {
      money -= arrayAccessNumber;
      arrOfCoins.push(arrayAccessNumber)
      // console.log(tempoRomanConversion);
      // console.log(tempoNumberSum);
    } else if (inspector < 0) {
      // console.log("keluar");
      i --;
      // console.log(arrayAccessNumber);
      // console.log(arrayAccessRoman);
    }
  }
  return arrOfCoins;
}

// Drive code
console.log(convertToCoin(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(convertToCoin(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(convertToCoin(37454))
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
