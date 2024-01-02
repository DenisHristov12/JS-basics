function calculate(input) {
    let num = Number(input[0]);

    let index = 1;
    let nextNum = Number(input[index]);
    let sum = 0;

    while (sum < num) {
        nextNum = Number(input[index]);
        sum += nextNum;
        index++;
    }

    console.log(sum);
}

calculate(["20",
"1",
"2",
"3",
"4",
"5",
"6"])

;
