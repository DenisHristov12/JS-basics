function calculate(input) {
    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);

    let coffee = 0;
    let water = 0;
    let beer = 0;
    let sweets = 0;
    let peanuts = 0;

    switch(city){
        case "Sofia":
            switch(product){
                case "coffee":
                    coffee = 0.5 * quantity;
                    console.log(coffee);
                    break;
                case "water":
                    water = 0.8 * quantity;
                    console.log(water);
                    break;
                case "beer":
                    beer = 1.2 * quantity;
                    console.log(beer);
                    break;
                case "sweets":
                    sweets = 1.45 * quantity;
                    console.log(sweets);
                    break;
                case "peanuts":
                    peanuts = 1.6 * quantity;
                    console.log(peanuts);
                    break;
                default:
                    console.log("Error");
            }
            break;
        case "Plovdiv":
            switch(product){
                case "coffee":
                    coffee = 0.4 * quantity;
                    console.log(coffee);
                    break;
                case "water":
                    water = 0.7 * quantity;
                    console.log(water);
                    break;
                case "beer":
                    beer = 1.15 * quantity;
                    console.log(beer);
                    break;
                case "sweets":
                    sweets = 1.30 * quantity;
                    console.log(sweets);
                    break;
                case "peanuts":
                    peanuts = 1.5 * quantity;
                    console.log(peanuts);
                    break;
                default:
                    console.log("Error");
            }
            break;
        case "Varna":
            switch(product){
                case "coffee":
                    coffee = 0.45 * quantity;
                    console.log(coffee);
                    break;
                case "water":
                    water = 0.7 * quantity;
                    console.log(water);
                    break;
                case "beer":
                    beer = 1.1 * quantity;
                    console.log(beer);
                    break;
                case "sweets":
                    sweets = 1.35 * quantity;
                    console.log(sweets);
                    break;
                case "peanuts":
                    peanuts = 1.55 * quantity;
                    console.log(peanuts);
                    break;
                default:
                    console.log("Error");
            }
            break;
        default:
            console.log("Error");
            break;
    }
}

calculate(["coffee","Varna","2"]);