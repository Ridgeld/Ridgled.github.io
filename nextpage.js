var username = document.getElementById('nick').value;
var password = document.getElementById('pass').value;
const btn1 = document.getElementById('btn1');
      btn1.addEventListener('click', function() {
//         window.location.href = 'menu.html';
        if (username === 'admin' && password === '12345') {
          window.location.href = 'database.html';
        }else{
          window.location.href = 'menu.html';
        }
});
