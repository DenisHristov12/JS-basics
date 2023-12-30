function calculate(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let totalTime = (hours * 60) + minutes;

    let totalTimeAfterFifteen = totalTime + 15;
    let hoursAfterFifteen = Math.floor(totalTimeAfterFifteen / 60);
    let minutesAfterFifteen = totalTimeAfterFifteen % 60;

    if(minutesAfterFifteen < 10){
        if(hoursAfterFifteen == 24){
            console.log(`0:0${minutesAfterFifteen}`);
        }else{
            console.log(`${hoursAfterFifteen}:0${minutesAfterFifteen}`);
        }
    }else{
        if(hoursAfterFifteen == 24){
            console.log(`0:${minutesAfterFifteen}`);
        }else{
            console.log(`${hoursAfterFifteen}:${minutesAfterFifteen}`);
        }
    }
}

calculate(["23","59"]);