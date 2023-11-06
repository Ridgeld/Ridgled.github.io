const stored_name = localStorage.getItem('name');
const stored_class = localStorage.getItem('class');

const body = document.getElementById('body');

if (stored_name) {
    // Загружаем данные из JSON файла
    fetch('json/users.json')
        .then(response => response.json())
        .then(data => {
            // Поиск пользователя с совпадающим именем
            for (const username in data) {
                if (data[username].name === stored_name) {
                    // Выводим класс пользователя в консоль
                    console.log(`Класс пользователя ${stored_name}: ${data[username].gender}`);
                    body.classList.add(data[username].gender);
                    break; // Завершаем цикл после нахождения совпадения
                }
            }
        })
        .catch(error => {
            console.error('Произошла ошибка:', error);
        });
} else {
    console.log('Имя пользователя не найдено в localStorage.');
}
const main_name = document.getElementById('main_name');
const name_place = document.getElementById('name');
const class_name = document.getElementById('class_name');

main_name.textContent = stored_name;
name_place.textContent = stored_name;


class_name.textContent = stored_class;