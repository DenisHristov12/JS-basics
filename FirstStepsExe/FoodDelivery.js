function calculate(input) {
    let numOfChickenMenus = Number(input[0]) * 10.35;
    let numOfFishMenus = Number(input[1]) * 12.40;
    let numOfVegieMenus = Number(input[2]) * 8.15;
    let dostavka = 2.5;

    let priceMenus = numOfChickenMenus + numOfFishMenus + numOfVegieMenus;
    let priceOfDessert = priceMenus * 20/100;
    let price = priceMenus + priceOfDessert + dostavka;

    console.log(price);
}

calculate(["9","2","6"]);