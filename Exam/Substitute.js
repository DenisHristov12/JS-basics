function sub(input) {
    let k = Number(input[0]);
    let l = Number(input[1]);
    let m = Number(input[2]);
    let n = Number(input[3]);

    let validSubFDFN = false;
    let validSubFDSN = false;
    let validSubSDFN = false;
    let validSubSDSN = false;

    let count = 0;
    

    for (let firstDigitFirstNumber = k; firstDigitFirstNumber <= 8; firstDigitFirstNumber++) {

        if(firstDigitFirstNumber % 2 == 0){
            validSubFDFN = true;
        }else{
            validSubFDFN = false;
        }
        for (let secondDigitFirstNumber = 9; secondDigitFirstNumber >= l; secondDigitFirstNumber--) {
            
            if(secondDigitFirstNumber % 2 == 1){
                validSubSDFN = true;
            }
            else{
                validSubSDFN = false
            }

            for (let firstDigitSecondNumber = m; firstDigitSecondNumber <= 8; firstDigitSecondNumber++ ) {
            
                if(firstDigitSecondNumber % 2 == 0){
                    validSubFDSN = true;
                }else{
                    validSubFDSN = false;
                }
            
                for (let secondDigitSecondNumber = 9; secondDigitSecondNumber >= n; secondDigitSecondNumber--) {
                    if(secondDigitSecondNumber % 2 == 1){
                        validSubSDSN = true;
                    }else{
                        validSubSDSN = false;
                    }
                    

                    if(firstDigitFirstNumber === firstDigitSecondNumber && secondDigitFirstNumber === secondDigitSecondNumber && validSubFDFN == true && validSubFDSN == true && validSubSDFN == true && validSubSDSN){
                        console.log("Cannot change the same player.");
                    }else{
                        if(validSubFDFN == true && validSubFDSN == true && validSubSDFN == true && validSubSDSN){
                            count++;
                            console.log(`${firstDigitFirstNumber}${secondDigitFirstNumber} - ${firstDigitSecondNumber}${secondDigitSecondNumber}`);
                        }
                        
                        if(count === 6){
                            return;
                        }
                    }
                }
            }
        } 
    }  
}

sub(["6",
"7",
"5",
"6"])

;