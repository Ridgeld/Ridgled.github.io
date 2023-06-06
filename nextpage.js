const btn1 = document.getElementById('btn1');
      btn1.addEventListener('click', function() {
          var username = document.getElementById('nick').value;
          var password = document.getElementById('pass').value

        if(username === 'admin' && password === '12345') {
                window.location.href = 'database.html';
        }else if(username ==='1') {
          window.location.href = 'menu.html';
        }else{
            alert('Неверное имя пользователя или пароль');
        }
});
