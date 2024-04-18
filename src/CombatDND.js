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
const displayResult = document.body.querySelector(".resultOutput");
const sums = document.body.querySelector(".sum");
const sumOutput = document.body.querySelector(".sumOutput");
const warning = document.body.querySelector(".warnings");

let check = true;


function start(){

    if(check){

        check = false;

        if(!sums.classList.contains("none")){
            sums.classList.add("none");
            sumOutput.classList.add("none");
        }

        function maxRoll() {
            for(let i = 0; i < dicesList.length; i++){
                if(dicesList[i].checked){
                    return dicesList[i].value;
                }
            }
        }

        let result = [];
        let sum = 0;

        rollNumber = number.value;
        if(rollNumber <= 1 || rollNumber == ""){
            rollNumber = 1;
        }

        warning.classList.add("none");
        if(maxRoll() != null){
            for(let i = 0; i < 30; i++){
                setTimeout(function() {
                    displayResult.innerHTML = "";
                    for(let i = 0; i < parseInt(rollNumber); i++){
                        result[i] = Math.ceil(Math.random() * maxRoll());
                        displayResult.innerHTML += (result[i] + " ");
                    }
                
                }, i * 100);
            }
            if(!(rollNumber == "" || parseInt(rollNumber) <= 1)){
                if(parseInt(bonus.value) > 0){
                    setTimeout(function() {
                        displayResult.innerHTML = ""; 
                        for(let i = 0; i < parseInt(rollNumber); i++){
                            displayResult.innerHTML += (result[i] + " + bonus");
                            if(!(result.length - 1 == i)){
                                displayResult.innerHTML += ", ";
                            }
                        }
                        }, 100 * 30);
                    setTimeout(function() {
                        displayResult.innerHTML = ""; 
                        for(let i = 0; i < parseInt(rollNumber); i++){
                            result[i] += parseInt(bonus.value);
                            sum += result[i];
                            console.log(sum);
                            displayResult.innerHTML += result[i];
                            if(!(result.length - 1 == i)){
                                displayResult.innerHTML += ", ";
                            }
                        }

                        sums.classList.remove("none");
                        sumOutput.innerHTML = sum;
                        sumOutput.classList.remove("none");
                        
                        check = true;

                        }, 100 * 30 + 2000);
                }
                else {
                    setTimeout(function() {
                        displayResult.innerHTML = "";
                        for(let i = 0; i < parseInt(rollNumber); i++){
                            displayResult.innerHTML += result[i];
                            sum += result[i];
                            if(!(result.length - 1 == i)){
                                displayResult.innerHTML += ", ";
                            }
                        }

                        sums.classList.remove("none");
                        sumOutput.innerHTML = sum;
                        sumOutput.classList.remove("none");

                        check = true;
                        
                        }, 100 * 30);
                }
            }
            else if(parseInt(bonus.value) > 0){
                setTimeout(function() {
                    displayResult.innerHTML += " + bonus";
                    }, 100 * 30);
                setTimeout(function() {
                    displayResult.innerHTML = parseInt(result) + parseInt(bonus.value);
                    isDC(parseInt(result));
                    check = true;
                    }, 100 * 30 + 2000);
            }
            else{
            setTimeout(function() {
                isDC(parseInt(result));
                check = true;
                }, 100 * 30);
            }
        }
        else {
            warning.innerHTML = "Select dice!";
            warning.classList.remove("none");
            check = true;
        }
    } 
    else {
        warning.innerHTML = "Wait until roll ends!";
        warning.classList.remove("none");
    }
}

function isDC(result){
    if((rollNumber == "" || parseInt(rollNumber) <= 1) && (DC.value != "" || parseInt(DC.value) <= 0)){
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
