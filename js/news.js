function news() {
    fetch('json/news.json')
        .then(response => response.json())
        .then(data => {
            // Получите массив дат и соответствующих заданий
            const dateTaskPairs = Object.entries(data);
            // Найдите элемент на странице, куда вы будете добавлять контейнеры
            const containerElement = document.getElementById("container");

            // Пройдитесь по каждой паре дата-задание
            dateTaskPairs.forEach(([date, news]) => {
                // Создайте контейнер div для даты
                const task_container = document.createElement('div');
                task_container.className = "news_item_body";


               

                const dateContainer = document.createElement("div");
                dateContainer.className = "news_item_data";
                dateContainer.textContent = date;

                // Создайте элемент div для задания
                const taskElement = document.createElement("div");
                taskElement.className = "news_item_text";
                taskElement.innerHTML = news.news;

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
news();