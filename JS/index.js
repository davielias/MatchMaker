/**
 * Created by itc_user1 on 12/28/2016.
 */
var MemoryGame ={};
MemoryGame.gameTime = false;                        //If the game is paused or not
MemoryGame.COLUMNS = 3;                             //Columns wide
MemoryGame.rows = 4;                                //Rows down
MemoryGame.CLICK = false;
MemoryGame.cardBackground = "url(../Images/texture.jpg)";
MemoryGame.mainArray = [];                          //Images will be pushed here in a random order
MemoryGame.correctFlips = 0;                        //This will hold the amount of correct cards matched
MemoryGame.wrongFlips = 0;                          //Counter for wrong matches
MemoryGame.pickCard = 0;
MemoryGame.totalFlips = 0;
MemoryGame.firstCard;
MemoryGame.secondCard;
MemoryGame.init = function () {                     //Creates button to begin the game
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
MemoryGame.playGame= function () {                  //Generates the game
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
MemoryGame.createMain = function () {               //Creates the container for the cards
    var mainCont = document.createElement("div");
    mainCont.className = "container";
    mainCont.id = "mainCont";
    document.body.appendChild(mainCont);
};
MemoryGame.createCards = function () {              //Creates the cards themselves
    var mainCont = document.getElementById("mainCont");
    for (var i = 0; i < MemoryGame.rows; i++){
        var rowDivs = document.createElement("div");
        rowDivs.classList = "rows";
        mainCont.appendChild(rowDivs);
        for (var j =0; j < MemoryGame.COLUMNS; j++){
            var cardDivs = document.createElement("div");
            cardDivs.className += "cardDivs col-xs-4";
            cardDivs.id = (3*i) + j;
            cardDivs.style.content = MemoryGame.cardBackground;
            cardDivs.addEventListener("click", MemoryGame.revealCard);
            rowDivs.appendChild(cardDivs);
        }
    }
};
MemoryGame.imageArray = function () {               //This is where the images get pushed in a random order into the main array
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
MemoryGame.revealCard = function (e) {              //On click event for the cards that reveal the images
        if(!MemoryGame.gameTime && e.target.getAttribute("guessed") != "true"){

            e.target.style.content = "url(" + MemoryGame.mainArray[e.target.id] + ")";

            if(MemoryGame.pickCard == 0){
                MemoryGame.firstCard = e.target;
                MemoryGame.pickCard = 1;
            }
            else{
                MemoryGame.secondCard = e.target;
                MemoryGame.pickCard = 2;
                MemoryGame.doesItMatch();
            }
        }
};
MemoryGame.doesItMatch = function () {              //This is where the game checks for matches
    if(!MemoryGame.gameTime){
        if(MemoryGame.firstCard.style.content == MemoryGame.secondCard.style.content){
            MemoryGame.pickCard = 0;
            MemoryGame.firstCard.setAttribute("guessed","true");
            MemoryGame.secondCard.setAttribute("guessed","true");
            MemoryGame.correctFlips++;
            MemoryGame.totalFlips++;
            alert("You made a match, congrats!");
        }
        else if(MemoryGame.firstCard.style.content != MemoryGame.secondCard.style.content){
            MemoryGame.gameTime = true;
            setTimeout(function(){
                MemoryGame.firstCard.style.content = MemoryGame.cardBackground;
                MemoryGame.secondCard.style.content = MemoryGame.cardBackground;
                MemoryGame.gameTime = false;
                MemoryGame.pickCard = 0;
                MemoryGame.wrongFlips++;
                MemoryGame.totalFlips++;
            },1000);
        }
        if(MemoryGame.correctFlips == 6){
            alert("Hey, you won! Congrats! Out of "+MemoryGame.totalFlips+" total flips, you had "+MemoryGame.wrongFlips+" wrong flips. Refresh to play again!")
        }
    }
};
MemoryGame.init();
