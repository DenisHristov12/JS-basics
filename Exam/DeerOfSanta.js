function calculateFood(input) {
    let numOfDays = Number(input[0]);
    let foodInKG = Number(input[1]);
    let foodPerDayFirstDeer = Number(input[2]);
    let foodPerDaySecondDeer = Number(input[3]);
    let foodPerDayThirdDeer = Number(input[4]);

    let allFoodNeeded = (numOfDays * foodPerDayFirstDeer) + (numOfDays * foodPerDaySecondDeer) + (numOfDays * foodPerDayThirdDeer);

    if(allFoodNeeded >= foodInKG){
        console.log(`${Math.ceil(allFoodNeeded - foodInKG)} more kilos of food are needed.`);
    }else{
        console.log(`${Math.floor(foodInKG - allFoodNeeded)} kilos of food left.`);
    }
}

calculateFood(["2",
"10",
"1",
"1",
"2"])
;