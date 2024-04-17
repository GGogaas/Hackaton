const dicesList = [
    document.body.querySelector("#D4"),
    document.body.querySelector("#D6"),
    document.body.querySelector("#D8"),
    document.body.querySelector("#D10"),
    document.body.querySelector("#D12"),
    document.body.querySelector("#D20"),
    document.body.querySelector("#D100")
];

const DC = document.body.querySelector(".DCNumber");
const img = document.body.querySelector(".img");
const bonus = document.body.querySelector(".bonusNumber");
const number = document.body.querySelector(".rollsNumber");
const displayResult = document.body.querySelector(".result");

function start(){
    function maxRoll() {
        for(let i = 0; i < dicesList.length; i++){
            if(dicesList[i].checked){
                return dicesList[i].value;
            }
        }
    }

    let result = 0;
    


    for(let i = 0; i < 30; i++){
        setTimeout(function() {

            result = Math.ceil(Math.random() * maxRoll());
            displayResult.innerHTML = result;
            console.log("");
        
        }, i * 100);
    }
    if(parseInt(bonus.value) > 0){
        setTimeout(function() {
            displayResult.innerHTML += " + bonus";
            }, 100 * 30);
        setTimeout(function() {
            displayResult.innerHTML = parseInt(result) + parseInt(bonus.value);
            isDC(parseInt(result));
            }, 100 * 30 + 2000);
    }
    else{
    setTimeout(function() {
        isDC(parseInt(result));
        }, 100 * 30);
    }
}

function isDC(result){
    console.log(result);
    if((number.value == "" || parseInt(number.value) <= 1) && (DC.value != "" || parseInt(DC.value) <= 0)){
        let bonusValue = 0;
        if(!(bonus.value == "" || bonus.value < 0)){
            bonusValue = parseInt(bonus.value)
        }
        if(parseInt(result) + bonusValue >= parseInt(DC.value)){
            displayResult.innerHTML += "<br>Success!";
        }
        else {
            displayResult.innerHTML += "<br>Failure";
        }
    }
}
