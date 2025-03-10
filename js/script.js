//--1--
const list = document.querySelector(".gallery");

console.log(list);

list.addEventListener("keyup", (event) => {
  console.log(event);
});

//--2--
const controls = document.querySelector("#controls");
const input = document.querySelector("input");
const btnRender = document.querySelector('[data-action="render"]');
const btnDestroy = document.querySelector('[data-action="destroy"]');
const boxes = document.querySelector("#boxes");
input.addEventListener("input", createBoxes);

function createBoxes(amount) {
  if (btnRender) {
    const divEL = document.createElement("div");
    const newDiv = boxes.append(divEL);
    amount = input.value;
    console.log(amount);
  }
}
