document.getElementById('burgerMenu').addEventListener('click', function () {
    document.getElementById('headerMenu').classList.add('open');
    document.getElementById('header').classList.add('show');
    document.querySelector('.main__content').classList.add('shift');
});

document.getElementById('closeMenu').addEventListener('click', function () {
    document.getElementById('headerMenu').classList.remove('open');
    document.getElementById('header').classList.remove('show');
    document.querySelector('.main__content').classList.remove('shift');
});

const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (validateForm()) {
        sendDataToServer();
    }
});

function validateForm() {
    let isValid = true;

    if (nameInput.value.trim() === '') {
        document.getElementById('nameError').textContent = 'Пожалуйста, введите ваше имя.';
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    } else if (nameInput.value.trim().length > 50) {
        document.getElementById('nameError').textContent = 'Имя не может быть длиннее 50 символов.';
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('nameError').style.display = 'none';
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailInput.value.trim() === '') {
        document.getElementById('emailError').textContent = 'Пожалуйста, введите ваш email.';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
        document.getElementById('emailError').textContent = 'Пожалуйста, введите корректный email.';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    if (messageInput.value.trim() === '') {
        document.getElementById('messageError').textContent = 'Пожалуйста, введите сообщение.';
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    } else if (messageInput.value.trim().length > 200) {
        document.getElementById('messageError').textContent = 'Сообщение не может быть длиннее 200 символов.';
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('messageError').style.display = 'none';
    }

    return isValid;
}

function sendDataToServer() {
    const formData = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        message: messageInput.value.trim()
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(response => response.json())
        .then(data => {
            alert('Сообщение отправлено успешно!');
            console.log('Ответ с сервера:', data);
            form.reset();
        })
        .catch(error => {
            console.error('Ошибка:', error);
            alert('Ошибка при отправке сообщения!');
        });
}