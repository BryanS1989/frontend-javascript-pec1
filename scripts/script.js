
// Get form element
const form = document.getElementById('form');

// Get username element
const username = document.getElementById('username');

// Get email element
const email = document.getElementById('email');

// Get password element
const password = document.getElementById('password');

// Get password confirm element
const password2 = document.getElementById('forpassword2');

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
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
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


/***********************/
/*   EVENT LISTENERS   */
/***********************/
// Add event listener to form for button
form.addEventListener('submit', function(event) {
    
    event.preventDefault();

    checkRequired([username, email, password, passwordConfirm]);

});