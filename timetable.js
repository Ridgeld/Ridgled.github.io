let first = document.getElementById("1");
let second = document.getElementById("2");
let third = document.getElementById("3");
let fourth = document.getElementById("4");
let fiveth = document.getElementById("5");


let name = document.getElementById("name");
let time = document.getElementById("time");
let room = document.getElementById("room");


// Загрузка JSON-файла с расписанием
fetch('timetable.json')
    .then(response => response.json())
    .then(data => {
        // Получите контейнер, в который вы хотите добавить lesson_container
        const lessonPlace = document.getElementById("place");

        // Переберите lesson и создайте для каждого lesson_container
        for (const day in data) {
            if (data.hasOwnProperty(day)) {
                const lesson = data[day];
                lesson.forEach(lessons => {
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

                    lessonPlace.appendChild(lessonContainer);
                });
            }
        }
    });
