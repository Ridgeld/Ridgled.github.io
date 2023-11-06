const day_place = document.getElementById('day_place');
function getCurrentDate() {
    const currentDate = new Date();
  
    const dayNames = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  
    const day = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const dayOfWeek = dayNames[currentDate.getDay()];
  
    return `${day} ${month}, ${dayOfWeek}`;
  }
  
//   const currentDateFormatted = getCurrentDate();
// console.log(currentDateFormatted);
day_place.innerHTML = getCurrentDate();

function updateCalendar() {
    const container = document.getElementById("week");
    const currentDate = new Date();
    const daysOfWeek = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
    let idCounter = 1; // Переменная для хранения текущего id
  
    // Очищаем контейнер
    container.innerHTML = '';
  
    // Определяем текущую дату
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
  
    // Определяем даты текущей недели, начиная с понедельника
    for (let day = currentDay - currentDate.getDay() + 1; day <= currentDay + (7 - currentDate.getDay()); day++) {
        const dayDate = new Date(currentYear, currentMonth, day);
        const dayIndex = (dayDate.getDay() + 6) % 7; // Коррекция для правильных индексов дней недели
        const dayContainer = document.createElement("div");
        dayContainer.className = "day_container";
        dayContainer.id = idCounter; // Устанавливаем уникальный id
        idCounter++; // Увеличиваем idCounter
        const dayName = document.createElement("div");
        dayName.className = "day_name";
        dayName.textContent = `${daysOfWeek[dayIndex]}`;
        const dayData = document.createElement("div");
        dayData.className = "day_data";
        dayData.textContent = `${dayDate.toLocaleDateString('en-US', { day: 'numeric' })}`;
        dayContainer.appendChild(dayName);
        dayContainer.appendChild(dayData);
        container.appendChild(dayContainer);
    }
  }
  
  // Вызываем функцию для обновления дат текущей недели при загрузке страницы
updateCalendar();
document.getElementById('1').classList.add('active');
loadTimetable(`json/${localStorage.getItem('class')}/timetable.json`, 'ПН');
for (let i = 1; i <= 7; i++) {
    const button = document.getElementById(i.toString());
    const dayContainer = document.getElementById(i.toString());
    button.addEventListener('click', function () {
        const dayName = dayContainer.querySelector('.day_name').textContent; // Получаем текст из элемента с классом day_name
        loadTimetable(`json/${localStorage.getItem('class')}/timetable.json`, dayName); // Загружаем расписание для выбранного дня
        // Устанавливаем класс "active" для нажатой кнопки и удаляем его у остальных
        for (let j = 1; j <= 7; j++) {
            const otherButton = document.getElementById(j.toString());
            if (j === i) {
                this.classList.add('active');
            } else {
                otherButton.classList.remove('active');
            }
        }
    });
}
// loadTimetable('json/11-Б/timetable.json', 'ПН');
// По умолчанию активируем кнопку "Понедельник" и загружаем расписание
// document.getElementById('1').click();
//   document.getElementById('1').classList.add('active'); // По умолчанию активируем кнопку "Понедельник"
  
//   loadTimetable('json/11_B/timetable.json', 'Понедельник'); // Загружаем расписание для понедельника при загрузке страницы
//   // Обработчики событий для кнопок
//   document.getElementById('1').addEventListener('click', function () {
//       loadTimetable('json/11_B/timetable.json', 'Понедельник');
//       this.classList.toggle('active');
  
//       document.getElementById('2').classList.remove('active');
//       document.getElementById('3').classList.remove('active');
//       document.getElementById('4').classList.remove('active');
//       document.getElementById('5').classList.remove('active');
//       document.getElementById('6').classList.remove('active');
//       document.getElementById('7').classList.remove('active');
//   });
  
//   document.getElementById('2').addEventListener('click', function () {
//       loadTimetable('json/11_B/timetable.json', 'Вторник');
//       this.classList.toggle('active');
  
  
//       document.getElementById('1').classList.remove('active');
//       document.getElementById('3').classList.remove('active');
//       document.getElementById('4').classList.remove('active');
//       document.getElementById('5').classList.remove('active');
//       document.getElementById('6').classList.remove('active');
//       document.getElementById('7').classList.remove('active');
//   });
  
//   document.getElementById('3').addEventListener('click', function () {
//       loadTimetable('json/11_B/timetable.json', 'Среда');
//       this.classList.toggle('active');
  
//       document.getElementById('1').classList.remove('active');
//       document.getElementById('2').classList.remove('active');
//       document.getElementById('4').classList.remove('active');
//       document.getElementById('5').classList.remove('active');
//       document.getElementById('6').classList.remove('active');
//       document.getElementById('7').classList.remove('active');
//   });
//   document.getElementById('4').addEventListener('click', function () {
//       loadTimetable('json/11_B/timetable.json', 'Четверг');
//       this.classList.toggle('active');
  
//       document.getElementById('1').classList.remove('active');
//       document.getElementById('2').classList.remove('active');
//       document.getElementById('3').classList.remove('active');
//       document.getElementById('5').classList.remove('active');
//       document.getElementById('6').classList.remove('active');
//       document.getElementById('7').classList.remove('active');
//   });
  
//   document.getElementById('5').addEventListener('click', function () {
//       loadTimetable('json/11_B/timetable.json', 'Пятница');
//       this.classList.toggle('active');
  
