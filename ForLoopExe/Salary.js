function calculate(input) {
    let numOpenedTabs = Number(input[0]);
    let salary = Number(input[1]);

    let fb = 150;
    let ig = 100;
    let reddit = 50;

    let moneyLeft = 0;

    for (let i = 2; i <= numOpenedTabs + 1; i++) {
        let website = input[i];

        switch (website) {
            case "Facebook":
                salary -= fb;
                break;
            case "Instagram":
                salary -= ig;
                break;
            case "Reddit":
                salary -= reddit;
                break;
            default:
                break;
        }
        
    }
    if(salary <= 0){
        console.log("You have lost your salary.");
    }else{
        console.log(salary);
    }
}




calculate(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])

;