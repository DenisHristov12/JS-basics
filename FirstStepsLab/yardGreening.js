function calculateMoney(input) {
    let pricePerMeter = 7.61;
    let numOfMeters = Number(input[0]);

    let price = numOfMeters * pricePerMeter;
    let discount = price * 0.18;
    let priceWithDiscount = price - discount;

    console.log(`The final price is: ${priceWithDiscount} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

calculateMoney(["550"]);