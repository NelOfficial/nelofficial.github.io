function showTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    timeElement.textContent = 'Текущее время: ' + now.toLocaleTimeString();
}

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formError = document.getElementById('formError');

    if (name === '' || email === '' || message === '') {
        formError.textContent = 'Пожалуйста, заполните все поля.';
        return false;
    }

    formError.textContent = '';
    return true;
}
