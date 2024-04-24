document.addEventListener("DOMContentLoaded", function() {
  const buyButtons = document.querySelectorAll(".buyButton");
  const increaseButtons = document.querySelectorAll(".increaseButton");
  const decreaseButtons = document.querySelectorAll(".decreaseButton");
  const counters = document.querySelectorAll(".counterButton");

  buyButtons.forEach(function(buyButton, index) {
    const increaseButton = increaseButtons[index];
    const decreaseButton = decreaseButtons[index];
    const counter = counters[index];

    buyButton.addEventListener("click", function() {
      buyButton.style.display = "none"; // Скрыть кнопку "Купить"
      counter.style.display = "flex"; // Показать контейнер счетчика и кнопок +/-
    });

    increaseButton.addEventListener("click", function() {
      const count = parseInt(counter.querySelector(".counter").innerText);
      counter.querySelector(".counter").innerText = count + 1;
    });

    decreaseButton.addEventListener("click", function() {
      const count = parseInt(counter.querySelector(".counter").innerText);
      if (count > 0) {
        counter.querySelector(".counter").innerText = count - 1;
      }
    });
  });
});



