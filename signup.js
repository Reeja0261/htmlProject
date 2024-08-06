const form = document.getElementById('form');
const first = document.getElementById('first');
const last = document.getElementById('last');
const email = document.getElementById('email');
const password = document.getElementById('password');
const locale = document.getElementById('locale');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const validateInputs = () => {
    const firstValue = first.value.trim();
    const lastValue = last.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const localeValue = locale.value.trim();

    if(firstValue === '') {
        setError(first, 'First name is required');
    } else {
        setSuccess(first);
    }

    if(lastValue === '') {
        setError(last, 'Last name is required');
    } else {
        setSuccess(last);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(localeValue === '') {
        setError(locale, 'Locale is required');
    } else {
        setSuccess(locale);
    }

};

function setError(element, message){
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

function setSuccess(element){
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

function isValidEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}