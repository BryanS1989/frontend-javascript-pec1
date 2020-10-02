
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

var errorField = [false, false, false, false];

/*****************/
/*   FUNCTIONS   */
/*****************/
/* Show inputs error messages*/
function showError(input, message, fieldNum) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    formControl.className = 'form-control error';
    small.innerText = message ;
    errorField[fieldNum] = true;
}

/* Show success outline */
function showSuccess(input, fieldNum) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
    errorField[fieldNum] = false;
}

/* Return field name Capitalized */
function getFieldName(input) {
    let name = input.dataset.name;

    return name.charAt(0).toUpperCase() + name.slice(1);
}

/* Check if email is valid */
function checkEmail(input) {
    const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!errorField[1]) { 
        if (!regExp.test(input.value.trim())) {
            showError(input, `${getFieldName(input)} is not valid`, 1);
        } else {
            showSuccess(input, 1);
        }
    }
}

/* Check required fields */
function checkRequired(inputArr) {
    inputArr.forEach((input, index) => {
        //console.log(input);
        if (input.value.trim() === '') {
            // Using data attributes from HTML5
            showError(input, `${getFieldName(input)} is required`, index);
        } else {
            showSuccess(input, index);
        }
    });
}

/* Check input length */
function checkLength(input, min, max, fieldNum) {

    if (!errorField[fieldNum]) {
        if (input.value.length < min) {
            showError(input, `${getFieldName(input)} must be at least ${min} characters`, fieldNum);
        } else if (input.value.length > max) {
            showError(input, `${getFieldName(input)} must be less than ${max} characters`, fieldNum);
        } else {
            showSuccess(input, fieldNum);
        }
    }
}

/* Check password format */
function checkPassword(input) {
    
    const regExp = /(?=.[a-zA-Z0-9])(?=.+[!@#$%^&*]).{6,}$/;

    if (!errorField[2]) {
        if (!regExp.test(input.value.trim())) {
            showError(input, `${getFieldName(input)} is not valid, must contain numbers or letters (uppercase or lowercase) and at least one symbol`, 2);
        } else {
            showSuccess(input, 2);
        }   
    }
}

/* Check Password match */
function checkPasswordsMatch(input1, input2) {

    if (!errorField[3]) {
        if (input1.value !== input2.value) {
            showError(input2, 'Passwords do not match', 3);
        } else {
            showSuccess(input2, 3);
        }
    }
}


/***********************/
/*   EVENT LISTENERS   */
/***********************/
// Add event listener to form for button
form.addEventListener('submit', function(event) {
    
    event.preventDefault();

    checkRequired([username, email, password, passwordConfirm]);
    
    checkLength(username, 3, 15, 0);   

    checkEmail(email);

    checkLength(password, 6, 25, 2);    

    checkPassword(password);

    checkPasswordsMatch(password, passwordConfirm);   

});