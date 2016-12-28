/**
 * Created by itc_user1 on 12/28/2016.
 */
var COLUMNS = 3;
var rows = 4;

function init(){
    createMain();
    createCards();
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
            var cardDivs = document.createElement("div");
            cardDivs.className += "cardDivs col-xs-4";
            
            cardDivs.id = "column"+i+"-row"+j;
            rowDivs.appendChild(cardDivs);
        }
    }

}
