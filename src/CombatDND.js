var CList = [];
var CListSorted = [];
var runMeterNumber = document.body.querySelector(".meter");

var number = CList.length;

const popupBG = document.body.querySelector(".popupBG");
const popup = document.body.querySelector(".popup");
const addButton = document.body.querySelector(".add");
const startButton = document.body.querySelector(".start");
const saveButton = document.body.querySelector(".save");
const endButton = document.body.querySelector(".end");
const endTurnButton = document.body.querySelector(".endTurn");
const runMeter = document.body.querySelector(".runMeter");
const warningBox = document.body.querySelector(".warnings");
const queueDisplay = document.body.querySelector(".queueDisplay");
const playersList = document.body.querySelector(".playersList");

const nameD = document.body.querySelector(".name");
const initiativeD = document.body.querySelector(".initiative");
const hpD = document.body.querySelector(".hp");
const hpMaxD = document.body.querySelector(".hpMax");
const noteD = document.body.querySelector(".note");

if(localStorage.getItem("CList") != null){
    CList = JSON.parse(localStorage.getItem("CList"));
    CListSorted = JSON.parse(localStorage.getItem("CListSorted"));
    number = JSON.parse(localStorage.getItem("number"))
    runMeterNumber.innerHTML = JSON.parse(localStorage.getItem("runMeterNumber"));
    displayCharacters();
    displayList();
    addButton.classList.add("none");
    startButton.classList.add("none");
    saveButton.classList.remove("none");
    endButton.classList.remove("none");
    endTurnButton.classList.remove("none");
    runMeter.classList.remove("none");
}

function save(){
    localStorage.setItem("CList", JSON.stringify(CList));
    localStorage.setItem("CListSorted", JSON.stringify(CListSorted));
    localStorage.setItem("number", JSON.stringify(number));
    localStorage.setItem("runMeterNumber", JSON.stringify(runMeterNumber.innerHTML));
}

function displayAdd(){
    popupBG.classList.remove("none");
}

function apply(){
    if(nameD.value == "" || initiativeD.value == "" || hpD.value == "" || hpMaxD.value == "") {
        warningBox.classList.remove("none");
        warningBox.innerHTML = "Fill up all informations!";
    }
    else if(parseInt(initiativeD.value) <= 0 || parseInt(hpD.value) <= 0 || parseInt(hpMaxD.value) <= 0){  
        warningBox.classList.remove("none");
        warningBox.innerHTML = "All numbers must be greater than 0!";
    }
    else if(parseInt(hpD.value) > parseInt(hpMaxD.value)){
        warningBox.classList.remove("none");
        warningBox.innerHTML = "Current HP must be lower than or equal to max HP!";
    }
    else{
        CList.push({id: CList.length + 1 ,name: nameD.value, initiative: parseInt(initiativeD.value), hp: parseInt(hpD.value), hpMax: parseInt(hpMaxD.value), note: noteD.value});
        number = CList.length;
        cancel();
        displaySorted();
        warningBox.classList.add("none");
    }
}

function displaySorted(){
    CListSorted = CList.slice();
    CListSorted.sort((a, b) => parseInt(b.initiative) - parseInt(a.initiative));
    displayCharacters();
}

function displayCharacters(){
    queueDisplay.innerHTML = "";
    for(let i = 0; i < CListSorted.length; i++){
        queueDisplay.innerHTML += 
            `
                <div class="character">
                    <div>Name: ${CListSorted[i].name}</div><br>
                    <div>Initiative: ${CListSorted[i].initiative}</div><br>
                    <div>HP: ${CListSorted[i].hp}/${CListSorted[i].hpMax}</div>
                </div>
            `;
    }
}

function start(){
    addButton.classList.add("none");
    startButton.classList.add("none");
    saveButton.classList.remove("none");
    endButton.classList.remove("none");
    endTurnButton.classList.remove("none");
    runMeter.classList.remove("none");
    displayList();
}

function displayList(){
    playersList.innerHTML = "";
    for(let i = 0; i < CListSorted.length; i++){
        playersList.innerHTML += 
            `
                <div class="character">
                    <section class="char">
                        <div>Name: ${CList[i].name}</div><br>
                        <div>Initiative: ${CList[i].initiative}</div><br>
                        <div><a>Current HP: </a><input value="${CList[i].hp}" class="hp${CList[i].id}"></div>
                        <div><a>Max HP: </a><input value="${CList[i].hpMax}" class="hpMax${CList[i].id}"></div>
                        <div><a>Notes: </a><br><textarea class="note note${CList[i].id}">${CList[i].note}</textarea></div>
                    </section>
                    <section class="apply">

                    </section>
                </div>
            `;
    }
}

function endTurn(){
    if(--number > 0){
        let temp = CListSorted[0];
        CListSorted.shift();
        CListSorted.push(temp);
        displayCharacters();
    }
    else {
        number = CList.length;
        let temp = CListSorted[0];
        CListSorted.shift();
        CListSorted.push(temp);
        displayCharacters();
        runMeterNumber.innerHTML++;
    }
}

function cancel(){
    nameD.value = "";
    initiativeD.value = "";
    hpD.value = "";
    hpMaxD.value = "";
    noteD.value = "";
    popupBG.classList.add("none");
    warningBox.classList.add("none");
}

function end(){
    localStorage.removeItem("CList");
    addButton.classList.remove("none");
    startButton.classList.remove("none");
    saveButton.classList.add("none");
    endButton.classList.add("none");
    endTurnButton.classList.add("none");
    runMeter.classList.add("none");
    CList = [];
    CListSorted = [];
    displayCharacters();
    displayList();
}