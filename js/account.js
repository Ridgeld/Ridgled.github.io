const stored_name = localStorage.getItem('name');
const stored_class = localStorage.getItem('class');

const name_place = document.getElementById('name_place');
name_place.textContent = stored_name + " " + stored_class;

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

const button = document.getElementById('link');
button.addEventListener('click', function(){
    window.location.href = "news.html";
});
