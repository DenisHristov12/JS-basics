function calculate(input) {
    let peopleNum = Number(input[0]);
    let season = input[1];

    let pricePerson = 0;
    let allPrice = 0;

    if(peopleNum <= 5){
        switch (season) {
            case "spring":
                pricePerson = 50;
                allPrice = pricePerson * peopleNum;
                break;
            case "summer":
                pricePerson = 48.5;
                allPrice = pricePerson * peopleNum;

                let discount = allPrice * (15/100);

                allPrice -= discount;
                break;
            case "autumn":
                pricePerson = 60;
                allPrice = pricePerson * peopleNum;
                break;
            case "winter":
                pricePerson = 86;
                allPrice = pricePerson * peopleNum;

                let priceUp = allPrice * (8/100);

                allPrice += priceUp;
                break;
            default:
                console.log("error");
                break;
        }
    }else{
        switch (season) {
            case "spring":
                pricePerson = 48;
                allPrice = pricePerson * peopleNum;
                break;
            case "summer":
                pricePerson = 45;
                allPrice = pricePerson * peopleNum;

                let discount = allPrice * (15/100);

                allPrice -= discount;
                break;
            case "autumn":
                pricePerson = 49.5;
                allPrice = pricePerson * peopleNum;
                break;
            case "winter":
                pricePerson = 85;
                allPrice = pricePerson * peopleNum;

                let priceUp = allPrice * (8/100);

                allPrice += priceUp;
                break;
            default:
                console.log("error");
                break;
        }
    }

    console.log(`${allPrice.toFixed(2)} leva.`);
}

calculate(["10",
"summer"])
;