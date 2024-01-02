function calculate(input) {
    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let totalMoney = 0;
    let evenBDMoney = 10;

    
    for (let i = 1; i <= age; i++) {
        if(i % 2 == 0){
            totalMoney += (evenBDMoney - 1);
            evenBDMoney += 10;
        }else{
            totalMoney += toyPrice;
        }
    }

    

    if(totalMoney >= washingMachinePrice){
        console.log(`Yes! ${(totalMoney - washingMachinePrice).toFixed(2)}`);
    }else{
        console.log(`No! ${(washingMachinePrice - totalMoney).toFixed(2)}`);
    }
    

}

calculate(["21",
"1570.98",
"3"])
;