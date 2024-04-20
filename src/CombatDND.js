const CList = [];

if(localStorage.getItem("CList") != null){
    CList = localStorage.getItem("CList");
}

const popupBG = document.body.querySelector(".popupBG");
const popup = document.body.querySelector(".popup");
const addButton = document.body.querySelector(".add");
const startButton = document.body.querySelector(".start");
const saveButton = document.body.querySelector(".save");
const endButton = document.body.querySelector(".end");
const warningBox = document.body.querySelector(".warnings");
const queueDisplay = document.body.querySelector(".queueDisplay");

const nameD = document.body.querySelector(".name");
const initiativeD = document.body.querySelector(".initiative");
const hpD = document.body.querySelector(".hp");
const hpMaxD = document.body.querySelector(".hpMax");
const noteD = document.body.querySelector(".note");

function displayAdd(){
    popupBG.classList.remove("none");
}

function apply(){
    if((nameD.value == "" || initiativeD.value == "" || hpD.value == "" || hpMaxD.value == "")) {
        warningBox.classList.remove("none");
        warningBox.innerHTML = "Fill up all informations!";
    }
    else if(parseInt(hpD.value) > parseInt(hpMaxD.value)){
        warningBox.classList.remove("none");
        warningBox.innerHTML = "Current HP must be lower than max HP!";
    }
    else{
        CList.push({name: nameD.value, initiative: parseInt(initiativeD.value), hp: parseInt(hpD.value), hpMax: parseInt(hpMaxD.value), note: noteD.value});
        cancel();
        displayCharacters();
        warningBox.classList.add("none");
    }
}

function displayCharacters(){
    const CListSorted = CList.sort((a, b) => parseInt(b.initiative) - parseInt(a.initiative));
    console.log(CListSorted);
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