function news(stored_class) {
    fetch(`json/${stored_class}/notifications.json`)
        .then(response => response.json())
        .then(data => {
            // Получите массив дат и соответствующих заданий
            const dateTaskPairs = Object.entries(data);
            // Найдите элемент на странице, куда вы будете добавлять контейнеры
            const containerElement = document.getElementById("container");

            // Пройдитесь по каждой паре дата-задание
            dateTaskPairs.forEach(([date, text]) => {
                // Создайте контейнер div для даты
                const notification_content = document.createElement('div');
                notification_content.className = "notification_content";

                
                const notification_info = document.createElement('div');
                notification_info.className = "notification_info";
               

                const notification_data = document.createElement("div");
                notification_data.className = "notification_data";
                notification_data.textContent = date;

                // Создайте элемент div для задания
                const notification_text = document.createElement("div");
                notification_text.className = "notification_text";
                notification_text.innerHTML = text.text;

                // Установите текст элемента даты

                // Добавьте элемент задания в контейнер даты
                notification_info.appendChild(notification_data);
                notification_info.appendChild(notification_text);
                notification_content.appendChild(notification_info);

                // Добавьте контейнер даты в основной контейнер
                containerElement.appendChild(notification_content);
            });
        })
        .catch(error => {
            console.error("Произошла ошибка при загрузке JSON-файла:", error);
        });
}
news(localStorage.getItem('class'));