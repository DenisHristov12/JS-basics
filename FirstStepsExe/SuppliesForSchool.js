function calculate(input) {
    let numPackagesOfPens = Number(input[0]) * 5.8;
    let numPackagesOfMarkers = Number(input[1]) * 7.2;
    let liters = Number(input[2]) * 1.2;
    let discount = Number(input[3]) / 100;

    let sum = numPackagesOfPens + numPackagesOfMarkers + liters;
    let sumWithDiscount = sum - sum * discount;

    console.log(sumWithDiscount);
}

calculate(["2","3","4","25"]);