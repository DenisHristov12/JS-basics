function building(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);

    let isLastFloor = true;
    
    let result = "";

    for (let i = floors; i >= 1; i--) {
        for (let j = 0; j < rooms; j++) {
            if(isLastFloor){
                result += `L${i}${j} `;
            }else if(i % 2 === 0){
                result += `O${i}${j} `;
            }else{
                result += `A${i}${j} `;
            }
        }
        isLastFloor = false;
        result += "\n";
    }
    console.log(result);
}

building(["6", "4"]);