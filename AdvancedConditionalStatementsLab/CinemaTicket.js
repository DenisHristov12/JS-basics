function calculate(input) {
    let dayOfWeek = input[0];
    let ticketPrice = 0;

    switch(dayOfWeek){
        case "Monday":
        case "Tuesday":
        case "Friday":
            ticketPrice = 12;
            console.log(ticketPrice);
            break;
        case "Wednesday":
        case "Thursday":
            ticketPrice = 14;
            console.log(ticketPrice);
            break;
        case "Saturday":
        case "Sunday":
            ticketPrice = 16;
            console.log(ticketPrice);
            break;
        default:
            console.log("Error");
            break;
    }
}

calculate(["Monday"]);