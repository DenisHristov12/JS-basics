function calculate(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);

    let space = width * length * height;
    let sum = 0;

    let index = 3;
    let numOfBoxes = input[index];
    index++;

    while (numOfBoxes !== "Done") {
        numOfBoxes = Number(numOfBoxes);
        sum += numOfBoxes;
        
        if(sum > space){
            console.log(`No more free space! You need ${sum - space} Cubic meters more.`);
            return;
        }
        
        numOfBoxes = input[index];
        index++;
    }

    console.log(`${space - sum} Cubic meters left.`);
}

calculate(["10", 
"1",
"2",
"4", 
"6",
"Done"])

;