/*
PSEUDOCODE

STORE `a` with value [1, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000]
STORE `convertArr` with value empty arr

FOR `a` = Length of `coin` substract 1 
  WHILE `money` >= `coin[a]`
    IF `money` >= `coin[a]` THEN
      `convertArr` <- `coin[a]`
      `money` = `money` substract `coin[a]`
    ENDIF 
  ENDWHILE
  `a` ADD By 1
ENDFOR

DISPLAY `convertArr`
*/

function convertToCoin (money) {
  var coin = [1, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000]

  var convertArr = []
  
  for (var a = coin.length-1; a >= 0; a--){
    while (money >= coin[a]){
      if(money >= coin[a]){
        convertArr.push(coin[a])
        money -= coin[a]
      }
    }
  }
  return convertArr
}

// Drive code
console.log(convertToCoin(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(convertToCoin(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(convertToCoin(37454))
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
