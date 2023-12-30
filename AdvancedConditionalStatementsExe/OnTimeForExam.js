function calculate(input) {
    let examStartHour = Number(input[0]);
    let examStartMinutes = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinutes = Number(input[3]);

    let timeInMinutesExam = examStartHour * 60 + examStartMinutes;
    let timeInMinutesArrival = arrivalHour * 60 + arrivalMinutes;

    let timeInHoursExam = 0;
    let timeMExam = 0;
    let timeInHoursArrival = 0;
    let timeMArrival = 0;
    

    if(timeInMinutesArrival > timeInMinutesExam){
        console.log("Late");
            if(timeInMinutesArrival < (timeInMinutesExam + 60)){
                console.log(`${timeInMinutesArrival - timeInMinutesExam} minutes after the start`);
            }else if(timeInMinutesArrival >= (timeInMinutesExam + 60)){
                timeInHoursExam = timeInMinutesExam / 60;
                timeMExam = timeInMinutesExam % 60;

                timeInHoursArrival = timeInMinutesArrival / 60;
                timeMArrival = timeInMinutesArrival % 60;

                if((timeMArrival - timeMExam) < 10){
                    console.log(`${Math.trunc(timeInHoursArrival - timeInHoursExam)}:0${timeMArrival - timeMExam} hours after the start`);
                }else{
                    console.log(`${Math.trunc(timeInHoursArrival - timeInHoursExam)}:${timeMArrival - timeMExam} hours after the start`);
                }

            }
        
    }else if(timeInMinutesArrival === timeInMinutesExam || timeInMinutesArrival >= (timeInMinutesExam - 30)){
        console.log("On time");

        if(timeInMinutesArrival >= (timeInMinutesExam - 30)){
            if(timeInMinutesExam === timeInMinutesArrival ){
                console.log("");
            }else{
                console.log(`${timeInMinutesExam - timeInMinutesArrival} minutes before the start`);
            }
        }

        
    }else if(timeInMinutesArrival < (timeInMinutesExam - 30)){
        console.log("Early");
        
            if(timeInMinutesArrival > (timeInMinutesExam - 60)){
                console.log(`${timeInMinutesExam - timeInMinutesArrival} minutes before the start`);
            }else if(timeInMinutesArrival <= (timeInMinutesExam - 60)){
                timeInHoursExam = timeInMinutesExam / 60;
                timeMExam = timeInMinutesExam % 60;

                timeInHoursArrival = timeInMinutesArrival / 60;
                timeMArrival = timeInMinutesArrival % 60;

                if((timeMExam - timeMArrival) < 10){
                    console.log(`${Math.trunc(timeInHoursExam - timeInHoursArrival)}:0${timeMExam - timeMArrival} hours before the start`);
                }else{
                    console.log(`${Math.trunc(timeInHoursExam - timeInHoursArrival)}:${timeMExam - timeMArrival} hours before the start`);
                }
            }
    } 
    
    
}

calculate(["10","00","10","00"]);