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

const name = document.body.querySelector(".name");
const initiative = document.body.querySelector(".initiative");
const hp = document.body.querySelector(".hp");
const hpMax = document.body.querySelector(".hpMax");
const note = document.body.querySelector(".note");

function displayAdd(){
    popupBG.classList.remove("none");
}

function start(){
    addButton.classList.add("none");
    startButton.classList.add("none");
    saveButton.classList.remove("none");
    endButton.classList.remove("none");
}

function cancel(){
    name.value = "";
    initiative.value = "";
    hp.value = "";
    hpMax.value = "";
    note.value = "";
    popupBG.classList.add("none");
}