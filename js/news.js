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
                const news_content = document.createElement('div');
                news_content.className = "news_content";

                news_content.classList.add(news.color);
                const news_info = document.createElement('div');
                news_info.className = "news_info";
               

                const news_data = document.createElement("div");
                news_data.className = "news_data";
                news_data.textContent = date;

                // Создайте элемент div для задания
                const news_text = document.createElement("div");
                news_text.className = "news_text";
                news_text.innerHTML = news.news;

                // Установите текст элемента даты

                // Добавьте элемент задания в контейнер даты
                news_info.appendChild(news_data);
                news_info.appendChild(news_text);
                news_content.appendChild(news_info);

                // Добавьте контейнер даты в основной контейнер
                containerElement.appendChild(news_content);
            });
        })
        .catch(error => {
            console.error("Произошла ошибка при загрузке JSON-файла:", error);
        });
}
news();