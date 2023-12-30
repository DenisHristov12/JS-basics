function calculate(input) {
    let seriesName = input[0];
    let timePerEpisode = Number(input[1]);
    let brakeTime = Number(input[2]);

    let timeForLunch = brakeTime * (1/8);
    let timeForRest = brakeTime * (1/4);

    brakeTime -= timeForLunch + timeForRest;

    if(brakeTime >= timePerEpisode){
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(brakeTime - timePerEpisode)} minutes free time.`);
    }else{
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(timePerEpisode - brakeTime)} more minutes.`);
    }
}

calculate(["Teen Wolf", "48", "60"]);