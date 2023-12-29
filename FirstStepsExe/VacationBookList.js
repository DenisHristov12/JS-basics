function calculate(input) {
    let numOfPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let numOfDays = Number(input[2]);

    let time = (numOfPages / pagesPerHour) / numOfDays;

    console.log(time);
}

calculate(["212", "20", "2"]);