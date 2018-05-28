function convertToCoin (money) {
  var countingMoney = money
  var coin = []
  while(countingMoney !== 0){
    if(countingMoney > 10000){
      coin.push(10000)
      countingMoney -= 10000
    }else if(countingMoney > 5000){
      coin.push(5000)
      countingMoney-= 5000
    }else if(countingMoney > 2000){
      coin.push(2000)
      countingMoney -= 2000
    }else if (countingMoney > 500){
      coin.push(500)
      countingMoney -= 500
    } else if (countingMoney > 200){
      coin.push(200)
      countingMoney -= 200
    } else if(countingMoney > 50){
      coin.push(50)
      countingMoney -= 50
    } else if(countingMoney > 20){
      coin.push(20)
      countingMoney -= 20
    } else if (countingMoney >= 1){
      coin.push(1)
      countingMoney -= 1
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
