function addItems(){ 
    fetch('json/task_items.json')
    .then(response => response.json())
    .then(data => {
        // Получите массив дат и соответствующих заданий
        const dateTaskPairs = Object.entries(data);
        // Найдите элемент на странице, куда вы будете добавлять контейнеры
        const containerElement = document.getElementById("container");

        // Пройдитесь по каждой паре дата-задание
        dateTaskPairs.forEach(([title, class_name ]) => {
            // Создайте контейнер div для даты

            
            const task_body = document.createElement("div");
            task_body.className = "task_body";
            task_body.classList.add(class_name.class);

            task_body.addEventListener("click", () => {
                // Переадресация на task.html с передачей параметра "lessonName"
                window.location.href = `task.html?lessonName=${encodeURIComponent(title.toLowerCase())}`;
            });
            // Создайте элемент div для задания
            const task_title = document.createElement("div");
            task_title.className = "task_title";
            task_title.innerHTML = title;


            // Установите текст элемента даты

            // Добавьте элемент задания в контейнер даты
            task_body.appendChild(task_title);
            // Добавьте контейнер даты в основной контейнер
            containerElement.appendChild(task_body);
        });
    })
    .catch(error => {
        console.error("Произошла ошибка при загрузке JSON-файла:", error);
    });
}
addItems();