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
    mainCont.className += "col-xs-12 col-sm-12 col-md-12 col-lg-12 container";
    mainCont.id = "mainCont";
    document.body.appendChild(mainCont);
}
function createCards() {
    var mainCont = document.getElementById("mainCont");
    for (var i = 0; i < COLUMNS; i++){
        for (var j =0; j < rows; j++){
            var cardDivs = document.createElement("div");
            cardDivs.className += "cardDivs col-xs-4 col-sm-4 col-md-4 col-lg-4";
            cardDivs.id = "column"+i+"-row"+j;
            mainCont.appendChild(cardDivs);
        }
    }

}
