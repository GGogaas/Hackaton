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
    console.log(localStorage.getItem("CList"));
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
                <div class="character char${CListSorted[i].id}">
                    <div>Name: ${CListSorted[i].name}</div><br>
                    <div>Initiative: ${CListSorted[i].initiative}</div><br>
                    <div>HP: ${CListSorted[i].hp}/${CListSorted[i].hpMax}</div><br>
                    <div>Notes: ${CListSorted[i].note}</div>
                </div>
            `;
    }
}

function start(){
    if(CList.length >= 2){
        addButton.classList.add("none");
        startButton.classList.add("none");
        saveButton.classList.remove("none");
        endButton.classList.remove("none");
        endTurnButton.classList.remove("none");
        runMeter.classList.remove("none");
        displayList();
    }
    else {
        alert("Each run need at least 2 characters!")
    }
}

function displayList(){
    playersList.innerHTML = "";
    for(let i = 0; i < CListSorted.length; i++){
        if(CList[i].hp == 0){
            playersList.innerHTML += 
                `
                    <div class="character character${i}">
                        <section class="char">
                            <div>Name: ${CList[i].name}</div><br>
                            <div>Initiative: ${CList[i].initiative}</div><br>
                            <div><a>Current HP: </a><input value="${CList[i].hp}" class="hp${CList[i].id}"></div>
                            <div><a>Max HP: </a><input value="${CList[i].hpMax}" class="hpMax${CList[i].id}"></div>
                            <div><a>Notes: </a><br><textarea class="note note${CList[i].id}" rows="6" cols="20" type="text">${CList[i].note}</textarea></div>
                            <div class="revive${CList[i].id}">Death saving throws<br><button class="plus" onclick="plus(${CList[i].id});">+</button><a class="plusNum reviveNumberPlus${CList[i].id}">0</a>-<a class="minusNum reviveNumberMinus${CList[i].id}">0</a><button class="minus" onclick="minus(${CList[i].id});">-</button></div>
                            <div><button onclick="changeData(${CList[i].id});">Apply changes</button></div>
                            <div class="warningsCharacter${CList[i].id} none"></div>
                        </section>
                        <section class="apply">

                        </section>
                    </div>
                `;
                changeOnLoad(CList[i].id);
        }
        else {
            playersList.innerHTML += 
                `
                    <div class="character character${i}">
                        <section class="char">
                            <div>Name: ${CList[i].name}</div><br>
                            <div>Initiative: ${CList[i].initiative}</div><br>
                            <div><a>Current HP: </a><input value="${CList[i].hp}" class="hp${CList[i].id}"></div>
                            <div><a>Max HP: </a><input value="${CList[i].hpMax}" class="hpMax${CList[i].id}"></div>
                            <div><a>Notes: </a><br><textarea class="note note${CList[i].id}" rows="6" cols="20" type="text">${CList[i].note}</textarea></div>
                            <div><button onclick="changeData(${CList[i].id});">Apply changes</button></div>
                            <div class="warningsCharacter${CList[i].id} none"></div>
                        </section>
                        <section class="apply">
    
                        </section>
                    </div>
                `;
                console.log(CList[i].id);
        }
    }
}

function plus(i){
    if(parseInt(document.body.querySelector(`.reviveNumberPlus${i}`).innerHTML) < 3){
        document.body.querySelector(`.reviveNumberPlus${i}`).innerHTML = parseInt(document.body.querySelector(`.reviveNumberPlus${i}`).innerHTML) + 1;
    }
}

function minus(i){
    if(parseInt(document.body.querySelector(`.reviveNumberMinus${i}`).innerHTML) < 3){
        document.body.querySelector(`.reviveNumberMinus${i}`).innerHTML = parseInt(document.body.querySelector(`.reviveNumberMinus${i}`).innerHTML) + 1;
    }
}

function endTurn(){
    if(--number > 0){
        let temp = CListSorted[0];
        CListSorted.shift();
        CListSorted.push(temp);
        displayCharacters();
        displayList();
    }
    else {
        number = CList.length;
        let temp = CListSorted[0];
        CListSorted.shift();
        CListSorted.push(temp);
        displayCharacters();
        runMeterNumber.innerHTML++;
        displayList();
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

function changeOnLoad(i){
    let found = CListSorted.find(element => element.id === i);
    let changeBG = document.body.querySelector(`.character${i - 1}`);
    if(found.hp == 0){
        changeBG.classList.add("red");
        document.body.querySelector(`.char${i}`).classList.add("red");
    }
    else {
        changeBG.classList.remove("red");
        document.body.querySelector(`.char${i}`).classList.remove("red");
    }
}

function changeData(i){
    console.log(i);

    let warningBoxChar = document.body.querySelector(`.warningsCharacter${CList[i-1].id}`);

    if(parseInt(document.body.querySelector(`.hp${i}`).value) > parseInt(document.body.querySelector(`.hpMax${i}`).value)){
        warningBoxChar.classList.remove("none");
        warningBoxChar.innerHTML = "Current HP must be lower than or equal to max HP!";
    }
    else if(parseInt(document.body.querySelector(`.hpMax${i}`).value) < 0){
        warningBoxChar.classList.remove("none");
        warningBoxChar.innerHTML = "Max HP can't be lower than or equal to 0!";
    }
    else if(parseInt(document.body.querySelector(`.hp${i}`).value) < 0){
        warningBoxChar.classList.remove("none");
        warningBoxChar.innerHTML = "HP can't be lower than 0!";
    }
    else {
        let found = CListSorted.find(element => element.id === i);

        warningBoxChar.classList.add("none");

        found.hp = parseInt(document.body.querySelector(`.hp${i}`).value);
        found.hpMax = parseInt(document.body.querySelector(`.hpMax${i}`).value);
        found.note = document.body.querySelector(`.note${i}`).value;

        let j = CList.findIndex(element => element.id === i);
        if (j !== -1) {
            CList[j] = found;
        }
        displayList();

        document.body.querySelector(`.char${i}`).innerHTML = 
            `
                <div>Name: ${found.name}</div><br>
                <div>Initiative: ${found.initiative}</div><br>
                <div>HP: ${found.hp}/${found.hpMax}</div><br>
                <div>Notes: ${found.note}</div>
            `;
        
        let changeBG = document.body.querySelector(`.character${i - 1}`);
        if(found.hp == 0){
            changeBG.classList.add("red");
            document.body.querySelector(`.char${i}`).classList.add("red");
        }
        else {
            changeBG.classList.remove("red");
            document.body.querySelector(`.char${i}`).classList.remove("red");
        }
    }
}