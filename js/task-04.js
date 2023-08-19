const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueSpan = document.querySelector("#value");

let counterValue = 0;

const updateCounterUI = () => {
  valueSpan.textContent = counterValue;
};

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  updateCounterUI();
});

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  updateCounterUI();
});

updateCounterUI();
