function calculate(input) {
    let actorName = input[0];
    let pointsAcademy = Number(input[1]);
    let numJudge = Number(input[2]);
    

    for (let i = 3; i < input.length; i+=2) {
        let judgeName = input[i];
        let pointsJudge = Number(input[i + 1]);

        let totalPoints = judgeName.length * pointsJudge/2;
        pointsAcademy += totalPoints;
        
        if(pointsAcademy > 1250.5){
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${pointsAcademy.toFixed(1)}!`);
            return;
        }  
    }
    let pointsNeeded = 1250.5 - pointsAcademy;
    console.log(`Sorry, ${actorName} you need ${pointsNeeded.toFixed(1)} more!`);
}

calculate(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])

;