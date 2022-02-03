const password = document.getElementById('password');
const confirmPassWord = document.getElementById('confirm');
const myForm = document.getElementById('myForm');


myForm.addEventListener('submit', validateForm);

function validateForm(e) {
    const form = e.target;
    console.log(form.checkValidity());
    if (form.checkValidity()) {
        //Form is valid - make further checks
        
    } 

    else {
        //Form is invalid - cancel submit
        e.preventDefault();
        if (password.value !== confirmPassWord.value) {
            e.preventDefault();
            password.classList.add('error');
            confirmPassWord.classList.add('error');
            const errorText = document.getElementById('password-text');
            errorText.classList.add('error-text');
            errorText.innerText = "*Passwords do not match";
        }
        Array.from(form.elements).forEach(i => {
            if (i.checkValidity()) {
                i.classList.remove('error');
                //document.getElementsByClassName('help').style.display = "none";
            }
            else {
                i.classList.add('error');
                //document.getElementsByClassName('help').style.display = "block";
            }
        })
    }
};