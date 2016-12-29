/**
 * Created by itc_user1 on 12/28/2016.
 */
var MemoryGame ={};
MemoryGame.gameTime = false;
MemoryGame.COLUMNS = 3;
MemoryGame.rows = 4;
MemoryGame.CLICK = false;
MemoryGame.mainArray = [];
MemoryGame.playGame= function () {
    if (MemoryGame.CLICK === false){
        MemoryGame.createMain();
        MemoryGame.imageArray();
        MemoryGame.createCards();
        var removeClick = document.getElementById("startButton");
        removeClick.removeEventListener("click", MemoryGame.playGame);
    }
    else {
        MemoryGame.CLICK = true;
    }
};
MemoryGame.init = function () {
    var welcomeText = document.createElement("h1");
    welcomeText.id = "welcomeStuff";
    welcomeText.innerHTML = "Welcome to the match making game!";
    document.body.appendChild(welcomeText);
    var startButton= document.createElement("input");
    startButton.type = "submit";
    startButton.id = "startButton";
    startButton.addEventListener("click", MemoryGame.playGame);
    startButton.value = "Let's play a game!";
    document.body.appendChild(startButton);
};
MemoryGame.createMain = function () {
    var mainCont = document.createElement("div");
    mainCont.className = "container";
    mainCont.id = "mainCont";
    document.body.appendChild(mainCont);
};
MemoryGame.createCards = function () {
    var mainCont = document.getElementById("mainCont");
    for (var i = 0; i < MemoryGame.rows; i++){
        var rowDivs = document.createElement("div");
        rowDivs.classList = "rows";
        mainCont.appendChild(rowDivs);
        for (var j =0; j < MemoryGame.COLUMNS; j++){
            var cardDivs = document.createElement("div");
            cardDivs.className += "cardDivs col-xs-4";
            cardDivs.id = (3*i) + j;
            cardDivs.addEventListener("click", MemoryGame.revealCard);
            rowDivs.appendChild(cardDivs);
        }
    }
};
MemoryGame.imageArray = function () {
    var imageSelection = ["../Images/0.jpg","../Images/0.jpg","../Images/1.jpg","../Images/1.jpg",
        "../Images/2.jpg","../Images/2.jpg","../Images/3.jpg","../Images/3.jpg","../Images/4.jpg",
        "../Images/4.jpg","../Images/5.jpg","../Images/5.jpg"];
    var arrayLength = imageSelection.length;

    while (arrayLength--){
        var num = Math.floor(Math.random()*arrayLength);
        MemoryGame.mainArray.push(imageSelection[num]);
        imageSelection.splice(num,1);
        // console.log(num);
        console.log(MemoryGame.mainArray);
        console.log(imageSelection);
    }  
};
MemoryGame.revealCard = function (e) {
    
};
MemoryGame.init();
//Create array of images, randomize.--done
//Randomize unique setAttribute.Data.image when creating each card that points to an image from the array.
//On click, change ID
// Flag clicks for t/f clicks with card
//If true, remove event listener
//cards unflipped
// function cardTimeOut(){
//     setTimeout()
// }