//       document.getElementById('1').classList.remove('active');
//       document.getElementById('2').classList.remove('active');
//       document.getElementById('3').classList.remove('active');
//       document.getElementById('4').classList.remove('active');
//       document.getElementById('6').classList.remove('active');
//       document.getElementById('7').classList.remove('active');
//   });
//   document.getElementById('6').addEventListener('click', function () {
//       loadTimetable('json/11_B/timetable.json', 'Суббота');
//       this.classList.toggle('active');
  
//       document.getElementById('1').classList.remove('active');
//       document.getElementById('2').classList.remove('active');
//       document.getElementById('3').classList.remove('active');
//       document.getElementById('4').classList.remove('active');
//       document.getElementById('5').classList.remove('active');
//       document.getElementById('7').classList.remove('active');
//   });
//   document.getElementById('7').addEventListener('click', function () {
//     loadTimetable('json/11_B/timetable.json', 'Воскресенье');
//     this.classList.toggle('active');
  
//     document.getElementById('1').classList.remove('active');
//     document.getElementById('2').classList.remove('active');
//     document.getElementById('3').classList.remove('active');
//     document.getElementById('4').classList.remove('active');
//     document.getElementById('5').classList.remove('active');
//     document.getElementById('6').classList.remove('active');
//   });
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
                        const lesson_id = урок.name.toLowerCase();
                      // Создайте контейнер для урока
                        const lessonContainer = document.createElement("div");
                        lessonContainer.className = "lesson_container";
                        // lessonContainer.id = lesson_id;
                        lessonContainer.addEventListener("click", () => {
                            if (урок.name === "не указано" ||
                                урок.name === "Классный час" ||
                                урок.name === "физкультура"){
                                    return
                                }
                            // Переадресация на task.html с передачей параметра "lessonName"
                            window.location.href = `task.html?lessonName=${encodeURIComponent(урок.name.toLowerCase())}`;
                        });
                        // Создайте div с классом "circle" перед названием урока
                        const circleDiv = document.createElement("div");
                        circleDiv.className = "lesson_circle";
                        circleDiv.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7 1C7 0.447715 6.55228 0 6 0C5.44772 0 5 0.447715 5 1V2H2C0.89543 2 0 2.89543 0 4V17C0 18.1046 0.89543 19 2 19H20C21.1046 19 22 18.1046 22 17V4C22 2.89543 21.1046 2 20 2H17V1C17 0.447715 16.5523 0 16 0C15.4477 0 15 0.447715 15 1V2H7V1ZM5 4V5C5 5.55228 5.44772 6 6 6C6.55228 6 7 5.55228 7 5V4H15V5C15 5.55228 15.4477 6 16 6C16.5523 6 17 5.55228 17 5V4H20V17H2V4H5ZM6 8.5C5.44772 8.5 5 8.94772 5 9.5C5 10.0523 5.44772 10.5 6 10.5H11.5C12.0523 10.5 12.5 10.0523 12.5 9.5C12.5 8.94772 12.0523 8.5 11.5 8.5H6ZM6 12.5C5.44772 12.5 5 12.9477 5 13.5C5 14.0523 5.44772 14.5 6 14.5H16C16.5523 14.5 17 14.0523 17 13.5C17 12.9477 16.5523 12.5 16 12.5H6Z" fill="#F8F8F8"/>
                        </svg>`;
                        lessonContainer.appendChild(circleDiv);
                    
                        // Создайте div с классом "lesson_info" для названия, времени и кабинета
                        const lessonInfoDiv = document.createElement("div");
                        lessonInfoDiv.className = "lesson_info";
                        lessonContainer.appendChild(lessonInfoDiv);
                    
                        // Создайте div с классом "lesson_name" для названия урока
                        const lessonNameDiv = document.createElement("div");
                        lessonNameDiv.className = "lesson_name";
                    
                        // Проверьте текст урока и добавьте классы "lesson_name_green", "lesson_time_green" и "lesson_room_green" при необходимости
                        lessonNameDiv.textContent = урок.name;
                        lessonInfoDiv.appendChild(lessonNameDiv);
                    
                        // Создайте div с классом "lesson_time" для времени урока
                        const lessonTimeDiv = document.createElement("div");
                        lessonTimeDiv.className = "lesson_time";
                        lessonTimeDiv.textContent = урок.time;
                        lessonInfoDiv.appendChild(lessonTimeDiv);
    
                        // Создайте div с классом "lesson_room" для кабинета
                        const lessonRoomDiv = document.createElement("div");
                        lessonRoomDiv.className = "lesson_room";
                        lessonRoomDiv.textContent = урок.room;
                        lessonContainer.appendChild(lessonRoomDiv);
                        lessonContainer.className ="lesson_container"
                        if (урок.name === "Классный час" ||
                            урок.name === "не указано") {
                            lessonContainer.classList.add("yellow");
                        }
                        if (урок.name === "Кыргызский язык" || 
                            урок.name === "Адабият" ||
                            урок.name === "Английский язык" ||
                            урок.name === "Русский язык" ||
                            урок.name === "Литература") {
                            lessonContainer.classList.add("blue");
                        }
                        if (урок.name === "Физика" || 
                            урок.name === "Алгебра" ||
                            урок.name === "Геометрия" ||
                            урок.name === "Химия") {
                            lessonContainer.classList.add("green");
                        }
                        if (урок.name === "ДП" || 
                            урок.name === "История" ||
                            урок.name === "Биология" ||
                            урок.name === "ЧиО" ||
                            урок.name === "География" ||
                            урок.name === "Физкультура") {
                            lessonContainer.classList.add("red");
                        }
                        container.appendChild(lessonContainer);
                    });
              }
          });
  }
  
  // По умолчанию загрузите расписание для понедельника


