function calculate(input) {
    let type = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);

    let total = 0;

    switch (type) {
        case "Premiere":
            total = rows * cols * 12;
            console.log(`${total.toFixed(2)} leva`);
            break;
        case "Normal":
            total = rows * cols * 7.5;
            console.log(`${total.toFixed(2)} leva`);
            break;
        case "Discount":
            total = rows * cols * 5;
            console.log(`${total.toFixed(2)} leva`);
            break;
    
        default:
            console.log("error");
            break;
    }
}

calculate(["Premiere","10","12"]);