function calculate(input) {
    let neededMoney = Number(input[0]);
    let balance = Number(input[1]);

    let index = 2;
    let numOfDays = 0;
    let numOfDaysSpend = 0;

    let actionType = input[index];
    let spendOrSaved = Number(input[index + 1]);
    index +=2;

    while(balance < neededMoney){
        numOfDays++;

        if(actionType === "spend"){
            if(spendOrSaved > balance){
                balance = 0;
            }else{
                balance -= spendOrSaved;
            }
            numOfDaysSpend++;
        }else{
            balance += spendOrSaved;
            numOfDaysSpend = 0;
        }

        if(numOfDaysSpend === 5){
            console.log("You can't save the money.");
            console.log(`${numOfDays}`);
            return;
        }   

        actionType = input[index];
        spendOrSaved = Number(input[index + 1]);
        
        index += 2;
        
    }

    console.log(`You saved the money for ${numOfDays} days.`);
}

calculate(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])



;