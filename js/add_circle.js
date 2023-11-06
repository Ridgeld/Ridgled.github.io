// // Предположим, что у вас есть переменная newNotificationsCount, которая содержит количество новых уведомлений. // Здесь просто для примера

// // Функция для обновления состояния иконки уведомлений
// function updateNotificationIcon(newNotificationsCount) {
//   const notificationIcon = document.getElementById('notification'); // Замените 'notification-icon' на ID вашей иконки

//   if (newNotificationsCount > 0) {
//     // Если есть новые уведомления, отобразите красный кружок с количеством новых уведомлений
//     const circle = document.createElement('div');
//     circle.className = "notification_circle"
//     notificationIcon.appendChild(circle);
//   } else {
//     // Если новых уведомлений нет, скройте красный кружок
//     notificationIcon.appendChild();
//   }
// }

// // Вызовите функцию для обновления иконки при загрузке страницы
// function getNewNotification(stored_class) {
//   fetch(`json/${stored_class}/notifications.json`)
//       .then(response => response.json())
//       .then(data => {
//           // Получите массив дат и соответствующих заданий
//           const dateTaskPairs = Object.entries(data);
//           // Найдите элемент на странице, куда вы будете добавлять контейнеры
//           let newNotificationsCount = 0;
//           // Пройдитесь по каждой паре дата-задание
//           dateTaskPairs.forEach(([date, text]) => {
//               // Создайте контейнер div для дата
//               if (text.new){
//                 newNotificationsCount++;
//                 updateNotificationIcon(newNotificationsCount)
//               }
//           });
//       })
//       .catch(error => {
//           console.error("Произошла ошибка при загрузке JSON-файла:", error);
//       });
// }
// getNewNotification(localStorage.getItem('class'));

