const labelUsername = document.querySelector('label[for="id_username"]');
const labelPassword1 = document.querySelector('label[for="id_password1"]');
const labelPassword2 = document.querySelector('label[for="id_password2"]');

labelUsername.innerHTML = 'Username';
labelPassword1.innerHTML = 'Password';
labelPassword2.innerHTML = 'Password confirmation';


document.querySelectorAll('ul').forEach(function (ul) {
    if(ul.childElementCount === 4)
        ul.classList.add("password-requirements");
});

document.querySelectorAll('.errorlist').forEach(function (elem) {
    if(elem.firstChild.textContent.trim() != "A user with that username already exists.") {
        labelPassword2.classList.add('add-margin-top');
    }
});