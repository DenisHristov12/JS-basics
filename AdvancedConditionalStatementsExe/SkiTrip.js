function calculate(input) {
    let daysStaying = Number(input[0]);
    let roomType = input[1];
    let mark = input[2];

    let roomForOnePerson = 18;
    let apartment = 25;
    let presidentApartment = 35;

    let nightings = daysStaying - 1;

    let discount = 0;

    let total = 0;

    switch (roomType) {
        case "room for one person":
            discount = 0;
            total = nightings * roomForOnePerson;
            if(mark === "positive"){
                total += total * (25/100);
            }else{
                total -= total * (10/100);
            }
            console.log(total.toFixed(2));
            break;
        case "apartment":
            total = nightings * apartment;
            if(daysStaying < 10){
                discount = total * (30/100); 
                total -= discount;
            }else if(daysStaying >= 10 && daysStaying <= 15){
                discount = total * (35/100); 
                total -= discount;
            }else if(daysStaying > 15){
                discount = total * (50/100); 
                total -= discount;
            }

            if(mark === "positive"){
                total += total * (25/100);
            }else{
                total -= total * (10/100);
            }
            console.log(total.toFixed(2));
            break;
        case "president apartment":
            total = nightings * presidentApartment;
            if(daysStaying < 10){
                discount = total * (10/100); 
                total -= discount;
            }else if(daysStaying >= 10 && daysStaying <= 15){
                discount = total * (15/100); 
                total -= discount;
            }else if(daysStaying > 15){
                discount = total * (20/100); 
                total -= discount;
            }

            if(mark === "positive"){
                total += total * (25/100);
            }else{
                total -= total * (10/100);
            }
            console.log(total.toFixed(2));
            break;
        default:
            console.log("error");
            break;
    }


}

calculate(["30","president apartment","negative"]);