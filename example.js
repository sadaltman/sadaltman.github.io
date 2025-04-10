const increaseBtn = document.getElementById("inc");
const decreaseBtn = document.getElementById("dec");
const resetBtn = document.getElementById("reset");
const counterDisplay = document.getElementById("count");
let x = 1;
function check(){
    let x = 2;
    console.log(x);
}
check();
let count = 0;

increaseBtn.onclick = function() {
    count++;
    counterDisplay.textContent = count;
}

decreaseBtn.onclick = function() {
    count--;
    counterDisplay.textContent = count;
}

resetBtn.onclick = function() {
    count = 0;
    counterDisplay.textContent = count;
}
