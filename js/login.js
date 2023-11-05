const button = document.getElementById('check');
const loginInput = document.getElementById('login'); // предположим, что у вас есть поле ввода с id "login"
const passwordInput = document.getElementById('password'); // предположим, что у вас есть поле ввода с id "password"


function login(){
    const login = loginInput.value.toLowerCase();
    const password = passwordInput.value;
    if (!login) {
        return
    }
    if (!password) {
        return
    } 
    // fetch('json/users.json')
    fetch('http://elmektep-online.wuaze.com/users.json')
    .then(response => response.json())
    .then(data => {
    // Получите значения из полей ввода для логина и пароля

    const alert_place = document.getElementById('alert_place');

    // Проверьте, существует ли такой логин в объекте users
    if (data.hasOwnProperty(login)) {
      // Если логин существует, проверьте введенный пароль
      if (password === data[login].password) {
        // Если пароль совпадает, получите третий элемент для этого логина
        const name = data[login].name;
        const class_name = data[login].class_name;
        const gender = data[login].gender;

        // Сохраните третий элемент в localStorage
        localStorage.setItem('name', name);
        localStorage.setItem('class', class_name);
        localStorage.setItem('gender', gender);
        if (data[login].admin === "true"){
          localStorage.setItem('admin', true);
        }

        window.location.href = "account.html";
      } 
      else {
        alert_place.innerHTML = 'Неверное имя пользователя или пароль';
      }
    } else {
        alert_place.innerHTML = "Пользователь не найден";
    }
  })
  .catch(error => {
    console.error('Ошибка при загрузке JSON-файла:', error);
  });
    // if (!login) {
    //     alert.innerHTML = "Введите логин";
    //     return
    // }
    // if (!password) {
    //     alert.innerHTML = "Введите пароль";
    //     return
    // } 
    // if (users.hasOwnProperty(login)){
    //     if (users[login] !== password){
    //         alert.innerHTML = "Неверный логин или пароль";
    //         return
    //     }
    //     localStorage.setItem('userLogin', login);
    //     window.location.href = "account.html"
    // }
    // else {
    //     alert.innerHTML = "Пользователь не найден";
    //     return
    // } 
} 
button.addEventListener('click', login);