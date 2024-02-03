
"use strict";

const section1 = document.getElementById("sec1");
const section2 = document.getElementById("sec2");
const section3 = document.getElementById("sec3");
const section4 = document.getElementById("sec4");
const section5 = document.getElementById("sec5");
const section6 = document.getElementById("sec6");
const section7 = document.getElementById("sec7");
const section8 = document.getElementById("sec8");

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

section1.style.background = `url(https://picsum.photos/800/700?random=1) rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;
section2.style.background = `url(https://picsum.photos/800/700?random=2) rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;
section3.style.background = `url(https://picsum.photos/800/700?random=3) rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;
section4.style.background = `url(https://picsum.photos/800/700?random=4) rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;
section5.style.background = `url(https://picsum.photos/800/700?random=5) rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;
section6.style.background = `url(https://picsum.photos/800/700?random=6) rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;
section7.style.background = `url(https://picsum.photos/800/700?random=7) rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;
section8.style.background = `url(https://picsum.photos/800/700?random=8) rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;
