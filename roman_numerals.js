function convertToCoin (money) {
  var lookup = {
                A:10000,
                B:5000,
                C:2000,
                D:1000,
                E:500,
                F:200,
                G:100,
                H:50,
                I:20,
                J:10,
                K:1
              }
  var coin = []
  var i;
  for ( i in lookup ) {
    while ( money >= lookup[i] ) {
      coin.push(lookup[i]);
      money -= lookup[i];
    }
  }
  return coin;
}

// Drive code
console.log(convertToCoin(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(convertToCoin(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(convertToCoin(37454))
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
