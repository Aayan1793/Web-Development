var dices = ['&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861;'];
var start = false;
var dice;

function change() {
    var random = Math.floor(Math.random() * 6);
    dice.innerHTML = dices[random];

}

window.onload = function() {
    dice = document.getElementById("dice");
    stopStart();
}

function stopStart() {
    if (!start) {
        start = true;
        intervalId = setInterval(change, 100);
    } else {
        clearInterval(intervalId);
        start = false;
    }
}