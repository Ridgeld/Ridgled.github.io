const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);


function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }
// Извлеките значение параметра "lessonName"
const lessonName = urlParams.get("lessonName");
const place = document.getElementById('page_title');

place.textContent = ucFirst(lessonName);


const lessonQuotes = {
    "алгебра": "Математика царица наук",
    "физика": "Физика — это законы природы",
    "геометрия": "Геометрия это наука изучающая фигуры",
    // Добавьте другие уроки и соответствующие им цитаты
};
if (lessonName in lessonQuotes) {
    const quote = lessonQuotes[lessonName];

    const quoteElement = document.getElementById("page_text");

    quoteElement.textContent = quote;
} else {
    console.log("Цитата для урока не найдена.");
}
const lessonJSONMap = {
    "алгебра" : "algebra.json",
    "геометрия" : "geometry.json",
    "физика" : "phisics.json",
    "химия" : "chemistry.json",
    "история" : "history.json",
    "биология" : "biology.json",
    "чио" : "chio.json",
    "география" : "geography.json",
    "дп" : "dp.json",
    "английский язык" : "english.json",
    "русский язык" : "russian.json",
    "литература" : "literature.json",
    "кыргызский язык" : "kyrgyz.json",
    "адабият" : "adabiyat.json",
};

// Проверьте, есть ли сопоставление для переданного урока
if (lessonName in lessonJSONMap) {
    const jsonFileName = lessonJSONMap[lessonName];

    // Теперь вы можете использовать имя файла для загрузки соответствующего JSON-файла
    loadTimetable(jsonFileName, localStorage.getItem('class'));
} else {
    // Если нет сопоставления для переданного урока, выполните какие-либо действия по умолчанию
    console.log("Сопоставление для урока не найдено.");
}

// Функция для загрузки JSON-файла
function loadTimetable(jsonFile, class_name) {
    fetch(`json/${class_name}/task/${jsonFile}`)
        .then(response => response.json())
        .then(data => {
            // Получите массив дат и соответствующих заданий
            const dateTaskPairs = Object.entries(data);

            // Найдите элемент на странице, куда вы будете добавлять контейнеры
            const containerElement = document.getElementById("container");

            // Пройдитесь по каждой паре дата-задание
            dateTaskPairs.forEach(([date, taskData]) => {
                // Создайте контейнер div для даты
                const task_container = document.createElement('div');
                task_container.className = "task_body";


                const lesson_body = document.getElementById('body');
                if (lessonName === "алгебра" ||
                    lessonName === "геометрия" ||
                    lessonName === "физика" ||
                    lessonName === "химия") {

                    lesson_body.classList.add('green');
                }
                if (lessonName === "история" ||
                    lessonName === "биология" ||
                    lessonName === "чио" ||
                    lessonName === "география" || 
                    lessonName === "дп") {
                    
                    lesson_body.classList.add('red');
                }
                if (lessonName === "английский язык" ||
                    lessonName === "русский язык" ||
                    lessonName === "литература" ||
                    lessonName === "кыргызский язык" || 
                    lessonName === "адабият") {

                    lesson_body.classList.add('blue');
                }

                const dateContainer = document.createElement("div");
                dateContainer.className = "task_date";
                dateContainer.textContent = date;

                // Создайте элемент div для задания
                const taskElement = document.createElement("div");
                taskElement.className = "task_text";
                taskElement.textContent = taskData.task;

                // Установите текст элемента даты

                // Добавьте элемент задания в контейнер даты
                task_container.appendChild(dateContainer);
                task_container.appendChild(taskElement);

                // Добавьте контейнер даты в основной контейнер
                containerElement.appendChild(task_container);
            });
        })
        .catch(error => {
            console.error("Произошла ошибка при загрузке JSON-файла:", error);
        });
}