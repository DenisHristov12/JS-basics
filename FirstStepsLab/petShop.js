function calculateMoney(input) {
    let numOfPackagesForDogs = Number(input[0]);
    let numOfPackagesForCats = Number(input[1]);
    let pricePackagesForDogsAndCats = (numOfPackagesForDogs * 2.5) + (numOfPackagesForCats * 4);

    console.log(`${pricePackagesForDogsAndCats} lv.`);
}

calculateMoney(["5", "4"]);