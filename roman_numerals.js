function convertToCoin (money) {
  let change = [10000,5000,2000,1000,500,200,100,50,20,10,1];
  let changeDenominations = [];

  while(money > 0){
    for(z =0; z < change.length; z++){
      if(money >= change[z]){
        changeDenominations.push(change[z]);
        money -= change[z];
        break;
      }
    }
  }
  return changeDenominations
  
  // your implementation code here
}

// Drive code
console.log(convertToCoin(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(convertToCoin(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(convertToCoin(37454))
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
