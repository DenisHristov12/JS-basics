function boatPrice(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishersNum = Number(input[2]);

    let rentPrice = 0;
    let discount = 0;

    let total = 0;

    switch (season) {
        case "Spring":
            rentPrice = 3000;
            if(fishersNum >= 0 && fishersNum <= 6){
                discount = rentPrice * (10/100);
                total = rentPrice - discount;
            }else if(fishersNum >= 7 && fishersNum <= 11){
                discount = rentPrice * (15/100);
                total = rentPrice - discount;
            }else if(fishersNum >= 12){
                discount = rentPrice * (25/100);
                total = rentPrice - discount;
            }
            break;
        case "Summer":
        case "Autumn":
            rentPrice = 4200;
            if(fishersNum >= 0 && fishersNum <= 6){
                discount = rentPrice * (10/100);
                total = rentPrice - discount;
            }else if(fishersNum >= 7 && fishersNum <= 11){
                discount = rentPrice * (15/100);
                total = rentPrice - discount;
            }else if(fishersNum >= 12){
                discount = rentPrice * (25/100);
                total = rentPrice - discount;
            }
            break;
        case "Winter":
            rentPrice = 2600;
            if(fishersNum >= 0 && fishersNum <= 6){
                discount = rentPrice * (10/100);
                total = rentPrice - discount;
            }else if(fishersNum >= 7 && fishersNum <= 11){
                discount = rentPrice * (15/100);
                total = rentPrice - discount;
            }else if(fishersNum >= 12){
                discount = rentPrice * (25/100);
                total = rentPrice - discount;
            }
            break;
        default:
            console.log("error");
            break;
    }

    if(fishersNum % 2 == 0 && season != "Autumn"){
        discount += total * (5/100);
        total = rentPrice - discount;
    }

    if(budget >= total){
        console.log(`Yes! You have ${(budget - total).toFixed(2)} leva left.`);
    }else{
        console.log(`Not enough money! You need ${(total - budget).toFixed(2)} leva.`);
    }
}

boatPrice(["3600","Autumn","6"]);