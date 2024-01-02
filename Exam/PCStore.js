function calculatePCPrice(input) {
    let priceInDollarsProcessor = Number(input[0]);
    let priceInDollarsGraphicsCard = Number(input[1]);
    let priceInDollarsRAM = Number(input[2]);
    let numRAM = Number(input[3]);
    let percentDiscount = Number(input[4]);

    let dollarToLev = 1.57;

    let priceInLevaProcessor = priceInDollarsProcessor * dollarToLev; 
    let priceInLevaGraphicsCard = priceInDollarsGraphicsCard * dollarToLev; 
    let priceInLevaRAM = (priceInDollarsRAM * dollarToLev) * numRAM;
    
    let priceAll = (priceInLevaProcessor - (priceInLevaProcessor * percentDiscount)) + (priceInLevaGraphicsCard - (priceInLevaGraphicsCard * percentDiscount)) + priceInLevaRAM; 

    console.log(`Money needed - ${priceAll.toFixed(2)} leva.`);

}

calculatePCPrice(["1200",
"850",
"120",
"4",
"0.1"])

;