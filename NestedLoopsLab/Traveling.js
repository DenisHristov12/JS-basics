function calculate(input) {
    let index = 0;
    let destination = input[index];
    index++;
    let minBudget = Number(input[index]);
    index++;

    let sum = 0;
    let isEnd = false;

    while (destination !== "End") {
        while(minBudget > sum){
            let savings = input[index];

            if(savings !== "End"){
                savings = Number(input[index]);
            }else{
                isEnd = true;
                break;
            }
            index++;
            sum += savings;
        }

        if(isEnd){
            break;
        }

        console.log(`Going to ${destination}!`);
        
        destination = input[index];
        index++;
        minBudget = Number(input[index]);
        index++;
        sum = 0;
    }
}

calculate(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"])
;