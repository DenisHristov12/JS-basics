function calculateAlcohol(input) {
    let numDays = Number(input[0]);
    let quantity = 0;
    let degrees = 0;

    let sumQuantity = 0;
    let sumDegrees = 0;

    let avg = 0;

    for (let i = 1; i <= numDays * 2; i+=2) {
        quantity = Number(input[i]);
        degrees = Number(input[i + 1]);

        sumQuantity += quantity;
        sumDegrees += quantity * degrees;
    }

    avg = sumDegrees / sumQuantity;
    console.log(`Liter: ${sumQuantity.toFixed(2)}`);
    console.log(`Degrees: ${avg.toFixed(2)}`);

    if(avg < 38){
        console.log("Not good, you should baking!");
    }else if(avg >= 38 && avg <= 42){
        console.log("Super!");
    }else{
        console.log("Dilution with distilled water!");
    }
    
}

calculateAlcohol(["3",
"100",
"45",
"50",
"55",
"150",
"36"])
;
