function trainTheTrainers(input) {
    let judgeNum = Number(input[0]);
    let presentationName = input[1];

    let index = 2;

    let averagePresentation = 0;
    let sum = 0;
    let averageAll = 0;

    

    while(presentationName !== "Finish"){

        for (let i = 0; i < judgeNum; i++) {
            let mark = Number(input[index]);
            index++;

            sum += mark;
        }

        averagePresentation = sum / judgeNum;
        averageAll += averagePresentation

        console.log(`${presentationName} - ${averagePresentation.toFixed(2)}.`);

        let judgeNum = Number(input[index]);
        index++;
        let presentationName = input[index];
        index++;
    }

    averageAll = averageAll / judgeNum;

    console.log(`Student's final assessment is ${averageAll.toFixed(2)}.`);
}

calculate(["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"])
;