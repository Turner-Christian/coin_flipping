function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeads() {
    let heads = 0;
    let attemps = 0;
    return new Promise((resolve, reject) => {
        while(heads < 5){
            let result = tossCoin();
            console.log(`Coin landed on ${result}`)
            if(result === 'heads'){
                heads++;
            }
            attemps++;
        }
        if(heads === 5){
            resolve(`It took ${attemps} attemps to land on heads five times`)
        }else{
            reject(`It took more than 100 attempts...suspended the function`)
        }
    });
}
fiveHeads()
    .then(res => console.log(res))
    .catch(err => console.log(err));
console.log("When does this run now?");

