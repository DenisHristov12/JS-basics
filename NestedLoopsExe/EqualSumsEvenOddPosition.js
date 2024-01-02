function calculate(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);

    let result = '';

    for (let currentNum = startNum; currentNum <= endNum; currentNum++) {
        let currNumStr = currentNum.toString();
        
        let oddSum = 0;
        let evenSum = 0;

        for (let index = 0; index < currNumStr.length; index++) {

            let currDigit = Number(currNumStr[index]);

            let position = index + 1;

            if(position % 2 == 0){
                evenSum += currDigit;
            }else{
                oddSum += currDigit;
            }
        }

        if(oddSum === evenSum){
            result += `${currNumStr} `;
        }
    }

    console.log(result);
}

calculate(["100000","100050"]);