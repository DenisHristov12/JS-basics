function calculate(input) {
    let peterBudget = Number(input[0]);
    let numOfGraphicsCards = Number(input[1]);
    let numOfProccesors = Number(input[2]);
    let numOfRam = Number(input[3]);

    let graphicsCard = 250;
    let proccesors = (35/100) * (numOfGraphicsCards * graphicsCard);
    let ram = (10/100) * (numOfGraphicsCards * graphicsCard);

    let finalPrice = (numOfGraphicsCards * graphicsCard) + (numOfProccesors * proccesors) + (numOfRam * ram);

    if(numOfGraphicsCards > numOfProccesors){
        finalPrice = finalPrice - (finalPrice * (15/100));
    }

    if(finalPrice <= peterBudget){
        console.log(`You have ${(peterBudget - finalPrice).toFixed(2)} leva left!`);
    }else{
        console.log(`Not enough money! You need ${(finalPrice - peterBudget).toFixed(2)} leva more!`);
    }
}

calculate(["920.45","3","1","1"]);