/**
 * Created by itc_user1 on 12/28/2016.
 */
var COLUMNS = 3;
var rows = 4;
var CLICK = false;
function init(){
    var welcomeText = document.createElement("h1");
    welcomeText.id = "welcomeStuff";
    welcomeText.innerHTML = "Welcome to the match making game!";
    document.body.appendChild(welcomeText);
    var startButton= document.createElement("input");
    startButton.type = "submit";
    startButton.id = "startButton";
    startButton.addEventListener("click", playGame);
    startButton.value = "Let's play a game!";
    document.body.appendChild(startButton);
}
function playGame(){
    if (CLICK === false){
        createMain();
        createCards();
        var removeClick = document.getElementById("startButton");
        removeClick.removeEventListener("click", playGame);
    }
    else {
        CLICK = true;
    }
}
function createMain(){
    var mainCont = document.createElement("div");
    mainCont.className = "container";
    mainCont.id = "mainCont";
    document.body.appendChild(mainCont);
}
function createCards() {
    var mainCont = document.getElementById("mainCont");
    for (var i = 0; i < rows; i++){
        var rowDivs = document.createElement("div");
        rowDivs.classList = "rows";
        mainCont.appendChild(rowDivs);
        for (var j =0; j < COLUMNS; j++){
            // var flipDiv = document.createElement("div"); these relate to flip animation
            // flipDiv.className = "card effect__click";
            var cardDivs = document.createElement("div");
            cardDivs.className += "cardDivs col-xs-4";
            cardDivs.id = "column"+i+"-row"+j;
            // cardDivs.addEventListener("click", revealCard);
            rowDivs.appendChild(cardDivs);
        }
    }
    getCardClass();
}
function getCardClass(){
    var getTheClass = document.querySelectorAll(".cardDivs");
    for (var i =0; i < getTheClass.length; i++){
        console.log("This is the "+i+" card in the array.");
        // getTheClass[i].style  = "content: url("+"../Images/"+i+".jpg"+");"
    }
}
//Create array of images, randomize.
//Randomize unique setAttribute.Data.image when creating each card that points to an image from the array.
//On click, change ID
// Flag clicks for t/f clicks with card
//If true, remove event listener
//cards unflipped
// function cardTimeOut(){
//     setTimeout()
// }
// function revealCard(){
//     setInterval(flipCard, 2000);
// }
// function flipCard() {
//     // document.getElem
// }
init();