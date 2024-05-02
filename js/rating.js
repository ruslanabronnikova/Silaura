const stars = document.querySelectorAll('.rating svg');

stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    // Определение значения рейтинга
    const ratingValue = index + 1;

    // Установка активного состояния для всех звезд с индексом меньше или равным выбранной
    stars.forEach((s, i) => {
      if (i < ratingValue) {
        s.classList.add('active');
      } else {
        s.classList.remove('active');
      }
    });
  });
});
