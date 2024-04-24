document.addEventListener('DOMContentLoaded', function() {
  const sendButton = document.querySelector('.button'); // Выбираем кнопку "Отправить"
  const modalSignin = document.getElementById('modalSignin');

  sendButton.addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращаем стандартное действие кнопки "Отправить"

    // Открываем модальное окно
    var myModal = new bootstrap.Modal(modalSignin);
    myModal.show();
  });

  // Находим крестик для закрытия модального окна
  const closeButton = modalSignin.querySelector('.btn-close');
  // Добавляем обработчик события клика на крестик
  closeButton.addEventListener('click', function() {
    var myModal = new bootstrap.Modal(modalSignin);
    myModal.hide(); // Закрываем модальное окно при клике на крестик
  });

  // Добавляем обработчик события клика на задний фон
  modalSignin.addEventListener('click', function(event) {
    if (event.target === modalSignin) {
      var myModal = new bootstrap.Modal(modalSignin);
      myModal.hide(); // Закрываем модальное окно при клике на задний фон
    }
  });
});
