function calculate(input) {
    let n = Number(input[0]);

    let result = '';

    for (let i = 1111; i <= 9999; i++) {
        let currNumStr = i.toString();
        let isSpecial = true;

        for (let j = 0; j < currNumStr.length; j++) {
            let currDigit = Number(currNumStr[j]);

            if(n % currDigit !== 0){
                isSpecial = false;
                break;
            }
        }

        if(isSpecial == true){
            result += `${currNumStr} `;
        }
    }

    console.log(result);
}

calculate(["3"]);