function calculateSteps(input) {
    let index = 0;

    let currSteps = input[index];
    index++;

    let totalSteps = 0;

    while(currSteps !== "Going home"){
        currSteps = Number(currSteps);
        totalSteps += currSteps;

        if(totalSteps >= 10000){
            let stepsAboveGoal = totalSteps - 10000;
            console.log("Goal reached! Good job!");
            console.log(`${stepsAboveGoal} steps over the goal!`);
            return;
        }

        currSteps = input[index];
        index++;
    }

    let stepsGoingHome = Number(input[index]);

    totalSteps += stepsGoingHome;

    if(totalSteps >= 10000){
        let stepsAboveGoal = totalSteps - 10000;
        console.log("Goal reached! Good job!");
        console.log(`${stepsAboveGoal} steps over the goal!`);
    }else{
        let stepsBelowGoal = 10000 - totalSteps;
        console.log(`${stepsBelowGoal} more steps to reach goal.`);
    }
}

calculateSteps(["1000",
"1500",
"2000",
"6500"])
;