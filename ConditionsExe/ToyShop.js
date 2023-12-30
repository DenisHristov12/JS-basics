function calculate(input){
    let pricePuzzels = 2.6;
    let priceTalkingToys = 3;
    let priceTeddyBears = 4.1;
    let priceMinions = 8.2;
    let priceTrucks = 2;


    let priceVacation = Number(input[0]);
    let numOfPuzzles = Number(input[1]);
    let numOfTalkingToys = Number(input[2]);
    let numOfTeddyBears = Number(input[3]);
    let numOfMinions = Number(input[4]);
    let numOfTrucks = Number(input[5]);

    let toysPrice = (numOfPuzzles * pricePuzzels) + (numOfTalkingToys * priceTalkingToys) + (numOfTeddyBears * priceTeddyBears) + (numOfMinions * priceMinions) + (numOfTrucks * priceTrucks);
    let toysNum = numOfPuzzles + numOfTalkingToys + numOfTeddyBears + numOfMinions + numOfTrucks;
    let discount = 0;

    if(toysNum >= 50){
        discount = toysPrice * (25/100);
    }

    let earnings = toysPrice - discount; 
    let rent = earnings * (10/100);
    earnings = (earnings - rent);

    if(earnings >= priceVacation){
        console.log(`Yes! ${(earnings - priceVacation).toFixed(2)} lv left.`);
    }else{
        console.log(`Not enough money! ${(priceVacation - earnings).toFixed(2)} lv needed.`);
    }
}

calculate(["40.8","20","25","30","50","10"]);