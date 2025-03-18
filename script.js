document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector('.login-form');
    const registerForm = document.querySelector('.register-form');

    loginForm.addEventListener('submit', function(event) {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (!email || !password) {
            alert("Please fill in all fields.");
            event.preventDefault();
        }
    });

    registerForm.addEventListener('submit', function(event) {
        const firstname = document.getElementById('firstname').value;
        const lastname = document.getElementById('lastname').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const age = document.getElementById('age').value;

        if (!firstname || !lastname || !email || !password || !age) {
            alert("Please fill in all fields.");
            event.preventDefault();
        }
    });
});
