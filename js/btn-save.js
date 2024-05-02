// Получаем все кнопки с классом "btn-save"
const saveButtons = document.querySelectorAll('.btn-save');

// Для каждой кнопки добавляем обработчик события
saveButtons.forEach(button => {
    // Получаем изображение внутри текущей кнопки
    const saveImage = button.querySelector('.img-save');

    // Добавляем обработчик события клика на кнопку
    button.addEventListener('click', () => {
        // Переключаем между изображениями
        if (saveImage.getAttribute('src') === '/img/Icon/heart-outline.svg') {
            // Если текущее изображение - пустое сердце, заменяем его на закрашенное
            saveImage.setAttribute('src', '/img/Icon/heart-fill.svg');
        } else {
            // Если текущее изображение - закрашенное сердце, заменяем его на пустое
            saveImage.setAttribute('src', '/img/Icon/heart-outline.svg');
        }
    });
});
