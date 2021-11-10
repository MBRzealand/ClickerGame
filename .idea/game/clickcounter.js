document.onload = displayPlant();

var request = require('request');

function sellCrops(){

    let tomatoCount = document.getElementById("tomatoCounter").innerText;
    let moneyCount = document.getElementById("moneyCounter").innerText;
    let money = parseFloat(moneyCount) + (tomatoCount*3.25);

    document.getElementById("moneyCounter").innerHTML = money;
    document.getElementById("tomatoCounter").innerHTML = 0;
}


function displayPlant(){

    setInterval(function(){

        document.getElementById("plant1").style.visibility = "hidden"
        document.getElementById("plant2").style.visibility = "hidden"
        document.getElementById("plant3").style.visibility = "hidden"
        document.getElementById("plant4").style.visibility = "hidden"
        document.getElementById("plant5").style.visibility = "hidden"

        let rand = Math.floor(Math.random()*5) + 1

        let plant = "plant" + rand

        document.getElementById(plant).style.visibility = "visible"

    }, 500);

}

function harvestPlant1(){
    document.getElementById("plant1").style.visibility = "hidden"
    let rand = Math.floor(Math.random()*7) + 1

    var currentCount = document.getElementById("tomatoCounter").innerHTML;

    document.getElementById("tomatoCounter").innerHTML = eval(currentCount) + rand;
}

function harvestPlant2(){
    document.getElementById("plant2").style.visibility = "hidden"
    let rand = Math.floor(Math.random()*7) + 1

    var currentCount = document.getElementById("tomatoCounter").innerHTML;

    document.getElementById("tomatoCounter").innerHTML = eval(currentCount) + rand;
}

function harvestPlant3(){
    document.getElementById("plant3").style.visibility = "hidden"
    let rand = Math.floor(Math.random()*7) + 1

    var currentCount = document.getElementById("tomatoCounter").innerHTML;

    document.getElementById("tomatoCounter").innerHTML = eval(currentCount) + rand;
}

function harvestPlant4(){
    document.getElementById("plant4").style.visibility = "hidden"
    let rand = Math.floor(Math.random()*7) + 1

    var currentCount = document.getElementById("tomatoCounter").innerHTML;

    document.getElementById("tomatoCounter").innerHTML = eval(currentCount) + rand;
}

function harvestPlant5(){
    document.getElementById("plant5").style.visibility = "hidden"
    let rand = Math.floor(Math.random()*7) + 1

    var currentCount = document.getElementById("tomatoCounter").innerHTML;

    document.getElementById("tomatoCounter").innerHTML = eval(currentCount) + rand;
}

async function postRequest() {

    let data = {
        "tomatoes": document.getElementById("tomatoCounter").innerText,
        "money": document.getElementById("moneyCounter").innerText
    }

    // const http = new XMLHttpRequest()
    // http.open('POST', '/score')
    // http.setRequestHeader('Content-type', 'application/json')
    // http.send(JSON.stringify(data))

    let postRequest = await fetch("/score", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

}
