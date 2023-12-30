function calculate(input){
    let budget = Number(input[0]);
    let numOfStatists = Number(input[1]);
    let priceForClothes = Number(input[2]);

    let decor = budget * (10/100);
    let discountClothes = 0;

    if(numOfStatists > 150){
        discountClothes = priceForClothes * (10/100);
        priceForClothes -= discountClothes;
    }

    let sum = decor + numOfStatists * priceForClothes;

    if(sum > budget){
        console.log("Not enough money!");
        console.log(`Wingard needs ${(sum - budget).toFixed(2)} leva more.`);
    }else{
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - sum).toFixed(2)} leva left.`);
    }
}

calculate(["15437.62","186","57.99"]);