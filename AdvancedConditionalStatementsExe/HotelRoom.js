function calculate(input) {
    let month = input[0];
    let numOfNights = Number(input[1]);

    let roomType = "";

    let nightPriceStudio = 0;
    let nightPriceApartment = 0;

    let discountStudio = 0;
    let discountApartment = 0;

    let totalStudio = 0;
    let totalApartment = 0;

    switch (month) {
        case "May":
        case "October":
            nightPriceStudio = 50;
            if(numOfNights > 7 && numOfNights <= 14){
                discountStudio = nightPriceStudio * (5/100);
                nightPriceStudio -= discountStudio;
            }else if(numOfNights > 14){
                discountStudio = nightPriceStudio * (30/100);
                nightPriceStudio -= discountStudio;
            }
            totalStudio = numOfNights * nightPriceStudio;
            
            nightPriceApartment = 65;
            if(numOfNights > 14){
                discountApartment = nightPriceApartment * (10/100);
                nightPriceApartment -= discountApartment;
            }
            totalApartment = numOfNights * nightPriceApartment;
            break;
        case "June":
        case "September":
            nightPriceStudio = 75.2;
            if(numOfNights > 14){
                discountStudio = nightPriceStudio * (20/100);
                nightPriceStudio -= discountStudio;
            }
            totalStudio = numOfNights * nightPriceStudio;
            
            nightPriceApartment = 68.7;
            if(numOfNights > 14){
                discountApartment = nightPriceApartment * (10/100);
                nightPriceApartment -= discountApartment;
            }
            totalApartment = numOfNights * nightPriceApartment;
            break;
        case "July":
        case "August":
            nightPriceStudio = 76;
            totalStudio = numOfNights * nightPriceStudio;
            nightPriceApartment = 77;
            if(numOfNights > 14){
                discountApartment = nightPriceApartment * (10/100);
                nightPriceApartment -= discountApartment;
            }
            totalApartment = numOfNights * nightPriceApartment;
            break;
        default:
            console.log("error");
            break;
    }

    console.log(`Apartment: ${totalApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${totalStudio.toFixed(2)} lv.`);
}

calculate(["May","15"]);