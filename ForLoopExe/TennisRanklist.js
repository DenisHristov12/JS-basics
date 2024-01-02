function calculate(input) {
    let tournamentCount = Number(input[0]);
    let points = Number(input[1]);

    let average = 0;
    let won = 0;
    let wonPercent = 0;

    for (let i = 2; i < input.length; i++) {
        let afterMatch = input[i];
        
        switch (afterMatch) {
            case "W":
                points += 2000;
                average += 2000;
                won ++;
                break;
            case "F":
                points += 1200;
                average += 1200;
                break;
            case "SF":
                points += 720;
                average += 720;
                break;
            default:
                break;
        }
    }
    average = average/tournamentCount;
    wonPercent = won/tournamentCount * 100;

    console.log(`Final points: ${points}`);
    console.log(`Average points: ${Math.floor(average)}`);
    console.log(`${wonPercent.toFixed(2)}%`);


}

calculate(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])
;