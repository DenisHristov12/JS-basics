function calculate(input) {
    let nailon = (Number(input[0]) + 2) * 1.5;
    let paint = (Number(input[1]) + Number(input[1]) * 10/100)  * 14.5;
    let razreditel = Number(input[2]) * 5;
    let hoursOfWork = Number(input[3]);
    let sumForBags = 0.4;

    let sum = nailon + paint + razreditel + sumForBags;
    let sumForWorkers = (sum * 30/100) * hoursOfWork;
    let sumEverything = sum + sumForWorkers;

    console.log(sumEverything);
}

calculate(["10","11","4","8"]);