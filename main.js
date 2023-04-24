const scene = document.createElement('scene');
document.body.appendChild(scene);
let red = document.getElementById('red');
let blue = document.getElementById('blue');
let yellow = document.getElementById('yellow');
let green = document.getElementById('green');
let rp = 0;
let bp = 0;
let yp = 0;
let gp = 0;

red.innerText = `Player1\n${rp}`;
blue.innerText = `Player2\n${bp}`;
yellow.innerText = `Player3\n${yp}`;
green.innerText = `Player4\n${gp}`;

function ra () {
    rp++;
    red.innerText = `Player1\n${rp}`;
}
function rb () {
    rp--;
    red.innerText = `Player1\n${rp}`;
}
function ba () {
    bp++;
    blue.innerText = `Player2\n${bp}`;
}
function bb () {
    bp--;
    blue.innerText = `Player2\n${bp}`;
}
function ya () {
    yp++;
    yellow.innerText = `Player3\n${yp}`;
}
function yb () {
    yp--;
    yellow.innerText = `Player3\n${yp}`;
}
function ga () {
    gp++;
    green.innerText = `Player4\n${gp}`;
}
function gb () {
    gp--;
    green.innerText = `Player4\n${gp}`;
}