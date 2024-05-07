document.addEventListener('DOMContentLoaded', function () {
  const sendButton = document.querySelector('.button'); // Выбираем кнопку "Отправить"
  const modalSignin = document.getElementById('staticBackdrop');

  sendButton.addEventListener('click', function (event) {
    event.preventDefault(); // Предотвращаем стандартное действие кнопки "Отправить"

    // Вызываем функцию валидации
    if (validateEmail()) {
      // Если валидация успешна, открываем модальное окно
      var myModal = new bootstrap.Modal(modalSignin);
      myModal.show();
    }
  });

  // Добавляем обработчик события клика на задний фон
  modalSignin.addEventListener('click', function (event) {
    if (event.target === modalSignin) {
      var myModal = new bootstrap.Modal(modalSignin);
      myModal.hide(); // Закрываем модальное окно при клике на задний фон
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const stars = document.querySelectorAll('.star');
  stars.forEach(star => {
    star.addEventListener('click', function () {
      const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
      myModal.show();
    });
  });
});
