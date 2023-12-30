function calculate(input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);

    let banana = 0;
    let apple = 0;
    let orange = 0;
    let grapefruit = 0;
    let kiwi = 0;
    let pineapple = 0;
    let grapes = 0;

    switch(day){
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            switch (fruit) {
                case "banana":
                    banana = (2.5 * quantity).toFixed(2);
                    console.log(banana);
                    break;
                case "apple":
                    apple = (1.2 * quantity).toFixed(2);
                    console.log(apple);
                    break;
                case "orange":
                    orange = (0.85 * quantity).toFixed(2);
                    console.log(orange);
                    break;
                case "grapefruit":
                    grapefruit = (1.45 * quantity).toFixed(2);
                    console.log(grapefruit);
                    break;
                case "kiwi":
                    kiwi = (2.7 * quantity).toFixed(2);
                    console.log(kiwi);
                    break;
                case "pineapple":
                    pineapple = (5.5 * quantity).toFixed(2);
                    console.log(pineapple);
                    break;
                case "grapes":
                    grapes = (3.85 * quantity).toFixed(2);
                    console.log(grapes);
                    break;
                default:
                    console.log("error");
                    break;
            }
            break;
        case "Saturday":
        case "Sunday":
            switch (fruit) {
                case "banana":
                    banana = (2.7 * quantity).toFixed(2);
                    console.log(banana);
                    break;
                case "apple":
                    apple = (1.25 * quantity).toFixed(2);
                    console.log(apple);
                    break;
                case "orange":
                    orange = (0.9 * quantity).toFixed(2);
                    console.log(orange);
                    break;
                case "grapefruit":
                    grapefruit = (1.6 * quantity).toFixed(2);
                    console.log(grapefruit);
                    break;
                case "kiwi":
                    kiwi = (3 * quantity).toFixed(2);
                    console.log(kiwi);
                    break;
                case "pineapple":
                    pineapple = (5.6 * quantity).toFixed(2);
                    console.log(pineapple);
                    break;
                case "grapes":
                    grapes = (4.2 * quantity).toFixed(2);
                    console.log(grapes);
                    break;
                default:
                    console.log("error");
                    break;
            }
            break;
        default:
            console.log("error");
            break;
    }
}

calculate(["apple","Tuesday","2"]);