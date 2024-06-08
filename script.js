const loginForm = document.getElementById('login-form');

const userData = './data.json';


loginForm.addEventListener('submit', (e) => {

    e.preventDefault();

    const username = document.getElementById('username').value;

    const password = document.getElementById('password').value;


    fetch(userData)

        .then(response => response.json())

        .then(data => {

            const userFound = data.users.find(user => user.username === username && user.password === password);

            if (userFound) {

                window.location.href = 'welcome.html';

            } else {

                alert('Datos de inicio de sesión incorrectos');

            }

        });

});