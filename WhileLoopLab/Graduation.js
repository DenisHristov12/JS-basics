function calculate(input) {
    let index = 1;
    let name = input[0];

    let yearGrade = 1;
    let sum = 0;
    let examFailed = 0;

    while (yearGrade <= 12) {
        let currGrade = Number(input[index]);

        if(currGrade < 4){
            examFailed++;
            if(examFailed === 2){
                break;
            }
            continue;
        }

        sum += currGrade;
        yearGrade++   
        index++;  
    }

    let average = sum/12;

    if(examFailed !== 2){
        console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
    }else{
        console.log(`${name} has been excluded at ${yearGrade} grade`);
    }
    
}

calculate(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])
;