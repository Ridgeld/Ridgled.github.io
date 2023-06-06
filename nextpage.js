var username = document.getElementById('nick').value;
var password = document.getElementById('pass').value;
const btn1 = document.getElementById('btn1');
      btn1.addEventListener('click', function() {
        if (username === '1') {
          window.location.href = 'menu.html';
        } else if (username === 'admin' && password === '12345') {
          window.location.href = 'database.html';
        } else {
          alert('Неверное имя пользователя или пароль');
        }
});
