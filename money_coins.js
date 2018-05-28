// Cha chiiiinggg !!!

function convertToCoin (money) {
  
  const coinValue =[10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1]
  let moneyCoin = money
  let result = []

  while(moneyCoin > 0) {
    for(let x=0; x<=coinValue.length; x++) {
      if(moneyCoin>=coinValue[x]) {
        moneyCoin -= coinValue[x]
        result.push(coinValue[x])
        break
      }
    }
  }
 
  return result
}

// Drive code
console.log(convertToCoin(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(convertToCoin(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(convertToCoin(37454))
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
