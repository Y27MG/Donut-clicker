var donuts = 0;
var dpc = 1;
var dps = 0;

let acCount = 0;
// change back to 100 when done!
let autoClickerPrice = 100;
let donutsCount = 0;
let acButton = document.getElementById("buyAcButton");
let c =document.querySelector(":root");




function makeDonut() {
    ++donutsCount;
    document.getElementById('donut-text').innerText = donutsCount;
    document.getElementById("autoClickerPrice").innerText = autoClickerPrice;
    gameState();
}


function gameState(){

    if ( donutsCount >= autoClickerPrice ){
        acButton.disabled = false;
        c.style.setProperty("--color", "#ff590a");
    } else{
        acButton.disabled = true;
        c.style.setProperty("--color", "#dedcdd");
    }
    document.getElementById("autoClickerPrice").innerText = autoClickerPrice;
    }


function buyAutoDonut() {
        ++acCount;
        document.getElementById("numOfAc").innerHTML = acCount;
        donutsCount = donutsCount - autoClickerPrice;
        document.getElementById('donut-text').innerText = donutsCount;
        document.getElementById("autoClickerPrice").innerHTML = autoClickerPrice;
        autoClickerPrice = autoClickerPrice + (autoClickerPrice * .10);        
        setInterval(makeDonut, 1000);
        gameState();
    
}




// popups

const popup1 = document.getElementById("popup1");
function openpopup1(){
    popup1.classList.add("show");
}
function closepopup1(){
    popup1.classList.remove("show");
}


const popup2 = document.getElementById("popup2");
function openpopup2(){
    popup2.classList.add("show");
    console.log("open");
}
function closepopup2(){
    popup2.classList.remove("show");
}



const popup3 = document.getElementById("popup3");
function openpopup3(){
    popup3.classList.add("show");
    console.log("open");
}
function closepopup3(){
    popup3.classList.remove("show");
}