//--1--
const list = document.querySelector(".gallery");

console.log(list);

list.addEventListener("keyup", (event) => {
  console.log(event);
});

//--2--
const refs = {
  controls: document.querySelector("#controls"),
  input: document.querySelector("input"),
  btnRender: document.querySelector('[data-action="render"]'),
  btnDestroy: document.querySelector('[data-action="destroy"]'),
  boxes: document.querySelector("#boxes"),
};
refs.btnRender.addEventListener("click", createBoxes);
refs.btnDestroy.addEventListener("click", destoryBoxes);

function createBoxes(amount) {
  amount = 30;
  const inputEl = refs.input.value;
  for (let i = 0; i < inputEl; i++) {
    const createDiv = document.createElement("div");

    createDiv.style.width = amount + "px";
    createDiv.style.height = amount + "px";
    createDiv.style.backgroundColor = randomeColor();

    amount += 10;

    refs.boxes.append(createDiv);
  }
}
function destoryBoxes() {
  refs.boxes.innerHTML = "";
}
function randomeColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
