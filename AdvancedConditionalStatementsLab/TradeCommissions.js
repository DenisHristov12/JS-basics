function calculate(input) {
    let city = input[0];
    let sells = Number(input[1]);

    let commission = 0;

    switch (city) {
        case "Sofia":
            if(sells < 0){
                console.log("error");
            }else if(sells >= 0 && sells <= 500){
                commission = (sells * (5/100)).toFixed(2);
                console.log(commission);
            }else if(sells > 500 && sells <= 1000){
                commission = (sells * (7/100)).toFixed(2);
                console.log(commission);
            }else if(sells > 1000 && sells <= 10000){
                commission = (sells * (8/100)).toFixed(2);
                console.log(commission);
            }else if(sells > 10000){
                commission = (sells * (12/100)).toFixed(2);
                console.log(commission);
            }
            break;
        case "Varna":
            if(sells < 0){
                console.log("error");
            }else if(sells >= 0 && sells <= 500){
                commission = (sells * (4.5/100)).toFixed(2);
                console.log(commission);
            }else if(sells > 500 && sells <= 1000){
                commission = (sells * (7.5/100)).toFixed(2);
                console.log(commission);
            }else if(sells > 1000 && sells <= 10000){
                commission = (sells * (10/100)).toFixed(2);
                console.log(commission);
            }else if(sells > 10000){
                commission = (sells * (13/100)).toFixed(2);
                console.log(commission);
            }
            break;
        case "Plovdiv":
            if(sells < 0){
                console.log("error");
            }else if(sells >= 0 && sells <= 500){
                commission = (sells * (5.5/100)).toFixed(2);
                console.log(commission);
            }else if(sells > 500 && sells <= 1000){
                commission = (sells * (8/100)).toFixed(2);
                console.log(commission);
            }else if(sells > 1000 && sells <= 10000){
                commission = (sells * (12/100)).toFixed(2);
                console.log(commission);
            }else if(sells > 10000){
                commission = (sells * (14.5/100)).toFixed(2);
                console.log(commission);
            }
            break;
        default:
            console.log("error");
            break;
    }
}

calculate(["Sofia","1500"]);