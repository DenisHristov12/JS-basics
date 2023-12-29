function calculate(input) {
    let yearTax = Number(input[0]);

    let shoesPrice = yearTax - (yearTax * 40/100);
    let kitPrice = shoesPrice - (shoesPrice * 20/100);
    let ballPrice = kitPrice / 4;
    let accesoariesPrice = ballPrice / 5;

    let priceSum = yearTax + shoesPrice + kitPrice + ballPrice + accesoariesPrice;

    console.log(priceSum);
}

calculate(["365"]);