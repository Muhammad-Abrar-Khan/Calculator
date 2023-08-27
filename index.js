let finaloutput = [];
let screen_el = document.querySelector(".output");
let updateScreen_el = document.querySelector(".equal");

function updateScreen() {
    screen_el.textContent = finaloutput.join('');
    setTimeout(function() {
        screen_el.scrollLeft = screen_el.scrollWidth;
    }, 10);
}

function cancel() {
    finaloutput = [];
    screen_el.textContent = 0;
}

function addValue(value) {
    finaloutput.push(value);
    updateScreen();
}

updateScreen_el.addEventListener("click", function() {
    const expression = finaloutput.join('');
    let result;
    try {
        result = eval(expression);
        screen_el.textContent = result;
        finaloutput = [result.toString()]; 
    } catch (error) {
        screen_el.textContent = 'Error';
    }
});

function zero() { addValue("0"); }
function doublezero() { addValue("00"); }
function dot() { addValue("."); }
function one() { addValue("1"); }
function two() { addValue("2"); }
function three() { addValue("3"); }
function four() { addValue("4"); }
function five() { addValue("5"); }
function six() { addValue("6"); }
function seven() { addValue("7"); }
function eight() { addValue("8"); }
function nine() { addValue("9"); }
function divide() { addValue("/"); }
function multiply() { addValue("*"); }
function minus() { addValue("-"); }
function plus() { addValue("+"); }
