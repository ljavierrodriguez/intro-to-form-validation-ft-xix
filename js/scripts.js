let home = document.querySelector('[href="./index.html"]');

console.log(home);

home.addEventListener('click', (e) => {
    e.preventDefault();

    let enlace = e.target;

    console.log(enlace);

    enlace.innerHTML = "Inicio"

})

let form = document.querySelector('form');

if (form) {
    form.addEventListener('submit', (evento) => {
        evento.preventDefault();
        let enviar = true;
        //let email = document.getElementById('email');
        let username = document.querySelector('#username');
        let errUsername = document.querySelector('.error-username');

        let password = document.querySelector('#password');
        let errPass = document.querySelector('.error-password');

        if (username.value === '') {
            enviar = false;
            username.classList.add('is-invalid')
            errUsername.innerHTML = "El campo no puede estar vacio";
        } else if (!isEmail.test(username.value)) {
            enviar = false;
            username.classList.add('is-invalid')
            errUsername.innerHTML = "El campo debe ser un email";
        } else {
            username.classList.remove('is-invalid')
        }

        if (password.value === '') {
            enviar = false;
            password.classList.add('is-invalid')
            errPass.innerHTML = "El campo no puede estar vacio";
        } else if (!soloNumeros.test(password.value)) {
            enviar = false;
            password.classList.add('is-invalid')
            errPass.innerHTML = "El password no cumple el formato indicado";
        } else {
            password.classList.remove('is-invalid')
        }

        if (enviar) {
            form.submit();
        }

    });
}

let contenido = document.querySelector('.contenido');

let btnClick = document.querySelector('.btn-click');
console.log(btnClick);
btnClick.addEventListener('click', (evt) => {
    evt.target.innerHTML = 'Clicked!'
})

let newButton = document.createElement('button');
newButton.classList.add('btn', 'btn-primary', 'btn-sm');
newButton.innerHTML = "Boton desde el DOM"

newButton.addEventListener('dblclick', (evt) => {
    evt.target.innerHTML = 'Clicked!'
})

contenido.appendChild(newButton);

let btnInfo = document.querySelectorAll('.btn-info'); // [HTMLButtonElement]

console.log(btnInfo);

btnInfo.forEach((btn) => {
    btn.addEventListener('click', (evt) => {
        evt.target.innerHTML = parseInt(evt.target.innerHTML) + 1;
    })
})