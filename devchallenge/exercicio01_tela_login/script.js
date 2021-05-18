function enviar() {
    var emailDigitado = document.querySelector('.email').value;
    var passDigitado = document.querySelector('.password').value;
    document.querySelector('.valorDigitado').innerHTML = emailDig;

    if (emailDigitado.length <= 0 || passDigitado.length <= 0) {
        alert('Preencha os campos porfavor')
    }
}

