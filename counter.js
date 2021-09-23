let btnSubtract = document.querySelector("#subtract");
let btnAdd = document.querySelector("#add");
let input = document.querySelector("input");

btnSubtract.addEventListener("click", () => {
  input.value = parseInt(input.value) - 1;
});
btnAdd.addEventListener("click", () => {
  input.value = parseInt(input.value) + 1;
});
