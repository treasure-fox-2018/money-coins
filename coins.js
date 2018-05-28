function converToCoin(money) {
var pecahanUang = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1];
var simpan = []
for (var i = 0; i < pecahanUang.length; i++) {
  while (money - pecahanUang[i] >= 0) {
    simpan.push(pecahanUang[i])
     money = money - pecahanUang[i]
  }
}
return simpan ;
}
console.log(converToCoin(543));
//output : [500, 20, 20, 1, 1, 1]
console.log(converToCoin(7752));
//output : [5000, 2000, 500, 50, 1, 1]
console.log(converToCoin(37454));
//output : [10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1]
