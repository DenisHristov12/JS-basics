function returnChange(input) {
    let change = Number(input[0]);
    let coins = Math.round(change * 100);
    let numOfCoins = 0;

    while (coins > 0) {

        if(coins >= 200){
            coins -= 200;
            numOfCoins++;
        }else if(coins >= 100){
            coins -= 100;
            numOfCoins++;
        }else if(coins >= 50){
            coins -= 50;
            numOfCoins++;
        }else if(coins >= 20){
            coins -= 20;
            numOfCoins++;
        }else if(coins >= 10){
            coins -= 10;
            numOfCoins++;
        }else if(coins >= 5){
            coins -= 5;
            numOfCoins++;
        }else if(coins >= 2){
            coins -= 2;
            numOfCoins++;
        }else if(coins >= 1){
            coins -= 1;
            numOfCoins++;
        }

    }

    console.log(numOfCoins);
}

returnChange(["0.56"]);