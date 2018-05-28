function convertToCoin(money) {
    var moneyLeft = money
    var coin = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1];
    var totalCoin = [];
    
    for(let i = 0; i < coin.length; i++) {
        
        if(moneyLeft >= coin[i]) {
            while(moneyLeft >= coin[i]) {
                totalCoin.push(coin[i]);
                moneyLeft -= coin[i]
            }
        }
    }
    return totalCoin;
}

console.log(convertToCoin(543));
console.log(convertToCoin(7752));
console.log(convertToCoin(37454));