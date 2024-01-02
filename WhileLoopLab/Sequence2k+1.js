function calculate(input) {
    let n = Number(input[0]);

    let number = 1;
    let nextNumber = (2*number) + 1;
    
    console.log(number);

    while(nextNumber <= n){
        console.log(nextNumber);
        nextNumber = (2*nextNumber) + 1;
    }
}

calculate(["31"]);