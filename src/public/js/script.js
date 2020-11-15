// const inputs = document.querySelectorAll(".input");


const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    password: /^.{4,12}$/, // 4 a 12 digitos.
}
let campos = {
    usuario: false,
    password: false,
}
const formulario = document.getElementById('form')
let inputs = document.querySelectorAll('#form input')

function addcl() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
}

function remcl() {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

const validatePassword = () => {

    const inputPassword = document.getElementById('password').value
    const inputPassword2 = document.getElementById('password2').value
    const msg = document.getElementById('msg')
    console.log(inputPassword)
    console.log(inputPassword2)
    if (inputPassword2 !== inputPassword) {
        document.getElementById('password-class2').classList.add('error')
        msg.style.display = "block"
        campos['password'] = false



    } else {
        document.getElementById('password-class2').classList.remove('error')
        msg.style.display = "none"
        campos['password'] = true

    }

}
const validateForm = (e) => {
    switch (e.target.name) {
        case 'password':
            validatePassword()

            break;
        case 'password2':
            validatePassword()

            break;

    }

}




inputs.forEach(input => {
    if (input.name !== "password" & input.name !== "password2") {
        input.addEventListener("focus", addcl);
        input.addEventListener("blur", remcl);
    }
    input.addEventListener('keyup', validateForm)
    input.addEventListener("blur", validateForm);


});



console.log(formulario)
console.log(inputs)