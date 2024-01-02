function searchBook(input) {
    let bookName = input[0];
    let index = 1;
    let bookFound = false;
    let nextBook = input[index];

    while (nextBook !== "No More Books") {
        if(nextBook === bookName){
            bookFound = true;
            break;
        }
        
        index++;
        nextBook = input[index];
    }

    if(bookFound === false){
        console.log("The book you search is not here!");
        console.log(`You checked ${index - 1} books.`);
    }else{
        console.log(`You checked ${index - 1} books and found it.`);
    }         
}

searchBook(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])
;