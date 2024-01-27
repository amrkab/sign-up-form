let password = document.querySelector('#password');
let passwordConfirm = document.querySelector('#password-confirm');

let btn = document.querySelector('#sign-up-button');

btn.addEventListener('click', e => {
    // Remove existing error messages
    removeErrorMessages();

    if (password.value !== passwordConfirm.value) {
        // Display error message
        displayErrorMessage('Passwords do not match', 'password', 'password-confirm');
        e.preventDefault();
    } else {
        // Passwords match, you can proceed with the form submission or other actions
    }
});

function displayErrorMessage(message, inputPass, inputConfirm) {
    let errorDiv1 = document.createElement('div');
    errorDiv1.className = 'error-message';
    errorDiv1.textContent = message;

    let inputBox1 = document.querySelector(`#${inputPass}`).parentNode;
    inputBox1.appendChild(errorDiv1);

    let errorDiv2 = document.createElement('div');
    errorDiv2.className = 'error-message';
    errorDiv2.textContent = message;

    let inputBox2 = document.querySelector(`#${inputConfirm}`).parentNode;
    inputBox2.appendChild(errorDiv2);
}

function removeErrorMessages() {
    let errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(errorMessage => errorMessage.remove());
}
