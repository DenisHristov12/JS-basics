function sum(input) {
    let index = 0;

    let n = input[index];
    index++;

    let primeSum = 0;
    let nonPrimeSum = 0;

    while(n !== "stop"){
        let currNum = Number(n);

        if(currNum < 0){
            console.log("Number is negative.");

            n = input[index];
            index++;

            continue;
        }

        let isPrime = true;

        for (let i = 2; i < n; i++) {
            if(currNum % i === 0){
                isPrime = false;
                break;
            }
        }

        if(isPrime == true){
            primeSum += currNum;
        }else{
            nonPrimeSum += currNum;
        }

        n = input[index];
        index++;
    }

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}

sum(["30",
"83",
"33",
"-1",
"20",
"stop"])

;