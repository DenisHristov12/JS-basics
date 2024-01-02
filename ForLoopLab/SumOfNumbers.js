function showNums(input) {
    let n = input[0];

    let sum = 0;
    for (let i = 0; i < n.length; i++) {
        let currDigit = Number(n.charAt(i));
        sum += currDigit;
    }
    console.log(`The sum of the digits is:${sum}`);
}

showNums(["1234"]);