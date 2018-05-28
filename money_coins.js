function moneySatuan(money) {
  var hasilSatuan = []
  for (var a = 0; a < money; a++) {
    hasilSatuan.push(1)
  }
  return hasilSatuan
}

function moneyPuluhan(money) {
  var hasilPuluhan = []
  while (money > 1) {
    if (money >= 5) {
      hasilPuluhan.push(50)
      money = money - 5
    }
    if (money >= 2) {
      hasilPuluhan.push(20)
      money = money - 2
    }
  }
  if (money === 1) {
    hasilPuluhan.push(10)
  }
  return hasilPuluhan
}

function moneyRatusan(money) {
  var hasilRatusan = []
  while (money > 1) {
    if (money >= 5) {
      hasilRatusan.push(500)
      money = money - 5
    }
    if (money >= 2) {
      hasilRatusan.push(200)
      money = money - 2
    }
  }
  if (money === 1) {
    hasilPuluhan.push(100)
  }
  return hasilRatusan
}

function moneyRibuan(money) {
  var hasilRibuan = []
  while (money > 1) {
    if (money >= 5) {
      hasilRibuan.push(5000)
      money = money - 5
    }
    if (money >= 2) {
      hasilRibuan.push(2000)
      money = money - 2
    }
  }
  if (money === 1) {
    hasilRibuan.push(1000)
  }
  return hasilRibuan
}

function moneyPuluhRibuan(money) {
  var hasilPuluhRibuan = []
  for (var b = 0; b < money; b++) {
    hasilPuluhRibuan.push(10000)
  } 
  return hasilPuluhRibuan
}

function convertToCoin (money) {
  // your implementation code here
  var arrMoney = []
  while (money >= 10) {
    var angkaAkhir = money % 10
    arrMoney.push(angkaAkhir)
    money = Math.floor(money / 10)
  }
  arrMoney.push(money)
  var hasil = []
  for (var c = 0; c < arrMoney.length; c++) {
    if (c === 0) {
      var satuan = moneySatuan(arrMoney[c])
      hasil.unshift(satuan)
    } else if (c === 1) {
      var puluhan = moneyPuluhan(arrMoney[c])
      hasil.unshift(puluhan)
    } else if (c === 2) {
      var ratusan = moneyRatusan(arrMoney[c])
      hasil.unshift(ratusan)
    } else if (c === 3) {
      var ribuan = moneyRibuan(arrMoney[c])
      hasil.unshift(ribuan)
    } else if (c === 4) {
      var puluhRibuan = moneyPuluhRibuan(arrMoney[c])
      hasil.unshift(puluhRibuan)
    }
  }
  var hasilAkhir = []
  for (var d = 0; d < hasil.length; d++) {
    for (var e = 0; e < hasil[d].length; e++) {
      hasilAkhir.push(hasil[d][e])
    }
  }
  return hasilAkhir
}

// Drive code
console.log(convertToCoin(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(convertToCoin(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(convertToCoin(37454))
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
