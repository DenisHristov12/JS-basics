function calculate(input) {
    let groupNum = Number(input[0]);
    let mount = "";

    let countMusala = 0;
    let countMonblan = 0;
    let countKilimandjaro = 0;
    let countK2 = 0;
    let countEverest = 0;

    for (let i = 1; i < input.length; i++) {
        let groupPeopleNum = Number(input[i]);

        if(groupPeopleNum <= 5){
            countMusala += groupPeopleNum;
        }else if(groupPeopleNum > 5 && groupPeopleNum <= 12){
            countMonblan += groupPeopleNum;
        }else if(groupPeopleNum > 12 && groupPeopleNum <= 25){
            countKilimandjaro += groupPeopleNum;
        }else if(groupPeopleNum > 25 && groupPeopleNum <= 40){
            countK2 += groupPeopleNum;
        }else if(groupPeopleNum > 40){
            countEverest += groupPeopleNum
        }
        
    }

    let allPeople = countMusala + countMonblan + countKilimandjaro + countK2 + countEverest;

    let countMusalaPercent = countMusala/allPeople * 100;
    let countMonblanPercent = countMonblan/allPeople * 100;
    let countKilimandjaroPercent = countKilimandjaro/allPeople * 100;
    let countK2Percent = countK2/allPeople * 100;
    let countEverestPercent = countEverest/allPeople * 100;

    console.log(`${countMusalaPercent.toFixed(2)}%`);
    console.log(`${countMonblanPercent.toFixed(2)}%`);
    console.log(`${countKilimandjaroPercent.toFixed(2)}%`);
    console.log(`${countK2Percent.toFixed(2)}%`);
    console.log(`${countEverestPercent.toFixed(2)}%`);
}

calculate(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
;