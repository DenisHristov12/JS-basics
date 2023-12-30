function vacation(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let destination = "";
    let vacationType = "";
    let vacationPrice = 0;

    if(season === "summer"){
        vacationType = "Camp";
        if(budget <= 100){
            destination = "Bulgaria";
            vacationPrice = budget * (30/100);
        }else if(budget > 100 && budget <= 1000){
            destination = "Balkans";
            vacationPrice = budget * (40/100);
        }else if(budget > 1000){
            vacationType = "Hotel";
            destination = "Europe";
            vacationPrice = budget * (90/100);
        }
    }else{
        vacationType = "Hotel";
        if(budget <= 100){
            destination = "Bulgaria";
            vacationPrice = budget * (70/100);
        }else if(budget > 100 && budget <= 1000){
            destination = "Balkans";
            vacationPrice = budget * (80/100);
        }else if(budget > 1000){
            destination = "Europe";
            vacationPrice = budget * (90/100);
        }
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${vacationType} - ${vacationPrice.toFixed(2)}`);
}

vacation(["75","winter"]);