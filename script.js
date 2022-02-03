const password = document.getElementById('password');
const confirmPassWord = document.getElementById('confirm');
const myForm = document.getElementById('myForm');
myForm.noValidate = true;

myForm.addEventListener('submit', validateForm)

function validateForm(e) {
    const form = e.target;

    if (form.checkValidity()) {
        //Form is valid - make further checks
        if (password.value !== confirmPassWord.value) {
            e.preventDefault();
            password.classList.add('error');
            confirmPassWord.classList.add('error');
            const errorText = document.getElementById('password-text');
            errorText.classList.add('error-text');
            errorText.innerText = "*Passwords do not match"
        }
    } 

    else {
        //Form is invalid - cancel submit
        e.preventDefault();
    }
}