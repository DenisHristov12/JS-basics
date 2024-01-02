function showNums(input) {
    let n1 = input[0];
    let n2 = input[1];

    let sum = 0;

    for (let i = n1; i <= n2; i++) {
        if(i % 9 == 0){
            let currDigit = Number(i);
            sum += currDigit; 
        }
    }
    console.log(`The sum: ${sum}`);

    for (let i = n1; i <= n2; i++) {
        if(i % 9 == 0){
           console.log(i);
        }
    }
}

showNums(["100", "200"]);