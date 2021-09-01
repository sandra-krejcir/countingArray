"use strict";
let counter;
const arrayOfNumbers = [];
for (let i = 1; i <= 100; i++) {
  arrayOfNumbers.push(i.toString());
}

init();

function init() {
  console.log("function init()");
  counter = 0;

  loop();
}

function loop() {
  console.log("function loop()", counter);
  counter++;
  if (counter <= 100) {
    console.log("arrayOfNumbers[counter]", arrayOfNumbers[counter]);
    setTimeout(loop, 200);
  }
}
