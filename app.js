let password = document.querySelector('#password');
let passwordConfirm = document.querySelector('#password-confirm');

let btn = document.querySelector('#sign-up-button')

btn.addEventListener('click', e => {
    if (password.value != passwordConfirm.value) {
        alert("passwords do not match");
        e.preventDefault();
    } else {
        
    }
    });