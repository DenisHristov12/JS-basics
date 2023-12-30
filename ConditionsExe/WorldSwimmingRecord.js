function calculate(input) {
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let timeForOneMeter = Number(input[2]);

    let waterResistance = Math.floor((distance / 15)) * 12.5;

    let metersNeeded = distance * timeForOneMeter;
    let totalTime = metersNeeded + waterResistance;


    if(totalTime < record){
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }else{
        console.log(`No, he failed! He was ${(totalTime - record).toFixed(2)} seconds slower.`);
    }
}

calculate(["55555.67","3017","5.03"]);