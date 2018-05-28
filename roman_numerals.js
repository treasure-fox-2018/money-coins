function convertToCoin (money) {
  var hasil = [];

  while (money > 10000) {
    hasil.push(10000);
    money = money - 10000;
  }
  while (money > 5000) {
    hasil.push(5000);
    money = money - 5000;
  }
  while (money > 2000) {
    hasil.push(2000);
    money = money - 2000;
  }
  while (money > 500) {
    hasil.push(500);
    money = money - 500;
  }
  while (money >= 200) {
    hasil.push(200);
    money = money - 200;
  }
  while (money >= 50) {
    hasil.push(50);
    money = money - 50;
  }
  while (money >= 20) {
    hasil.push(20);
    money = money - 20;
  }
  while (money >= 1) {
    hasil.push(1);
    money = money - 1;
  }
  return hasil;
  // your implementation code here
}

// Drive code
console.log(convertToCoin(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(convertToCoin(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(convertToCoin(37454))
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
