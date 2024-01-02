function calculate(input) {
    let index = 0;

    let movieTitle = input[index];
    index++;

    let standartTicketCount = 0;
    let studentTicketCount = 0;
    let kidTicketCount = 0;

    while (movieTitle !== "Finish") {
        let spacesAvailable = Number(input[index]);
        index++;

        let currTicket = input[index];
        index++;

        let spacesTaken = 0;

        while(currTicket !== "End"){
            if (currTicket === "standard") {
                standartTicketCount++;
            }else if(currTicket === "student"){
                studentTicketCount++;
            }else if(currTicket === "kid"){
                kidTicketCount++;
            }
            
            spacesTaken += 1;

            if(spacesTaken === spacesAvailable){
                break;
            }
            
            currTicket = input[index];
            index++;
        }

        let percentFull = (spacesTaken / spacesAvailable) * 100;
        console.log(`${movieTitle} - ${percentFull.toFixed(2)}% full.`);

        movieTitle = input[index];
        index++;
    }

    let totalTickets = studentTicketCount + standartTicketCount + kidTicketCount;

    console.log(`Total tickets: ${totalTickets}`);

    let standardPercent = (standartTicketCount / totalTickets) * 100;
    let studentPercent = (studentTicketCount / totalTickets) * 100;
    let kidPercent = (kidTicketCount / totalTickets) * 100;

    console.log(`${studentPercent.toFixed(2)}% student tickets.`);
    console.log(`${standardPercent.toFixed(2)}% standard tickets.`);
    console.log(`${kidPercent.toFixed(2)}% kids tickets.`);
}

calculate(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])
;
