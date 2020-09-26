
// Get form element
const form = document.getElementById('form');

// Get username element
const username = document.getElementById('username');

// Get email element
const email = document.getElementById('email');

// Get password element
const password = document.getElementById('password');

// Get password confirm element
const passwordConfirm = document.getElementById('passwordConfirm');

/*****************/
/*   FUNCTIONS   */
/*****************/
/* Show inputs error messages*/
function showError(input, message) {
    
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    formControl.className = 'form-control error';
    small.innerText = message ;

}

/* Show success outline */
function showSuccess(input) {

    const formControl = input.parentElement;

    formControl.className = 'form-control success'

}

/* Check if email is valid */
function checkEmail(input) {
    const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (!regExp.test(input.value.trim())) {
        showError(input, `${getFieldName(input)} is not valid`);
    } else {
        showSuccess(input);
    }
}

/* Check required fields */
function checkRequired(inputArr) {

    inputArr.forEach(input => {
        //console.log(input);
        if (input.value.trim() === '') {
            // Using data attributes from HTML5
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });

}

/* Return field name Capitalized */
function getFieldName(input) {
    let name = input.dataset.name;

    return name.charAt(0).toUpperCase() + name.slice(1);
}

/* Check input length */
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

/* Check Password match */
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    } else {
        showSuccess(input2);
    }
}


/***********************/
/*   EVENT LISTENERS   */
/***********************/
// Add event listener to form for button
form.addEventListener('submit', function(event) {
    
    event.preventDefault();

    checkRequired([username, email, password, passwordConfirm]);
    
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);

    checkEmail(email);

    if (passwordConfirm.value.trim() !== '') {
        checkPasswordsMatch(password, passwordConfirm);   
    }

});