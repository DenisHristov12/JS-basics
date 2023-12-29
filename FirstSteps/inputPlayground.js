function inputPlayground(params) {
    let a = params[0];
    let b = params[1];

    let sum = "The sum is: " + (a + b);

    console.log(sum);
}

function divide() {
    let a = 25;
    let b = parseInt(a / 4);

    let sqrt = Math.sqrt(a);

    console.log(b);
    console.log(sqrt);
}

inputPlayground([1.5, 2.5]);
divide();