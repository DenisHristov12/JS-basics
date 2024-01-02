function prepare(input) {
    let numBadMarksAllowed = Number(input[0]);
    
    let sum = 0;
    let numBadMarks = 0;
    let index = 1;
    let average = 0;
    let numProblems = 0;
    let lastProblem = '';

    while(numBadMarks <= numBadMarksAllowed){
        let problemName = input[index];
        let grade = Number(input[index + 1]);
        

        if(grade <= 4){
            numBadMarks++;
        }
        
        if(numBadMarksAllowed === numBadMarks){
            console.log(`You need a break, ${numBadMarks} poor grades.`);
            break;
        }

        

        sum += grade;

        index += 2;
        numProblems++;
        lastProblem = problemName;
        
        if(input[index] === "Enough"){
            average = sum/numProblems;

            console.log(`Average score: ${average.toFixed(2)}`);
            console.log(`Number of problems: ${numProblems}`);
            console.log(`Last problem: ${lastProblem}`);
            break;
        }
    }
}

prepare(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])
;