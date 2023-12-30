function calculate(input) {
    let flowerType = input[0];
    let flowerNum = Number(input[1]);
    let budget = Number(input[2]);

    let discount = 0;
    let total = 0;

    let rose = 5;
    let dahlia = 3.8;
    let tulip = 2.8;
    let narcissus = 3;
    let gladiolus = 2.5;

    switch (flowerType) {
        case "Roses":
            total = flowerNum * rose;
            if(flowerNum > 80){
                discount = total * (10/100); 
                total -= discount;
            }
            if(budget >= total){
                console.log(`Hey, you have a great garden with ${flowerNum} ${flowerType} and ${(budget - total).toFixed(2)} leva left.`);
            }else{
                console.log(`Not enough money, you need ${(total - budget).toFixed(2)} leva more.`);
            }
            break;
        case "Dahlias":
            total = flowerNum * dahlia;
            if(flowerNum > 90){
                discount = total * (15/100); 
                total -= discount;
            }
            if(budget >= total){
                console.log(`Hey, you have a great garden with ${flowerNum} ${flowerType} and ${(budget - total).toFixed(2)} leva left.`);
            }else{
                console.log(`Not enough money, you need ${(total - budget).toFixed(2)} leva more.`);
            }
            break;
        case "Tulips":
            total = flowerNum * tulip;
            if(flowerNum > 80){
                discount = total * (15/100); 
                total -= discount;
            }
            if(budget >= total){
                console.log(`Hey, you have a great garden with ${flowerNum} ${flowerType} and ${(budget - total).toFixed(2)} leva left.`);
            }else{
                console.log(`Not enough money, you need ${(total - budget).toFixed(2)} leva more.`);
            }
            break;
        case "Narcissus":
            total = flowerNum * narcissus;
            if(flowerNum < 120){
                total += total * (15/100); 
            }
            if(budget >= total){
                console.log(`Hey, you have a great garden with ${flowerNum} ${flowerType} and ${(budget - total).toFixed(2)} leva left.`);
            }else{
                console.log(`Not enough money, you need ${(total - budget).toFixed(2)} leva more.`);
            }
            break;
        case "Gladiolus":
            total = flowerNum * gladiolus;
            if(flowerNum < 80){
                total += total * (20/100); 
            }
            if(budget >= total){
                console.log(`Hey, you have a great garden with ${flowerNum} ${flowerType} and ${(budget - total).toFixed(2)} leva left.`);
            }else{
                console.log(`Not enough money, you need ${(total - budget).toFixed(2)} leva more.`);
            }
            break;
        default:
            console.log("error");
            break;
    }
}

calculate(["Roses","55","250"]);