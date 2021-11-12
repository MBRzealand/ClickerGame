document.onload = displayPlant()

function sellCrops(){

    let tomatoCount = document.getElementById("tomatoCounter").innerText;
    let pepperCount = document.getElementById("pepperCounter").innerText;
    let carrotCount = document.getElementById("carrotCounter").innerText;
    let moneyCount = document.getElementById("moneyCounter").innerText;
    let money =
        parseFloat(moneyCount) +
        (tomatoCount*3.25) +
        (pepperCount*8.00) +
        (carrotCount*0.50);

    document.getElementById("moneyCounter").innerHTML = money;
    document.getElementById("tomatoCounter").innerHTML = 0;
    document.getElementById("pepperCounter").innerHTML = 0;
    document.getElementById("carrotCounter").innerHTML = 0;
}

function initializePlants(){
    let plant1 = document.getElementById("plant1")
    let plant2 = document.getElementById("plant2")
    let plant3 = document.getElementById("plant3")
    let plant4 = document.getElementById("plant4")
    let plant5 = document.getElementById("plant5")

    plant1.addEventListener('click', clickPlant)
    plant2.addEventListener('click', clickPlant)
    plant3.addEventListener('click', clickPlant)
    plant4.addEventListener('click', clickPlant)
    plant5.addEventListener('click', clickPlant)
}

function hidePlants(){
    plant1.style.visibility = "hidden"
    plant2.style.visibility = "hidden"
    plant3.style.visibility = "hidden"
    plant4.style.visibility = "hidden"
    plant5.style.visibility = "hidden"
    plant1.removeEventListener('click', clickPlant)
    plant2.removeEventListener('click', clickPlant)
    plant3.removeEventListener('click', clickPlant)
    plant4.removeEventListener('click', clickPlant)
    plant5.removeEventListener('click', clickPlant)
}

function displayPlant(){

    setInterval(function(){

        let plantArray = ["TomatoPlant.png","BellPepperPlant.png","CarrotPlant.png", "PotatoPlant.png"]
        let iconArray = ["tomatoCounter", "pepperCounter", "carrotCounter", "potatoCounter"]
        let pickPlantType = Math.floor(Math.random()*4)
        let pickDisplay = Math.floor(Math.random()*5) + 1
        let plantdisplay = "plant"+pickDisplay;

        initializePlants()
        hidePlants()

        eval(plantdisplay).style.visibility = "visible"
        eval(plantdisplay).src = plantArray[pickPlantType]

        eval(plantdisplay).addEventListener('click', clickPlant)

    }, 500);

}

function clickPlant(){

    let currentImage = document.getElementById(this.id).src; // plant1

    if (currentImage.includes("Tomato")){
        document.getElementById(this.id).style.visibility = "hidden"
        let harvestAmount = Math.floor(Math.random()*5) + 1;
        let currentCount = document.getElementById("tomatoCounter").innerText;
        document.getElementById("tomatoCounter").innerHTML = eval(currentCount) + harvestAmount;
    }

    if (currentImage.includes("Pepper")){
        document.getElementById(this.id).style.visibility = "hidden"
        let harvestAmount = Math.floor(Math.random()*3) + 1;
        let currentCount = document.getElementById("pepperCounter").innerText;
        document.getElementById("pepperCounter").innerHTML = eval(currentCount) + harvestAmount;
    }

    if (currentImage.includes("Carrot")){
        document.getElementById(this.id).style.visibility = "hidden"
        let harvestAmount = 1;
        let currentCount = document.getElementById("carrotCounter").innerText;
        document.getElementById("carrotCounter").innerHTML = eval(currentCount) + harvestAmount;
    }

    if (currentImage.includes("Potato")){
        document.getElementById(this.id).style.visibility = "hidden"
        let harvestAmount = 1;
        let currentCount = document.getElementById("potatoCounter").innerText;
        document.getElementById("potatoCounter").innerHTML = eval(currentCount) + harvestAmount;
    }
}

async function postRequest() {

    let data = {
        "tomatoes": document.getElementById("tomatoCounter").innerText,
        "peppers": document.getElementById("pepperCounter").innerText,
        "carrots": document.getElementById("carrotCounter").innerText,
        "potatos": document.getElementById("potatoCounter").innerText,
        "money": document.getElementById("moneyCounter").innerText
    }

    let postRequest = await fetch("/score", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

}
