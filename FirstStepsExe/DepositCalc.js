function calculate(input) {
    let sumDeposit = Number(input[0]);
    let months = Number(input[1]);
    let godLihvProc = Number(input[2])/100;

    let sum = sumDeposit + months * ((sumDeposit * godLihvProc) / 12);

    console.log(sum);
}

calculate(["200", "3", "5.7"]);