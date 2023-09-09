
// Обработчики событий для кнопок
document.getElementById('1').addEventListener('click', function () {
    loadTimetable('timetable.json', 'Понедельник');
});

document.getElementById('2').addEventListener('click', function () {
    loadTimetable('timetable.json', 'Вторник');
});

// Загрузка и отображение расписания
function loadTimetable(jsonFile, dayOfWeek) {
    fetch(jsonFile)
        .then(response => response.json())
        .then(data => {
            // Очистите расписание перед загрузкой нового
            const container = document.getElementById("place");
            container.innerHTML = '';

            // Найдите день недели в массиве данных
            const dayData = data.find(day => day.day === dayOfWeek);

            if (dayData) {
                // Если день недели найден, отобразите его уроки
                const lessons = dayData.lessons;
                lessons.forEach(урок => {
                    const lessonContainer = document.createElement("div");
                    lessonContainer.className = "lesson_container";

                    // Создайте div с классом "circle" перед названием урока
                    const circleDiv = document.createElement("div");
                    circleDiv.className = "circle";
                    lessonContainer.appendChild(circleDiv);

                    // Создайте div с классом "lesson_info" для названия урока и времени
                    const lessonInfoDiv = document.createElement("div");
                    lessonInfoDiv.className = "lesson_info";
                    lessonContainer.appendChild(lessonInfoDiv);

                    // Создайте div с классом "lesson_name" для названия урока
                    const lessonNameDiv = document.createElement("div");
                    lessonNameDiv.className = "lesson_name";
                    lessonNameDiv.textContent = lessons.name;
                    lessonInfoDiv.appendChild(lessonNameDiv);

                    // Создайте div с классом "lesson_time" для времени урока
                    const lessonTimeDiv = document.createElement("div");
                    lessonTimeDiv.className = "lesson_time";
                    lessonTimeDiv.textContent = lessons.time;
                    lessonInfoDiv.appendChild(lessonTimeDiv);

                    // Создайте div с классом "lesson_room" для кабинета
                    const lessonRoomDiv = document.createElement("div");
                    lessonRoomDiv.className = "lesson_room";
                    lessonRoomDiv.textContent = lessons.room;
                    lessonContainer.appendChild(lessonRoomDiv);

                    container.appendChild(lessonContainer);
                });
            }
        });
}

// По умолчанию загрузите расписание для понедельника
loadTimetable('timetable.json', 'Понедельник');
