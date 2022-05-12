const box = document.querySelector('#box');
//const box = document.getElementById('box');
const container = document.getElementById('container');
let t = setInterval(move, 10);
let pos = 0;
pos_end = parseInt(getComputedStyle(container).width) - parseInt(getComputedStyle(box).width);
colors = ['red', 'blue', 'yellow', 'purple', 'black', 'orange', 'grey', 'pink', 'gold', 'coral', 'forest'];

function move() {
    pos++;
    box.style.left = pos + 'px';
    box.style.top = pos + 'px';
    if(pos >= pos_end){
        box.style.backgroundColor = colors[getRandom(0, colors.length)];
        box.style.borderRadius = getRandom(0, 25) + 'px';
        box.style.transform = `rotate(${getRandom(0,180)}deg)`;
        clearInterval(t);
        t = setInterval(move2, 10);
  
    }
}

function move2() {
    pos--;
    box.style.left = pos + 'px';
    box.style.top = pos + 'px';
    if(pos === 0){
        box.style.backgroundColor = colors[getRandom(0, colors.length)];
        box.style.borderRadius = getRandom(0, 25) + 'px';
        box.style.transform = `rotate(${getRandom(0,180)}deg)`;
        clearInterval(t);
        t = setInterval(move, 10);
    }
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }